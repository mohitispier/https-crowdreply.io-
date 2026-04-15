import Link from "next/link";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small brands and startups",
      features: [
        "Track 3 brands",
        "100 keywords monitored",
        "Basic analytics",
        "Email alerts",
        "7-day data retention",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Pro",
      price: "$149",
      description: "For growing companies with serious visibility goals",
      features: [
        "Track 10 brands",
        "500 keywords monitored",
        "Advanced analytics",
        "Engagement Engine access",
        "30-day data retention",
        "Priority support",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited brands",
        "Unlimited keywords",
        "Custom analytics",
        "Full Engagement Engine",
        "Unlimited data retention",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col border ${
                plan.popular ? "border-accent" : "border-border"
              } bg-card p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>

                <div className="mt-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted">/month</span>
                  )}
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.popular
                    ? "bg-foreground text-background"
                    : "border border-border bg-transparent text-foreground hover:bg-secondary"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
