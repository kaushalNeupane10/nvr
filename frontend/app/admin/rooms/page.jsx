export default function RoomsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Rooms</h1>

      <div className="grid gap-4">
        <RoomCard name="Deluxe Room" status="Booked" />
        <RoomCard name="Standard Room" status="Available" />
      </div>
    </div>
  );
}

function RoomCard({ name, status }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between">
      <div>
        <h2 className="font-medium">{name}</h2>
        <p className="text-sm text-neutral-500">{status}</p>
      </div>
      <button className="btn-approve">Toggle</button>
    </div>
  );
}
