import { Fragment, type ReactNode } from "react";

export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

// Turn a plain string into nodes, auto-linking URLs and email addresses.
function linkify(text: string): ReactNode[] {
  const parts = text.split(
    /(https?:\/\/[^\s]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g
  );
  return parts.map((part, i) => {
    const url = part.match(/^(https?:\/\/[^\s]*?)([.,);]*)$/);
    if (url) {
      return (
        <Fragment key={i}>
          <a href={url[1]} target="_blank" rel="noopener noreferrer">
            {url[1]}
          </a>
          {url[2]}
        </Fragment>
      );
    }
    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`}>
          {part}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

// Support **bold** spans, then auto-link the rest.
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((seg, i) => {
    if (seg.startsWith("**") && seg.endsWith("**")) {
      return <strong key={`b${i}`}>{seg.slice(2, -2)}</strong>;
    }
    return <Fragment key={`t${i}`}>{linkify(seg)}</Fragment>;
  });
}

export default function LegalContent({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <h2 key={i}>{inline(block.text)}</h2>;
          case "h3":
            return <h3 key={i}>{inline(block.text)}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{inline(item)}</li>
                ))}
              </ul>
            );
          case "note":
            return (
              <p
                key={i}
                className="rounded-lg border border-white/20 bg-white/5 p-4 !mb-6 text-sm"
              >
                {inline(block.text)}
              </p>
            );
          default:
            return <p key={i}>{inline(block.text)}</p>;
        }
      })}
    </>
  );
}
