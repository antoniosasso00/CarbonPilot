from ortools.sat.python import cp_model
from typing import List, Dict


class NestingModel:
    def __init__(self, autoclave_width: int, autoclave_height: int, parts: List[Dict]):
        self.model = cp_model.CpModel()
        self.autoclave_width = int(autoclave_width)
        self.autoclave_height = int(autoclave_height)
        self.parts = parts
        self.variables = {}

    def build_model(self):
        for i, part in enumerate(self.parts):
            w = int(part["width"])
            h = int(part["height"])

            x = self.model.NewIntVar(0, self.autoclave_width - w, f"x_{i}")
            y = self.model.NewIntVar(0, self.autoclave_height - h, f"y_{i}")

            self.variables[i] = (x, y, w, h)

        # vincoli: non sovrapposizione
        for i in range(len(self.parts)):
            for j in range(i + 1, len(self.parts)):
                xi, yi, wi, hi = self.variables[i]
                xj, yj, wj, hj = self.variables[j]

                self.model.AddBoolOr([
                    xi + wi <= xj,
                    xj + wj <= xi,
                    yi + hi <= yj,
                    yj + hj <= yi
                ])

    def solve(self):
        self.build_model()
        solver = cp_model.CpSolver()
        status = solver.Solve(self.model)

        if status not in (cp_model.FEASIBLE, cp_model.OPTIMAL):
            return []

        layout = []
        for i, part in enumerate(self.parts):
            x, y, w, h = self.variables[i]
            layout.append({
                "id": part["id"],
                "x": solver.Value(x),
                "y": solver.Value(y),
                "width": w,
                "height": h
            })
        return layout
