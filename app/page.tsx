import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <header className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Home
          </h1>
          <p className="ds-muted max-w-prose text-sm sm:text-base">
            Frontend developer focused on clean interfaces, accessible UX, and
            fast, reliable web experiences.
          </p>
        </div>

        <div className="shrink-0">
          <div className="ds-surface inline-flex p-2">
            <Image
              src="/headshot.png"
              alt="Portrait"
              width={120}
              height={120}
              className="h-24 w-24 rounded-[var(--ds-radius-sm)] object-cover sm:h-28 sm:w-28"
              priority
            />
          </div>
        </div>
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
