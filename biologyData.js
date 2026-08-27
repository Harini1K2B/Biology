/**
 * The Living World - Class 11 Biology Dataset
 * Structured for React Application
 */

export const termsData = [
  {
    id: 1,
    term: "Taxonomy",
    phonetic: "/tækˈsɒn.ə.mi/",
    category: "Fundamental Science",
    definition: "The science of identification, nomenclature, and classification of organisms based on their external and internal structure, cell structure, developmental processes, and ecological information.",
    example: "Characterising a newly discovered plant by its floral morphology and placing it into the family Solanaceae.",
    memory: "Think 'T-I-N-C': Taxonomy involves Characterisation, Identification, Nomenclature, and Classification.",
    ncertRef: "NCERT Biology Class XI, Page 5"
  },
  {
    id: 2,
    term: "Systematics",
    phonetic: "/ˌsɪs.təˈmæt.ɪks/",
    category: "Evolutionary Biology",
    definition: "The branch of study dealing with the systematic arrangement of organisms, their diverse forms, and especially the evolutionary (phylogenetic) relationships among them.",
    example: "Using molecular phylogeny and fossil history to determine how angiosperms evolved from earlier plant lineages.",
    memory: "Derived from the Latin word 'systema' (systematic arrangement). Carolus Linnaeus used 'Systema Naturae' as the title of his publication.",
    ncertRef: "NCERT Biology Class XI, Page 6"
  },
  {
    id: 3,
    term: "Species",
    phonetic: "/ˈspiː.ʃiːz/",
    category: "Taxonomic Category",
    definition: "The basic unit of taxonomic classification consisting of a group of individual organisms with fundamental morphological similarities, capable of interbreeding to produce fertile offspring.",
    example: "In Mangifera indica, 'indica' represents the specific epithet of the mango species.",
    memory: "Species is the lowest and most specific category in the taxonomic hierarchy with the highest number of common traits.",
    ncertRef: "NCERT Biology Class XI, Page 6"
  },
  {
    id: 4,
    term: "Nomenclature",
    phonetic: "/nəʊˈmɛŋ.klə.tʃər/",
    category: "Standardization",
    definition: "The standardized system of assigning universally accepted scientific names to organisms, ensuring that every organism has only one unique name recognized worldwide.",
    example: "Providing Mangifera indica as the unique universal name for mango instead of various local names like Aam or Mango.",
    memory: "Governed by international scientific bodies: ICBN for plants and ICZN for animals.",
    ncertRef: "NCERT Biology Class XI, Page 4"
  },
  {
    id: 5,
    term: "Binomial Nomenclature",
    phonetic: "/baɪˈnəʊ.mi.əl nəʊˈmɛŋ.klə.tʃər/",
    category: "Naming Convention",
    definition: "A standardized naming system proposed by Carolus Linnaeus in which each scientific name consists of two distinct components: the Generic name (Genus) and the Specific epithet (Species).",
    example: "Homo sapiens for human beings, where 'Homo' is the genus and 'sapiens' is the specific epithet.",
    memory: "First word Capitalized (Genus), Second word small (species), printed in italics or underlined separately when handwritten.",
    ncertRef: "NCERT Biology Class XI, Page 4"
  },
  {
    id: 6,
    term: "Taxon (plural: Taxa)",
    phonetic: "/ˈtæk.sɒn/",
    category: "Classification Unit",
    definition: "A taxonomic group or category of any rank in the classification hierarchy (e.g., 'Plants', 'Angiosperms', 'Dicotyledonae', 'Solanaceae', 'Panthera', or 'indica' all represent taxa at different levels).",
    example: "Dogs, Mammals, and Animals each represent a taxon, but at different hierarchical levels.",
    memory: "Taxon = any distinct rank or entity recognized in classification.",
    ncertRef: "NCERT Biology Class XI, Page 5"
  },
  {
    id: 7,
    term: "Herbarium",
    phonetic: "/hɜːˈbɛə.ri.əm/",
    category: "Taxonomical Aid",
    definition: "A storehouse of collected plant specimens that are dried, pressed, and mounted on standard paper sheets (standard size 29 × 41.5 cm), arranged systematically according to a recognized classification system for reference and research.",
    example: "The Royal Botanic Gardens at Kew (London) houses millions of herbarium specimen sheets.",
    memory: "Serves as a 'quick referral system' in taxonomic studies. Sheet label records date, place, names (local, English, botanical), family, and collector's name.",
    ncertRef: "NCERT Biology Class XI, Page 8"
  }
];

