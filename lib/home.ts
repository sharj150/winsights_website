import fs from "fs";
import path from "path";

// Set to false to hide the 7-day free trial (trial card, hero/nav/CTA buttons fall back to membership).
export const TRIAL_ENABLED = true;

// beehiiv subscribe link for The Winsights Open Desk. The newsletter section shows once this is set.
export const NEWSLETTER_URL = "https://winsights.beehiiv.com/subscribe?utm_source=website&utm_medium=homepage";

// Instagram Reel links for the "Watch" section (e.g. "https://www.instagram.com/reel/ABC123/").
// Leave empty to show a compact "follow us" band instead of embedded videos.
// Reels section is switched off: put <!--REELS_SECTION--> back in content/home-v2.html (after the founder section) to show it again.
export const REELS: string[] = [];

const read = (file: string) => fs.readFileSync(path.join(process.cwd(), "content", file), "utf8");

export function renderHome(file: string): string {
  const trial = TRIAL_ENABLED ? read("trial-section.html") : "";
  const newsletter = NEWSLETTER_URL
    ? read("newsletter-section.html").replace("__NEWSLETTER_URL__", NEWSLETTER_URL)
    : "";
  let html = read(file)
    .replace("<!--TRIAL_SECTION-->", trial)
    .replace("<!--NEWSLETTER_SECTION-->", newsletter)
    .replace("<!--REELS_SECTION-->", reelsSection());
  if (TRIAL_ENABLED) {
    // Older layout (home-v2): turn the hero's second button into a trial button.
    html = html
      .replace(">See what’s inside</a>", ">Try it free for 7 days</a>")
      .replace(
        '<a href="#inside" style="color: #FFFFFF; text-decoration: none; font-weight: 500; font-size: 18px; padding: 16px 26px',
        '<a href="#trial" style="color: #FFFFFF; text-decoration: none; font-weight: 500; font-size: 18px; padding: 16px 26px'
      );
  } else {
    html = html
      .split('href="#trial"').join('href="#membership"')
      .split("Start your 7-day free trial").join("Become a member")
      .split("Start free trial").join("Join now");
  }
  return html + faqSchema(html);
}

function reelsSection(): string {
  const follow =
    '<div style="display: flex; flex-wrap: wrap; gap: 12px">' +
    '<a href="https://instagram.com/joinwinsights/" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 10px; background: #001470; color: #FFFFFF; text-decoration: none; font-weight: 600; font-size: 17px; padding: 15px 24px; border-radius: 999px"><img src="/images/v2/instagram.svg" alt="" style="width: 18px; height: 18px"> Watch on Instagram</a>' +
    '<a href="https://www.tiktok.com/@joinwinsights" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 10px; color: #001470; text-decoration: none; font-weight: 600; font-size: 17px; padding: 14px 22px; border-radius: 999px; border: 1.5px solid #001470">TikTok</a>' +
    "</div>";
  const head = (extra: string) =>
    '<div style="display: flex; flex-wrap: wrap; gap: 20px 48px; align-items: flex-end; justify-content: space-between">' +
    '<div style="display: flex; flex-direction: column; gap: 14px; max-width: 620px">' +
    '<div style="font-size: 14px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #464C66">Watch</div>' +
    '<h2 style="margin: 0; font-weight: 700; font-size: clamp(32px, 3.6vw, 48px); line-height: 1.04; letter-spacing: -0.015em">The markets, explained in 60 seconds.</h2>' +
    '<p style="margin: 0; font-size: 18px; line-height: 1.55; color: #464C66">Short breakdowns from SHARJ on what’s moving the markets, and what it means for you. New every week on @joinwinsights.</p>' +
    "</div>" + extra + "</div>";
  const open = '<section id="reels" style="background: #FFFFFF; border-top: 1px solid #DCDAD2; border-bottom: 1px solid #DCDAD2"><div style="max-width: 1200px; margin: 0 auto; padding: 88px 24px; display: flex; flex-direction: column; gap: 36px">';
  if (!REELS.length) return open + head(follow) + "</div></section>";
  const btn = (dir: string, label: string, d: string) =>
    `<button type="button" data-carousel-${dir}="reels-track" aria-label="${label}" style="width: 48px; height: 48px; border-radius: 999px; border: 1px solid #DCDAD2; background: #FFFFFF; color: #001470; display: flex; align-items: center; justify-content: center; cursor: pointer"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"></path></svg></button>`;
  const slides = REELS.map(
    (url, i) =>
      `<div class="w2-slide" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${REELS.length}" style="display: flex; justify-content: center"><blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style="background: #FFFFFF; border: 1px solid #DCDAD2; border-radius: 14px; margin: 0; min-width: 280px; max-width: 400px; width: 100%; padding: 0"><a href="${url}" target="_blank" rel="noopener" style="display: block; padding: 24px; color: #001470; font-weight: 600">Watch on Instagram</a></blockquote></div>`
  );
  const controls = '<div style="display: flex; gap: 10px">' + btn("prev", "Previous reels", "M15 5l-7 7 7 7") + btn("next", "Next reels", "M9 5l7 7-7 7") + "</div>";
  return open + head(controls) + '<div id="reels-track" class="w2-track" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Winsights reels">' + slides.join("") + "</div>" + follow + "</div></section>";
}

// FAQPage structured data built from the FAQ answers on the page, so it always matches what visitors see.
function faqSchema(html: string): string {
  const strip = (x: string) => x.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  const items: { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }[] = [];
  const re = /<summary[^>]*>([\s\S]*?)<span class="faq-plus"[\s\S]*?<\/summary>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    items.push({ "@type": "Question", name: strip(m[1]), acceptedAnswer: { "@type": "Answer", text: strip(m[2]) } });
  }
  if (!items.length) return "";
  const json = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items });
  return `<script type="application/ld+json">${json.replace(/</g, "\\u003c")}</script>`;
}
