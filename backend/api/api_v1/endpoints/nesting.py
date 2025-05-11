from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy.orm import Session
from typing import List
import json

from db.session import get_db
from models.nesting_result import NestingResult
from schemas.nesting import NestingRequest, NestingResponse, NestingResultResponse
from services.nesting_optimizer import NestingOptimizer
from services.pdf_generator import generate_nesting_report

router = APIRouter()

@router.post("/", response_model=NestingResponse)
async def create_nesting(
    request: NestingRequest,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    """Crea un nuovo layout di nesting utilizzando l'algoritmo di ottimizzazione"""
    try:
        # Inizializza l'ottimizzatore
        optimizer = NestingOptimizer()
        
        # Esegui l'ottimizzazione
        layout = optimizer.optimize(
            parts=request.parts,
            container_width=request.container_width,
            container_height=request.container_height
        )
        
        # Salva il risultato nel database
        nesting_result = NestingResult(
            layout_data=json.dumps(layout),
            container_width=request.container_width,
            container_height=request.container_height,
            parts_data=json.dumps([part.dict() for part in request.parts])
        )
        
        db.add(nesting_result)
        db.commit()
        db.refresh(nesting_result)
        
        # Genera il report PDF in background
        background_tasks.add_task(
            generate_nesting_report,
            nesting_id=nesting_result.id,
            layout=layout
        )
        
        return {
            "id": nesting_result.id,
            "layout": layout,
            "message": "Layout creato con successo. Report in generazione."
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/", response_model=List[NestingResultResponse])
def get_nesting_results(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100
):
    """Recupera tutti i risultati di nesting"""
    return db.query(NestingResult).offset(skip).limit(limit).all()

@router.get("/{nesting_id}", response_model=NestingResultResponse)
def get_nesting_result(nesting_id: int, db: Session = Depends(get_db)):
    """Recupera un specifico risultato di nesting per ID"""
    result = db.query(NestingResult).filter(NestingResult.id == nesting_id).first()
    if result is None:
        raise HTTPException(status_code=404, detail="Risultato nesting non trovato")
    return result

@router.post("/report/{nesting_id}")
async def generate_report(
    nesting_id: int,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    """Rigenera il report PDF per un layout esistente"""
    result = db.query(NestingResult).filter(NestingResult.id == nesting_id).first()
    if result is None:
        raise HTTPException(status_code=404, detail="Risultato nesting non trovato")
        
    layout = json.loads(result.layout_data)
    
    # Genera il report PDF in background
    background_tasks.add_task(
        generate_nesting_report,
        nesting_id=nesting_id,
        layout=layout
    )
    
    return {"message": "Generazione report avviata"} 