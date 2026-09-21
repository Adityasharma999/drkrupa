import { Baloo_2, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE, SEO_KEYWORDS } from "@/lib/site";

const display = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://drkrupaschilddentalclinic.example.com"),
  title: {
    default: "Dr. Krupa's Child Dental Clinic | Pediatric Dentist in Gandhidham",
    template: "%s | Dr. Krupa's Child Dental Clinic",
  },
  description:
    "Dr. Krupa's Child Dental Clinic in Gandhidham provides child-friendly pediatric dental care with a gentle and comfortable approach for healthy, happy smiles.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE.name }],
  category: "health",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "Dr. Krupa's Child Dental Clinic | Pediatric Dentist in Gandhidham",
    description:
      "Child-friendly pediatric dental care in Gandhidham with a gentle, comfortable and painless approach for healthy, happy smiles.",
    images: [
      {
        url: "/images/hero-care.png",
        width: 1200,
        height: 630,
        alt: "Pediatric dentist caring for a smiling child at Dr. Krupa's Child Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Krupa's Child Dental Clinic | Pediatric Dentist in Gandhidham",
    description:
      "Child-friendly pediatric dental care in Gandhidham with a gentle, comfortable approach.",
    images: ["/images/hero-care.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// NOTE: update metadataBase in production to the clinic's real domain.

export const viewport = {
  themeColor: "#FBF8F3",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: SITE.name,
  description:
    "Child-friendly pediatric dental clinic in Gandhidham offering gentle and painless dentistry for children.",
  image: "/images/logo.png",
  telephone: "+91 94262 33043",
  email: SITE.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "WARD 12/C, Aman Complex, 5, 1st Floor, Plot No. 510-511, Kutch Kala Road, above Nityanand Pooja Bhandar, opposite Kariyavar Dresses",
    addressLocality: "Gandhidham",
    addressRegion: "Gujarat",
    postalCode: "370201",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Gandhidham",
  },
  sameAs: [SITE.instagram, SITE.facebook],
  medicalSpecialty: "https://schema.org/Pediatric",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
