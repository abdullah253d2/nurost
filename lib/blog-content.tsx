import type { ReactNode } from "react";

/* ─── Prose helpers ─────────────────────────────────────────── */
const H2 = ({ children }: { children: ReactNode }) => (
  <h2
    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-5"
    style={{ fontFamily: "var(--font-syne, sans-serif)" }}
  >
    {children}
  </h2>
);
const H3 = ({ children }: { children: ReactNode }) => (
  <h3
    className="text-xl font-bold text-slate-100 mt-10 mb-3"
    style={{ fontFamily: "var(--font-syne, sans-serif)" }}
  >
    {children}
  </h3>
);
const P = ({ children }: { children: ReactNode }) => (
  <p className="text-slate-400 leading-[1.85] mb-6">{children}</p>
);
const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-slate-200">{children}</strong>
);
const UL = ({ children }: { children: ReactNode }) => (
  <ul className="flex flex-col gap-2.5 mb-6 pl-1">{children}</ul>
);
const LI = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-3 text-slate-400 leading-relaxed">
    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
    <span>{children}</span>
  </li>
);
const Callout = ({ children }: { children: ReactNode }) => (
  <blockquote className="my-8 pl-5 border-l-2 border-blue-500/60">
    <p className="text-slate-300 text-lg leading-relaxed italic">{children}</p>
  </blockquote>
);
const Divider = () => (
  <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
);

