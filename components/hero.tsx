import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <span className="text-xs font-medium text-accent">New</span>
            <span className="text-xs text-muted-foreground">AI Engagement Engine is now live</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            The #1 AI Search Visibility Platform
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl leading-relaxed">
            Track rankings, monitor cited conversations, and place your brand where it matters. 
            The only platform with a built-in Engagement Engine.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Start Free Trial
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          <div className="bg-background p-6 md:p-8">
            <p className="text-2xl font-bold text-foreground md:text-3xl">5,000+</p>
            <p className="mt-1 text-sm text-muted">Brands tracked</p>
          </div>
          <div className="bg-background p-6 md:p-8">
            <p className="text-2xl font-bold text-foreground md:text-3xl">10M+</p>
            <p className="mt-1 text-sm text-muted">Conversations monitored</p>
          </div>
          <div className="bg-background p-6 md:p-8">
            <p className="text-2xl font-bold text-foreground md:text-3xl">98%</p>
            <p className="mt-1 text-sm text-muted">Accuracy rate</p>
          </div>
          <div className="bg-background p-6 md:p-8">
            <p className="text-2xl font-bold text-foreground md:text-3xl">24/7</p>
            <p className="mt-1 text-sm text-muted">Real-time monitoring</p>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="mt-20">
          <p className="text-center text-sm text-muted">Trusted by leading brands</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
            <span className="text-xl font-semibold tracking-tight">Notion</span>
            <span className="text-xl font-semibold tracking-tight">Linear</span>
            <span className="text-xl font-semibold tracking-tight">Vercel</span>
            <span className="text-xl font-semibold tracking-tight">Stripe</span>
            <span className="text-xl font-semibold tracking-tight">Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
}
