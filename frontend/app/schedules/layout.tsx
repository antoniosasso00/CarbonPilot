export default function SchedulesLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="p-4">
        <h1 className="text-2xl font-bold mb-4">Pianificazione Autoclavi</h1>
        {children}
      </section>
    );
  }
  