/* ─── Article 1 ──────────────────────────────────────────────── */
function NextJSArticle() {
  return (
    <>
      <P>
        When a new client brief arrives, one of the first decisions we make is framework choice.
        For the past two years, the answer has almost always been Next.js — not because it is
        trendy, and not because we haven't considered alternatives, but because of consistent
        reasons that keep proving themselves on real builds.
      </P>
      <P>
        We have shipped Next.js applications for Rozee.pk (Pakistan's number one job board),
        Finja (a fintech platform handling real financial transactions), and several other
        production systems. Here is what we have actually learned from those projects.
      </P>

      <H2>What SSR does — and doesn't — solve</H2>
      <P>
        Server-side rendering is the headline feature of Next.js, and also the most misunderstood
        one. Teams reach for SSR thinking it will fix all their performance problems. Sometimes it
        does. Often the trade-off is not worth the added complexity.
      </P>
      <P>SSR genuinely helps in three scenarios:</P>

      <H3>1. SEO-critical pages</H3>
      <P>
        Job listings, product pages, landing pages — anything that needs to be indexed by Google.
        When Rozee.pk serves a job detail page, that HTML must be complete when the crawler
        arrives. SSR (or static generation) is non-negotiable here. Without it, you are relying on
        Google to execute JavaScript, which it does but inconsistently, and you surrender the
        crawl performance advantage entirely.
      </P>

      <H3>2. Slow-network users</H3>
      <P>
        On a 4G or 3G connection — which is still most of Pakistan and large parts of the
        developing world — the time-to-first-byte of a server-rendered page is meaningfully better
        than a blank loading screen waiting on a large React bundle. When Finja needed to support
        users on variable network conditions, SSR was a direct improvement for real people.
      </P>

      <H3>3. Data-heavy dashboards where data is available server-side</H3>
      <P>
        If you are rendering a financial dashboard and the data lives in a database your server
        has direct access to, rendering it on the server and sending the HTML is almost always
        faster than rendering a loading skeleton, making a client API call, and hydrating.
      </P>

      <Divider />

      <P>SSR is the wrong tool for:</P>
      <UL>
        <LI>
          <B>Pure admin panels used exclusively by your internal team on fast connections.</B>{" "}
          The SEO and network arguments don't apply. You're adding complexity for no measurable
          benefit.
        </LI>
        <LI>
          <B>Heavy real-time interfaces</B> — chat apps, collaborative tools, live code editors.
          The state management required doesn't map cleanly to SSR patterns.
        </LI>
        <LI>
          <B>Internal tools where data depends entirely on client-side state.</B> If you don't
          know what to render until the user has authenticated, selected filters, or taken some
          action, SSR cannot help you much anyway.
        </LI>
      </UL>

      <H2>Why we still use Next.js even when SSR isn't the point</H2>
      <P>
        Even for applications that would work fine as a plain React SPA, we still usually choose
        Next.js. The reasons have nothing to do with SSR.
      </P>
      <UL>
        <LI>
          <B>App Router + file-based routing</B> is genuinely good. Your file tree maps to your
          URL tree. Layout components, loading states, error boundaries, and page components are
          colocated per-route. Less boilerplate.
        </LI>
        <LI>
          <B>Server Components</B> let you move data-fetching to the server without writing API
          routes for everything. When you're building internal features that would otherwise
          require a full API layer, this saves real time.
        </LI>
        <LI>
          <B>next/image</B> handles image optimisation automatically — resizing, WebP conversion,
          lazy loading, srcset generation. This matters on real projects where a designer has
          handed off full-resolution assets.
        </LI>
        <LI>
          <B>Deployment is frictionless.</B> Vercel, Railway, and custom Docker deployments all
          have well-documented, working Next.js patterns. With a plain Vite + Express setup, you
          wire more infrastructure yourself.
        </LI>
        <LI>
          <B>The ecosystem follows Next.js.</B> Most new React libraries, headless CMS adapters,
          authentication packages, and UI component systems now ship dedicated Next.js docs and
          examples.
        </LI>
      </UL>

      <H2>When we'd choose something else</H2>
      <P>
        If you're building a small, SEO-irrelevant internal tool with a team that has strong Vite
        experience, using Vite + React is reasonable. It's lighter and faster to set up.
      </P>
      <P>
        If you're building with Python-heavy server logic and just need a simple frontend, consider
        whether you need a full React framework at all.
      </P>
      <P>
        And if you're building a pure mobile app, use React Native — not a web framework with a
        mobile-responsive design as an afterthought.
      </P>

      <Callout>
        We don't choose Next.js because it's the framework of the moment. We choose it because,
        on the projects we've actually shipped, it's been the right call more often than not.
      </Callout>

      <H2>The bottom line</H2>
      <P>
        For most web applications — especially those with any public-facing component, SEO
        requirements, or a team coming from a React background — Next.js is the right default.
        Not because of SSR specifically, but because of the ecosystem, tooling, and deployment
        story that comes with it.
      </P>
      <P>
        If you're evaluating frameworks for your next project and want an honest assessment,{" "}
        <a href="/#contact" className="text-blue-400 hover:text-blue-300 transition-colors">
          reach out
        </a>
        . We are happy to talk through the trade-offs for your specific situation.
      </P>
    </>
  );
}

/* ─── Article 2 ──────────────────────────────────────────────── */
function ReactNativeArticle() {
  return (
    <>
      <P>
        The "which mobile framework" debate never goes away, and the arguments on both sides are
        always more confident than the evidence warrants. So here is what we actually know — from
        building production applications in both.
      </P>

      <H2>Our Flutter experience</H2>
      <P>
        Before forming NUROST, our team used Flutter on client projects. Two reasons drove the
        choice: precise UI control and the performance benchmarks. Both things are true. Flutter's
        rendering engine (now Impeller) is fast and gives you pixel-level control over every
        element.
      </P>
      <P>What the benchmarks don't mention:</P>
      <UL>
        <LI>
          <B>Dart is a niche language.</B> When you need to hire or onboard a developer, you're
          drawing from a much smaller pool than the JavaScript ecosystem. This is a real
          operational cost that compounds over time.
        </LI>
        <LI>
          <B>The package ecosystem is limited.</B> Not in a way that blocks common tasks, but when
          you need something specific — a payment SDK, a device-specific API, a map integration —
          you often end up writing a native bridge yourself or waiting for a community package to
          mature.
        </LI>
        <LI>
          <B>Web developers cannot contribute.</B> If you have a React or Vue team building your
          web product and you want mobile-web code sharing, Flutter gives you almost nothing. Dart
          exists in a separate world from your JavaScript codebase.
        </LI>
      </UL>
      <P>
        These are not dealbreakers. But they are costs that do not appear in framework comparisons.
      </P>

      <H2>Our React Native experience</H2>
      <P>
        We built Dukan (an e-commerce mobile platform) and Rizq (a fintech app focused on Islamic
        finance) with React Native using Expo. Both are live on iOS and Android.
      </P>
      <P>
        React Native in 2025 is a materially different product from what it was in 2019. The New
        Architecture (JSI-based bridge replacement) has addressed most of the performance
        criticisms. Expo has solved most of the developer experience pain points that made bare
        React Native difficult.
      </P>
      <P>What worked well on Dukan and Rizq:</P>
      <UL>
        <LI>
          <B>Speed of iteration.</B> OTA (over-the-air) updates via Expo EAS mean we can ship bug
          fixes without an App Store review cycle. For a production fintech app, this matters.
        </LI>
        <LI>
          <B>Shared knowledge with the web team.</B> JavaScript, React, TypeScript, hooks — the
          mental model is the same. A web developer can start contributing to a React Native
          codebase within days, not months.
        </LI>
        <LI>
          <B>Rich ecosystem.</B> Payment SDKs, maps, biometrics, push notifications, in-app
          purchases — all of these have well-maintained packages. The JavaScript ecosystem usually
          has an adjacent solution when something doesn't exist.
        </LI>
      </UL>

      <Divider />

      <H2>The honest performance comparison</H2>
      <P>
        In synthetic benchmarks, Flutter wins. In real applications, the difference is
        imperceptible to users.
      </P>
      <P>
        Why? Because application performance is dominated by I/O — network requests, database
        reads, image decoding — not by rendering speed. When your app is waiting on a Stripe API
        call or a database query, whether your frame render time is 2ms or 4ms is completely
        irrelevant.
      </P>
      <Callout>
        Where Flutter's rendering advantage genuinely matters: games, heavily animated custom UI,
        and graphics-intensive applications. For a fintech app, a job board, or an e-commerce
        platform — the difference disappears in production.
      </Callout>

      <H2>Hiring and long-term maintainability</H2>
      <P>
        This is the argument that gets undersold in every framework comparison, and it is often
        the most important one for a product company thinking beyond the initial build.
      </P>
      <P>
        <B>React Native:</B> you hire from the React talent pool, which is enormous. You can post
        a role for a senior React Native developer and receive applications from React web
        developers who can learn Native patterns within weeks.
      </P>
      <P>
        <B>Flutter:</B> you hire Flutter-specifically or retrain for Dart. The Flutter community
        is growing but remains a fraction of the React ecosystem. In markets like Pakistan, where
        most mobile talent has a web background, this gap is significant.
      </P>
      <P>
        Long-term maintainability follows the same logic. When a team member leaves, replacing
        React Native expertise is easier. When the framework releases breaking changes, the React
        Native community produces migration guides, Stack Overflow answers, and documentation
        updates at a higher volume.
      </P>

      <H2>When we'd recommend Flutter</H2>
      <UL>
        <LI>
          Games and graphics-heavy apps where the rendering engine choice actually matters for
          your core product functionality
        </LI>
        <LI>
          Teams that already have Dart or Flutter experience and would be relearning from scratch
          on React Native
        </LI>
        <LI>
          Apps with deeply custom, pixel-critical UI that doesn't map well to standard React
          Native components
        </LI>
      </UL>

      <H2>When we recommend React Native</H2>
      <UL>
        <LI>Fintech, e-commerce, marketplace, and social apps</LI>
        <LI>Any team with an existing React web codebase</LI>
        <LI>Projects where OTA update capability is important</LI>
        <LI>Companies hiring from a Pakistani or South Asian developer pool</LI>
        <LI>MVPs and projects where iteration speed matters more than theoretical peak performance</LI>
      </UL>

      <H2>The bottom line</H2>
      <P>
        Flutter is a genuinely good framework. But "genuinely good" does not mean "the right
        choice for your project." For most product teams building most apps in 2025, React Native
        with Expo is the better default — not because of the framework itself, but because of the
        ecosystem, the hiring pool, and the ability to share context between web and mobile teams.
      </P>
      <P>
        We built Dukan and Rizq on React Native. Both are live, both teams are confident in the
        choice, and neither project has given us a reason to reconsider.
      </P>
      <P>
        If you're deciding between frameworks for an upcoming mobile project and want to talk
        through it,{" "}
        <a href="/#contact" className="text-blue-400 hover:text-blue-300 transition-colors">
          we're happy to have that conversation
        </a>
        .
      </P>
    </>
  );
}

/* ─── Article 3 ──────────────────────────────────────────────── */
function WhyNurostArticle() {
  return (
    <>
      <P>
        This one is harder to write than a technical article, because it is not about frameworks
        or benchmarks. It is about why five engineers decided to start something in 2025, when the
        agency market is crowded and the sensible career move would have been to stay employed.
      </P>

      <H2>What we kept seeing</H2>
      <P>
        Before NUROST, the team worked at software companies, agencies, and as contractors. We
        shipped real products — Rozee.pk, Finja, Rizq, and others. And we noticed the same
        patterns repeat across engagements.
      </P>
      <UL>
        <LI>
          <B>Clients were paying for senior engineers and getting juniors.</B> Not always, but
          often enough to be a pattern. The agency would win the business with a senior team in
          the sales pitch and deliver the project with developers learning on the client's budget.
        </LI>
        <LI>
          <B>Scope was vague by design.</B> Monthly retainers with no clear deliverables are easy
          to maintain and hard to cancel. We saw clients paying for "ongoing development" for
          months without being able to point to what they had actually received.
        </LI>
        <LI>
          <B>Clients did not own their code.</B> Not always legally — but in practice. When they
          wanted to change vendors or hire in-house, they discovered a codebase structured in a
          way that only the original agency could maintain.
        </LI>
        <LI>
          <B>Account managers, not engineers, were the point of contact.</B> A technical question
          went through someone who passed it to someone who passed it to the actual developer.
          This added days to simple conversations.
        </LI>
      </UL>

      <H2>What we wanted NUROST to be</H2>
      <P>
        Small on purpose. Not a 50-person agency with layers of management. A focused team of
        senior engineers who take on fewer projects and do them properly.
      </P>
      <P>
        Honest about what we are. We are new. We said that clearly on the website because we
        think pretending otherwise insults the intelligence of the people we want to work with.
      </P>
      <P>
        Project-based pricing. You should know what you're getting before you commit. Monthly
        retainer pricing hides the real cost and creates incentives to extend timelines.
      </P>

      <Callout>
        Senior engineers on every engagement. Not "senior engineers involved in the project" —
        senior engineers actually building it.
      </Callout>

      <P>
        Client owns the code. We transfer source code and IP on delivery. If you hire someone
        to maintain it tomorrow, they can do that without us.
      </P>

      <H2>Who we are</H2>
      <P>
        Five engineers with backgrounds spanning fintech (Finja, Rizq), recruitment (Rozee.pk),
        healthcare, and software quality assurance.
      </P>
      <UL>
        <LI>
          <B>Abdullah Shahid</B> — Founder, senior frontend engineer, React and React Native.
          6 years in production systems.
        </LI>
        <LI>
          <B>Haseeb Ahmed</B> — Technical lead and solution architect. PHP, Laravel, cloud
          infrastructure. 5+ years leading engineering teams.
        </LI>
        <LI>
          <B>Yousaf Butt</B> — Lead mobile developer. React Native (Expo and CLI). 8+ years
          building iOS and Android apps.
        </LI>
        <LI>
          <B>Yasim Iqbal</B> — Full stack engineer. Laravel, React.js, TypeScript, MySQL.
          5+ years with a 100% on-time delivery record.
        </LI>
        <LI>
          <B>Muhammad Abaid Ullah</B> — QA lead and project coordinator. Led a 12-person QA
          team across 3 concurrent product lines at Conovo Technologies. Gold Medalist.
        </LI>
      </UL>
      <P>
        We are based in Lahore, registered in England and Wales as NUROST LTD.
      </P>

      <H2>Who we want to work with</H2>
      <UL>
        <LI>Startups with a real product to build — not a vague idea that needs to become an idea first</LI>
        <LI>Businesses that want to talk to engineers, not account managers</LI>
        <LI>Teams willing to do weekly syncs and give real, direct feedback</LI>
        <LI>
          Companies with budgets between £1,500 and £50,000+ — not free, and not Fortune 500
          enterprise procurement
        </LI>
      </UL>

      <H2>What we're working toward</H2>
      <P>
        A reputation built on projects we can put our names on. We would rather complete five
        projects we're proud of than fifty we are not.
      </P>
      <P>
        A team model that does not require outsourcing or hiring juniors to stay profitable. If we
        are ever too busy to give a project senior attention, we would rather turn it down than
        dilute the quality.
      </P>
      <P>
        Eventually — a portfolio that demonstrates what senior engineers build when they are not
        rushing to hit a margin target.
      </P>

      <Divider />

      <P>
        If this sounds like the kind of agency you've been looking for, send us a message at{" "}
        <a href="mailto:support@nurost.com" className="text-blue-400 hover:text-blue-300 transition-colors">
          support@nurost.com
        </a>
        . Tell us what you're building. We'll respond within four hours with an honest assessment
        — not a sales pitch.
      </P>
    </>
  );
}

/* ─── Export map ─────────────────────────────────────────────── */
export const blogContent: Record<string, () => ReactNode> = {
  "nextjs-client-projects-2025": NextJSArticle,
  "react-native-vs-flutter-2025": ReactNativeArticle,
  "why-we-started-nurost": WhyNurostArticle,
};
