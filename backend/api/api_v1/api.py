from fastapi import APIRouter

from api.api_v1.endpoints import part, autoclave, schedule, nesting, cure_cycles

api_router = APIRouter()
api_router.include_router(part.router, prefix="/parts", tags=["Parts"])
api_router.include_router(autoclave.router, prefix="/autoclaves", tags=["Autoclaves"])
api_router.include_router(schedule.router, prefix="/schedules", tags=["Schedules"])
api_router.include_router(nesting.router, prefix="/nesting", tags=["Nesting"])
api_router.include_router(cure_cycles.router, prefix="/cure-cycles", tags=["Cure Cycles"])  # 👈 nuovo router
