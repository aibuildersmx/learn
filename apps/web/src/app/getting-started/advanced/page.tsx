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
  GitBranch,
  Info,
  HelpCircle,
  Terminal,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

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
              Configure your database and authentication for your app (optional)
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5" />
                Setting Up Database and Authentication
              </CardTitle>
              <CardDescription>
                Configure Supabase and Google login for your app
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800 dark:text-blue-200">
                    This setup enables user authentication with Google One-Tap
                    sign-in and provides a PostgreSQL database for your app.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      Step 1: Create a Supabase Project
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="font-semibold mb-1">
                            What is Supabase?
                          </p>
                          <p className="text-sm mb-2">
                            Supabase is an open-source backend platform offering
                            a hosted Postgres database, authentication, and
                            APIs.
                          </p>
                          <p className="text-sm font-semibold mb-1">
                            Why use it?
                          </p>
                          <p className="text-sm">
                            It provides everything you need for a production
                            app: database, auth, real-time subscriptions, and
                            storage - all in one place!
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        1. Go to{" "}
                        <a
                          href="https://app.supabase.com"
                          className="text-blue-600 hover:underline"
                        >
                          Supabase Dashboard
                        </a>
                      </li>
                      <li>
                        2. Create a new project (choose a name and password)
                      </li>
                      <li>
                        3. Navigate to{" "}
                        <strong>Project Settings → Data API</strong> and copy
                        the <strong>Project URL</strong>
                      </li>
                      <li>
                        4. Navigate to <strong>API Keys</strong> and copy these
                        values:
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>• Anon public key</li>
                          <li>• Service role key</li>
                        </ul>
                      </li>
                    </ol>
                    <div className="mt-3">
                      <p className="text-sm font-medium mb-2">
                        Add these values to your{" "}
                        <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                          /apps/web/.env.local
                        </code>{" "}
                        file:
                      </p>
                      <div className="relative group">
                        <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
                          <code className="text-sm">{`NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key`}</code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() =>
                            copyToClipboard(
                              `NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key`,
                              200
                            )
                          }
                        >
                          {copiedIndex === 200 ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      Step 2: Set Up Google Cloud Project
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="font-semibold mb-1">OAuth Client ID</p>
                          <p className="text-sm mb-2">
                            This allows your app to use Google&apos;s
                            authentication service securely.
                          </p>
                          <p className="text-sm font-semibold mb-1">
                            Important:
                          </p>
                          <p className="text-sm">
                            Keep your Client Secret private - never commit it to
                            version control!
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        1. Visit{" "}
                        <a
                          href="https://console.cloud.google.com"
                          className="text-blue-600 hover:underline"
                        >
                          Google Cloud Console
                        </a>
                      </li>
                      <li>2. Create a new project (or select existing)</li>
                      <li>
                        3. Go to <strong>APIs & Services → Credentials</strong>
                      </li>
                      <li>
                        4. Click{" "}
                        <strong>Create Credentials → OAuth client ID</strong>
                      </li>
                      <li>
                        5. Choose <strong>Web application</strong>
                      </li>
                      <li>
                        6. Configure authorized origins:
                        <ul className="ml-4 mt-1">
                          <li>
                            • Add{" "}
                            <code className="bg-muted px-1 py-0.5 rounded text-xs">
                              http://localhost
                            </code>{" "}
                            and{" "}
                            <code className="bg-muted px-1 py-0.5 rounded text-xs">
                              http://localhost:3000
                            </code>{" "}
                            as Authorized JavaScript Origins
                          </li>
                        </ul>
                      </li>
                      <li>
                        7. Copy the <strong>Client ID</strong>
                      </li>
                    </ol>
                    <div className="mt-3">
                      <p className="text-sm font-medium mb-2">
                        Add Client ID to{" "}
                        <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                          .env.local
                        </code>
                        :
                      </p>
                      <div className="relative group">
                        <pre className="bg-muted p-3 rounded-lg">
                          <code className="text-sm">
                            NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-client-id
                          </code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() =>
                            copyToClipboard(
                              "NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-client-id",
                              201
                            )
                          }
                        >
                          {copiedIndex === 201 ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      Step 3: Enable Google Auth in Supabase
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="font-semibold mb-1">Social Sign-in</p>
                          <p className="text-sm mb-2">
                            This connects Google&apos;s authentication to your
                            Supabase project.
                          </p>
                          <p className="text-sm font-semibold mb-1">
                            Benefits:
                          </p>
                          <p className="text-sm">
                            Users can sign in with their existing Google account
                            - no need to create new passwords!
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        1. In your Supabase project, go to{" "}
                        <strong>Authentication → Sign In / Providers</strong>
                      </li>
                      <li>
                        2. Select <strong>Google</strong> from the list
                      </li>
                      <li>
                        3. Paste your Google <strong>Client ID</strong>
                      </li>
                      <li>
                        4. Click <strong>Enable</strong> to activate Google
                        sign-in
                      </li>
                      <li>5. Save your changes</li>
                    </ol>
                    <p className="text-xs text-muted-foreground mt-2">
                      ✅ Users can now sign in with Google on your site!
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      Step 4: Restart Development Server
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Restart to load the new environment variables:
                    </p>
                    <div className="relative group">
                      <pre className="bg-muted p-3 rounded-lg">
                        <code className="text-sm">pnpm dev</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => copyToClipboard("pnpm dev", 202)}
                      >
                        {copiedIndex === 202 ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      🎉 Google One-Tap authentication should now work!
                    </p>
                  </div>
                </div>

                <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800 dark:text-green-200">
                    <strong>Setup Complete!</strong> Your app now has a
                    PostgreSQL database and Google authentication. Try testing
                    out the login page at{" "}
                    <a
                      href="http://localhost:3000/login"
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://localhost:3000/login
                    </a>
                    .
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Advanced Cursor MCP Configuration
              </CardTitle>
              <CardDescription>
                Configure Model Context Protocol for enhanced Supabase
                integration in Cursor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
                  <Info className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-800 dark:text-amber-200">
                    <strong>What is MCP?</strong> Model Context Protocol enables
                    AI assistants in Cursor to directly interact with your
                    Supabase database - running queries, creating migrations,
                    and managing your database schema without manual
                    copy-pasting.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      Step 1: Get Your Supabase Credentials
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="font-semibold mb-1">
                            Why these credentials?
                          </p>
                          <p className="text-sm mb-2">
                            The Access Token authenticates MCP with Supabase,
                            while the Project ID identifies which database to
                            connect to.
                          </p>
                          <p className="text-sm font-semibold mb-1">
                            Security Note:
                          </p>
                          <p className="text-sm">
                            These credentials stay local on your machine and are
                            never shared externally.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </h4>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        1. Go to{" "}
                        <a
                          href="https://app.supabase.com/account/tokens"
                          className="text-blue-600 hover:underline"
                        >
                          Supabase Account Tokens
                        </a>
                      </li>
                      <li>
                        2. Click <strong>Generate new token</strong>
                      </li>
                      <li>
                        3. Name it something like &quot;Cursor MCP&quot; and
                        click <strong>Generate token</strong>
                      </li>
                      <li>
                        4. Copy the generated token (you won&apos;t see it
                        again!)
                      </li>
                      <li className="mt-3">
                        5. Get your Project ID from{" "}
                        <a
                          href="https://app.supabase.com/projects"
                          className="text-blue-600 hover:underline"
                        >
                          Supabase Dashboard
                        </a>
                        :
                        <ul className="ml-4 mt-1">
                          <li>• Click on your project</li>
                          <li>
                            • Go to <strong>Settings → General</strong>
                          </li>
                          <li>
                            • Find the <strong>Reference ID</strong> (looks
                            like: abcdefghijklmnop)
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      Step 2: Configure MCP in Cursor
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Edit the file at{" "}
                      <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                        .cursor/example.mcp.json
                      </code>{" "}
                      in your project (rename it to mcp.json):
                    </p>
                    <div className="relative group">
                      <pre className="bg-muted p-3 rounded-lg overflow-x-auto">
                        <code className="text-sm">{`{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server@latest",
        "--project-ref=your-project-id-here"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "your-access-token-here",
      }
    }
  }
}`}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() =>
                          copyToClipboard(
                            `{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "-y",
        "@supabase/mcp-server-supabase@latest",
        "--project-ref=<project-id>"
      ],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "<supabase-access-token>"
      }
    }
  }
}`,
                            300
                          )
                        }
                      >
                        {copiedIndex === 300 ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Replace:</p>
                      <ul className="ml-4 space-y-1">
                        <li>
                          •{" "}
                          <code className="bg-muted px-1 py-0.5 rounded text-xs">
                            your-access-token-here
                          </code>{" "}
                          with your Supabase access token
                        </li>
                        <li>
                          •{" "}
                          <code className="bg-muted px-1 py-0.5 rounded text-xs">
                            your-project-id-here
                          </code>{" "}
                          with your project&apos;s Reference ID
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      Step 3: Restart Cursor
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      After saving the{" "}
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        mcp.json
                      </code>{" "}
                      file, restart Cursor to activate MCP.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      💡 You can verify it&apos;s working by asking Cursor to
                      &quot;list my Supabase tables using mcp&quot; or
                      &quot;show recent migrations&quot;
                    </p>
                  </div>
                </div>

                <Alert className="border-purple-200 bg-purple-50 dark:bg-purple-950/20">
                  <CheckCircle2 className="h-4 w-4 text-purple-600" />
                  <AlertDescription className="text-purple-800 dark:text-purple-200">
                    <strong>What can you do with MCP?</strong>
                    <ul className="mt-2 ml-4 space-y-1 text-sm">
                      <li>• Execute SQL queries directly from Cursor</li>
                      <li>• Create and apply database migrations</li>
                      <li>• Generate TypeScript types from your schema</li>
                      <li>• Deploy Edge Functions</li>
                      <li>• View logs and debug issues</li>
                      <li>• Get security advisories for your database</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Step 6: Use MCP to Set Up Database */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Finish Database Setup: Apply Database Migrations with MCP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-6">
                  <h4 className="mb-4 font-semibold text-indigo-900 dark:text-indigo-100">
                    Test Your MCP Setup with Agent Mode
                  </h4>
                  <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                    Now that MCP is configured, let&apos;s use it to set up your
                    database. Try this prompt in Cursor&apos;s Agent Mode
                    (Cmd+Shift+I):
                  </p>

                  <div className="rounded-lg bg-gray-900 p-4">
                    <code className="text-sm text-green-400">
                      &quot;Run the MCP tooling needed to execute the SQL in our
                      @migrations/ folder to set up our user table and payments
                      table, including row level security and function
                      triggers&quot;
                    </code>
                  </div>

                  <div className="mt-4 space-y-3">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      The agent will:
                    </p>
                    <ul className="ml-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">1.</span>
                        <span>
                          Read the migration files in{" "}
                          <code className="rounded bg-gray-100 px-1 py-0.5 text-xs dark:bg-gray-800">
                            apps/supabase/supabase/migrations/
                          </code>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">2.</span>
                        <span>
                          Apply the payments table migration with indexes and
                          RLS policies
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">3.</span>
                        <span>
                          Apply the users table migration with auth trigger
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">4.</span>
                        <span>
                          Set up automatic timestamps and user profile sync
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">5.</span>
                        <span>
                          Generate TypeScript types from your new schema
                        </span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      Once this is done, you can check in your supabase browser
                      in the Table Editor and verify that the payments and users
                      tables were created.
                    </p>
                  </div>
                </div>

                <Alert>
                  <Sparkles className="h-4 w-4 text-indigo-600" />
                  <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                    <strong>Pro Tip:</strong> You can also ask the agent to:
                    <ul className="mt-2 ml-4 space-y-1 text-sm">
                      <li>
                        • &quot;Check security advisories for my database&quot;
                      </li>
                      <li>• &quot;Show me the current database schema&quot;</li>
                      <li>
                        • &quot;Create a new migration for [feature]&quot;
                      </li>
                      <li>• &quot;Deploy an Edge Function for [task]&quot;</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <div className="rounded-lg border border-purple-100 bg-purple-50/50 p-4 dark:bg-purple-950/20">
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    <strong>What&apos;s happening behind the scenes?</strong>{" "}
                    The MCP server is using the{" "}
                    <code className="rounded bg-purple-100 px-1 py-0.5 text-xs dark:bg-purple-900">
                      mcp_supabase_apply_migration
                    </code>{" "}
                    tool to execute your SQL directly on your Supabase project,
                    creating tables with proper security and triggers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}
