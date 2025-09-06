export default function AboutUsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-3 text-gray-600">
          We are building a modern Appointment Management System to help teams schedule and manage
          appointments efficiently. Our focus is usability, speed, and reliability.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Mission</h3>
            <p className="mt-1 text-sm text-gray-600">
              Simplify appointment workflows for everyone.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Vision</h3>
            <p className="mt-1 text-sm text-gray-600">
              A world where scheduling is effortless and transparent.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Values</h3>
            <p className="mt-1 text-sm text-gray-600">
              Customer-first, accessibility, and data privacy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}