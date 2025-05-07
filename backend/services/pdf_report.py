from fpdf import FPDF
from datetime import datetime


class PDFReport(FPDF):
    def __init__(self, layout_data: dict):
        super().__init__()
        self.layout = layout_data
        self.set_auto_page_break(auto=True, margin=15)
        self.add_page()
        self.set_font("Arial", size=12)
        self._build()

    def _build(self):
        self.cell(0, 10, "Report Nesting Autoclave", ln=True, align="C")
        self.set_font("Arial", size=10)
        self.cell(0, 10, f"Data: {datetime.now().strftime('%Y-%m-%d %H:%M')}", ln=True)
        self.ln(5)

        self.cell(0, 10, f"Autoclave ID: {self.layout.get('autoclave_id')}", ln=True)
        self.cell(0, 10, f"Spazio utilizzato: {self.layout.get('width_used')} x {self.layout.get('height_used')} mm", ln=True)
        self.ln(5)

        self.set_font("Arial", "B", 10)
        self.cell(40, 10, "Part Number")
        self.cell(30, 10, "X (mm)")
        self.cell(30, 10, "Y (mm)")
        self.cell(30, 10, "Ruotato")
        self.ln()

        self.set_font("Arial", "", 10)
        for part in self.layout.get("parts", []):
            self.cell(40, 10, part["part_number"])
            self.cell(30, 10, str(part["x"]))
            self.cell(30, 10, str(part["y"]))
            self.cell(30, 10, "Sì" if part["rotated"] else "No")
            self.ln()
