import { useEffect, useState } from "react"

interface Autoclave {
  id: number
  name: string
  status: "available" | "busy" | "maintenance"
}

export function AutoclaveStatus() {
  const [autoclaves, setAutoclaves] = useState<Autoclave[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/autoclaves")
      .then((res) => res.json())
      .then((data) => {
        setAutoclaves(data)
        setLoading(false)
      })
      .catch((err) => {
        setError("Errore nel caricamento delle autoclavi")
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
      {autoclaves.map((autoclave) => (
        <div
          key={autoclave.id}
          className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
        >
          <span>{autoclave.name}</span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              autoclave.status === "available"
                ? "bg-green-100 text-green-800"
                : autoclave.status === "busy"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {autoclave.status === "available"
              ? "Disponibile"
              : autoclave.status === "busy"
              ? "Occupata"
              : "Manutenzione"}
          </span>
        </div>
      ))}
    </div>
  )
} 