"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code2,
  Database,
  Lock,
  CreditCard,
  Zap,
  Package,
} from "lucide-react";
import Link from "next/link";

export default function GettingStartedChoice() {
  return (
    <div className="container mx-auto max-w-6xl py-10 px-4">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your journey with AI-powered development. Pick the track that
            matches your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Basic Track */}
          <Card className="relative overflow-hidden border-2 hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16" />
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                >
                  Recommended for beginners
                </Badge>
              </div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Code2 className="h-6 w-6 text-blue-600" />
                Basic Track
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Perfect for getting started with Next.js and AI coding
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                A clean, minimal Next.js project that&apos;s perfect for
                learning the fundamentals. Start here if you&apos;re new to web
                development or want to focus on core concepts without the
                complexity of advanced features.
              </p>

              <div className="space-y-3">
                <h4 className="font-medium text-sm">What&apos;s included:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-blue-600" />
                    Barebones Next.js setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-blue-600" />
                    Essential libraries only
                  </li>
                  <li className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-blue-600" />
                    Simple, clean codebase
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <Link href="/getting-started/basic">
                  <Button className="w-full group" size="lg">
                    Start Basic Track
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Track */}
          <Card className="relative overflow-hidden border-2 hover:border-purple-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16" />
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                >
                  Full-featured
                </Badge>
              </div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Database className="h-6 w-6 text-purple-600" />
                Advanced Track
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Build production-ready apps with real-world features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Dive into a complete web application stack with authentication,
                database integration, and payment processing. Perfect for
                developers ready to build and deploy real applications with all
                the features users expect.
              </p>

              <div className="space-y-3">
                <h4 className="font-medium text-sm">
                  What you&apos;ll explore:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-purple-600" />
                    User authentication & sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-purple-600" />
                    Supabase database integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-purple-600" />
                    Payment processing with Polar
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <Link href="/getting-started/advanced">
                  <Button
                    className="w-full group"
                    size="lg"
                    variant="secondary"
                  >
                    Start Advanced Track
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Not sure which to choose? Start with the Basic Track and level up
            when you&apos;re ready.
          </p>
        </div>
      </div>
    </div>
  );
}
