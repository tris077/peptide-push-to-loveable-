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
  },
  {
    id: "cjc-1295",
    name: "CJC-1295",
    category: ["Muscle Growth & Definition", "Skin Regeneration & Anti-Aging"],
    shortDescription: "A growth hormone releasing hormone analog with extended half-life.",
    fullDescription: "CJC-1295 with DAC (Drug Affinity Complex) is a synthetic growth hormone releasing hormone (GHRH) analog that stimulates growth hormone release from the pituitary gland. The DAC component extends its half-life significantly, allowing for less frequent dosing while maintaining sustained GH elevation. Research shows improvements in muscle growth, fat loss, sleep quality, and recovery.",
    mechanismOfAction: "Binds to GHRH receptors to stimulate growth hormone release. The DAC component prevents enzymatic degradation, extending biological activity.",
    useCases: ["Growth Hormone Enhancement", "Muscle Building", "Fat Loss", "Recovery Improvement", "Sleep Quality"],
    benefits: ["Sustained GH elevation", "Enhanced muscle growth", "Improved fat metabolism", "Better sleep quality", "Accelerated recovery"],
    dosageRange: "1-2 mg twice weekly",
    administration: ["Subcutaneous"],
    halfLife: "6-8 days",
    sources: [
      {
        name: "Growth Hormone Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor blood glucose levels", "Not for daily use"],
    sideEffects: ["Water retention", "Joint stiffness", "Increased hunger", "Possible injection site reactions"],
    molecularFormula: "C152H252N44O42",
    molecularWeight: "3367.97 g/mol",
    atomCount: 490,
    yearDiscovered: "2005",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "ipamorelin", 
    name: "Ipamorelin",
    category: ["Muscle Growth & Definition", "Skin Regeneration & Anti-Aging"],
    shortDescription: "A selective growth hormone secretagogue with minimal side effects.",
    fullDescription: "Ipamorelin is a selective growth hormone secretagogue receptor (GHSR) agonist that stimulates growth hormone release without significantly affecting cortisol, prolactin, or aldosterone levels. It is considered one of the most selective and gentle GH releasing peptides, making it ideal for sustained use with minimal side effects. Research demonstrates significant benefits for body composition, recovery, and overall well-being.",
    mechanismOfAction: "Selectively binds to ghrelin receptors (GHSR) to stimulate pulsatile growth hormone release while avoiding stimulation of other hormone pathways.",
    useCases: ["Clean GH Enhancement", "Body Recomposition", "Recovery Optimization", "Sleep Improvement", "Anti-Aging Research"],
    benefits: ["Selective GH stimulation", "Minimal side effects", "Improved recovery", "Enhanced sleep", "Better body composition"],
    dosageRange: "200-300 mcg 2-3x daily",
    administration: ["Subcutaneous"],
    halfLife: "2 hours",
    sources: [
      {
        name: "Selective Peptides",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Take on empty stomach for best results"],
    sideEffects: ["Mild water retention", "Slight increase in hunger", "Possible fatigue (rare)"],
    molecularFormula: "C38H49N9O5",
    molecularWeight: "711.85 g/mol",
    atomCount: 101,
    yearDiscovered: "1998",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "semaglutide",
    name: "Semaglutide",
    category: ["Fat Loss & Recomposition"],
    shortDescription: "A GLP-1 receptor agonist for weight management and glucose control.",
    fullDescription: "Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist originally developed for diabetes management but showing remarkable efficacy for weight loss. It works by slowing gastric emptying, reducing appetite, and improving insulin sensitivity. Clinical studies demonstrate significant weight loss and improved metabolic parameters in both diabetic and non-diabetic individuals.",
    mechanismOfAction: "Activates GLP-1 receptors to slow gastric emptying, reduce glucagon secretion, stimulate insulin release, and promote satiety through central nervous system pathways.",
    useCases: ["Weight Management", "Appetite Suppression", "Glucose Control", "Metabolic Health", "Type 2 Diabetes Research"],
    benefits: ["Significant weight loss", "Reduced appetite", "Improved glucose control", "Better insulin sensitivity", "Cardiovascular benefits"],
    dosageRange: "0.25-2.4 mg weekly",
    administration: ["Subcutaneous"],
    halfLife: "~7 days",
    sources: [
      {
        name: "Diabetes Research Institute",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor for pancreatitis", "Not suitable for Type 1 diabetes"],
    sideEffects: ["Nausea", "Vomiting", "Diarrhea", "Constipation", "Abdominal pain", "Possible gallbladder issues"],
    molecularFormula: "C187H291N45O59",
    molecularWeight: "4113.58 g/mol",
    atomCount: 582,
    yearDiscovered: "2012",
    legalStatus: "Prescription (US/EU)",
    trending: true,
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    category: ["Skin Regeneration & Anti-Aging", "Wound Healing & Recovery"],
    shortDescription: "A copper peptide complex with powerful regenerative and anti-aging properties.",
    fullDescription: "GHK-Cu is a naturally occurring copper peptide complex that plays a crucial role in wound healing, tissue remodeling, and anti-aging processes. It stimulates collagen and elastin production, promotes angiogenesis, and exhibits antioxidant properties. Research demonstrates significant improvements in skin texture, wound healing, hair growth, and overall tissue regeneration.",
    mechanismOfAction: "Binds to copper ions to facilitate collagen synthesis, stimulate antioxidant enzymes, promote angiogenesis, and modulate inflammatory responses. Enhances cellular repair and regeneration processes.",
    useCases: ["Skin Rejuvenation", "Wound Healing", "Hair Growth", "Scar Reduction", "Anti-Aging", "Tissue Repair"],
    benefits: ["Enhanced collagen production", "Improved skin elasticity", "Faster wound healing", "Hair growth stimulation", "Antioxidant protection", "Reduced inflammation"],
    dosageRange: "1-3 mg daily",
    administration: ["Topical", "Subcutaneous", "Intradermal"],
    halfLife: "24 hours",
    sources: [
      {
        name: "Cosmetic Peptide Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Patch test before topical use", "Avoid contact with eyes"],
    sideEffects: ["Mild skin irritation (topical)", "Blue discoloration at injection site (rare)", "Metallic taste (rare)"],
    molecularFormula: "C14H24CuN6O4",
    molecularWeight: "403.93 g/mol",
    atomCount: 49,
    yearDiscovered: "1973",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "mod-grf-129",
    name: "MOD-GRF (1-29)",
    category: ["Muscle Growth & Definition", "Skin Regeneration & Anti-Aging"],
    shortDescription: "A modified growth hormone releasing factor for enhanced GH stimulation.",
    fullDescription: "MOD-GRF (1-29), also known as CJC-1295 without DAC, is a modified version of growth hormone releasing factor designed to resist enzymatic degradation while maintaining a shorter half-life than its DAC counterpart. This allows for more precise timing and pulsatile GH release that mimics natural patterns. Research shows significant benefits for muscle growth, fat loss, and recovery when used appropriately.",
    mechanismOfAction: "Binds to GHRH receptors to stimulate growth hormone release from the pituitary gland. Modified amino acid sequence provides resistance to enzymatic cleavage while maintaining shorter duration of action.",
    useCases: ["Pulsatile GH Enhancement", "Muscle Building", "Fat Loss", "Recovery Optimization", "Sleep Quality Improvement"],
    benefits: ["Natural GH pulsing", "Enhanced muscle growth", "Improved fat metabolism", "Better recovery", "Quality sleep"],
    dosageRange: "100-200 mcg 2-3x daily",
    administration: ["Subcutaneous"],
    halfLife: "30 minutes",
    sources: [
      {
        name: "Hormone Research Lab",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Use with GHRP for synergistic effects", "Take on empty stomach"],
    sideEffects: ["Mild water retention", "Increased hunger", "Possible flushing", "Joint stiffness (rare)"],
    molecularFormula: "C152H252N44O42",
    molecularWeight: "3367.97 g/mol",
    atomCount: 490,
    yearDiscovered: "2005",
    legalStatus: "Research Only (US/EU)",
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