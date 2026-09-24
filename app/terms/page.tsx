import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import LegalContent, { type LegalBlock } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service and Subscription Terms for WINSIGHTS Markets, a trading name of Winsights Group Limited.",
};

const blocks: LegalBlock[] = [
  {
    type: "p",
    text: "Website: https://winsightsmarkets.com · Support: winsights@winsightsmarkets.com",
  },

  { type: "h2", text: "The Short Version" },
  {
    type: "p",
    text: "This is a plain-English summary. It doesn't replace the full terms below, which are what legally apply.",
  },
  {
    type: "ul",
    items: [
      "**Education, not advice:** We publish market education and general commentary. We're not authorised by the FCA and nothing here is a personal recommendation. Your trading decisions, and their results, are yours.",
      "**Cancel whenever you like:** Cancel in a couple of clicks from your account or by emailing us. You keep access until the end of the period you've paid for.",
      "**No surprise renewals:** Annual members get an email before every renewal with the price and how to cancel. Price changes come with at least 30 days' notice.",
      "**14 days to change your mind:** Cancel within 14 days of joining and we refund what you paid, less a fair amount for the days you've used.",
      "**Your login is for you:** Membership is for one person. Sharing logins or forwarding paid content outside the group ends your membership.",
      "**We're upfront about money:** Some broker links earn us commission. We tell you which, and we never sell your data.",
    ],
  },

  { type: "h2", text: "Part A: Terms of Service" },

  { type: "h3", text: "A1. Who we are" },
  {
    type: "p",
    text: 'Winsights Markets is a trading name of Winsights Group Limited ("Winsights", "we", "us"). You can contact us at winsights@winsightsmarkets.com.',
  },
  {
    type: "p",
    text: 'These terms apply to our website, https://winsightsmarkets.com, the member portal, our WhatsApp groups and channels, and any other content or service we provide (together, "the Service"). By creating an account or joining, you agree to them. Part B applies if you pay for a membership. Our Privacy Policy explains how we handle your personal data.',
  },

  { type: "h3", text: "A2. Eligibility" },
  {
    type: "p",
    text: "You must be 18 or over to use the Service. It's designed for people in the UK. If you access it from elsewhere, you're responsible for making sure that's lawful where you live.",
  },

  { type: "h3", text: "A3. What Winsights is, and what it isn't" },
  {
    type: "p",
    text: "Winsights provides financial education, market research and general commentary on markets including equities, indices, foreign exchange, commodities and cryptoassets.",
  },
  {
    type: "p",
    text: "Winsights is not authorised or regulated by the Financial Conduct Authority. We don't give investment, financial, tax or legal advice, we don't make personal recommendations, and we don't manage money or arrange trades for anyone. Our content is general and published to members as a whole; it doesn't take account of your objectives, finances, knowledge or experience.",
  },
  {
    type: "p",
    text: "Any trade ideas, levels, worked examples, model portfolios or watchlists are for education and illustration. They're not a suggestion that you, specifically, should buy or sell anything. Before making any financial decision you should do your own research and, where appropriate, speak to an FCA-authorised adviser.",
  },
  {
    type: "p",
    text: "We may hold, or have held, positions in instruments we discuss. Where a personal position is directly relevant to a piece of content, we'll say so. Any figures we publish about past results will explain how they were calculated. Past performance is not a reliable indicator of future results.",
  },
  {
    type: "note",
    text: "**RISK WARNING:** Investing and trading put your capital at risk and you may get back less than you put in. Leveraged products such as CFDs and spread bets are complex and carry a high risk of losing money rapidly. Cryptoassets are high-risk and largely unregulated in the UK; you are unlikely to be protected if something goes wrong and should be prepared to lose all the money you invest.",
  },

  { type: "h3", text: "A4. Broker and affiliate links" },
  {
    type: "p",
    text: "Some links we share are affiliate or introducing-broker links, currently including IC Markets and BloFin. If you open an account through one of these links, we may receive commission or rebates, which can be based on how much you trade. That means we can earn more when members trade more, and we want you to know that.",
  },
  {
    type: "p",
    text: "Using these links is optional and your membership doesn't depend on it. A link isn't a recommendation that a provider or product is suitable for you. Check a provider's regulatory status on the FCA Register (https://register.fca.org.uk) before opening an account; some providers are not authorised in the UK, which means UK protections such as the Financial Ombudsman Service and FSCS won't apply. Your relationship with any broker is directly between you and them, on their terms.",
  },

  { type: "h3", text: "A5. Your account" },
  {
    type: "p",
    text: "Give us accurate details and keep them up to date. Keep your login private. Each membership is for one named person: you may not share your login, let someone else use your account, or add other people to member groups. You're responsible for activity under your account, and you should tell us straight away at winsights@winsightsmarkets.com if you think someone else has accessed it.",
  },

  { type: "h3", text: "A6. Community rules" },
  {
    type: "p",
    text: "Our groups work because they're focused and respectful. When using the Service, you agree not to:",
  },
  {
    type: "ul",
    items: [
      "harass, threaten, abuse or discriminate against anyone;",
      "advertise, promote other groups, services or referral links, or privately solicit members;",
      'promote schemes to manipulate prices ("pump and dump"), or post misleading information about any asset;',
      "present yourself as giving personal financial advice to other members, or offer to manage anyone's money;",
      "post anything unlawful, or anything you don't have the right to share;",
      "scrape, record, bulk-download or otherwise copy the Service by automated means.",
    ],
  },
  {
    type: "p",
    text: "We may remove content, and warn, mute, suspend or remove anyone who breaks these rules.",
  },

  { type: "h3", text: "A7. Our content" },
  {
    type: "p",
    text: "All content we create, including reports, videos, guides, messages, charts and the portal itself, belongs to us or our licensors. While you're a member, we give you a personal, non-transferable licence to view and use it for your own non-commercial learning.",
  },
  {
    type: "p",
    text: "You may not copy, forward, screenshot for sharing, resell, republish, or distribute our paid content outside the Service, or upload it to other platforms or datasets, without our written permission. Short quotes with clear credit to Winsights Markets are fine. We may use technical measures to identify the source of leaked content.",
  },
  {
    type: "p",
    text: "If you post content in our groups, you keep ownership of it, and you give us permission to display it within the Service.",
  },

  { type: "h3", text: "A8. Third-party platforms and availability" },
  {
    type: "p",
    text: "Parts of the Service run on third-party platforms such as WhatsApp, which have their own terms and privacy policies. We don't control those platforms and can't guarantee they'll always be available.",
  },
  {
    type: "p",
    text: "We aim to keep the Service running smoothly but can't promise it will be uninterrupted or error-free. We may improve or change how content is delivered, as long as the overall membership stays materially the same (see B9). Market content reflects conditions at the time it's published and may become out of date.",
  },

  { type: "h3", text: "A9. Our liability to you" },
  {
    type: "p",
    text: "Nothing in these terms limits or excludes our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for anything else that can't be limited by law. Nothing here affects your statutory rights as a consumer, including your right to receive digital content and services that are as described and provided with reasonable care and skill.",
  },
  { type: "p", text: "Subject to that:" },
  {
    type: "ul",
    items: [
      "we're not responsible for any investment, trading or financial decision you make, or any loss resulting from it, because our content is general education and not personal advice;",
      "we're not responsible for losses that weren't reasonably foreseeable when you joined, or for losses caused by events outside our reasonable control;",
      "the Service is for private, personal use, so we're not liable for business losses such as lost profits or business interruption;",
      "our total liability to you is limited to the amount you paid us in the 12 months before the event giving rise to the claim.",
    ],
  },

  { type: "h3", text: "A10. Suspending or ending access" },
  {
    type: "p",
    text: "We may suspend or end your access if you seriously or repeatedly break these terms, for example by sharing your login or distributing paid content. Where we end your membership for a serious breach, we won't refund the current period. If we end your membership for any other reason, we'll give you reasonable notice where we can and refund any period you've paid for but won't receive.",
  },

  { type: "h3", text: "A11. Changes to these terms" },
  {
    type: "p",
    text: "We may update these terms to reflect changes to the Service or the law. If a change materially affects paying members, we'll tell you at least 30 days before it applies, and you can cancel before then if you don't want to continue. The date at the top shows when these terms last changed. The current version is always available at https://winsightsmarkets.com.",
  },

  { type: "h3", text: "A12. Complaints" },
  {
    type: "p",
    text: "If something's gone wrong, email winsights@winsightsmarkets.com. We'll acknowledge your complaint within 5 working days and aim to resolve it within 14 days.",
  },

  { type: "h3", text: "A13. Law and courts" },
  {
    type: "p",
    text: "These terms are governed by the law of England and Wales. If you live in Scotland or Northern Ireland, you can also bring proceedings in your local courts. If any part of these terms is found to be unenforceable, the rest still applies.",
  },

  { type: "h2", text: "Part B: Subscription Terms" },

  { type: "h3", text: "B1. Plans and prices" },
  {
    type: "ul",
    items: [
      "**Monthly:** £50, billed every month, renews monthly until cancelled.",
      "**Quarterly:** £120, billed every 3 months, renews quarterly until cancelled.",
      "**Annual:** £450, billed once a year, renews yearly until cancelled.",
    ],
  },
  {
    type: "p",
    text: "The price you'll pay and how often is shown before you confirm. We are not currently VAT registered, so no VAT is charged.",
  },

  { type: "h3", text: "B2. Payment" },
  {
    type: "p",
    text: "Payments are processed securely by Stripe. When you subscribe, you authorise us to take the first payment straight away and each renewal payment on your renewal date, using the payment method you've saved, until you cancel.",
  },

  { type: "h3", text: "B3. Renewals and reminders" },
  {
    type: "p",
    text: "Your membership renews automatically at the end of each billing period so you don't lose access. We won't take a renewal payment before the new period begins.",
  },
  {
    type: "ul",
    items: [
      "**Annual plans:** we'll email you at least 14 days before each renewal with the date, the amount, and how to cancel.",
      "**Monthly and quarterly plans:** we'll send you a reminder at least once every six months with your price and how to cancel.",
    ],
  },

  { type: "h3", text: "B4. Cancelling" },
  {
    type: "p",
    text: "You can cancel at any time, and cancelling is as easy as joining:",
  },
  {
    type: "ul",
    items: [
      'select "Manage subscription" in your member portal at https://winsightsmarkets.com, or',
      "email winsights@winsightsmarkets.com saying you want to cancel.",
    ],
  },
  {
    type: "p",
    text: "We'll confirm your cancellation by email. It takes effect at the end of your current billing period, and you keep full access until then. Outside the cooling-off period (B5), we don't refund part-used periods, except where these terms or the law say otherwise.",
  },

  { type: "h3", text: "B5. Your 14-day cooling-off right" },
  {
    type: "p",
    text: "When you first subscribe, you have 14 days to change your mind. Because membership gives you immediate access, at checkout you ask us to start your membership straight away during this period.",
  },
  {
    type: "p",
    text: "If you cancel within 14 days of first subscribing, we'll refund what you paid, minus a proportionate amount for the days you had access. For example, if you cancel a £50 monthly membership after 5 days of a 30-day month, you'll get back about £41.67. Refunds go to your original payment method within 14 days of your cancellation.",
  },
  {
    type: "p",
    text: "To cancel under this right, use either method in B4 or send any clear statement that you wish to cancel to winsights@winsightsmarkets.com. Where the law gives you a further cooling-off period when a plan renews, you'll have that too.",
  },

  { type: "h3", text: "B6. Price changes" },
  {
    type: "p",
    text: "We may change our prices. We'll tell you at least 30 days before a new price applies to your membership, and it will only apply from your next renewal after that notice. We won't change the price of a plan part-way through a billing period you've already paid for. If you don't want to continue at the new price, cancel before it takes effect.",
  },

  { type: "h3", text: "B7. Failed payments" },
  {
    type: "p",
    text: "If a renewal payment fails, we'll let you know and retry over 7 days. If it still can't be taken, your access will be paused and then ended. You can rejoin at any time.",
  },

  { type: "h3", text: "B8. Referrals, discounts and complimentary access" },
  {
    type: "p",
    text: "**Referrals:** Existing members can request a personal referral code from us. A new member who uses it gets £25 off their first payment, on any plan. For each new member who joins with your code and stays past their 14-day cooling-off period, you get one free month, applied as a credit to your next renewal (or, on a quarterly or annual plan, as a one-month extension).",
  },
  {
    type: "ul",
    items: [
      "Codes are personal, can't be exchanged for cash, and can't be combined with other offers.",
      "You can't refer yourself, a second account of your own, or someone who is already a member or was one in the last 6 months.",
      "We can change or end the referral scheme with notice. Credits you've already earned will still be honoured.",
    ],
  },
  {
    type: "p",
    text: "**Other offers:** Any discount or promotion will state its terms, including what you'll pay once it ends.",
  },
  {
    type: "p",
    text: "**Complimentary access:** Free access given at our discretion (for example, to friends, family or guests) isn't a paid subscription and can be ended with 14 days' notice.",
  },

  { type: "h3", text: "B9. What's included" },
  {
    type: "p",
    text: "Membership currently includes access to our member WhatsApp groups and channels (live news feed, FX and commodities, crypto, stocks and ISA, and general discussion) and the member portal's library of research, guides, videos and live sessions.",
  },
  {
    type: "p",
    text: "We'll keep improving what's included. If we make a change that materially reduces what you receive, we'll tell you in advance, and you can cancel and receive a refund for any unused period you've paid for.",
  },

  {
    type: "note",
    text: "Winsights Markets is a trading name of Winsights Group Limited. Not authorised or regulated by the Financial Conduct Authority. Content is for educational purposes only and is not financial advice. Capital at risk. https://winsightsmarkets.com | winsights@winsightsmarkets.com",
  },
];

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service & Subscription Terms" lastUpdated="24 September 2026">
      <LegalContent blocks={blocks} />
    </LegalLayout>
  );
}
