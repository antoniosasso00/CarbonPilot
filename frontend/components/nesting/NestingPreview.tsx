"use client";

import { NestingResult } from "@/types/nesting";
import { downloadNestingPDF } from "@/lib/api";

type Props = {
  layout: NestingResult;
};

export default function NestingPreview({ layout }: Props) {
  const svgWidth = 600;
  const svgHeight = 400;

  const scaleX = svgWidth / layout.width_used;
  const scaleY = svgHeight / layout.height_used;

  const handleDownload = async () => {
    try {
      const blob = await downloadNestingPDF(layout);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `nesting_${layout.layout_id}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Errore nel download PDF:", err);
      alert("Errore nel download del PDF");
    }
  };

  return (
    <div className="border rounded-md p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-lg">Anteprima Layout #{layout.layout_id}</h2>
        <button
          className="text-sm text-blue-600 underline hover:text-blue-800"
          onClick={handleDownload}
        >
          📄 Scarica PDF
        </button>
      </div>

      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        width="100%"
        height="300"
        className="bg-gray-100 border"
      >
        {layout.parts.map((part) => {
          const width = part.rotated ? 30 : 50;
          const height = part.rotated ? 50 : 30;

          const x = part.x * scaleX;
          const y = part.y * scaleY;
          const w = width * scaleX;
          const h = height * scaleY;

          return (
            <g key={part.id}>
              <rect x={x} y={y} width={w} height={h} fill="#4f46e5" stroke="#1e1b4b" strokeWidth={1} />
              <text x={x + w / 2} y={y + h / 2} textAnchor="middle" dy=".3em" fontSize="8" fill="#fff">
                {part.part_number}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
