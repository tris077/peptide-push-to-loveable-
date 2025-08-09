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
  },
  {
    id: "aod-9604",
    name: "AOD-9604",
    category: ["Fat Loss & Recomposition"],
    shortDescription: "A modified fragment of growth hormone with selective fat-burning properties.",
    fullDescription: "AOD-9604 is a modified fragment of the C-terminus of growth hormone (hGH 176-191) with an additional tyrosine amino acid. This modification enhances its fat-burning properties while eliminating the growth-promoting effects of full-length growth hormone. Research demonstrates selective lipolysis and improved fat metabolism without affecting glucose levels or promoting muscle growth.",
    mechanismOfAction: "Stimulates lipolysis and inhibits lipogenesis by mimicking the fat-burning effects of growth hormone without binding to GH receptors that promote growth.",
    useCases: ["Fat Loss", "Body Recomposition", "Metabolic Enhancement", "Weight Management"],
    benefits: ["Selective fat burning", "No growth effects", "Improved metabolism", "Body recomposition"],
    dosageRange: "300-600 mcg daily",
    administration: ["Subcutaneous"],
    halfLife: "30-60 minutes",
    sources: [
      {
        name: "Metabolic Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor for injection site reactions"],
    sideEffects: ["Injection site reactions", "Mild fatigue", "Possible headache"],
    molecularFormula: "C78H123N23O23S2",
    molecularWeight: "1815.12 g/mol",
    atomCount: 249,
    yearDiscovered: "1993",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    category: ["Muscle Growth & Definition", "Fat Loss & Recomposition"],
    shortDescription: "A synthetic GHRH analog for reducing visceral fat and enhancing growth hormone.",
    fullDescription: "Tesamorelin is a synthetic analog of growth hormone releasing hormone (GHRH) that stimulates the production and release of growth hormone. Originally developed for HIV-associated lipodystrophy, research shows significant reductions in visceral fat while maintaining or increasing lean muscle mass. It provides sustained GH elevation with fewer side effects than direct GH administration.",
    mechanismOfAction: "Binds to GHRH receptors in the pituitary gland to stimulate natural growth hormone production and release, leading to improved lipolysis and muscle preservation.",
    useCases: ["Visceral Fat Reduction", "Growth Hormone Enhancement", "Body Recomposition", "Lean Mass Preservation"],
    benefits: ["Reduces visceral fat", "Maintains lean mass", "Natural GH stimulation", "Improved body composition"],
    dosageRange: "2 mg daily",
    administration: ["Subcutaneous"],
    halfLife: "26-38 minutes",
    sources: [
      {
        name: "GHRH Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor for injection site reactions", "FDA approved for specific conditions"],
    sideEffects: ["Injection site reactions", "Joint pain", "Muscle aches", "Possible glucose elevation"],
    molecularFormula: "C211H366N72O67S1",
    molecularWeight: "5135.77 g/mol",
    atomCount: 717,
    yearDiscovered: "2010",
    legalStatus: "Prescription (US - Egrifta), Research Only (EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "igf-1-lr3",
    name: "IGF-1 LR3",
    category: ["Muscle Growth & Definition", "Fat Loss & Recomposition"],
    shortDescription: "A long-acting insulin-like growth factor with enhanced anabolic properties.",
    fullDescription: "IGF-1 LR3 is a modified version of insulin-like growth factor-1 with extended half-life and reduced binding to IGF binding proteins. This modification allows for sustained anabolic activity and enhanced muscle growth potential. Research demonstrates significant improvements in protein synthesis, muscle hypertrophy, and recovery when compared to native IGF-1.",
    mechanismOfAction: "Binds to IGF-1 receptors to stimulate protein synthesis, cell proliferation, and muscle hypertrophy. The Long R3 modification extends its half-life and bioavailability.",
    useCases: ["Muscle Growth", "Protein Synthesis", "Recovery Enhancement", "Body Recomposition"],
    benefits: ["Enhanced muscle growth", "Improved protein synthesis", "Extended half-life", "Better recovery"],
    dosageRange: "20-100 mcg daily",
    administration: ["Subcutaneous"],
    halfLife: "20-30 hours",
    sources: [
      {
        name: "Growth Factor Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor blood glucose", "Potential for organ growth"],
    sideEffects: ["Hypoglycemia", "Joint pain", "Muscle cramps", "Possible organ enlargement"],
    molecularFormula: "C400H625N111O115S9",
    molecularWeight: "9117.50 g/mol",
    atomCount: 1260,
    yearDiscovered: "1996",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "peg-mgf",
    name: "PEG-MGF",
    category: ["Muscle Growth & Definition", "Wound Healing & Recovery"],
    shortDescription: "A pegylated form of mechano growth factor for enhanced muscle repair and growth.",
    fullDescription: "PEG-MGF is a pegylated form of mechano growth factor, a splice variant of IGF-1 that is released in response to muscle damage or stress. The PEG modification extends its half-life significantly, allowing for sustained muscle repair and growth signaling. Research shows enhanced muscle recovery, satellite cell activation, and improved adaptation to training stress.",
    mechanismOfAction: "Activates satellite cells and promotes muscle repair through IGF-1 receptor pathways. PEGylation extends circulation time and tissue exposure.",
    useCases: ["Muscle Repair", "Recovery Enhancement", "Satellite Cell Activation", "Training Adaptation"],
    benefits: ["Enhanced muscle repair", "Improved recovery", "Extended half-life", "Better adaptation"],
    dosageRange: "200-400 mcg daily",
    administration: ["Subcutaneous"],
    halfLife: "Several days",
    sources: [
      {
        name: "Recovery Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor for injection site reactions"],
    sideEffects: ["Injection site reactions", "Mild fatigue", "Possible joint discomfort"],
    molecularFormula: "C121H200N42O39",
    molecularWeight: "2867.20 g/mol",
    atomCount: 402,
    yearDiscovered: "2003",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "mgf-igf-1-ec",
    name: "MGF (IGF-1 Ec)",
    category: ["Muscle Growth & Definition", "Wound Healing & Recovery"],
    shortDescription: "Mechano growth factor for muscle repair and satellite cell activation.",
    fullDescription: "MGF (Mechano Growth Factor) is a splice variant of IGF-1 that is expressed in response to mechanical stress or muscle damage. It plays a crucial role in muscle repair by activating satellite cells and promoting muscle fiber regeneration. Research demonstrates significant improvements in muscle recovery, adaptation to training, and overall muscle growth potential.",
    mechanismOfAction: "Activates satellite cells and promotes muscle repair through localized IGF-1 receptor signaling. Enhances muscle fiber regeneration and adaptation responses.",
    useCases: ["Muscle Repair", "Satellite Cell Activation", "Training Recovery", "Muscle Adaptation"],
    benefits: ["Enhanced muscle repair", "Satellite cell activation", "Improved recovery", "Better training adaptation"],
    dosageRange: "200-400 mcg daily",
    administration: ["Intramuscular"],
    halfLife: "Several minutes",
    sources: [
      {
        name: "Muscle Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Localized injection recommended"],
    sideEffects: ["Injection site discomfort", "Mild inflammation", "Possible muscle soreness"],
    molecularFormula: "C121H200N42O39",
    molecularWeight: "2867.20 g/mol",
    atomCount: 402,
    yearDiscovered: "1996",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "follistatin-344",
    name: "Follistatin 344",
    category: ["Muscle Growth & Definition"],
    shortDescription: "A myostatin inhibitor for enhanced muscle growth and strength.",
    fullDescription: "Follistatin 344 is a naturally occurring protein that binds to and neutralizes myostatin, a protein that limits muscle growth. By inhibiting myostatin, follistatin allows for enhanced muscle growth, increased strength, and improved muscle fiber size. Research demonstrates significant increases in lean muscle mass and strength gains when myostatin activity is reduced.",
    mechanismOfAction: "Binds to and neutralizes myostatin, removing the natural brake on muscle growth. Also affects other TGF-beta family proteins involved in muscle regulation.",
    useCases: ["Muscle Growth", "Strength Enhancement", "Myostatin Inhibition", "Lean Mass Development"],
    benefits: ["Enhanced muscle growth", "Increased strength", "Improved muscle quality", "Faster gains"],
    dosageRange: "100-300 mcg daily",
    administration: ["Subcutaneous"],
    halfLife: "2-3 days",
    sources: [
      {
        name: "Myostatin Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor for excessive muscle growth"],
    sideEffects: ["Injection site reactions", "Rapid muscle growth", "Possible joint stress"],
    molecularFormula: "C1420H2240N372O418S10",
    molecularWeight: "31943.50 g/mol",
    atomCount: 4460,
    yearDiscovered: "1987",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    category: ["Wound Healing & Recovery", "Skin Regeneration & Anti-Aging"],
    shortDescription: "An immune-modulating peptide with anti-aging and skin health benefits.",
    fullDescription: "Thymosin Alpha-1 is a naturally occurring peptide that plays a crucial role in immune system regulation and T-cell development. Research demonstrates significant immune-enhancing properties, anti-aging benefits, and improvements in skin health and wound healing. It helps optimize immune function while promoting tissue repair and regeneration.",
    mechanismOfAction: "Modulates immune system function by enhancing T-cell development and activity. Promotes tissue repair and has anti-inflammatory properties.",
    useCases: ["Immune Enhancement", "Anti-Aging", "Skin Health", "Wound Healing", "Recovery Support"],
    benefits: ["Enhanced immune function", "Improved skin health", "Anti-aging effects", "Better recovery"],
    dosageRange: "1.6-6.4 mg weekly",
    administration: ["Subcutaneous"],
    halfLife: "2-4 hours",
    sources: [
      {
        name: "Immune Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor immune response"],
    sideEffects: ["Injection site reactions", "Mild flu-like symptoms", "Temporary fatigue"],
    molecularFormula: "C129H215N33O55",
    molecularWeight: "3108.31 g/mol",
    atomCount: 432,
    yearDiscovered: "1972",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "thymosin-beta-4",
    name: "Thymosin Beta-4",
    category: ["Wound Healing & Recovery"],
    shortDescription: "A naturally occurring peptide that promotes healing and tissue repair.",
    fullDescription: "Thymosin Beta-4 is a naturally occurring peptide found in virtually all cells that plays a fundamental role in wound healing, tissue repair, and cell migration. It promotes angiogenesis, reduces inflammation, and enhances tissue remodeling. Research demonstrates significant benefits for injury recovery, wound healing, and overall tissue regeneration.",
    mechanismOfAction: "Regulates actin polymerization to promote cell migration and tissue repair. Enhances angiogenesis and modulates inflammatory responses.",
    useCases: ["Wound Healing", "Tissue Repair", "Injury Recovery", "Inflammation Reduction"],
    benefits: ["Accelerated healing", "Reduced inflammation", "Enhanced tissue repair", "Improved recovery"],
    dosageRange: "2-5 mg weekly",
    administration: ["Subcutaneous"],
    halfLife: "2-3 days",
    sources: [
      {
        name: "Tissue Repair Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor for injection site reactions"],
    sideEffects: ["Injection site reactions", "Mild fatigue", "Possible headache"],
    molecularFormula: "C212H350N56O78S",
    molecularWeight: "4963.44 g/mol",
    atomCount: 696,
    yearDiscovered: "1965",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "hexarelin",
    name: "Hexarelin",
    category: ["Muscle Growth & Definition"],
    shortDescription: "A potent growth hormone secretagogue with strong GH releasing properties.",
    fullDescription: "Hexarelin is a synthetic hexapeptide and one of the most potent growth hormone releasing peptides (GHRPs) available. It stimulates growth hormone release through ghrelin receptor activation and also has direct effects on heart muscle. Research demonstrates significant increases in growth hormone levels, muscle growth, and cardiovascular benefits.",
    mechanismOfAction: "Strongly activates ghrelin receptors to stimulate growth hormone release. Also has direct cardioprotective effects through specific cardiac receptors.",
    useCases: ["Growth Hormone Enhancement", "Muscle Growth", "Cardiovascular Health", "Recovery Enhancement"],
    benefits: ["Potent GH stimulation", "Muscle growth", "Cardiovascular benefits", "Enhanced recovery"],
    dosageRange: "100-300 mcg 2-3x daily",
    administration: ["Subcutaneous"],
    halfLife: "70 minutes",
    sources: [
      {
        name: "GHRP Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor cortisol and prolactin levels"],
    sideEffects: ["Increased appetite", "Water retention", "Possible cortisol elevation", "Tiredness"],
    molecularFormula: "C47H58N14O6",
    molecularWeight: "887.04 g/mol",
    atomCount: 125,
    yearDiscovered: "1992",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "ghrp-2",
    name: "GHRP-2",
    category: ["Muscle Growth & Definition"],
    shortDescription: "A growth hormone releasing peptide for enhanced GH production and muscle growth.",
    fullDescription: "GHRP-2 is a synthetic hexapeptide that stimulates growth hormone release from the pituitary gland by activating ghrelin receptors. It provides more potent GH stimulation than GHRP-6 with less appetite stimulation. Research demonstrates significant improvements in growth hormone levels, muscle growth, fat loss, and recovery.",
    mechanismOfAction: "Binds to ghrelin receptors to stimulate growth hormone release from the pituitary gland. Increases IGF-1 levels and promotes anabolic processes.",
    useCases: ["Growth Hormone Enhancement", "Muscle Growth", "Fat Loss", "Recovery Improvement"],
    benefits: ["Strong GH stimulation", "Enhanced muscle growth", "Improved recovery", "Less appetite stimulation than GHRP-6"],
    dosageRange: "100-300 mcg 2-3x daily",
    administration: ["Subcutaneous"],
    halfLife: "15-60 minutes",
    sources: [
      {
        name: "Growth Hormone Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor blood glucose levels"],
    sideEffects: ["Mild appetite increase", "Water retention", "Possible numbness", "Joint stiffness"],
    molecularFormula: "C45H55N9O6",
    molecularWeight: "817.97 g/mol",
    atomCount: 115,
    yearDiscovered: "1993",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    category: ["Muscle Growth & Definition", "Wound Healing & Recovery"],
    shortDescription: "A GHRH analog for natural growth hormone enhancement and recovery.",
    fullDescription: "Sermorelin is a synthetic analog of growth hormone releasing hormone (GHRH) consisting of the first 29 amino acids of native GHRH. It stimulates the natural production and release of growth hormone from the pituitary gland. Research demonstrates improvements in muscle growth, fat loss, sleep quality, and recovery with a natural pulsatile GH release pattern.",
    mechanismOfAction: "Binds to GHRH receptors in the pituitary gland to stimulate natural growth hormone production and release in a physiological manner.",
    useCases: ["Natural GH Enhancement", "Recovery Improvement", "Sleep Quality", "Anti-Aging", "Body Composition"],
    benefits: ["Natural GH stimulation", "Improved sleep", "Enhanced recovery", "Better body composition"],
    dosageRange: "200-500 mcg daily",
    administration: ["Subcutaneous"],
    halfLife: "11-12 minutes",
    sources: [
      {
        name: "GHRH Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Take on empty stomach"],
    sideEffects: ["Injection site reactions", "Mild headache", "Flushing", "Dizziness"],
    molecularFormula: "C149H246N44O42S",
    molecularWeight: "3357.96 g/mol",
    atomCount: 481,
    yearDiscovered: "1982",
    legalStatus: "Prescription (US), Research Only (EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "kisspeptin-10",
    name: "Kisspeptin-10",
    category: ["Libido & Sexual Function"],
    shortDescription: "A neuropeptide that regulates reproductive hormones and sexual function.",
    fullDescription: "Kisspeptin-10 is a truncated form of kisspeptin that plays a crucial role in regulating the hypothalamic-pituitary-gonadal axis. It stimulates the release of gonadotropin-releasing hormone (GnRH), which subsequently increases luteinizing hormone (LH) and follicle-stimulating hormone (FSH). Research demonstrates significant effects on reproductive hormone levels and sexual function.",
    mechanismOfAction: "Binds to GPR54 receptors to stimulate GnRH release, which activates the reproductive hormone cascade and enhances sexual function.",
    useCases: ["Hormone Regulation", "Sexual Function", "Libido Enhancement", "Reproductive Health"],
    benefits: ["Enhanced hormone production", "Improved sexual function", "Increased libido", "Better reproductive health"],
    dosageRange: "1-10 mcg daily",
    administration: ["Subcutaneous"],
    halfLife: "27-46 minutes",
    sources: [
      {
        name: "Reproductive Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor hormone levels"],
    sideEffects: ["Injection site reactions", "Nausea", "Headache", "Hot flashes"],
    molecularFormula: "C63H83N17O14",
    molecularWeight: "1302.47 g/mol",
    atomCount: 177,
    yearDiscovered: "2001",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "epitalon",
    name: "Epitalon",
    category: ["Skin Regeneration & Anti-Aging"],
    shortDescription: "A synthetic tetrapeptide with anti-aging and longevity-promoting properties.",
    fullDescription: "Epitalon is a synthetic tetrapeptide derived from epithalamin, a hormone produced by the pineal gland. It has been extensively studied for its anti-aging properties, including telomerase activation, circadian rhythm regulation, and cellular regeneration. Research demonstrates improvements in sleep quality, skin health, and various markers of aging.",
    mechanismOfAction: "Activates telomerase enzyme to extend telomeres, regulates circadian rhythms through pineal gland function, and promotes cellular regeneration.",
    useCases: ["Anti-Aging", "Sleep Improvement", "Cellular Regeneration", "Longevity", "Circadian Regulation"],
    benefits: ["Telomerase activation", "Improved sleep quality", "Anti-aging effects", "Better skin health"],
    dosageRange: "5-10 mg daily (cycles)",
    administration: ["Subcutaneous"],
    halfLife: "Several hours",
    sources: [
      {
        name: "Longevity Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Use in cycles"],
    sideEffects: ["Injection site reactions", "Drowsiness", "Possible vivid dreams"],
    molecularFormula: "C14H22N4O9",
    molecularWeight: "390.35 g/mol",
    atomCount: 49,
    yearDiscovered: "1982",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "dsip",
    name: "DSIP",
    category: ["Wound Healing & Recovery"],
    shortDescription: "Delta sleep-inducing peptide for improved sleep quality and recovery.",
    fullDescription: "DSIP (Delta Sleep-Inducing Peptide) is a naturally occurring neuropeptide that regulates sleep cycles and promotes deep, restorative sleep. It influences various neurotransmitter systems and hormonal pathways involved in sleep regulation. Research demonstrates significant improvements in sleep quality, recovery, and stress resistance.",
    mechanismOfAction: "Modulates sleep-wake cycles through interaction with multiple neurotransmitter systems including GABA, serotonin, and dopamine pathways.",
    useCases: ["Sleep Enhancement", "Recovery Improvement", "Stress Reduction", "Circadian Regulation"],
    benefits: ["Improved sleep quality", "Enhanced recovery", "Stress reduction", "Better circadian rhythm"],
    dosageRange: "25-100 mcg daily",
    administration: ["Subcutaneous", "Intranasal"],
    halfLife: "15-30 minutes",
    sources: [
      {
        name: "Sleep Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Take before bedtime"],
    sideEffects: ["Drowsiness", "Vivid dreams", "Possible morning grogginess"],
    molecularFormula: "C35H48N10O15",
    molecularWeight: "848.81 g/mol",
    atomCount: 108,
    yearDiscovered: "1977",
    legalStatus: "Research Only (US/EU)",
    structure2D: "/placeholder-molecule.svg"
  },
  {
    id: "mots-c",
    name: "MOTS-c",
    category: ["Fat Loss & Recomposition", "Skin Regeneration & Anti-Aging"],
    shortDescription: "A mitochondrial-derived peptide for enhanced metabolism and longevity.",
    fullDescription: "MOTS-c is a mitochondrial-derived peptide that regulates metabolic homeostasis and cellular energy production. It enhances glucose uptake, promotes fat oxidation, and improves mitochondrial function. Research demonstrates significant improvements in metabolic health, exercise capacity, and various markers of aging and longevity.",
    mechanismOfAction: "Enhances glucose uptake in skeletal muscle, promotes fatty acid oxidation, and improves mitochondrial biogenesis and function.",
    useCases: ["Metabolic Enhancement", "Fat Loss", "Mitochondrial Health", "Longevity", "Exercise Performance"],
    benefits: ["Enhanced metabolism", "Improved fat oxidation", "Better mitochondrial function", "Increased exercise capacity"],
    dosageRange: "5-15 mg weekly",
    administration: ["Subcutaneous"],
    halfLife: "Several hours",
    sources: [
      {
        name: "Mitochondrial Research",
        url: "#",
        disclaimer: "External Site - Not Affiliated"
      }
    ],
    warnings: ["Research purposes only", "Monitor glucose levels"],
    sideEffects: ["Injection site reactions", "Mild fatigue", "Possible hypoglycemia"],
    molecularFormula: "C101H152N28O22S2",
    molecularWeight: "2174.53 g/mol",
    atomCount: 305,
    yearDiscovered: "2015",
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