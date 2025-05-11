import { useEffect, useState } from "react"
import { format } from "date-fns"
import { it } from "date-fns/locale"

interface Schedule {
  id: number
  part_id: number
  autoclave_id: number
  start_date: string
  end_date: string
  status: "scheduled" | "in_progress" | "completed" | "cancelled"
  part: {
    name: string
  }
  autoclave: {
    name: string
  }
}

export function ScheduleTimeline() {
  const [schedules, setSchedules] = useState<Schedule[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const now = new Date()
    const end = new Date()
    end.setDate(end.getDate() + 7)

    fetch(
      `http://localhost:8000/api/v1/schedules?start_date=${now.toISOString()}&end_date=${end.toISOString()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSchedules(data)
        setLoading(false)
      })
      .catch((err) => {
        setError("Errore nel caricamento delle pianificazioni")
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
      {schedules.map((schedule) => (
        <div
          key={schedule.id}
          className="p-3 border rounded-md hover:bg-gray-50 transition-colors"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-medium">{schedule.part.name}</h4>
              <p className="text-sm text-gray-500">{schedule.autoclave.name}</p>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                schedule.status === "scheduled"
                  ? "bg-blue-100 text-blue-800"
                  : schedule.status === "in_progress"
                  ? "bg-yellow-100 text-yellow-800"
                  : schedule.status === "completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {schedule.status === "scheduled"
                ? "Pianificata"
                : schedule.status === "in_progress"
                ? "In corso"
                : schedule.status === "completed"
                ? "Completata"
                : "Annullata"}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            <p>
              Inizio:{" "}
              {format(new Date(schedule.start_date), "d MMM HH:mm", {
                locale: it,
              })}
            </p>
            <p>
              Fine:{" "}
              {format(new Date(schedule.end_date), "d MMM HH:mm", {
                locale: it,
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
} 