export const terminologyQuizData = [
  {
    question: "Who introduced the universal system of Binomial Nomenclature?",
    options: ["Aristotle", "Carolus Linnaeus", "Charles Darwin", "Robert Hooke"],
    answer: 1,
    explanation: "Carolus Linnaeus introduced the binomial system of nomenclature, first describing it comprehensively in his works Systema Naturae and Species Plantarum."
  },
  {
    question: "Which of the following is considered a 'defining property' of all living organisms without exception?",
    options: ["Extrinsic Growth", "Sexual Reproduction", "Cellular Metabolism", "Locomotion"],
    answer: 2,
    explanation: "Metabolism and cellular organization are defining properties because all living organisms perform metabolic reactions and no non-living object exhibits metabolism."
  },
  {
    question: "In the scientific name 'Mangifera indica Linn.', what does 'Linn.' indicate?",
    options: ["The species variety", "The Latin language code", "The author who first described the species", "The location where the plant was discovered"],
    answer: 2,
    explanation: "'Linn.' is the author citation indicating that the species was first validly described by Carolus Linnaeus."
  },
  {
    question: "Which sequence correctly represents the ascending order of taxonomic categories?",
    options: [
      "Species → Genus → Order → Family → Class → Phylum → Kingdom",
      "Species → Genus → Family → Order → Class → Phylum → Kingdom",
      "Kingdom → Phylum → Class → Order → Family → Genus → Species",
      "Species → Family → Genus → Order → Class → Division → Kingdom"
    ],
    answer: 1,
    explanation: "The correct ascending sequence from lowest to highest category is: Species → Genus → Family → Order → Class → Phylum/Division → Kingdom."
  },
  {
    question: "Which of the following information is NOT found on a standard Herbarium sheet label?",
    options: ["Collector's name", "Place and date of collection", "Height and mass of the living plant", "Botanical and Family name"],
    answer: 2,
    explanation: "A herbarium sheet contains date, place of collection, local names, botanical name, family, and collector's name. It does NOT record plant height or weight."
  }
];

