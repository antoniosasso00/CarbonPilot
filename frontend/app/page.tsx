import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-16 sm:p-20 font-[family-name:var(--font-inter)]">
      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold">Welcome to CarbonPilot</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h2 className="mb-3 text-2xl font-semibold">
          Getting Started
        </h2>

        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-mono">
          <li>
            Edit <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono font-semibold">app/page.tsx</code>
          </li>
          <li>Save to see changes</li>
        </ol>
      </div>
    </main>
  );
}
