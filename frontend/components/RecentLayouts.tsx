import { useEffect, useState } from "react"
import Link from "next/link"

interface Layout {
  id: number
  layout_data: {
    container: {
      width: number
      height: number
    }
    items: Array<{
      id: number
      x: number
      y: number
      width: number
      height: number
    }>
  }
  parts_data: Array<{
    id: number
    name: string
  }>
}

export function RecentLayouts() {
  const [layouts, setLayouts] = useState<Layout[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/nesting?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setLayouts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError("Errore nel caricamento dei layout")
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Caricamento...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="space-y-4">
      {layouts.map((layout) => (
        <Link
          key={layout.id}
          href={`/nesting/${layout.id}`}
          className="block p-3 border rounded-md hover:bg-gray-50 transition-colors"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-medium">Layout #{layout.id}</h4>
              <p className="text-sm text-gray-500">
                {layout.parts_data.length} parti
              </p>
            </div>
            <div className="text-sm text-gray-600">
              {layout.layout_data.container.width} x{" "}
              {layout.layout_data.container.height} mm
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {layout.parts_data.map((part) => part.name).join(", ")}
          </div>
        </Link>
      ))}
    </div>
  )
} 