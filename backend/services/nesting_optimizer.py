from ortools.linear_solver import pywraplp
from typing import List, Dict, Any
import json

class NestingOptimizer:
    def __init__(self):
        self.solver = pywraplp.Solver.CreateSolver('SCIP')

    def optimize(self, parts: List[Dict[str, Any]], container_width: float, container_height: float) -> Dict[str, Any]:
        """
        Ottimizza il posizionamento delle parti nel container.
        
        Args:
            parts: Lista di parti da posizionare
            container_width: Larghezza del container
            container_height: Altezza del container
            
        Returns:
            Dict con il layout ottimizzato
        """
        if not parts:
            return {
                "container": {"width": container_width, "height": container_height},
                "items": []
            }

        # Variabili per la posizione di ogni parte
        x = {}  # Coordinata x di ogni parte
        y = {}  # Coordinata y di ogni parte
        
        # Crea le variabili per ogni parte
        for i, part in enumerate(parts):
            x[i] = self.solver.NumVar(0, container_width - part['width'], f'x_{i}')
            y[i] = self.solver.NumVar(0, container_height - part['height'], f'y_{i}')

        # Vincoli di non sovrapposizione
        for i in range(len(parts)):
            for j in range(i + 1, len(parts)):
                # O la parte i è a sinistra di j, o a destra, o sopra, o sotto
                constraint = self.solver.Constraint(1, 1)
                constraint.SetCoefficient(x[i], 1)
                constraint.SetCoefficient(x[j], -1)
                constraint.SetCoefficient(y[i], 1)
                constraint.SetCoefficient(y[j], -1)

        # Ottimizza
        status = self.solver.Solve()
        
        if status == pywraplp.Solver.OPTIMAL:
            # Crea il layout risultante
            layout = {
                "container": {
                    "width": container_width,
                    "height": container_height
                },
                "items": [
                    {
                        "id": part['id'],
                        "x": x[i].solution_value(),
                        "y": y[i].solution_value(),
                        "width": part['width'],
                        "height": part['height']
                    }
                    for i, part in enumerate(parts)
                ]
            }
            return layout
        else:
            raise Exception("Nessuna soluzione ottimale trovata") 