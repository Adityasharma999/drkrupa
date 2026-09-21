/** Site-wide content constants for Dr. Krupa's Child Dental Clinic */
export const SITE = {
  name: "Dr. Krupa's Child Dental Clinic",
  nameShort: "Dr. Krupa's",
  tagline: "Pediatric / Child Dental Clinic",
  phoneDisplay: "094262 33043",
  phoneTel: "+919426233043",
  email: "krupa07tewani@gmail.com",
  instagram: "https://www.instagram.com/drkrupatewani/",
  instagramHandle: "@drkrupatewani",
  facebook: "https://www.facebook.com/drkrupaschilddentalclinic/",
  facebookName: "Dr. Krupa's Child Dental Clinic",
  city: "Gandhidham",
  state: "Gujarat",
  addressLines: [
    "WARD 12/C, Aman Complex, 5, 1st Floor,",
    "Plot No. 510-511, Kutch Kala Road,",
    "Above Nityanand Pooja Bhandar,",
    "Opposite Kariyavar Dresses,",
    "Gandhidham, Gujarat 370201",
  ],
  addressFull:
    "WARD 12/C, Aman Complex, 5, 1st Floor, Plot No. 510-511, Kutch Kala Road, above Nityanand Pooja Bhandar, opposite Kariyavar Dresses, Gandhidham, Gujarat 370201",
  mapQuery:
    "Dr. Krupa's Child Dental Clinic, Aman Complex, Kutch Kala Road, Gandhidham, Gujarat 370201",
  reviewCount: 90,
};

SITE.mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  SITE.mapQuery
)}&z=16&output=embed`;

SITE.mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  SITE.addressFull
)}`;

SITE.reviewsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Dr. Krupa's Child Dental Clinic Gandhidham"
)}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Dental Tips", href: "#dental-tips" },
  { label: "Contact", href: "#contact" },
];

export const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export const TRUST_POINTS = [
  "Child-Friendly Approach",
  "Gentle & Comfortable Care",
  "Regular Follow-Ups",
];

export const SERVICES = [
  {
    icon: "toothCheck",
    title: "Child Dental Check-Ups",
    desc: "Routine dental examinations to help maintain healthy teeth and gums.",
  },
  {
    icon: "shield",
    title: "Preventive Dental Care",
    desc: "Helping children develop healthy oral hygiene habits early.",
  },
  {
    icon: "toothPlus",
    title: "Cavity Treatment",
    desc: "Gentle treatment for cavities and tooth decay in children.",
  },
  {
    icon: "feather",
    title: "Painless Dentistry",
    desc: "A comfortable approach designed to reduce fear and anxiety.",
  },
  {
    icon: "toothSparkle",
    title: "Dental Cleaning",
    desc: "Professional cleaning to support healthy teeth and gums.",
  },
  {
    icon: "chatHeart",
    title: "Child-Friendly Dental Guidance",
    desc: "Helping parents understand their child's dental health and care routine.",
  },
];

export const WHY_FEATURES = [
  {
    num: "01",
    title: "Child-Centered Care",
    desc: "Every visit is planned around your child's comfort, pace and understanding.",
  },
  {
    num: "02",
    title: "Comfortable Environment",
    desc: "A calm, welcoming clinic space where children feel relaxed and safe.",
  },
  {
    num: "03",
    title: "Gentle Approach",
    desc: "Patient, reassuring treatment that helps little ones stay at ease.",
  },
  {
    num: "04",
    title: "Parent Guidance",
    desc: "Clear, practical advice so parents can support healthy habits at home.",
  },
];

export const EXPERIENCE_STEPS = [
  {
    num: "01",
    title: "Welcome",
    desc: "A friendly introduction to make your child comfortable.",
  },
  {
    num: "02",
    title: "Understand",
    desc: "We understand the child's dental needs and concerns.",
  },
  {
    num: "03",
    title: "Gentle Care",
    desc: "Treatment is approached with patience and care.",
  },
  {
    num: "04",
    title: "Healthy Smile",
    desc: "Your child leaves with a positive dental experience.",
  },
];

export const TIPS = [
  {
    tag: "First Visit",
    title: "When Should Your Child Visit the Dentist?",
    desc: "Early visits help children get familiar with the clinic and support healthy dental development.",
  },
  {
    tag: "Daily Care",
    title: "How to Choose the Right Toothbrush for Your Child",
    desc: "Soft bristles, the right head size and a comfortable grip make brushing easier for little hands.",
  },
  {
    tag: "Positive Visits",
    title: "How to Make Dental Visits Less Scary",
    desc: "Simple preparation tips that help children feel calm and confident before their appointment.",
  },
];

export const SEO_KEYWORDS = [
  "Child Dentist in Gandhidham",
  "Pediatric Dentist in Gandhidham",
  "Children's Dentist Gandhidham",
  "Child Dental Clinic Gandhidham",
  "Pediatric Dental Clinic Gandhidham",
  "Painless Dentistry for Children",
  "Kids Dentist Gandhidham",
  "Dr. Krupa's Child Dental Clinic",
  "Pediatric dental care Gujarat",
  "Gentle dental treatment for kids",
];