export const skillsData = {
  1: {
    id: 1,
    title: "Characteristics of Living Organisms",
    icon: "🏛️",
    badgeDesc: "Growth, reproduction, metabolism, cellular organization, and consciousness. Distinguish defining vs non-defining traits.",
    learn: `
      <h3>1. What Defines Living Beings?</h3>
      <p>To understand life, biologists evaluate five primary biological characteristics and classify them into <strong>Defining</strong> vs <strong>Non-Defining</strong> properties:</p>
      
      <div style="margin: 16px 0; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div style="background: #f0fdf4; border: 1.5px solid #bbf7d0; border-radius: 10px; padding: 14px;">
          <h4 style="color: #166534; margin-bottom: 6px;">✅ Defining Characteristics</h4>
          <ul style="padding-left: 18px; font-size: 13.5px; color: #15803d; line-height: 1.6;">
            <li><strong>Metabolism:</strong> Sum total of all biochemical reactions in an organism. No non-living entity metabolizes.</li>
            <li><strong>Cellular Organization:</strong> Life only exists inside organized cellular units.</li>
            <li><strong>Consciousness:</strong> Ability to sense environmental stimuli (physical, chemical, biological) and respond.</li>
          </ul>
        </div>
        <div style="background: #fef2f2; border: 1.5px solid #fecaca; border-radius: 10px; padding: 14px;">
          <h4 style="color: #991b1b; margin-bottom: 6px;">❌ Non-Defining Characteristics</h4>
          <ul style="padding-left: 18px; font-size: 13.5px; color: #b91c1c; line-height: 1.6;">
            <li><strong>Growth:</strong> Non-living things (mountains, sand dunes) also exhibit extrinsic growth by accumulating mass on their surface.</li>
            <li><strong>Reproduction:</strong> Many sterile living organisms exist (e.g. Mules, sterile worker bees, infertile human couples) that do not reproduce.</li>
          </ul>
        </div>
      </div>
      
      <div style="background: #eef2ff; border-left: 4px solid #6366f1; padding: 12px 16px; border-radius: 6px; font-size: 14px; color: #1e1b4b;">
        <strong>Key Insight:</strong> Living organisms are self-replicating, evolving, and self-regulating interactive systems capable of responding to external stimuli.
      </div>
    `,
    practice: [
      {
        question: "Why is growth NOT considered an exclusive defining characteristic of living organisms?",
        options: [
          "Living organisms stop growing after a certain age",
          "Non-living objects also grow by extrinsic accumulation of material",
          "Growth is controlled only by external temperature",
          "Unicellular organisms do not grow"
        ],
        answer: 1,
        explanation: "Non-living objects like mountains, boulders, and sand dunes increase in mass by accumulation of material on their surface (extrinsic growth)."
      },
      {
        question: "Which of the following organisms exhibit lack of reproduction while still being completely living?",
        options: ["Sterile worker bees", "Mules", "Infertile human couples", "All of the above"],
        answer: 3,
        explanation: "Mules, sterile worker bees, and infertile human couples are all living beings that cannot reproduce, proving reproduction is not an all-inclusive defining trait."
      }
    ],
    assess: [
      {
        question: "A patient lying in a coma supported by machines has neither consciousness nor brain activity. Is consciousness a defining characteristic for all living organisms?",
        options: [
          "No, because humans are the only living organisms",
          "Yes, all living beings respond to environmental cues at a cellular/organism level, while self-consciousness is unique to conscious humans",
          "No, non-living machines also have consciousness",
          "Yes, but only in plants"
        ],
        answer: 1,
        explanation: "Consciousness (responsiveness to external stimuli) is a defining property of all life. Self-consciousness is an advanced state seen in humans."
      },
      {
        question: "Isolated metabolic reactions carried out in vitro in a cell-free test tube are:",
        options: [
          "Living organisms",
          "Non-living things",
          "Neither living nor non-living things, but surely living reactions",
          "Extrinsic physical phenomena"
        ],
        answer: 2,
        explanation: "NCERT states: Isolated metabolic reactions in vitro are not living things but are surely living reactions."
      },
      {
        question: "What is the primary difference between growth in plants versus growth in animals?",
        options: [
          "Plants grow only during night, animals grow during day",
          "Plants grow continuously throughout their lifespan by cell division; animals grow only up to a certain age",
          "Plants grow extrinsically; animals grow intrinsically",
          "Plants do not grow by cell division"
        ],
        answer: 1,
        explanation: "In plants, growth by cell division occurs continuously throughout their lifespan due to meristematic tissue, while in animals it occurs only up to a certain age."
      }
    ]
  },
  2: {
    id: 2,
    title: "Taxonomic Categories & Hierarchy",
    icon: "🧬",
    badgeDesc: "Species → Genus → Family → Order → Class → Phylum/Division → Kingdom. Understand commonalities and specificity across ranks.",
    learn: `
      <h3>2. The Taxonomic Hierarchy</h3>
      <p>Classification is a multi-step process where each step represents a category or rank. The overall hierarchy encompasses seven obligate categories:</p>

      <div class="hierarchy-flow">
        <div class="hierarchy-step">
          <span class="hierarchy-rank">1. Kingdom (Highest)</span>
          <span class="hierarchy-ex">e.g., Animalia, Plantae (Lowest specificity)</span>
        </div>
        <div class="hierarchy-step">
          <span class="hierarchy-rank">2. Phylum / Division</span>
          <span class="hierarchy-ex">Phylum in Animals (Chordata), Division in Plants (Angiospermae)</span>
        </div>
        <div class="hierarchy-step">
          <span class="hierarchy-rank">3. Class</span>
          <span class="hierarchy-ex">e.g., Mammalia, Insecta, Dicotyledonae</span>
        </div>
        <div class="hierarchy-step">
          <span class="hierarchy-rank">4. Order</span>
          <span class="hierarchy-ex">e.g., Primata, Carnivora, Sapindales, Polemoniales</span>
        </div>
        <div class="hierarchy-step">
          <span class="hierarchy-rank">5. Family</span>
          <span class="hierarchy-ex">e.g., Hominidae, Felidae, Canidae, Solanaceae</span>
        </div>
        <div class="hierarchy-step">
          <span class="hierarchy-rank">6. Genus</span>
          <span class="hierarchy-ex">e.g., Homo, Panthera, Solanum, Mangifera</span>
        </div>
        <div class="hierarchy-step">
          <span class="hierarchy-rank">7. Species (Lowest)</span>
          <span class="hierarchy-ex">e.g., sapiens, leo, tuberosum, indica (Highest commonality)</span>
        </div>
      </div>
      <div style="margin-top: 16px; font-size: 13.5px; color: #475569; background: #f8fafc; padding: 12px; border-radius: 8px;">
        <strong>Golden Rule:</strong> As we go from <em>Species → Kingdom</em>, the number of common characteristics <strong>decreases</strong>, making determination of relationships more complex.
      </div>
    `,
    practice: [
      {
        question: "Which category includes related genera with fewer common characters compared to genus and species?",
        options: ["Family", "Order", "Class", "Kingdom"],
        answer: 0,
        explanation: "A Family is a group of related genera (e.g., Solanum, Petunia, and Datura are placed together in the family Solanaceae)."
      },
      {
        question: "The plant family Solanaceae and Convolvulaceae are included in which Order mainly based on floral characters?",
        options: ["Sapindales", "Polemoniales", "Rosales", "Poales"],
        answer: 1,
        explanation: "Plant families like Convolvulaceae and Solanaceae are placed under the Order Polemoniales based on floral characters."
      }
    ],
    assess: [
      {
        question: "Which of the following sets of animals belongs to the same Genus?",
        options: [
          "Lion, Leopard, Tiger",
          "Dog, Wolf, Cat",
          "Human, Chimpanzee, Gorilla",
          "Housefly, Butterfly, Mosquito"
        ],
        answer: 0,
        explanation: "Lion (Panthera leo), Leopard (Panthera pardus), and Tiger (Panthera tigris) all belong to the genus Panthera."
      },
      {
        question: "As we go higher from species to kingdom in a taxonomic hierarchy, the number of common characteristics:",
        options: ["Increases", "Decreases", "Remains same", "May increase or decrease randomly"],
        answer: 1,
        explanation: "Lower the taxa, more are the characteristics that members within the taxon share. Higher the category, lesser the common characteristics."
      },
      {
        question: "In taxonomic hierarchy, what term is used in place of 'Phylum' for plants?",
        options: ["Cohort", "Division", "Order", "Tribe"],
        answer: 1,
        explanation: "In plant taxonomy, the category 'Division' is used corresponding to the 'Phylum' of animal classification."
      }
    ]
  },
  3: {
    id: 3,
    title: "Binomial Nomenclature Rules",
    icon: "✍️",
    badgeDesc: "ICBN/ICZN naming conventions, Latinisation, italicization, author citations, and frequent NEET question traps.",
    learn: `
      <h3>3. Principles of Binomial Nomenclature</h3>
      <p>Standardized by Carolus Linnaeus in <em>Species Plantarum</em> (1753) and <em>Systema Naturae</em> (1758):</p>
      
      <div style="margin: 14px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px;">
        <ol style="margin-left: 20px; line-height: 1.8; font-size: 14px; color: #1e293b;">
          <li><strong>Two Words:</strong> First word is <em>Genus</em>, second word is <em>Specific Epithet</em>.</li>
          <li><strong>Latinization:</strong> Names are Latinized or derived from Latin regardless of their source language.</li>
          <li><strong>Font Formatting:</strong> Printed in <em>italics</em>; when written by hand, both words must be <u>underlined separately</u>.</li>
          <li><strong>Case Sensitivity:</strong> Genus starts with an initial Capital letter (e.g. <em>Homo</em>), while the specific epithet starts with a small letter (e.g. <em>sapiens</em>).</li>
          <li><strong>Author Citation:</strong> The author's abbreviated name follows in Roman type: <em>Mangifera indica</em> Linn.</li>
        </ol>
      </div>

      <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 10px 14px; border-radius: 6px; font-size: 13.5px; color: #991b1b;">
        <strong>Common Exam Mistake:</strong> Writing <em>Homo Sapiens</em> (capital S) or underlining together <u>Homo sapiens</u> as a single continuous line instead of two separate lines!
      </div>
    `,
    practice: [
      {
        question: "Which of the following biological names is formatted completely accurately according to international codes?",
        options: [
          "Homo Sapiens",
          "homo sapiens",
          "Homo sapiens Linn.",
          "HOMO SAPIENS"
        ],
        answer: 2,
        explanation: "Homo sapiens Linn. is formatted accurately: capitalized genus, lowercase species, printed in italics, with author citation in Roman script."
      },
      {
        question: "What do the abbreviations ICBN and ICZN stand for?",
        options: [
          "International Code for Biological Nomenclature & International Code for Zoo Nomenclature",
          "International Code of Botanical Nomenclature & International Code of Zoological Nomenclature",
          "Indian Code of Botanical Names & Indian Code of Zoological Names",
          "International Commission of Bacterial Nomenclature & International Commission of Zoology"
        ],
        answer: 1,
        explanation: "ICBN stands for International Code of Botanical Nomenclature, and ICZN stands for International Code of Zoological Nomenclature."
      }
    ],
    assess: [
      {
        question: "When handwritten, how should the scientific name of Mango be represented?",
        options: [
          "<u>Mangifera indica</u> (single continuous line)",
          "<u>Mangifera</u> <u>indica</u> (two separate underlines)",
          "Mangifera indica (in quotation marks)",
          "MANGIFERA INDICA (all uppercase)"
        ],
        answer: 1,
        explanation: "When handwritten, the generic name and specific epithet must be underlined separately to indicate their Latin origin."
      },
      {
        question: "Can two different plant species have the exact same specific epithet?",
        options: [
          "No, every species name on Earth must be unique",
          "Yes, provided they belong to different genera (e.g., Solanum nigrum and Brassica nigra)",
          "Only in animals, never in plants",
          "Only if approved by ICBN annual council"
        ],
        answer: 1,
        explanation: "The specific epithet can be repeated in different genera because the full biological binomial (Genus + Species) remains distinct."
      },
      {
        question: "What is a 'Tautonym' in biological classification?",
        options: [
          "A name given to an extinct species",
          "When generic name and specific epithet are identical in spelling (valid in ICZN, not in ICBN)",
          "A name without an author citation",
          "A synonym used locally"
        ],
        answer: 1,
        explanation: "Tautonyms (e.g., Naja naja, Rattus rattus) have identical genus and species names. They are valid in zoological nomenclature but prohibited under ICBN for plants."
      }
    ]
  },
  4: {
    id: 4,
    title: "Taxonomical Aids",
    icon: "📚",
    badgeDesc: "Herbarium, botanical gardens, museums, zoological parks, manual, monographs, and dichotomous taxonomic keys (couplet & lead).",
    learn: `
      <h3>4. Tools for Taxonomic Identification</h3>
      <p>Taxonomical aids are collection repositories, techniques, and procedures used for identification and preservation of organisms:</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 16px 0;">
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
          <h4 style="color: #4f46e5; margin-bottom: 4px;">🌿 Herbarium</h4>
          <p style="font-size: 13px; color: #475569;">Dried, pressed, and mounted plant specimens on paper sheets (standard 29 × 41.5 cm). Quick referral system.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
          <h4 style="color: #059669; margin-bottom: 4px;">🌳 Botanical Gardens</h4>
          <p style="font-size: 13px; color: #475569;">Collections of living plants for reference and identification (e.g., Kew England, Howrah India, NBRI Lucknow).</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
          <h4 style="color: #d97706; margin-bottom: 4px;">🏛️ Museums</h4>
          <p style="font-size: 13px; color: #475569;">Preserved plant and animal specimens in jars with preservative solutions (formalin) or dried/stuffed skeletons.</p>
        </div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px;">
          <h4 style="color: #7c3aed; margin-bottom: 4px;">🔑 Taxonomic Key</h4>
          <p style="font-size: 13px; color: #475569;">Analytical tool based on contrasting characters in a pair called a <strong>Couplet</strong>. Each individual statement in a key is called a <strong>Lead</strong>.</p>
        </div>
      </div>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; font-size: 13px; color: #334155;">
        <strong>Other Taxonomic Literatures:</strong><br>
        • <strong>Flora:</strong> Contains actual account of habitat and distribution of plants of a given area.<br>
        • <strong>Manuals:</strong> Useful in providing information for identification of names of species found in an area.<br>
        • <strong>Monographs:</strong> Contain comprehensive information on any <em>one</em> taxon.
      </div>
    `,
    practice: [
      {
        question: "In a taxonomic key, a pair of contrasting characters is called a:",
        options: ["Lead", "Couplet", "Taxon", "Monograph"],
        answer: 1,
        explanation: "Keys are based on the contrasting characters generally in a pair called a couplet."
      },
      {
        question: "Which taxonomical aid contains complete comprehensive information regarding only ONE specific taxon?",
        options: ["Flora", "Manual", "Monograph", "Catalogue"],
        answer: 2,
        explanation: "Monographs contain information on any one taxon."
      }
    ],
    assess: [
      {
        question: "Each individual statement in a taxonomic key is referred to as a:",
        options: ["Couplet", "Lead", "Taxon", "Keynote"],
        answer: 1,
        explanation: "Each statement in the key is called a lead."
      },
      {
        question: "National Botanical Research Institute (NBRI) is situated at:",
        options: ["Kolkata", "Lucknow", "New Delhi", "Dehradun"],
        answer: 1,
        explanation: "NBRI (National Botanical Research Institute) is situated in Lucknow, Uttar Pradesh, India."
      },
      {
        question: "How are insects typically preserved in educational biology museums?",
        options: [
          "Pressed on standard herbarium sheets",
          "Collected, killed, and pinned in insect boxes",
          "Kept live in water containers",
          "Embedded in wax blocks without pinning"
        ],
        answer: 1,
        explanation: "In museums, insects are preserved in insect boxes after collecting, killing, and pinning."
      }
    ]
  }
};

