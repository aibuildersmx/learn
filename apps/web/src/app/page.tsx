import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Rocket,
  Github,
  MessageCircle,
} from "lucide-react";
import { TypingEffect } from "@/components/aibuilder/typing-effect";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-primary/5 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-xs sm:text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-primary/20 cursor-default">
                Built with Next.js 15 + Supabase + Cursor AI
              </div>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              Vibe code a<br />
              <TypingEffect />
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground max-w-xl mx-auto px-4 sm:px-0">
              Clone this production-ready template. Learn by exploring real
              code. Transform it into your own app with Cursor AI.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4 sm:px-0">
              <Link href="/getting-started" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="gap-2 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/design-library" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="ghost"
                  className="gap-2 w-full sm:w-auto"
                >
                  View Components
                  <Sparkles className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 lg:mt-24 max-w-2xl lg:max-w-none px-4 sm:px-0">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Code2 className="h-5 w-5 text-primary" />
                  Production Ready
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Authentication, database, and design system pre-configured.
                    Start vibe coding your ideas immediately.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Learn by Example
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Every component is documented. Have AI understand the
                    patterns, then make them your own.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Rocket className="h-5 w-5 text-primary" />
                  AI-First Development
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Optimized for Cursor. Let AI help you customize and extend
                    your application.
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto mt-20 sm:mt-32 max-w-2xl px-4 sm:px-0">
            <div className="rounded-2xl bg-card p-6 sm:p-8 shadow-sm ring-1 ring-border">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Start in 3 steps
              </h2>
              <ol className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm leading-6 text-muted-foreground">
                <li className="flex gap-x-3">
                  <span className="font-mono text-primary">1.</span>
                  Clone the repository and install dependencies
                </li>
                <li className="flex gap-x-3">
                  <span className="font-mono text-primary">2.</span>
                  Open in Cursor and explore the codebase
                </li>
                <li className="flex gap-x-3">
                  <span className="font-mono text-primary">3.</span>
                  Start building your own features with AI assistance
                </li>
              </ol>
              <div className="mt-8">
                <Link href="/getting-started">
                  <Button className="w-full" variant="outline">
                    View Setup Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-2xl px-4 sm:px-0">
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-6 sm:p-8 shadow-sm ring-1 ring-primary/20">
              <div className="text-center">
                <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight flex items-center justify-center gap-2">
                  Need help? Join our community
                </h2>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  Connect with fellow builders, get help, and share your
                  projects
                </p>
                <div className="mt-6">
                  <a
                    href="https://chat.whatsapp.com/E7oCGyITLkX1aqFexJbbHm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Join On WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-3xl px-4 sm:px-0">
            <div className="text-center">
              <Github className="mx-auto h-8 w-8 text-muted-foreground" />
              <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight">
                Open Source
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Clone the repository and start building today
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://github.com/aibuildersmx/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
                <code className="hidden sm:block rounded bg-muted px-3 py-1 text-sm font-mono">
                  git clone https://github.com/aibuildersmx/learn.git
                </code>
              </div>
              <div className="mt-4 sm:hidden">
                <code className="block rounded bg-muted px-3 py-2 text-xs font-mono break-all">
                  git clone https://github.com/aibuildersmx/learn.git
                </code>
              </div>
            </div>
            <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/aibuildersmx/learn-basic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Button>
              </a>
              <code className="hidden sm:block rounded bg-muted px-3 py-1 text-sm font-mono line-clamp-1 text-center">
                git clone https://github.com/aibuildersmx/learn-basic.git
              </code>
            </div>
            <div className="mt-4 sm:hidden">
              <code className="block rounded bg-muted px-3 py-2 text-xs font-mono break-all line-clamp-1 text-center">
                git clone https://github.com/aibuildersmx/learn-basic.git
              </code>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/20 to-primary/5 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </main>
  );
}
