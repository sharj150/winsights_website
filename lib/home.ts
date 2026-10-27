import fs from "fs";
import path from "path";

// Set to false to hide the 7-day free trial (trial card, hero/nav/CTA buttons fall back to membership).
export const TRIAL_ENABLED = true;

// beehiiv subscribe link for The Winsights Open Desk. The newsletter section shows once this is set.
export const NEWSLETTER_URL = "https://winsights.beehiiv.com/subscribe?utm_source=website&utm_medium=homepage";

const read = (file: string) => fs.readFileSync(path.join(process.cwd(), "content", file), "utf8");

export function renderHome(file: string): string {
  const trial = TRIAL_ENABLED ? read("trial-section.html") : "";
  const newsletter = NEWSLETTER_URL
    ? read("newsletter-section.html").replace("__NEWSLETTER_URL__", NEWSLETTER_URL)
    : "";
  let html = read(file)
    .replace("<!--TRIAL_SECTION-->", trial)
    .replace("<!--NEWSLETTER_SECTION-->", newsletter);
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
  return html;
}
