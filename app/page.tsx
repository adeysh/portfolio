export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Home
        </h1>
        <p className="ds-muted max-w-prose text-sm sm:text-base">
          Minimal portfolio skeleton. We’ll fill this in section by section.
        </p>
      </header>

      <section id="projects" className="scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Projects
        </h2>
      </section>

      <section id="contact" className="scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Contact
        </h2>
      </section>
    </div>
  );
}
