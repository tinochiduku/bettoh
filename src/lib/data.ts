export const site = {
  name: "Bettohtech",
  tagline: "Brand Architects",
  descriptor:
    "Bettohtech designs and fabricates the physical signage, vehicle graphics and branded environments that make businesses impossible to miss.",
  location: "Harare, Zimbabwe",
  // TODO: replace with the real contact details before launch.
  phone: "+263 XX XXX XXXX",
  email: "hello@bettohtech.co.zw",
  hours: "Mon – Fri, 8:00 – 17:00 CAT",
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "vehicle-branding",
    name: "Vehicle Branding",
    short: "Fleets and single vehicles wrapped to move like billboards.",
    description:
      "Full and partial wraps, decals and fleet livery engineered to survive Zimbabwean roads and sun. Every wrap is designed to read clearly at speed and hold its colour for years, not months.",
    features: [
      "Full & partial vehicle wraps",
      "Fleet livery systems",
      "Cut vinyl decals & window graphics",
      "UV-stable laminates for local climate",
    ],
  },
  {
    slug: "3d-2d-signage",
    name: "3D & 2D Signage",
    short: "Illuminated letters, flat cut-outs and everything between.",
    description:
      "From flush-mounted 2D lettering to backlit 3D letterforms, fabricated in-house and finished to match your brand specification exactly — not the closest stock colour.",
    features: [
      "Backlit & front-lit 3D letters",
      "Flat cut 2D signage",
      "Custom colour & material matching",
      "Indoor & outdoor-rated builds",
    ],
  },
  {
    slug: "events-branding",
    name: "Events Branding",
    short: "Temporary structures that still look permanent.",
    description:
      "Backdrops, gazebos, banners and stage branding built for fast rig and de-rig without looking flimsy on camera or in person.",
    features: [
      "Step-and-repeat backdrops",
      "Branded gazebos & marquees",
      "Banners, buntings & flags",
      "Fast turnaround for activations",
    ],
  },
  {
    slug: "reception-designs",
    name: "Reception Designs",
    short: "The first five seconds a visitor forms an opinion of you.",
    description:
      "Reception fascias, wall logos and wayfinding that translate a brand guideline into a physical room people notice the moment they walk in.",
    features: [
      "Illuminated & non-illuminated fascias",
      "Cut acrylic & metal wall logos",
      "Wayfinding & directory signage",
      "Material & finish consultation",
    ],
  },
  {
    slug: "pylons-fabrication",
    name: "Pylons Fabrication",
    short: "Tall, weatherproof, and built to be seen from the road.",
    description:
      "Free-standing pylon signs, engineered and fabricated from the steel frame up — the same category of structure behind our own street-facing sign.",
    features: [
      "Structural steel frame & cladding",
      "Illuminated pylon faces",
      "Multi-panel service listings",
      "Site survey, foundation & install",
    ],
  },
  {
    slug: "service-station-branding",
    name: "Service Station Branding",
    short: "Canopy, pumps and forecourt, branded as one system.",
    description:
      "Canopy fascias, pump cladding, price boards and forecourt signage delivered as a single coordinated brand rollout across single sites or national networks.",
    features: [
      "Canopy fascia & cladding",
      "Pump & dispenser branding",
      "Price boards & totems",
      "Multi-site rollout coordination",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Consult",
    description:
      "We walk the site, review your brand guideline and scope exactly what needs to be built.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Concepts, material specs and scale drawings signed off before anything is cut or welded.",
  },
  {
    step: "03",
    title: "Fabricate",
    description:
      "Built in-house — steel frames, illuminated faces, print and cut, finished to spec.",
  },
  {
    step: "04",
    title: "Install",
    description:
      "Delivered and installed on site, tested, and handed over ready to be seen.",
  },
];

export const values = [
  {
    title: "Precision",
    description:
      "Brand colours, proportions and finishes matched exactly — a sign is a promise your brand keeps in public.",
  },
  {
    title: "Durability",
    description:
      "Built for sun, rain and dust. Materials and fixings chosen for the environment they'll actually live in.",
  },
  {
    title: "Standout",
    description:
      "A brand that doesn't get noticed doesn't get remembered. Every build is judged against one question: does it stop someone walking past.",
  },
];
