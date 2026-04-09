import "./App.css";

function App() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 py-12 text-center">
      <h1 className="text-5xl font-medium tracking-tight text-gray-900 md:text-7xl dark:text-gray-100">
        AI JAM #2
      </h1>
      <p className="text-xl font-medium text-purple-500 md:text-2xl dark:text-purple-400">
        Kóduj chytře, ne víc
      </p>
      <div className="max-w-xl text-left text-gray-600 dark:text-gray-400">
        <p>
          Získej praktické zkušenosti s AI nástroji, které mění pravidla hry.
          Udělej si z AI svého mentora a dostaň se do flow rychleji.
        </p>
        <ul className="my-4 list-disc space-y-1 pl-5">
          <li>Autonomní agenti a jejich vývoj</li>
          <li>Od nápadu k hotovým React komponentám za minuty</li>
          <li>Efektivní AI workflow, prompt engineering a debugging</li>
        </ul>
        <p className="text-center font-mono text-sm text-purple-500 dark:text-purple-400">
          9. dubna 2026 &middot; Praha &middot; 18:00
        </p>
      </div>
    </section>
  );
}

export default App;