export const pyqData = [
  {
    question: "Which one of the following belongs to the family Muscidae?",
    options: ["Grasshopper", "Cockroach", "Housefly", "Firefly"],
    answer: 2,
    explanation: "Housefly (Musca domestica) belongs to the Family Muscidae, Order Diptera, Class Insecta, and Phylum Arthropoda."
  },
  {
    question: "Match the following items in Column I with those in Column II:\n(a) Herbarium - (i) Preserved specimen in jars\n(b) Key - (ii) Quick referral system for plant taxonomy\n(c) Museum - (iii) Information on one taxon\n(d) Monograph - (iv) Based on couplet and leads",
    options: [
      "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
      "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
      "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
      "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)"
    ],
    answer: 0,
    explanation: "Herbarium = Quick referral system; Key = Based on couplets/leads; Museum = Preserved specimens in containers; Monograph = Information on any one taxon."
  },
  {
    question: "The label of a herbarium sheet does NOT carry information on:",
    options: ["Date of collection", "Name of collector", "Local names", "Height of the plant"],
    answer: 3,
    explanation: "Standard herbarium labels do NOT contain plant height, anatomical details, or physiological status."
  },
  {
    question: "Select the correctly written scientific name of Mango which was first described by Carolus Linnaeus:",
    options: [
      "Mangifera Indica",
      "Mangifera indica Car. Linn.",
      "Mangifera indica Linn.",
      "Mangifera indica"
    ],
    answer: 2,
    explanation: "Mangifera indica Linn. is the correct formal designation with author citation in roman script."
  }
];

