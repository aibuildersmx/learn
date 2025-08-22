"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CheckCircle2,
  Copy,
  Terminal,
  GitBranch,
  Package,
  Rocket,
  Info,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function GettingStartedPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <TooltipProvider>
      <div className="container mx-auto max-w-4xl py-10 px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Advanced Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Assumes you have completed the basic guide.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5" />
                Set Up
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium">1. Clone the repository</h4>
                    <div className="relative group">
                      <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
                        <code className="text-sm">
                          git clone https://github.com/aibuildersmx/learn.git
                        </code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() =>
                          copyToClipboard(
                            "git clone https://github.com/aibuildersmx/learn.git",
                            0
                          )
                        }
                      >
                        {copiedIndex === 0 ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium">
                      2. Install project dependencies
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      This downloads all the code libraries the project needs:
                    </p>
                    <div className="relative group">
                      <pre className="bg-muted p-3 rounded-lg">
                        <code className="text-sm">pnpm install</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyToClipboard("pnpm install", 2)}
                      >
                        {copiedIndex === 2 ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium">
                      3. Set up environment variables
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Copy the example environment file to create your local
                      configuration:
                    </p>
                    <div className="relative group">
                      <pre className="bg-muted p-3 rounded-lg">
                        <code className="text-sm">
                          cp .env.local.example .env.local
                        </code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() =>
                          copyToClipboard("cp .env.local.example .env.local", 3)
                        }
                      >
                        {copiedIndex === 3 ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      This creates a local config file with your app&apos;s
                      settings
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium">
                      4. Start the development server
                    </h4>
                    <div className="relative group">
                      <pre className="bg-muted p-3 rounded-lg">
                        <code className="text-sm">pnpm dev</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyToClipboard("pnpm dev", 4)}
                      >
                        {copiedIndex === 4 ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      The app will start! Look for &ldquo;ready&rdquo; messages
                      and a URL like http://localhost:3000
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Quick Reference
              </CardTitle>
              <CardDescription>Essential paths and commands</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">View Your App</h4>
                  <p className="text-sm text-muted-foreground">
                    Open{" "}
                    <a
                      href="http://localhost:3000"
                      className="text-blue-600 hover:underline"
                    >
                      http://localhost:3000
                    </a>{" "}
                    in your browser to see the running app
                  </p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">Key Locations</h4>
                  <p className="text-sm text-muted-foreground">
                    •{" "}
                    <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                      apps/web/src/app/page.tsx
                    </code>{" "}
                    - Homepage to customize
                  </p>
                  <p className="text-sm text-muted-foreground">
                    •{" "}
                    <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                      apps/web/src/components
                    </code>{" "}
                    - Reusable components
                  </p>
                  <p className="text-sm text-muted-foreground">
                    •{" "}
                    <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                      /components-test
                    </code>{" "}
                    - UI component showcase
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Next</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn how to set up a production-ready database with
                    Supabase and implement secure authentication.
                  </p>
                  <Link href="/getting-started/advanced/continued">
                    <Button className="group">
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}
