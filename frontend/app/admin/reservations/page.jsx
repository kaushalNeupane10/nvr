"use client";

const reservations = [
  {
    id: 1,
    guest: "John Doe",
    room: "Deluxe Room",
    checkIn: "2026-01-05",
    checkOut: "2026-01-07",
    status: "pending",
  },
  {
    id: 2,
    guest: "Jane Smith",
    room: "Suite",
    checkIn: "2026-01-10",
    checkOut: "2026-01-12",
    status: "approved",
  },
];

export default function ReservationsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Reservations
        </h1>
        <p className="text-sm text-neutral-500">
          Manage online booking requests
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-neutral-50 text-neutral-500 text-sm">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Guest</th>
              <th className="px-6 py-4 text-left font-medium">Room</th>
              <th className="px-6 py-4 text-left font-medium">Stay</th>
              <th className="px-6 py-4 text-left font-medium">Status</th>
              <th className="px-6 py-4 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map((r) => (
              <tr
                key={r.id}
                className="border-t hover:bg-neutral-50 transition"
              >
                <td className="px-6 py-4 font-medium">
                  {r.guest}
                </td>

                <td className="px-6 py-4 text-neutral-600">
                  {r.room}
                </td>

                <td className="px-6 py-4 text-neutral-600">
                  {r.checkIn} → {r.checkOut}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={r.status} />
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="btn-primary">Approve</button>
                    <button className="btn-secondary">Reject</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {reservations.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-2xl shadow-sm p-5 space-y-3"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{r.guest}</h3>
                <p className="text-sm text-neutral-500">{r.room}</p>
              </div>
              <StatusBadge status={r.status} />
            </div>

            <p className="text-sm text-neutral-600">
              {r.checkIn} → {r.checkOut}
            </p>

            <div className="flex gap-2 pt-2">
              <button className="btn-primary w-full">
                Approve
              </button>
              <button className="btn-secondary w-full">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function StatusBadge({ status }) {
  const styles = {
    pending: "bg-neutral-100 text-neutral-700",
    approved: "bg-neutral-900 text-white",
    rejected: "bg-neutral-200 text-neutral-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