export const prerequisitesData = [
  {
    id: 1,
    icon: "🌍",
    title: "Biological Diversity",
    desc: "General awareness of the variety of organisms around us (Class IX–X)."
  },
  {
    id: 2,
    icon: "🔬",
    title: "Scientific Observation",
    desc: "Basic understanding of how scientists classify and study natural phenomena."
  },
  {
    id: 3,
    icon: "📖",
    title: "Common Naming",
    desc: "Familiarity with everyday/common names of plants and animals, to contrast with scientific naming."
  }
];

export const sixBigQuestions = [
  {
    id: "what",
    icon: "❓",
    type: "What",
    sub: "is Life?",
    colorClass: "q-color-what",
    iconClass: "icon-what",
    answer: "Life is a unique, complex cellular organization of molecules expressing itself through chemical reactions that lead to growth, development, responsiveness, adaptation, and reproduction. The **defining characteristics** of all living organisms are *Metabolism*, *Cellular Organization*, and *Consciousness*."
  },
  {
    id: "why",
    icon: "💡",
    type: "Why",
    sub: "do we classify organisms?",
    colorClass: "q-color-why",
    iconClass: "icon-why",
    answer: "With 1.7–1.8 million known species (and millions undiscovered), classification enables universal scientific communication, prevents confusion caused by local vernacular names, and establishes evolutionary relationships."
  },
  {
    id: "who",
    icon: "👤",
    type: "Who",
    sub: "developed modern taxonomy?",
    colorClass: "q-color-who",
    iconClass: "icon-who",
    answer: "**Carolus Linnaeus (1707–1778)**, the *Father of Modern Taxonomy*, established the standardized Binomial Nomenclature system published in his monumental works *Species Plantarum* (1753) and *Systema Naturae* (1758)."
  },
  {
    id: "where",
    icon: "📍",
    type: "Where",
    sub: "is biodiversity concentrated?",
    colorClass: "q-color-where",
    iconClass: "icon-where",
    answer: "Biodiversity peaks near the equator in tropical rainforests, coral reefs, and global biodiversity hotspots (such as the Western Ghats, Indo-Burma, and the Himalayas) where climate stability fosters extraordinary species richness."
  },
  {
    id: "when",
    icon: "⏰",
    type: "When",
    sub: "did formal classification emerge?",
    colorClass: "q-color-when",
    iconClass: "icon-when",
    answer: "Systematic classification began with Aristotle's early groupings, evolved into Linnaean artificial systems, advanced through Bentham & Hooker's natural systems, and culminates in modern phylogenetic and molecular taxonomy."
  },
  {
    id: "how",
    icon: "🔍",
    type: "How",
    sub: "do we identify & name a species?",
    colorClass: "q-color-how",
    iconClass: "icon-how",
    answer: "Biologists follow 4 cardinal steps: **1. Characterisation** (recording traits), **2. Identification** (matching known taxa via keys), **3. Nomenclature** (assigning binomial Latin names per ICBN/ICZN), and **4. Classification** (positioning in taxonomic hierarchy)."
  }
];

