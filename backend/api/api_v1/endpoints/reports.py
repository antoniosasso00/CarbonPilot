from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime, date

from db.session import get_db
from models.schedule import Schedule
from models.nesting import NestingResult
from services.pdf_report import generate_daily_report, generate_nesting_report
from schemas.report import DailyReportRequest, ReportResponse

router = APIRouter()

@router.post("/daily", response_model=ReportResponse)
async def create_daily_report(
    request: DailyReportRequest,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    """Genera un report giornaliero delle attività pianificate"""
    try:
        # Recupera le schedule per la data specificata
        target_date = request.date or date.today()
        schedules = db.query(Schedule).filter(
            Schedule.start_date <= target_date,
            Schedule.end_date >= target_date
        ).all()
        
        if not schedules:
            return {"message": "Nessuna attività pianificata per la data specificata"}
            
        # Genera il report PDF in background
        report_filename = f"daily_report_{target_date.strftime('%Y%m%d')}.pdf"
        background_tasks.add_task(
            generate_daily_report,
            schedules=schedules,
            date=target_date,
            filename=report_filename
        )
        
        return {
            "message": "Generazione report giornaliero avviata",
            "filename": report_filename
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/nesting/{nesting_id}")
async def get_nesting_report(
    nesting_id: int,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    """Recupera il report PDF di un layout di nesting specifico"""
    result = db.query(NestingResult).filter(NestingResult.id == nesting_id).first()
    if result is None:
        raise HTTPException(status_code=404, detail="Risultato nesting non trovato")
        
    # Rigenera il report se non esiste
    if not result.report_path:
        background_tasks.add_task(
            generate_nesting_report,
            nesting_id=nesting_id,
            layout=result.layout_data
        )
        return {"message": "Report non trovato. Rigenerazione avviata."}
        
    return {"report_path": result.report_path} 