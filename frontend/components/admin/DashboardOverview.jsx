export default function DashboardOverview() {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-neutral-800 text-center">
        Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* Total Rooms */}
        <div className="rounded-2xl bg-white border border-neutral-200 p-5">
          <p className="text-sm text-neutral-500">Total Rooms</p>
          <p className="mt-2 text-3xl font-semibold text-neutral-900">24</p>
        </div>

        {/* Booked Today */}
        <div className="rounded-2xl bg-white border border-neutral-200 p-5">
          <p className="text-sm text-neutral-500">Booked Today</p>
          <p className="mt-2 text-3xl font-semibold text-neutral-900">8</p>
        </div>

        {/* Pending Requests */}
        <div className="rounded-2xl bg-white border border-neutral-200 p-5">
          <p className="text-sm text-neutral-500">Pending Requests</p>
          <p className="mt-2 text-3xl font-semibold text-neutral-900">3</p>
        </div>

        {/* Walk-ins */}
        <div className="rounded-2xl bg-white border border-neutral-200 p-5">
          <p className="text-sm text-neutral-500">Walk-ins Today</p>
          <p className="mt-2 text-3xl font-semibold text-neutral-900">2</p>
        </div>
      </div>
    </section>
  );
}
