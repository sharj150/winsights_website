import Link from "next/link";
import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-dark to-primary-blue text-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-light-grey hover:text-white transition-colors text-sm mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-neutral-light-grey text-sm mb-12">Last updated: {lastUpdated}</p>

        <div className="text-neutral-light-grey leading-relaxed [&_p]:mb-4 [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-white [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_a]:text-blue-400 [&_a]:break-words [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_strong]:text-white [&_strong]:font-semibold">
          {children}
        </div>
      </div>
    </main>
  );
}
