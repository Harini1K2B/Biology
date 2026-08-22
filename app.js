/**
 * skill100.ai - The Living World Interactive Chapter Engine
 * NCERT Class 11 Biology - Chapter 1
 */

// ============================================================================
// State Management
// ============================================================================
const state = {
  currentView: 'dashboard',
  masteryPercentage: 0,
  masteredSkills: new Set(),
  activeSkillId: 1,
  activeModalTab: 'learn',
  selectedTermId: 1,
  quizCurrentIndex: 0,
  quizScore: 0,
  pyqCurrentIndex: 0,
  pyqScore: 0,
  examMode: 'neet',
  practiceState: {},
  assessState: {}
};

// ============================================================================
// Data: Key Terms (The Living World Lexicon)
// ============================================================================
const termsData = [
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

// ============================================================================
// Data: Terminology Quiz
// ============================================================================
const terminologyQuizData = [
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

// ============================================================================
// Data: Skills Detailed Lessons, Practice & Assessment
// ============================================================================
const skillsData = {
  1: {
    title: "Characteristics of Living Organisms",
    icon: "🏛️",
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
    title: "Taxonomic Categories & Hierarchy",
    icon: "🧬",
    learn: `
      <h3>2. The Taxonomic Hierarchy</h3>
      <p>Classification is a multi-step process where each step represents a category or rank. The overall hierarchy encompasses seven obligate categories:</p>

      <div class="hierarchy-flow">
        <div class="hierarchy-step" onclick="showHierarchyDetail('kingdom')">
          <span class="hierarchy-rank">1. Kingdom (Highest)</span>
          <span class="hierarchy-ex">e.g., Animalia, Plantae (Lowest specificity)</span>
        </div>
        <div class="hierarchy-step" onclick="showHierarchyDetail('phylum')">
          <span class="hierarchy-rank">2. Phylum / Division</span>
          <span class="hierarchy-ex">Phylum in Animals (Chordata), Division in Plants (Angiospermae)</span>
        </div>
        <div class="hierarchy-step" onclick="showHierarchyDetail('class')">
          <span class="hierarchy-rank">3. Class</span>
          <span class="hierarchy-ex">e.g., Mammalia, Insecta, Dicotyledonae</span>
        </div>
        <div class="hierarchy-step" onclick="showHierarchyDetail('order')">
          <span class="hierarchy-rank">4. Order</span>
          <span class="hierarchy-ex">e.g., Primata, Carnivora, Sapindales, Polymoniales</span>
        </div>
        <div class="hierarchy-step" onclick="showHierarchyDetail('family')">
          <span class="hierarchy-rank">5. Family</span>
          <span class="hierarchy-ex">e.g., Hominidae, Felidae, Canidae, Solanaceae</span>
        </div>
        <div class="hierarchy-step" onclick="showHierarchyDetail('genus')">
          <span class="hierarchy-rank">6. Genus</span>
          <span class="hierarchy-ex">e.g., Homo, Panthera, Solanum, Mangifera</span>
        </div>
        <div class="hierarchy-step" onclick="showHierarchyDetail('species')">
          <span class="hierarchy-rank">7. Species (Lowest)</span>
          <span class="hierarchy-ex">e.g., sapiens, leo, tuberosum, indica (Highest commonality)</span>
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
    title: "Binomial Nomenclature Rules",
    icon: "✍️",
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
    title: "Taxonomical Aids",
    icon: "📚",
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

// ============================================================================
// Data: NEET Previous Year Questions (PYQs)
// ============================================================================
const pyqData = [
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

// ============================================================================
// Core Navigation & Router
// ============================================================================
function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash.replace('#', '') || 'dashboard';
  navigateTo(hash, false);
}

function navigateTo(viewName, updateHash = true) {
  const validViews = ['dashboard', 'connectomics', 'introduction', 'terminology', 'skills', 'exam-edge'];
  const targetView = validViews.includes(viewName) ? viewName : 'dashboard';

  state.currentView = targetView;

  // Toggle View Sections
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });

  const activeSection = document.getElementById(`view-${targetView}`);
  if (activeSection) {
    activeSection.classList.add('active');
  }

  // Toggle Sub-Page Top Tab Navigation Bar
  const subpageBar = document.getElementById('subpage-nav-bar');
  if (targetView === 'dashboard') {
    subpageBar.style.display = 'none';
  } else {
    subpageBar.style.display = 'block';
    // Update active tab button
    document.querySelectorAll('#subpage-tabs .tab-pill').forEach(btn => {
      const target = btn.getAttribute('data-target');
      if (target === targetView) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  if (updateHash) {
    window.location.hash = targetView;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================================
// Terminology (Lexicon) Module
// ============================================================================
function initTerminology() {
  // Render terms list
  const listContainer = document.getElementById('terms-list-container');
  if (!listContainer) return;

  listContainer.innerHTML = '';
  termsData.forEach(item => {
    const el = document.createElement('div');
    el.className = `term-list-item ${item.id === state.selectedTermId ? 'active' : ''}`;
    el.setAttribute('data-id', item.id);
    el.innerHTML = `
      <span class="term-list-name">${item.term}</span>
      <span class="term-list-num">0${item.id}</span>
    `;
    el.addEventListener('click', () => {
      selectTerm(item.id);
    });
    listContainer.appendChild(el);
  });

  renderTermDetail(state.selectedTermId);

  // Sub-pane navigation in Lexicon
  document.querySelectorAll('.lexicon-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lexicon-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.lexicon-pane').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = btn.getAttribute('data-lexicon-pane');
      const paneEl = document.getElementById(targetPane);
      if (paneEl) paneEl.classList.add('active');
    });
  });

  // Name Validator Game
  initNameValidator();

  // Terminology Quiz
  initLexiconQuiz();
}

function selectTerm(id) {
  state.selectedTermId = id;
  document.querySelectorAll('.term-list-item').forEach(el => {
    if (parseInt(el.getAttribute('data-id'), 10) === id) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
  renderTermDetail(id);
}

function renderTermDetail(id) {
  const detailContainer = document.getElementById('term-detail-display');
  const term = termsData.find(t => t.id === id) || termsData[0];

  detailContainer.innerHTML = `
    <div class="detail-header">
      <div>
        <h2 class="detail-title">${term.term}</h2>
        <span style="font-size: 13.5px; color: #64748b; font-family: monospace;">${term.phonetic} • <strong style="color: #6366f1;">${term.category}</strong></span>
      </div>
      <button class="audio-btn" title="Pronounce term" onclick="speakTerm('${term.term}')">🔊</button>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">NCERT Definition</div>
      <p class="detail-desc">${term.definition}</p>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">Key Example</div>
      <p style="font-size: 14.5px; color: #334155;">${term.example}</p>
    </div>

    <div class="memory-box">
      <div class="memory-box-title">
        <span>💡</span> Quick Memory & NEET Tip
      </div>
      <div class="memory-box-desc">${term.memory}</div>
    </div>
  `;
}

function speakTerm(word) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

// 5 Golden Rules Name Validator Game
function initNameValidator() {
  const options = document.querySelectorAll('#validator-options .validator-option');
  const feedback = document.getElementById('validator-feedback');

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => {
        o.classList.remove('correct', 'wrong');
      });

      const isCorrect = opt.getAttribute('data-correct') === 'true';
      if (isCorrect) {
        opt.classList.add('correct');
        feedback.innerHTML = `<span style="color: #15803d;">🎉 Correct! <em>Mangifera indica</em> has a capitalized Genus, lowercase species epithet, and is italicized.</span>`;
      } else {
        opt.classList.add('wrong');
        feedback.innerHTML = `<span style="color: #b91c1c;">❌ Incorrect format. Remember: Genus must be Capitalized, species must be lowercase, and non-italicized plain/all-caps text violates binomial rules.</span>`;
      }
    });
  });
}

// Terminology Quiz Engine
function initLexiconQuiz() {
  state.quizCurrentIndex = 0;
  state.quizScore = 0;
  renderQuizQuestion();

  document.getElementById('btn-next-quiz-q').addEventListener('click', () => {
    state.quizCurrentIndex++;
    if (state.quizCurrentIndex < terminologyQuizData.length) {
      renderQuizQuestion();
    } else {
      showQuizCompletion();
    }
  });

  document.getElementById('btn-restart-quiz').addEventListener('click', () => {
    state.quizCurrentIndex = 0;
    state.quizScore = 0;
    document.getElementById('btn-restart-quiz').style.display = 'none';
    renderQuizQuestion();
  });
}

function renderQuizQuestion() {
  const qData = terminologyQuizData[state.quizCurrentIndex];
  const progressLabel = document.getElementById('quiz-progress-label');
  const scoreDisplay = document.getElementById('quiz-score-display');
  const qText = document.getElementById('quiz-question-text');
  const optionsContainer = document.getElementById('quiz-options-container');
  const explanationBox = document.getElementById('quiz-explanation-box');
  const nextBtn = document.getElementById('btn-next-quiz-q');

  progressLabel.textContent = `Question ${state.quizCurrentIndex + 1} of ${terminologyQuizData.length}`;
  scoreDisplay.textContent = `Score: ${state.quizScore} / ${state.quizCurrentIndex}`;
  qText.textContent = qData.question;
  explanationBox.className = 'quiz-explanation';
  explanationBox.style.display = 'none';
  nextBtn.style.display = 'none';

  optionsContainer.innerHTML = '';
  qData.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.textContent = optText;
    btn.addEventListener('click', () => handleQuizAnswer(idx, qData.answer, qData.explanation));
    optionsContainer.appendChild(btn);
  });
}

function handleQuizAnswer(selectedIdx, correctIdx, explanation) {
  const buttons = document.querySelectorAll('#quiz-options-container .quiz-option-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add('selected-correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('selected-wrong');
    }
  });

  if (selectedIdx === correctIdx) {
    state.quizScore++;
  }

  const scoreDisplay = document.getElementById('quiz-score-display');
  scoreDisplay.textContent = `Score: ${state.quizScore} / ${state.quizCurrentIndex + 1}`;

  const explanationBox = document.getElementById('quiz-explanation-box');
  explanationBox.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
  explanationBox.style.display = 'block';

  document.getElementById('btn-next-quiz-q').style.display = 'inline-block';
}

function showQuizCompletion() {
  const qText = document.getElementById('quiz-question-text');
  const optionsContainer = document.getElementById('quiz-options-container');
  const explanationBox = document.getElementById('quiz-explanation-box');
  const nextBtn = document.getElementById('btn-next-quiz-q');
  const restartBtn = document.getElementById('btn-restart-quiz');

  qText.innerHTML = `🏆 <strong>Quiz Completed!</strong> You scored <strong>${state.quizScore} out of ${terminologyQuizData.length}</strong>.`;
  optionsContainer.innerHTML = `
    <div style="background: #f0fdf4; border: 1.5px solid #bbf7d0; border-radius: 8px; padding: 18px; text-align: center; color: #166534;">
      Great job reinforcing Chapter 1 terminology! You can test your core skills next.
    </div>
  `;
  explanationBox.style.display = 'none';
  nextBtn.style.display = 'none';
  restartBtn.style.display = 'inline-block';
}

// ============================================================================
// Skills Interactive Modal Workspace (Learn, Practice, Assess)
// ============================================================================
window.openSkillModal = function(skillId, initialTab = 'learn') {
  state.activeSkillId = skillId;
  state.activeModalTab = initialTab;

  const modalBackdrop = document.getElementById('skill-modal-backdrop');
  const skill = skillsData[skillId];

  document.getElementById('modal-skill-icon').textContent = skill.icon;
  document.getElementById('modal-skill-title').textContent = skill.title;

  switchModalTab(initialTab);
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeSkillModal = function() {
  const modalBackdrop = document.getElementById('skill-modal-backdrop');
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = 'auto';
};

window.switchModalTab = function(tabName) {
  state.activeModalTab = tabName;

  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById(`mtab-${tabName}`);
  if (activeBtn) activeBtn.classList.add('active');

  const contentContainer = document.getElementById('modal-skill-content');
  const skill = skillsData[state.activeSkillId];

  if (tabName === 'learn') {
    contentContainer.innerHTML = skill.learn;
  } else if (tabName === 'practice') {
    renderSkillPractice(skill);
  } else if (tabName === 'assess') {
    renderSkillAssess(skill);
  }
};

function renderSkillPractice(skill) {
  const contentContainer = document.getElementById('modal-skill-content');
  let currentPracticeIdx = state.practiceState[state.activeSkillId] || 0;
  if (currentPracticeIdx >= skill.practice.length) currentPracticeIdx = 0;

  const item = skill.practice[currentPracticeIdx];

  contentContainer.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
      <span style="font-size: 14px; font-weight: 700; color: #64748b;">Practice Problem ${currentPracticeIdx + 1} of ${skill.practice.length}</span>
      <span style="font-size: 12px; background: #ecfdf5; color: #047857; padding: 4px 10px; border-radius: 9999px; font-weight: 700;">No Penalty Practice</span>
    </div>
    
    <h3 style="font-size: 17px; color: #0f172a; margin-bottom: 16px;">${item.question}</h3>
    
    <div class="quiz-options-list" id="skill-practice-options">
      ${item.options.map((opt, i) => `
        <button class="quiz-option-btn" onclick="handleSkillPracticeAnswer(${i}, ${item.answer}, '${escapeHtml(item.explanation)}')">
          ${opt}
        </button>
      `).join('')}
    </div>

    <div class="quiz-explanation" id="skill-practice-exp"></div>
    
    <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
      <button class="cta-btn" id="btn-next-practice" style="display: none;" onclick="nextSkillPractice()">Next Practice Problem →</button>
    </div>
  `;
}

window.handleSkillPracticeAnswer = function(selectedIdx, correctIdx, explanation) {
  const buttons = document.querySelectorAll('#skill-practice-options .quiz-option-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add('selected-correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('selected-wrong');
    }
  });

  const expBox = document.getElementById('skill-practice-exp');
  expBox.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
  expBox.style.display = 'block';

  document.getElementById('btn-next-practice').style.display = 'inline-block';
};

window.nextSkillPractice = function() {
  const skill = skillsData[state.activeSkillId];
  let currentPracticeIdx = state.practiceState[state.activeSkillId] || 0;
  currentPracticeIdx = (currentPracticeIdx + 1) % skill.practice.length;
  state.practiceState[state.activeSkillId] = currentPracticeIdx;
  renderSkillPractice(skill);
};

function renderSkillAssess(skill) {
  const contentContainer = document.getElementById('modal-skill-content');
  const isMastered = state.masteredSkills.has(state.activeSkillId);

  contentContainer.innerHTML = `
    <div style="margin-bottom: 20px; background: ${isMastered ? '#f0fdf4' : '#eef2ff'}; border: 1.5px solid ${isMastered ? '#bbf7d0' : '#c7d2fe'}; border-radius: 12px; padding: 18px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h4 style="color: ${isMastered ? '#166534' : '#1e1b4b'}; font-size: 16px; margin-bottom: 4px;">
          ${isMastered ? '🏆 Skill Mastered!' : 'Assessment Requirement: Pass with ≥ 2/3'}
        </h4>
        <p style="font-size: 13px; color: ${isMastered ? '#15803d' : '#4338ca'};">
          ${isMastered ? 'You have successfully earned mastery in this skill module.' : 'Take this mini assessment to earn your official mastery badge for this topic.'}
        </p>
      </div>
      <button class="cta-btn" style="background: ${isMastered ? '#15803d' : '#4f46e5'};" onclick="startSkillTest()">
        ${isMastered ? 'Retake Test' : 'Start Assessment'}
      </button>
    </div>

    <div id="skill-test-area"></div>
  `;
}

window.startSkillTest = function() {
  const skill = skillsData[state.activeSkillId];
  const testArea = document.getElementById('skill-test-area');
  state.assessState[state.activeSkillId] = { currentIndex: 0, score: 0 };
  renderSkillTestQuestion(skill);
};

function renderSkillTestQuestion(skill) {
  const testArea = document.getElementById('skill-test-area');
  const sState = state.assessState[state.activeSkillId];
  const qData = skill.assess[sState.currentIndex];

  testArea.innerHTML = `
    <div style="border-top: 1px solid #e2e8f0; padding-top: 16px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
        <span style="font-size: 13px; font-weight: 700; color: #64748b;">Assessment Question ${sState.currentIndex + 1} of ${skill.assess.length}</span>
        <span style="font-size: 13px; font-weight: 700; color: #4338ca;">Current Score: ${sState.score}</span>
      </div>
      <h3 style="font-size: 16px; color: #0f172a; margin-bottom: 16px;">${qData.question}</h3>
      <div class="quiz-options-list" id="skill-assess-options">
        ${qData.options.map((opt, i) => `
          <button class="quiz-option-btn" onclick="handleSkillAssessAnswer(${i}, ${qData.answer}, '${escapeHtml(qData.explanation)}')">
            ${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="skill-assess-exp"></div>
      <div style="display: flex; justify-content: flex-end; margin-top: 16px;">
        <button class="cta-btn" id="btn-next-assess" style="display: none;" onclick="nextSkillAssessQ()">Next Question →</button>
      </div>
    </div>
  `;
}

window.handleSkillAssessAnswer = function(selectedIdx, correctIdx, explanation) {
  const buttons = document.querySelectorAll('#skill-assess-options .quiz-option-btn');
  const sState = state.assessState[state.activeSkillId];

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add('selected-correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('selected-wrong');
    }
  });

  if (selectedIdx === correctIdx) {
    sState.score++;
  }

  const expBox = document.getElementById('skill-assess-exp');
  expBox.innerHTML = `<strong>Explanation:</strong> ${explanation}`;
  expBox.style.display = 'block';

  document.getElementById('btn-next-assess').style.display = 'inline-block';
};

window.nextSkillAssessQ = function() {
  const skill = skillsData[state.activeSkillId];
  const sState = state.assessState[state.activeSkillId];
  sState.currentIndex++;

  if (sState.currentIndex < skill.assess.length) {
    renderSkillTestQuestion(skill);
  } else {
    // Finish assessment
    const passed = sState.score >= 2;
    if (passed) {
      state.masteredSkills.add(state.activeSkillId);
      updateMasteryUI();
    }

    const testArea = document.getElementById('skill-test-area');
    testArea.innerHTML = `
      <div style="text-align: center; padding: 24px; background: ${passed ? '#f0fdf4' : '#fef2f2'}; border-radius: 12px; border: 1.5px solid ${passed ? '#bbf7d0' : '#fecaca'};">
        <h3 style="font-size: 22px; color: ${passed ? '#166534' : '#991b1b'}; margin-bottom: 8px;">
          ${passed ? '🎉 Assessment Passed! Mastery Awarded!' : 'Keep Going! Review and Try Again'}
        </h3>
        <p style="font-size: 15px; color: ${passed ? '#15803d' : '#b91c1c'}; margin-bottom: 16px;">
          You scored <strong>${sState.score} / ${skill.assess.length}</strong>. ${passed ? 'This topic is now marked as Mastered on your chapter dashboard.' : 'You need at least 2 correct answers to earn mastery.'}
        </p>
        <button class="cta-btn" onclick="switchModalTab('learn')">Review Lesson</button>
      </div>
    `;
  }
};

function updateMasteryUI() {
  const totalSkills = 4;
  const masteredCount = state.masteredSkills.size;
  state.masteryPercentage = Math.round((masteredCount / totalSkills) * 100);

  // Update Dashboard Mastery Tile
  const dashMastery = document.getElementById('dashboard-mastery-score');
  if (dashMastery) {
    dashMastery.textContent = `${state.masteryPercentage}%`;
  }

  // Update Skill Card Badges
  for (let i = 1; i <= totalSkills; i++) {
    const badge = document.getElementById(`skill-badge-${i}`);
    if (badge) {
      if (state.masteredSkills.has(i)) {
        badge.textContent = '✓ Mastered';
        badge.className = 'skill-status-badge mastered';
      } else {
        badge.textContent = 'Not Started';
        badge.className = 'skill-status-badge';
      }
    }
  }
}

// ============================================================================
// Exam Edge Module
// ============================================================================
window.switchExamMode = function(mode) {
  state.examMode = mode;
  const neetBtn = document.getElementById('toggle-neet');
  const boardsBtn = document.getElementById('toggle-boards');

  if (mode === 'neet') {
    neetBtn.classList.add('active');
    boardsBtn.classList.remove('active');
  } else {
    boardsBtn.classList.add('active');
    neetBtn.classList.remove('active');
  }
};

function initPyqQuiz() {
  state.pyqCurrentIndex = 0;
  state.pyqScore = 0;
  renderPyqQuestion();

  document.getElementById('btn-next-pyq').addEventListener('click', () => {
    state.pyqCurrentIndex++;
    if (state.pyqCurrentIndex < pyqData.length) {
      renderPyqQuestion();
    } else {
      showPyqCompletion();
    }
  });

  document.getElementById('btn-restart-pyq').addEventListener('click', () => {
    state.pyqCurrentIndex = 0;
    state.pyqScore = 0;
    document.getElementById('btn-restart-pyq').style.display = 'none';
    renderPyqQuestion();
  });
}

function renderPyqQuestion() {
  const item = pyqData[state.pyqCurrentIndex];
  const progress = document.getElementById('pyq-progress-label');
  const qText = document.getElementById('pyq-question-text');
  const optionsContainer = document.getElementById('pyq-options-container');
  const explanationBox = document.getElementById('pyq-explanation-box');
  const nextBtn = document.getElementById('btn-next-pyq');

  progress.textContent = `NEET PYQ ${state.pyqCurrentIndex + 1} of ${pyqData.length}`;
  qText.textContent = item.question;
  explanationBox.style.display = 'none';
  nextBtn.style.display = 'none';

  optionsContainer.innerHTML = '';
  item.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.textContent = optText;
    btn.addEventListener('click', () => handlePyqAnswer(idx, item.answer, item.explanation));
    optionsContainer.appendChild(btn);
  });
}

function handlePyqAnswer(selectedIdx, correctIdx, explanation) {
  const buttons = document.querySelectorAll('#pyq-options-container .quiz-option-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add('selected-correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('selected-wrong');
    }
  });

  if (selectedIdx === correctIdx) {
    state.pyqScore++;
  }

  const explanationBox = document.getElementById('pyq-explanation-box');
  explanationBox.innerHTML = `<strong>NEET Solution & Concept:</strong> ${explanation}`;
  explanationBox.style.display = 'block';

  document.getElementById('btn-next-pyq').style.display = 'inline-block';
}

function showPyqCompletion() {
  const qText = document.getElementById('pyq-question-text');
  const optionsContainer = document.getElementById('pyq-options-container');
  const explanationBox = document.getElementById('pyq-explanation-box');
  const nextBtn = document.getElementById('btn-next-pyq');
  const restartBtn = document.getElementById('btn-restart-pyq');

  qText.innerHTML = `🎯 <strong>PYQ Simulation Completed!</strong> You got <strong>${state.pyqScore} out of ${pyqData.length}</strong> correct.`;
  optionsContainer.innerHTML = `
    <div style="background: #eef2ff; border: 1.5px solid #c7d2fe; border-radius: 8px; padding: 18px; text-align: center; color: #312e81;">
      You have tackled the most frequent question types from Class 11 Chapter 1!
    </div>
  `;
  explanationBox.style.display = 'none';
  nextBtn.style.display = 'none';
  restartBtn.style.display = 'inline-block';
}

// ============================================================================
// Accordion & Checkpoint Interactions
// ============================================================================
function initInteractions() {
  // Accordions (5W1H)
  document.querySelectorAll('.question-accordion .accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('open');
    });
  });

  // Checkpoints
  document.querySelectorAll('.checkpoint-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
    });
  });

  // Subpage Tab Navigation Click Handlers
  document.querySelectorAll('#subpage-tabs .tab-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      navigateTo(target, true);
    });
  });
}

window.toggleBigQCard = function(card) {
  card.classList.toggle('open');
};

window.showHierarchyDetail = function(rank) {
  const steps = document.querySelectorAll('.hierarchy-step');
  steps.forEach(s => s.classList.remove('active'));
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
};

// Utility Helper
function escapeHtml(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ============================================================================
// Application Startup
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initTerminology();
  initPyqQuiz();
  initInteractions();
  updateMasteryUI();
});
