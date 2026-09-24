import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import LegalContent, { type LegalBlock } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for WINSIGHTS Markets, a trading name of Winsights Group Limited.",
};

const blocks: LegalBlock[] = [
  {
    type: "p",
    text: "Website: https://winsightsmarkets.com · Privacy contact: winsights@winsightsmarkets.com",
  },

  { type: "h2", text: "1. Who's responsible for your data" },
  {
    type: "p",
    text: "Winsights Group Limited, trading as Winsights Markets, is the controller of your personal data. For any privacy question or request, email winsights@winsightsmarkets.com. We collect only what we need to run your membership, and we never sell your personal data.",
  },
  {
    type: "p",
    text: "This policy covers our website, https://winsightsmarkets.com, the member portal, our WhatsApp groups and channels, and any other service we provide.",
  },

  { type: "h2", text: "2. What we collect" },
  {
    type: "ul",
    items: [
      "**Account and contact details:** your name, email address and mobile number (used to add you to WhatsApp groups).",
      "**Payment details:** Stripe processes your payments. We receive your billing name, email, card type, last four digits, expiry and payment history. We never see or store your full card number.",
      "**Community activity:** messages and content you post in our groups, and the WhatsApp display name and profile photo you've chosen.",
      "**Portal usage:** login times, content viewed, IP address, device and browser information. We use this to keep accounts secure and detect login sharing.",
      "**Communications:** messages and emails you send us, and any survey or feedback responses.",
      "**Referrals:** who referred you, or who you've referred.",
      "**Broker referrals:** if you open an account through one of our affiliate links, the broker may share limited information with us, such as an account ID, country, account status and trading volume, so our commission can be calculated. We don't receive your account balance or login details.",
    ],
  },
  {
    type: "p",
    text: "We don't ask for sensitive information such as health data, and we'd ask you not to share it in our groups.",
  },

  { type: "h2", text: "3. Why we use it and our legal basis (UK GDPR)" },
  {
    type: "ul",
    items: [
      "**Set up and run your membership,** give you access, and send service messages such as receipts and renewal reminders: performing our contract with you.",
      "**Take payments and keep financial records:** contract, and our legal obligations (for example, tax records).",
      "**Keep accounts secure,** prevent login sharing and content leaks, and moderate the community: our legitimate interests in protecting the Service and its members.",
      "**Work out which content is useful** and improve the Service: legitimate interests, or your consent for non-essential cookies.",
      "**Send you news and offers about Winsights:** your consent, or for existing members, our legitimate interests in telling you about similar services. You can opt out at any time.",
      "**Track referral credits and broker commission:** contract (referrals) and legitimate interests (broker commission).",
      "**Deal with complaints, disputes and legal claims:** legitimate interests and legal obligations.",
    ],
  },

  { type: "h2", text: "4. Who we share it with" },
  {
    type: "p",
    text: "We share personal data only with service providers who help us run Winsights, under contracts that require them to protect it:",
  },
  {
    type: "ul",
    items: [
      "Stripe, for payments and subscription management;",
      "Vercel, for website and portal hosting;",
      "Bunny.net, for secure video delivery;",
      "a trusted provider, for member logins;",
      "a trusted provider, for sending emails;",
      "WhatsApp (Meta), for our member groups and channels;",
      "our professional advisers, such as accountants and lawyers, and authorities such as HMRC where the law requires it.",
    ],
  },
  {
    type: "p",
    text: "**About WhatsApp:** In WhatsApp groups, other members may be able to see your phone number, display name and profile photo. In announcement-only channels, this is more limited. You can control what's visible in WhatsApp's own privacy settings. WhatsApp's use of your data is governed by its privacy policy, not ours.",
  },

  { type: "h2", text: "5. International transfers" },
  {
    type: "p",
    text: "Some of our providers process data outside the UK, including in the United States and the European Economic Area. Where they do, we rely on UK adequacy regulations (including the UK–US Data Bridge for certified US companies) or the UK's International Data Transfer Agreement or Addendum, so your data stays protected to UK standards.",
  },

  { type: "h2", text: "6. Security" },
  {
    type: "p",
    text: "Member content is protected behind login, video is streamed through signed, time-limited links, and access to personal data is restricted to people who need it. No system is perfectly secure, but if a breach affecting your data occurs, we'll act quickly and tell you and the ICO where the law requires it.",
  },

  { type: "h2", text: "7. How long we keep it" },
  {
    type: "ul",
    items: [
      "**Account data:** while you're a member and for 2 years after, so you can easily rejoin and we can deal with any questions.",
      "**Payment and financial records:** 6 years, as required for tax purposes.",
      "**Portal usage logs:** 12 months.",
      "**Marketing preferences:** until you unsubscribe, after which we keep only a record that you opted out.",
      "**Group messages:** messages in WhatsApp groups are stored on WhatsApp and on other members' devices. We can delete messages you ask us to remove where WhatsApp allows it, but we can't delete copies held by others.",
    ],
  },

  { type: "h2", text: "8. Your rights" },
  {
    type: "p",
    text: "You have the right to access your personal data, correct it, ask us to delete it, restrict or object to how we use it, receive it in a portable format, and withdraw consent at any time. You can always object to marketing, and we'll stop. To use any of these rights, email winsights@winsightsmarkets.com. It's free, and we'll respond within one month.",
  },
  {
    type: "p",
    text: "If you're unhappy with how we've handled your data, please tell us first at winsights@winsightsmarkets.com. You also have the right to complain to the Information Commissioner's Office at https://ico.org.uk/make-a-complaint or on 0303 123 1113.",
  },

  { type: "h2", text: "9. Cookies" },
  {
    type: "p",
    text: "We use essential cookies to keep you logged in and the portal secure; these don't need your consent. We don't use analytics or advertising cookies.",
  },

  { type: "h2", text: "10. Under-18s" },
  {
    type: "p",
    text: "The Service isn't for anyone under 18, and we don't knowingly collect their data. If you think someone under 18 has joined, email winsights@winsightsmarkets.com and we'll remove their data.",
  },

  { type: "h2", text: "11. Changes to this policy" },
  {
    type: "p",
    text: "If we make significant changes to how we use your data, we'll tell members by email before they take effect. The date at the top shows when this policy last changed, and the current version is always available at https://winsightsmarkets.com.",
  },

  {
    type: "note",
    text: "Winsights Markets is a trading name of Winsights Group Limited. https://winsightsmarkets.com | winsights@winsightsmarkets.com",
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="24 September 2026">
      <LegalContent blocks={blocks} />
    </LegalLayout>
  );
}
