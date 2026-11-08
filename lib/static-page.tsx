import fs from "fs";
import path from "path";

const read = (file: string) => fs.readFileSync(path.join(process.cwd(), "content", file), "utf8");

// Renders a static content page (HTML in content/) with its JSON-LD structured data.
export function StaticPage({ html, ld, className }: { html: string; ld?: string; className?: string }) {
  const items = ld ? (JSON.parse(read(ld)) as object[]) : [];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
      <main className={className} dangerouslySetInnerHTML={{ __html: read(html) }} />
    </>
  );
}