export const webOfBiologyData = [
  {
    id: 1,
    icon: "🧬",
    tag: "Direct",
    tagClass: "direct",
    from: "The Living World (Ch.1)",
    to: "Biological Classification (Ch.2)",
    desc: "The taxonomic categories and hierarchy introduced here are applied directly to classify all five kingdoms."
  },
  {
    id: 2,
    icon: "🌿",
    tag: "Direct",
    tagClass: "direct",
    from: "The Living World (Ch.1)",
    to: "Plant Kingdom (Ch.3)",
    desc: "Binomial nomenclature and taxonomic aids are used to identify and name every plant group studied."
  },
  {
    id: 3,
    icon: "🐾",
    tag: "Direct",
    tagClass: "direct",
    from: "The Living World (Ch.1)",
    to: "Animal Kingdom (Ch.4)",
    desc: "The same classification hierarchy (species → kingdom) structures the animal chapter."
  },
  {
    id: 4,
    icon: "🧪",
    tag: "Mirror",
    tagClass: "mirror",
    from: "The Living World (Ch.1)",
    to: "Morphology of Flowering Plants (Ch.5)",
    desc: "Herbaria and taxonomic keys introduced here are the tools used to identify flowering plant morphology."
  },
  {
    id: 5,
    icon: "🧬",
    tag: "Long-term",
    tagClass: "long-term",
    from: "The Living World (Ch.1)",
    to: "Evolution (Class XII)",
    desc: "The species concept and taxonomic hierarchy form the basis for understanding evolutionary relationships."
  }
];

