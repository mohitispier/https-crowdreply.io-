import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Ready to dominate AI search results?
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Join thousands of brands already using CrowdReply to track, analyze, and improve their AI visibility.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-opacity hover:opacity-90"
            >
              Start Free Trial
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Schedule a Demo
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
}
