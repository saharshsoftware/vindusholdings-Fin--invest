export const site = {
  brandName: "Vindus Holdings  Limited",
  legalName: "Vindus Holdings Limited",
  registeredOffice:
    "46, B.B. Ganguly Street, 1st Floor, Room No. 4, Kolkata, West Bengal, India - 700012",
  gstin: "19AABCV8178N2ZE",
  rbiRegistrationNumber: "B.05.06969 dated 24 Apr 1998",
  rbiRegistration:
    "RBI Registration No. B.05.06969 dated 24 Apr 1998, issued under Section 45-IA of the RBI Act, 1934",
  grievanceEmail: "grievance@vindusholdingslimited.com",
  supportEmail: "support@vindusholdingslimited.com",
  supportPhone: "+91 9958940148",
  rbiCmsUrl: "https://cms.rbi.org.in",
  sachetUrl: "https://sachet.rbi.org.in",
  gro: {
    name: "Sumit Rajan",
    designation: "Grievance Redressal Officer",
    email: "grievance@vindusholdingslimited.com",
    phone: "7665466546",
  },
  lsps: [
    {
      name: "ZapCash",
      legalEntity: "Omnistack Innovation Pvt Ltd.",
      website: "www.zapcash.in",
      websiteUrl: "https://www.zapcash.in",
      tag: "Digital Lending Partner",
      description:
        "Digital lending platform providing quick personal loans with instant approval.",
      logo: "/zapcash-logo.png",
      logoWidth: 172,
      logoHeight: 40,
    },
  ],
} as const;

export const lspNames = site.lsps.map((partner) => partner.name).join(" and ");

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-lsp", label: "Our LSPs" },
  { href: "/contact", label: "Contact" },
] as const;

export const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/our-lsp", label: "Our LSPs" },
  { href: "/grievance", label: "Grievance Redressal" },
  { href: "/faq", label: "FAQ" },
] as const;

export const legalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms & Conditions" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/legal/refund-cancellation", label: "Refund & Cancellation" },
] as const;
