from fpdf import FPDF
from datetime import datetime
from typing import List
import os
from models.schedule import Schedule


# Crea la directory reports se non esiste
os.makedirs("reports", exist_ok=True)


class PDFReport(FPDF):
    def __init__(self, layout_data: dict = None):
        super().__init__()
        self.layout = layout_data
        self.set_auto_page_break(auto=True, margin=15)
        self.add_page()
        self.set_font("Arial", size=12)
        if layout_data:
            self._build_nesting_report()

    def _build_nesting_report(self):
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

    def build_daily_report(self, schedules: List[Schedule], date: datetime):
        self.cell(0, 10, "Report Giornaliero Autoclavi", ln=True, align="C")
        self.set_font("Arial", size=10)
        self.cell(0, 10, f"Data: {date.strftime('%Y-%m-%d')}", ln=True)
        self.ln(5)

        self.set_font("Arial", "B", 10)
        self.cell(30, 10, "Autoclave")
        self.cell(40, 10, "Inizio")
        self.cell(40, 10, "Fine")
        self.cell(50, 10, "Ciclo")
        self.cell(30, 10, "Stato")
        self.ln()

        self.set_font("Arial", "", 10)
        for schedule in schedules:
            self.cell(30, 10, str(schedule.autoclave_id))
            self.cell(40, 10, schedule.start_date.strftime("%H:%M"))
            self.cell(40, 10, schedule.end_date.strftime("%H:%M"))
            self.cell(50, 10, schedule.cure_cycle.name if schedule.cure_cycle else "N/A")
            self.cell(30, 10, schedule.status)
            self.ln()


def generate_nesting_report(nesting_id: int, layout: dict) -> str:
    """
    Genera un report PDF per il layout di nesting e lo salva su disco.
    
    Args:
        nesting_id (int): ID del nesting
        layout (dict): Dati del layout di nesting
        
    Returns:
        str: Il percorso del file PDF generato
    """
    pdf = PDFReport(layout)
    filename = f"reports/nesting_{nesting_id}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
    pdf.output(filename)
    return filename


def generate_daily_report(schedules: List[Schedule], date: datetime, filename: str) -> None:
    """
    Genera un report PDF giornaliero delle attività pianificate.
    
    Args:
        schedules (List[Schedule]): Lista delle schedule da includere nel report
        date (datetime): Data del report
        filename (str): Nome del file di output
    """
    pdf = PDFReport()
    pdf.build_daily_report(schedules, date)
    pdf.output(f"reports/{filename}")