export const realWorldData = [
  {
    id: 1,
    badge: "IMPACT: ESSENTIAL",
    badgeClass: "impact-essential",
    title: "Biodiversity Conservation",
    desc: "Taxonomy allows scientists to catalog and protect endangered species; the IUCN Red List depends on accurate species identification."
  },
  {
    id: 2,
    badge: "IMPACT: HIGH",
    badgeClass: "impact-high",
    title: "Agriculture & Pest Control",
    desc: "Correct identification of crop pests and their natural predators using taxonomic keys prevents misapplication of pesticides."
  },
  {
    id: 3,
    badge: "IMPACT: ESSENTIAL",
    badgeClass: "impact-essential",
    title: "Drug Discovery (Pharmacognosy)",
    desc: "New medicines are often derived from specific, correctly identified plant and microbial species — misidentification can be dangerous."
  }
];

export const ncertTableData = [
  {
    commonName: "Man",
    bioName: "Homo sapiens",
    genus: "Homo",
    family: "Hominidae",
    order: "Primata",
    className: "Mammalia",
    phylum: "Chordata"
  },
  {
    commonName: "Housefly",
    bioName: "Musca domestica",
    genus: "Musca",
    family: "Muscidae",
    order: "Diptera",
    className: "Insecta",
    phylum: "Arthropoda"
  },
  {
    commonName: "Mango",
    bioName: "Mangifera indica",
    genus: "Mangifera",
    family: "Anacardiaceae",
    order: "Sapindales",
    className: "Dicotyledonae",
    phylum: "Angiospermae"
  },
  {
    commonName: "Wheat",
    bioName: "Triticum aestivum",
    genus: "Triticum",
    family: "Poaceae",
    order: "Poales",
    className: "Monocotyledonae",
    phylum: "Angiospermae"
  }
];
