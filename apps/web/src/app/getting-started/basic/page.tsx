"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

  const codeBlocks = [
    {
      id: 0,
      code: "git clone https://github.com/benjaminykim/tutorial.git",
      label: "Clone repository",
    },
    { id: 1, code: "cd tutorial", label: "Navigate to project" },
    { id: 2, code: "pnpm install", label: "Install dependencies" },
    { id: 3, code: "pnpm dev", label: "Start development server" },
  ];

  return (
    <TooltipProvider>
      <div className="container mx-auto max-w-4xl py-10 px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Getting Started
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn to vibe code with Cursor by setting up this tutorial
              monorepo
            </p>
          </div>

          <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Starting from a fresh laptop? No worries! This guide covers
              everything from installing a terminal to running your first app.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Fresh Laptop Setup
              </CardTitle>
              <CardDescription>
                Starting from scratch? Follow these steps in order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="mac" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="mac">macOS</TabsTrigger>
                  <TabsTrigger value="windows">Windows</TabsTrigger>
                </TabsList>
                <TabsContent value="mac" className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium flex items-center gap-2">
                        <Terminal className="h-4 w-4" />
                        1. Open Terminal
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-1">
                              What is Terminal?
                            </p>
                            <p className="text-sm mb-2">
                              Terminal is a text-based interface to control your
                              computer. Instead of clicking buttons, you type
                              commands.
                            </p>
                            <p className="text-sm font-semibold mb-1">
                              Why use it?
                            </p>
                            <p className="text-sm">
                              Many developer tools only work through Terminal.
                              It&apos;s faster and more powerful once you get
                              the hang of it!
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Press{" "}
                        <kbd className="px-2 py-1 text-xs bg-muted rounded">
                          ⌘ + Space
                        </kbd>
                        , type &ldquo;Terminal&rdquo;, and press Enter
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium flex items-center gap-2">
                        2. Install Homebrew (Package Manager)
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-1">
                              What is Homebrew?
                            </p>
                            <p className="text-sm mb-2">
                              Homebrew is like an app store for your terminal.
                              It makes installing developer tools super easy.
                            </p>
                            <p className="text-sm font-semibold mb-1">
                              Why do we need it?
                            </p>
                            <p className="text-sm">
                              Without Homebrew, you&apos;d have to manually
                              download and configure each tool. Homebrew handles
                              all the complex setup for you!
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Copy and paste this command into Terminal:
                      </p>
                      <div className="relative group">
                        <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
                          <code className="text-sm">
                            {`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}
                          </code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() =>
                            copyToClipboard(
                              `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`,
                              100
                            )
                          }
                        >
                          {copiedIndex === 100 ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Follow the prompts and enter your password when asked
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium flex items-center gap-2">
                        3. Install Git
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-1">What is Git?</p>
                            <p className="text-sm mb-2">
                              Git is a version control system that tracks
                              changes in your code. Think of it as a time
                              machine for your files.
                            </p>
                            <p className="text-sm font-semibold mb-1">
                              How we use it:
                            </p>
                            <p className="text-sm">
                              We&apos;ll use Git to download (clone) code from
                              GitHub and manage different versions of our
                              project.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </h4>
                      <div className="relative group">
                        <pre className="bg-muted p-3 rounded-lg">
                          <code className="text-sm">brew install git</code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() =>
                            copyToClipboard("brew install git", 101)
                          }
                        >
                          {copiedIndex === 101 ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium flex items-center gap-2">
                        4. Install Node.js
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-1">
                              What is Node.js?
                            </p>
                            <p className="text-sm mb-2">
                              Node.js lets you run JavaScript outside of a web
                              browser. It&apos;s the engine that powers our
                              development server.
                            </p>
                            <p className="text-sm font-semibold mb-1">
                              Why is it important?
                            </p>
                            <p className="text-sm">
                              Modern web apps like this one are built with
                              JavaScript. Node.js runs the tools that compile
                              and serve your code.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </h4>
                      <div className="relative group">
                        <pre className="bg-muted p-3 rounded-lg">
                          <code className="text-sm">brew install node</code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() =>
                            copyToClipboard("brew install node", 102)
                          }
                        >
                          {copiedIndex === 102 ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium flex items-center gap-2">
                        5. Install pnpm
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-1">What is pnpm?</p>
                            <p className="text-sm mb-2">
                              pnpm is a fast, disk space efficient package
                              manager. It installs the JavaScript libraries your
                              project needs.
                            </p>
                            <p className="text-sm font-semibold mb-1">
                              Why use pnpm over npm?
                            </p>
                            <p className="text-sm">
                              pnpm is faster and uses less disk space by sharing
                              dependencies between projects. Perfect for
                              monorepos like this one!
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </h4>
                      <div className="relative group">
                        <pre className="bg-muted p-3 rounded-lg">
                          <code className="text-sm">npm install -g pnpm</code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() =>
                            copyToClipboard("npm install -g pnpm", 103)
                          }
                        >
                          {copiedIndex === 103 ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium">6. Verify Installation</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Run these commands to verify everything is installed:
                      </p>
                      <div className="space-y-2">
                        <code className="block bg-muted p-2 rounded text-xs">
                          git --version
                        </code>
                        <code className="block bg-muted p-2 rounded text-xs">
                          node --version
                        </code>
                        <code className="block bg-muted p-2 rounded text-xs">
                          pnpm --version
                        </code>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="windows" className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium flex items-center gap-2">
                        <Terminal className="h-4 w-4" />
                        1. Install Windows Terminal
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-1">
                              What is Windows Terminal?
                            </p>
                            <p className="text-sm mb-2">
                              A modern terminal app for Windows that&apos;s much
                              better than the old Command Prompt. It supports
                              multiple tabs and looks great!
                            </p>
                            <p className="text-sm font-semibold mb-1">
                              Why not use Command Prompt?
                            </p>
                            <p className="text-sm">
                              Windows Terminal has better Unicode support,
                              multiple tabs, and a more pleasant developer
                              experience.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Download from the Microsoft Store or visit{" "}
                        <a
                          href="https://aka.ms/terminal"
                          className="text-blue-600 hover:underline"
                        >
                          aka.ms/terminal
                        </a>
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium flex items-center gap-2">
                        2. Install Git for Windows
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-1">
                              Same Git, Windows version
                            </p>
                            <p className="text-sm mb-2">
                              This is the same Git version control system, but
                              packaged specifically for Windows with a nice
                              installer.
                            </p>
                            <p className="text-sm font-semibold mb-1">
                              Pro tip:
                            </p>
                            <p className="text-sm">
                              During installation, select &ldquo;Git from the
                              command line and also from 3rd-party
                              software&rdquo; for best compatibility.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Download from{" "}
                        <a
                          href="https://git-scm.com/download/win"
                          className="text-blue-600 hover:underline"
                        >
                          git-scm.com/download/win
                        </a>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Use default settings during installation
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium flex items-center gap-2">
                        3. Install Node.js
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-1">
                              LTS = Long Term Support
                            </p>
                            <p className="text-sm mb-2">
                              Always choose the LTS version for stability.
                              It&apos;s the version that companies use in
                              production.
                            </p>
                            <p className="text-sm font-semibold mb-1">
                              Installation tip:
                            </p>
                            <p className="text-sm">
                              The installer will automatically add Node.js to
                              your PATH so you can use it from any terminal
                              window.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Download LTS version from{" "}
                        <a
                          href="https://nodejs.org"
                          className="text-blue-600 hover:underline"
                        >
                          nodejs.org
                        </a>
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium flex items-center gap-2">
                        4. Install pnpm
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold mb-1">
                              Same pnpm, everywhere
                            </p>
                            <p className="text-sm mb-2">
                              Once Node.js is installed, you can use npm (which
                              comes with Node) to install pnpm globally.
                            </p>
                            <p className="text-sm font-semibold mb-1">
                              What&apos;s the -g flag?
                            </p>
                            <p className="text-sm">
                              The -g means &ldquo;global&rdquo; - it installs
                              pnpm system-wide so you can use it in any project.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Open Windows Terminal and run:
                      </p>
                      <div className="relative group">
                        <pre className="bg-muted p-3 rounded-lg">
                          <code className="text-sm">npm install -g pnpm</code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() =>
                            copyToClipboard("npm install -g pnpm", 104)
                          }
                        >
                          {copiedIndex === 104 ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg space-y-3">
                      <h4 className="font-medium">5. Verify Installation</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Run these commands in Windows Terminal:
                      </p>
                      <div className="space-y-2">
                        <code className="block bg-muted p-2 rounded text-xs">
                          git --version
                        </code>
                        <code className="block bg-muted p-2 rounded text-xs">
                          node --version
                        </code>
                        <code className="block bg-muted p-2 rounded text-xs">
                          pnpm --version
                        </code>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5" />
                Using Git in Terminal
              </CardTitle>
              <CardDescription>
                Let&apos;s clone the repository and set up the project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Terminal Tips:</strong> Use{" "}
                    <kbd className="px-1 py-0.5 text-xs bg-muted rounded">
                      Tab
                    </kbd>{" "}
                    to autocomplete commands, and{" "}
                    <kbd className="px-1 py-0.5 text-xs bg-muted rounded">
                      ↑
                    </kbd>{" "}
                    to see previous commands
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium">
                      1. Choose a directory for your projects
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      First, navigate to where you want to store your code:
                    </p>
                    <div className="relative group">
                      <pre className="bg-muted p-3 rounded-lg">
                        <code className="text-sm">cd ~/Desktop</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyToClipboard("cd ~/Desktop", 105)}
                      >
                        {copiedIndex === 105 ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      This moves you to your Desktop folder. You can use any
                      location you prefer!
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium">2. Clone the repository</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      This downloads the project code from GitHub:
                    </p>
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
                            "git clone https://github.com/benjaminykim/tutorial.git",
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
                    <p className="text-xs text-muted-foreground">
                      You&apos;ll see Git downloading the files. This creates a
                      new folder called &ldquo;tutorial&rdquo;
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium">3. Enter the project folder</h4>
                    <div className="relative group">
                      <pre className="bg-muted p-3 rounded-lg">
                        <code className="text-sm">cd tutorial</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyToClipboard("cd tutorial", 1)}
                      >
                        {copiedIndex === 1 ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      &ldquo;cd&rdquo; means &ldquo;change directory&rdquo; -
                      you&apos;re now inside the project
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium">
                      4. Install project dependencies
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
                    <p className="text-xs text-muted-foreground">
                      This might take a minute. You&apos;ll see progress bars as
                      packages download
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium">
                      5. Set up environment variables
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
                      6. Start the development server
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
                <Rocket className="h-5 w-5" />
                Using Cursor IDE
              </CardTitle>
              <CardDescription>
                Getting started with AI-powered coding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg space-y-3">
                  <h4 className="font-medium">1. Download Cursor</h4>
                  <p className="text-sm text-muted-foreground">
                    If you haven&apos;t already, download Cursor from{" "}
                    <a
                      href="https://cursor.sh"
                      className="text-blue-600 hover:underline"
                    >
                      cursor.sh
                    </a>
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                  <h4 className="font-medium">2. Open the Project</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    In Cursor, click &ldquo;Open Folder&rdquo; and select the
                    tutorial folder you just cloned
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Alternatively, from terminal in the project folder, run:{" "}
                    <code className="bg-muted px-1.5 py-0.5 rounded">
                      cursor .
                    </code>
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                  <h4 className="font-medium">3. Cursor AI Features</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      •{" "}
                      <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">
                        Cmd/Ctrl + K
                      </kbd>{" "}
                      - Edit code with AI
                    </p>
                    <p>
                      •{" "}
                      <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">
                        Cmd/Ctrl + L
                      </kbd>{" "}
                      - Chat with AI about your code
                    </p>
                    <p>
                      •{" "}
                      <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">
                        Tab
                      </kbd>{" "}
                      - Accept AI suggestions
                    </p>
                    <p>• Select code and ask questions about it</p>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                  <h4 className="font-medium">4. Try These Cursor Commands</h4>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      • &ldquo;Explain this component&rdquo; (select any React
                      component)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      • &ldquo;Add a new button that does X&rdquo;
                    </p>
                    <p className="text-sm text-muted-foreground">
                      • &ldquo;Fix this TypeScript error&rdquo;
                    </p>
                    <p className="text-sm text-muted-foreground">
                      • &ldquo;Write tests for this function&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50 dark:bg-purple-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-purple-600" />
                Try Agent Mode! 🎨
              </CardTitle>
              <CardDescription>
                Let Cursor&apos;s AI transform the homepage with these fun
                examples
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6 border-purple-200">
                <Info className="h-4 w-4 text-purple-600" />
                <AlertDescription>
                  <strong>Agent Mode:</strong> Press{" "}
                  <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">
                    Cmd/Ctrl + I
                  </kbd>{" "}
                  to let AI make multiple edits across files automatically!
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="p-4 border border-purple-200 rounded-lg space-y-2">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">
                    🎮 Interactive Game
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;Turn the homepage into a simple memory card game with
                    emojis&rdquo;
                  </p>
                </div>

                <div className="p-4 border border-purple-200 rounded-lg space-y-2">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">
                    🌈 Animated Background
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;Add a gradient background that shifts colors
                    smoothly&rdquo;
                  </p>
                </div>

                <div className="p-4 border border-purple-200 rounded-lg space-y-2">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">
                    ⏰ Live Clock Widget
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;Create a beautiful analog clock that shows real
                    time&rdquo;
                  </p>
                </div>

                <div className="p-4 border border-purple-200 rounded-lg space-y-2">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">
                    🎨 Drawing Canvas
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;Make a mini drawing app where I can doodle with my
                    mouse&rdquo;
                  </p>
                </div>

                <div className="p-4 border border-purple-200 rounded-lg space-y-2">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">
                    🎵 Music Visualizer
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;Create animated bars that dance to microphone
                    input&rdquo;
                  </p>
                </div>

                <div className="p-4 border border-purple-200 rounded-lg space-y-2">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100">
                    🎯 Your Own Idea!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Dream up something fun and let Cursor build it for you!
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">
                  How to use Agent Mode:
                </p>
                <ol className="mt-2 space-y-1 text-sm text-purple-800 dark:text-purple-200">
                  <li>
                    1. Open{" "}
                    <code className="text-xs bg-purple-200 dark:bg-purple-800 px-1 rounded">
                      apps/web/src/app/page.tsx
                    </code>
                  </li>
                  <li>
                    2. Press{" "}
                    <kbd className="px-1 py-0.5 text-xs bg-purple-200 dark:bg-purple-800 rounded">
                      Cmd/Ctrl + I
                    </kbd>
                  </li>
                  <li>3. Type one of the examples above</li>
                  <li>4. Watch Cursor work its magic! ✨</li>
                </ol>
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

          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertDescription>
              <strong>Pro tip:</strong> Use Cursor&apos;s AI features to
              understand the codebase faster. Try asking it to explain
              components or help you make modifications!
            </AlertDescription>
          </Alert>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Ready for a Challenge?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Take your skills to the next level! Learn how to set up a
                    production-ready database with Supabase and implement secure
                    authentication.
                  </p>
                  <Link href="/advanced">
                    <Button className="group">
                      Start Advanced Guide
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
