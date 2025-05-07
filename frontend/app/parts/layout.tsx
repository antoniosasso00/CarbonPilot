export default function PartsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="p-4">
        <h1 className="text-2xl font-bold mb-4">Gestione Parti</h1>
        {children}
      </section>
    );
  }
  