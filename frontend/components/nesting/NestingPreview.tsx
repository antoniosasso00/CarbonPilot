"use client";

import { NestingResult } from "@/types/nesting";

type Props = {
  layout: NestingResult;
};

export default function NestingPreview({ layout }: Props) {
  const svgWidth = 600;
  const svgHeight = 400;

  const scaleX = svgWidth / layout.width_used;
  const scaleY = svgHeight / layout.height_used;

  return (
    <div className="border rounded-md p-4">
      <h2 className="font-semibold text-lg mb-2">Anteprima Layout #{layout.layout_id}</h2>
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
