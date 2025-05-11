from fastapi import APIRouter

from api.api_v1.endpoints import parts, catalog_parts, autoclave, schedule, nesting, reports

api_router = APIRouter()

# Include tutti i router con i loro prefissi
api_router.include_router(parts.router, prefix="/parts", tags=["Parts"])
api_router.include_router(catalog_parts.router, prefix="/catalog", tags=["Catalog Parts"])
api_router.include_router(autoclave.router, prefix="/autoclaves", tags=["Autoclaves"])
api_router.include_router(schedule.router, prefix="/schedules", tags=["Schedules"])
api_router.include_router(nesting.router, prefix="/nesting", tags=["Nesting"])
api_router.include_router(reports.router, prefix="/reports", tags=["Reports"])
