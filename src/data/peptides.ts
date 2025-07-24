export interface Peptide {
  id: string;
  name: string;
  category: string[];
  shortDescription: string;
  fullDescription: string;
  molecularStructure?: string;
  mechanismOfAction: string;
  useCases: string[];
  benefits: string[];
  dosageRange: string;
  administration: string[];
  halfLife: string;
  sources: {
    name: string;
    url: string;
    disclaimer: string;
  }[];
  warnings: string[];
  sideEffects: string[];
  molecularFormula?: string;
  molecularWeight?: string;
  atomCount?: number;
  yearDiscovered: string;
  legalStatus: string;
  trending?: boolean;
  image?: string;
  structure2D?: string;
}

export const peptidesData: Peptide[] = [
  {
    id: "bpc-157",
    name: "BPC-157",
    category: ["Skin Regeneration & Anti-Aging", "Wound Healing & Recovery"],
    shortDescription: "A synthetic peptide derived from gastric juice with remarkable healing properties.",
    fullDescription: "BPC-157 is a pentadecapeptide derived from body protection compound found in gastric juice. It demonstrates exceptional healing capabilities, promoting angiogenesis, tissue repair, and recovery from various injuries. This research peptide has shown promise in accelerating the healing of tendons, ligaments, bones, and gastrointestinal tract damage in laboratory studies.",
    mechanismOfAction: "Promotes angiogenesis and modulates nitric oxide production to accelerate healing processes. Enhances collagen synthesis and stimulates growth factor expression.",
    useCases: ["Injury Recovery", "Tissue Repair", "Wound Healing", "Gastrointestinal Protection"],
    benefits: ["Accelerated healing", "Reduced inflammation", "Enhanced collagen synthesis", "Improved vascular repair"],
    dosageRange: "250-500 mcg daily",
    administration: ["Subcutaneous", "Intramuscular", "Oral"],
    halfLife: "4-8 hours",
    sources: [
      {
        name: "Research Chemical Store",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Not approved for human consumption"],
    sideEffects: ["Injection site reactions", "Mild fatigue (rare)"],
    molecularFormula: "C62H98N16O22",
    molecularWeight: "1419.53 g/mol",
    atomCount: 198,
    yearDiscovered: "1991",
    legalStatus: "Research Only (US/EU)",
    trending: true,
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "semax",
    name: "Semax",
    category: ["Mood & Cognition Enhancement"],
    shortDescription: "A synthetic peptide derived from ACTH that enhances cognitive function and memory.",
    fullDescription: "Semax is a synthetic heptapeptide derived from adrenocorticotropic hormone (ACTH). Originally developed in Russia, it enhances cognitive function, memory consolidation, and provides neuroprotection against stress and hypoxia. Research indicates significant improvements in learning capacity, attention, and resistance to cognitive decline.",
    mechanismOfAction: "Modulates BDNF expression and enhances dopaminergic and noradrenergic neurotransmission. Increases neuroplasticity and promotes neurogenesis.",
    useCases: ["Cognitive Enhancement", "Memory Improvement", "Neuroprotection", "Stress Resistance"],
    benefits: ["Enhanced memory", "Improved focus", "Increased neuroplasticity", "Stress protection"],
    dosageRange: "300-1200 mcg daily",
    administration: ["Nasal", "Subcutaneous"],
    halfLife: "30-60 minutes",
    sources: [
      {
        name: "Nootropic Source",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor blood pressure"],
    sideEffects: ["Mild headache", "Nasal irritation (intranasal use)", "Possible blood pressure changes"],
    molecularFormula: "C37H51N9O10S",
    molecularWeight: "813.92 g/mol",
    atomCount: 107,
    yearDiscovered: "1982",
    legalStatus: "Prescription (Russia), Research Only (US/EU)",
    trending: true,
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "tb-500",
    name: "TB-500",
    category: ["Wound Healing & Recovery", "Muscle Growth & Definition"],
    shortDescription: "A synthetic version of thymosin beta-4 that promotes healing and tissue repair.",
    fullDescription: "TB-500 is a synthetic version of thymosin beta-4, a naturally occurring peptide present in virtually all human and animal cells. It plays a crucial role in wound healing, tissue repair, and inflammation reduction. Research demonstrates its ability to promote cell migration, angiogenesis, and tissue regeneration throughout the body.",
    mechanismOfAction: "Regulates actin polymerization and promotes cell migration and angiogenesis. Modulates inflammatory responses and enhances tissue remodeling.",
    useCases: ["Tissue Repair", "Wound Healing", "Inflammation Reduction", "Recovery Enhancement"],
    benefits: ["Accelerated healing", "Reduced inflammation", "Enhanced flexibility", "Improved recovery"],
    dosageRange: "2-5 mg weekly",
    administration: ["Subcutaneous", "Intramuscular"],
    halfLife: "2-3 days",
    sources: [
      {
        name: "Peptide Warehouse",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor for injection site reactions"],
    sideEffects: ["Injection site redness", "Mild fatigue", "Possible headache"],
    molecularFormula: "C212H350N56O78S",
    molecularWeight: "4963.4 g/mol",
    atomCount: 696,
    yearDiscovered: "1965",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "ghrp-6",
    name: "GHRP-6",
    category: ["Muscle Growth & Definition", "Skin Regeneration & Anti-Aging"],
    shortDescription: "A growth hormone releasing peptide that stimulates natural GH production.",
    fullDescription: "GHRP-6 is a hexapeptide that stimulates the release of growth hormone from the pituitary gland by mimicking ghrelin, the hunger hormone. It enhances natural growth hormone production, improving recovery, body composition, and sleep quality. Research shows significant benefits for muscle development, fat metabolism, and overall recovery processes.",
    mechanismOfAction: "Binds to ghrelin receptors to stimulate growth hormone release from the pituitary gland. Increases IGF-1 levels and promotes protein synthesis.",
    useCases: ["Growth Hormone Enhancement", "Recovery Improvement", "Body Composition", "Sleep Quality"],
    benefits: ["Increased GH levels", "Enhanced recovery", "Improved sleep", "Better body composition"],
    dosageRange: "100-300 mcg 2-3x daily",
    administration: ["Subcutaneous"],
    halfLife: "15-60 minutes",
    sources: [
      {
        name: "Research Peptides",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor blood glucose levels"],
    sideEffects: ["Increased appetite", "Water retention", "Numbness in extremities"],
    molecularFormula: "C46H56N12O6",
    molecularWeight: "872.99 g/mol",
    atomCount: 120,
    yearDiscovered: "1984",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "melanotan-2",
    name: "Melanotan II",
    category: ["Tanning / Skin Pigmentation", "Fat Loss & Recomposition"],
    shortDescription: "A synthetic analog of melanocyte-stimulating hormone that promotes tanning.",
    fullDescription: "Melanotan II is a synthetic analog of α-melanocyte-stimulating hormone (α-MSH) that stimulates melanogenesis, the process responsible for skin pigmentation. Research indicates it can promote tanning, reduce appetite, and may enhance libido through melanocortin receptor activation. It was originally developed as a potential treatment for skin cancers.",
    mechanismOfAction: "Activates melanocortin receptors to stimulate melanogenesis and affect appetite regulation. Modulates neural pathways involved in sexual arousal and feeding behavior.",
    useCases: ["Tanning Enhancement", "Appetite Suppression", "Libido Enhancement", "Skin Protection Research"],
    benefits: ["Enhanced tanning", "Reduced appetite", "Potential libido enhancement", "UV protection"],
    dosageRange: "0.25-1 mg daily",
    administration: ["Subcutaneous"],
    halfLife: "33 minutes",
    sources: [
      {
        name: "Tanning Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "UV exposure still required", "Monitor for skin changes"],
    sideEffects: ["Nausea", "Facial flushing", "Darkening of moles/freckles", "Decreased appetite"],
    molecularFormula: "C50H69N15O9",
    molecularWeight: "1024.18 g/mol",
    atomCount: 143,
    yearDiscovered: "1981",
    legalStatus: "Research Only (US/EU)",
    trending: true,
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "pt-141",
    name: "PT-141",
    category: ["Libido & Sexual Function"],
    shortDescription: "A melanocortin receptor agonist that enhances sexual desire and arousal.",
    fullDescription: "PT-141 (Bremelanotide) is a melanocortin receptor agonist that enhances sexual desire and arousal in both men and women through central nervous system mechanisms. Unlike PDE5 inhibitors, it works directly on the brain's sexual response pathways. Research demonstrates significant improvements in sexual function and desire.",
    mechanismOfAction: "Activates melanocortin-4 receptors in the brain to enhance sexual motivation and arousal. Modulates neural pathways involved in sexual response and desire.",
    useCases: ["Sexual Enhancement", "Libido Improvement", "Arousal Enhancement", "Sexual Dysfunction Research"],
    benefits: ["Enhanced sexual desire", "Improved arousal", "Central nervous system action", "Works for both genders"],
    dosageRange: "1-2 mg as needed",
    administration: ["Subcutaneous", "Nasal"],
    halfLife: "2-3 hours",
    sources: [
      {
        name: "Peptide Solutions",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor blood pressure", "Not for daily use"],
    sideEffects: ["Nausea", "Flushing", "Headache", "Possible blood pressure changes"],
    molecularFormula: "C50H68N14O10",
    molecularWeight: "1025.16 g/mol",
    atomCount: 142,
    yearDiscovered: "1998",
    legalStatus: "Prescription (US - Vyleesi), Research Only (EU)",
    structure2D: "/placeholder-molecule.svg"
  }
];

export const categories = [
  "All Categories",
  "Skin Regeneration & Anti-Aging",
  "Hair Growth & Scalp Health", 
  "Fat Loss & Recomposition",
  "Muscle Growth & Definition",
  "Tanning / Skin Pigmentation",
  "Jawline, Bone & Facial Symmetry",
  "Wound Healing & Recovery",
  "Libido & Sexual Function",
  "Mood & Cognition Enhancement",
  "Eye & Under-Eye Aesthetics"
];