export interface Peptide {
  id: string;
  name: string;
  category: string[];
  description: string;
  molecularStructure?: string;
  halfLife: string;
  administration: string[];
  legalStatus: string;
  dosageRange: string;
  yearDiscovered: string;
  mechanismOfAction: string;
  buyLinks: {
    name: string;
    url: string;
    disclaimer: string;
  }[];
  trending?: boolean;
  image?: string;
}

export const peptidesData: Peptide[] = [
  {
    id: "bpc-157",
    name: "BPC-157",
    category: ["Peptide", "Healing", "Recovery"],
    description: "A synthetic peptide derived from a protein found in gastric juice. Known for its remarkable healing properties and ability to accelerate recovery from injuries.",
    halfLife: "4-8 hours",
    administration: ["Subcutaneous", "Intramuscular", "Oral"],
    legalStatus: "Research Only (US/EU)",
    dosageRange: "250-500 mcg daily",
    yearDiscovered: "1991",
    mechanismOfAction: "Promotes angiogenesis and modulates nitric oxide production to accelerate healing processes.",
    buyLinks: [
      {
        name: "Research Chemical Store",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    trending: true
  },
  {
    id: "semax",
    name: "Semax",
    category: ["Nootropic", "Cognitive Enhancer", "Neuroprotective"],
    description: "A synthetic peptide derived from ACTH that enhances cognitive function, memory, and provides neuroprotection against stress and hypoxia.",
    halfLife: "30-60 minutes",
    administration: ["Nasal", "Subcutaneous"],
    legalStatus: "Prescription (Russia), Research Only (US/EU)",
    dosageRange: "300-1200 mcg daily",
    yearDiscovered: "1982",
    mechanismOfAction: "Modulates BDNF expression and enhances dopaminergic and noradrenergic neurotransmission.",
    buyLinks: [
      {
        name: "Nootropic Source",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    trending: true
  },
  {
    id: "tb-500",
    name: "TB-500",
    category: ["Peptide", "Recovery", "Anti-inflammatory"],
    description: "A synthetic version of thymosin beta-4 that promotes healing, reduces inflammation, and supports tissue repair throughout the body.",
    halfLife: "2-3 days",
    administration: ["Subcutaneous", "Intramuscular"],
    legalStatus: "Research Only (US/EU)",
    dosageRange: "2-5 mg weekly",
    yearDiscovered: "1965",
    mechanismOfAction: "Regulates actin polymerization and promotes cell migration and angiogenesis.",
    buyLinks: [
      {
        name: "Peptide Warehouse",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ]
  },
  {
    id: "ghrp-6",
    name: "GHRP-6",
    category: ["Growth Hormone", "Recovery", "Anti-aging"],
    description: "A growth hormone releasing peptide that stimulates natural GH production, improving recovery, body composition, and sleep quality.",
    halfLife: "15-60 minutes",
    administration: ["Subcutaneous"],
    legalStatus: "Research Only (US/EU)",
    dosageRange: "100-300 mcg 2-3x daily",
    yearDiscovered: "1984",
    mechanismOfAction: "Binds to ghrelin receptors to stimulate growth hormone release from the pituitary gland.",
    buyLinks: [
      {
        name: "Research Peptides",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ]
  },
  {
    id: "melanotan-2",
    name: "Melanotan II",
    category: ["Cosmetic", "Tanning", "Appetite Suppressant"],
    description: "A synthetic analog of melanocyte-stimulating hormone that promotes tanning, reduces appetite, and may enhance libido.",
    halfLife: "33 minutes",
    administration: ["Subcutaneous"],
    legalStatus: "Research Only (US/EU)",
    dosageRange: "0.25-1 mg daily",
    yearDiscovered: "1981",
    mechanismOfAction: "Activates melanocortin receptors to stimulate melanogenesis and affect appetite regulation.",
    buyLinks: [
      {
        name: "Tanning Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    trending: true
  },
  {
    id: "pt-141",
    name: "PT-141",
    category: ["Libido", "Sexual Enhancement"],
    description: "A melanocortin receptor agonist that enhances sexual desire and arousal in both men and women through central nervous system mechanisms.",
    halfLife: "2-3 hours",
    administration: ["Subcutaneous", "Nasal"],
    legalStatus: "Prescription (US - Vyleesi), Research Only (EU)",
    dosageRange: "1-2 mg as needed",
    yearDiscovered: "1998",
    mechanismOfAction: "Activates melanocortin-4 receptors in the brain to enhance sexual motivation and arousal.",
    buyLinks: [
      {
        name: "Peptide Solutions",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ]
  }
];

export const categories = [
  "All Categories",
  "Peptide",
  "Nootropic",
  "Healing",
  "Recovery",
  "Cognitive Enhancer",
  "Growth Hormone",
  "Anti-aging",
  "Cosmetic",
  "Libido",
  "Fat Loss",
  "Muscle Growth",
  "Hair Growth",
  "Neuroprotective"
];