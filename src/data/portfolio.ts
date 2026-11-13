export interface NavItem {
  id: string;
  label: string;
  index: string;
}

export interface PillarItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  icon: 'cpu' | 'workflow' | 'shield';
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  domain: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  status?: 'Active' | 'Completed';
  badge?: string;
  focus: string;
  architectureNote: string;
  evalOrConstraint: string;
  tech: string[];
  repoUrl?: string;
}

export interface SupportingRepo {
  id: string;
  name: string;
  description: string;
  tech: string[];
  repoUrl: string;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface StackColumn {
  id: string;
  title: string;
  code: string;
  categories: SkillCategory[];
}

export interface SkillDomain {
  id: string;
  domain: string;
  code: string;
  items: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  metric?: string;
  coursework?: string[];
  note?: string;
}

export interface ResearchNote {
  id: string;
  date: string;
  tag: string;
  title: string;
  summary: string;
  keyTakeaways: string[];
  repoUrl?: string;
  repoLabel?: string;
}

export const PROFILE = {
  name: 'Vatsal Vagadiya',
  handle: 'vatsal.vagadiya',
  role: 'AI Engineer | Model Development, Applied AI & AI Safety',
  affiliation: 'M.Sc. Data Science at TU Dortmund',
  location: 'Dortmund, Germany',
  availability: 'Immediate · 20h Werkstudent / 40h Intern',
  statusBadge: 'Open to AI / ML Working Student & Intern Roles',
  positioning:
    'Building at both ends of the AI stack—from ground-up PyTorch architectures and alignment audits to evaluated, cloud-deployed RAG and agent workflows. Focused on measurable reliability, safety boundaries, and statistical rigor.',
  coreBadges: [
    'PyTorch',
    'Python',
    'Transformers & RAG',
    'FastAPI',
    'Docker',
    'C++',
  ],
  links: {
    email: '1011vatsal@gmail.com',
    github: 'https://github.com/vatsalv101',
    linkedin: 'https://www.linkedin.com/in/vatsalvagadiya/',
    // TODO: Set external notes URL (Substack / Notion / GitHub) or leave undefined to open built-in Notes Drawer
    notesExternalUrl: undefined as string | undefined,
    // TODO: Drop your PDF into `public/Vatsal_Vagadiya_CV.pdf` and set '/Vatsal_Vagadiya_CV.pdf' (null opens printable CV view)
    cvPdfUrl: null as string | null,
  },
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'focus', label: 'Focus', index: '01' },
  { id: 'experience', label: 'Experience', index: '02' },
  { id: 'projects', label: 'Projects', index: '03' },
  { id: 'stack', label: 'Stack', index: '04' },
  { id: 'education', label: 'Education', index: '05' },
  { id: 'contact', label: 'Contact', index: '06' },
];

export const PILLARS: PillarItem[] = [
  {
    id: 'model-engineering-alignment',
    index: '01',
    title: 'Model Engineering & Alignment',
    subtitle: 'PyTorch Architectures, Fine-Tuning & Behavioral Evaluation',
    description:
      'From-scratch PyTorch implementations of research architectures, custom loss formulation, and parameter-efficient adaptation—paired with reasoning audits and statistical learning foundations.',
    capabilities: [
      'Transformers & VLMs',
      'Post-Training & LoRA',
      'Custom Training Loops',
      'Alignment Audits',
      'Statistical Learning',
      'Signal & Sequence ML',
    ],
    icon: 'cpu',
  },
  {
    id: 'applied-ai-safe-systems',
    index: '02',
    title: 'Applied AI & Safe Systems',
    subtitle: 'Two-Stage RAG, Agent Workflows & Cloud Evaluation',
    description:
      'End-to-end AI applications featuring hybrid retrieval, cross-encoder reranking, and tool-calling pipelines—hardened with tenant-isolated access control, RAGAS benchmarks, and Docker/cloud deployment.',
    capabilities: [
      'Two-Stage RAG',
      'Agents & Tool Use',
      'RAGAS & Abstention Eval',
      'RBAC & PII Guardrails',
      'FastAPI & Qdrant',
      'Docker · AWS & OCI',
    ],
    icon: 'workflow',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'outlier-ai',
    organization: 'Outlier AI',
    role: 'AI Model Evaluator & RLHF Contributor (Contract)',
    period: 'Apr 2025 – Sep 2025',
    location: 'Remote',
    domain: 'Alignment & Eval',
    highlights: [
      'Evaluated LLM outputs across frontend code generation, multi-step mathematical reasoning, and tool-calling accuracy against structured RLHF rubrics.',
      'Audited model responses for PII exposure, sensitive-data leakage, and instruction-following failures to enforce safety standards.',
    ],
    tags: ['RLHF Rubrics', 'Frontend Eval', 'Math Reasoning', 'Tool-Use Audits', 'PII / Safety'],
  },
  {
    id: 'isro-sac',
    organization: 'Space Applications Centre (ISRO)',
    role: 'Research Trainee',
    period: 'Dec 2024 – Apr 2025',
    location: 'Ahmedabad, India',
    domain: 'GNSS ML Research',
    highlights: [
      'Built a proof-of-concept ML pipeline on NavIC GNSS signal data to investigate multipath interference patterns.',
      'Applied PCA dimensionality reduction, K-Means clustering, and XGBoost classification for feature extraction and signal regime separation.',
    ],
    tags: ['NavIC GNSS', 'XGBoost', 'PCA', 'K-Means', 'Python'],
  },
  {
    id: 'codesclue',
    organization: 'CodesClue Technologies',
    role: 'Software Trainee',
    period: 'Apr 2024 – Jun 2024',
    location: 'Ahmedabad, India',
    domain: 'Backend Systems',
    highlights: [
      'Engineered RESTful APIs in Node.js for CRM and Inventory Management systems, writing optimized MongoDB queries for data storage and retrieval.',
      'Verified endpoint reliability via Postman API testing and managed collaborative version control using Git and SourceTree.',
    ],
    tags: ['Node.js', 'REST APIs', 'MongoDB', 'Postman', 'Git / SourceTree'],
  },
  {
    id: 'bhagwati-polypack',
    organization: 'Bhagwati Polypack',
    role: 'Digital Operations Lead (Family Enterprise)',
    period: '2025 – Present',
    location: 'India',
    domain: 'Digital Operations',
    highlights: [
      'Led end-to-end digital transformation for an industrial plastic recycling enterprise, establishing its Google Business Profile, WhatsApp Business workflow, and B2B marketplace listings.',
      'Managed the company website and digital inventory tracking to modernize product visibility and order operations.',
    ],
    tags: ['Website Management', 'Inventory Systems', 'B2B Listings', 'WhatsApp Business'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'dl-33-scratch-pytorch',
    category: 'Model Internals',
    title: 'DL-33: From-Scratch PyTorch Paper Implementations',
    status: 'Active',
    badge: '18 Papers · Scratch PyTorch',
    focus:
      'Cumulative first-principles PyTorch implementations of milestone deep learning papers (Kaiming Init, AdamW, ResNet, U-Net, Transformer, RoPE, GPT-2 + KV-Cache, LoRA, ViT, DETR, Mamba) built progressively from custom layer primitives without high-level wrappers.',
    architectureNote:
      'Built bottom-up leaf tensor blocks (torch.einsum) with zero forward references, explicit assert_shape_contract tracing, and shared core/ primitives exported only after passing sanity checks.',
    evalOrConstraint:
      'Gated by a 6-step verification pipeline: surgical derivation, tensor shape contracts, automated audit_gradients checks, and single-batch overfit gates via pytest.',
    tech: ['PyTorch', 'Python', 'NumPy', 'pytest', 'uv'],
    repoUrl: 'https://github.com/vatsalv101/DL-33',
  },
  {
    id: 'eu-ai-act-rag',
    category: 'AI Governance & Eval',
    title: 'EU AI Act Compliance RAG Assistant',
    status: 'Active',
    badge: 'EN / DE · Regulation 2024/1689',
    focus:
      'Multilingual (English & German) regulatory RAG system over official EU AI Act texts combining structural EUR-Lex parsing, two-stage dense + cross-encoder retrieval, and strict abstention guardrails—achieving 94% RAGAS faithfulness and 100% unanswerable abstention accuracy.',
    architectureNote:
      'Parses EUR-Lex DOM boundaries (Recitals, Articles, Annexes) into Qdrant (MiniLM-L12-v2), reranks candidates with BAAI/bge-reranker-v2-m3, and serves FastAPI + Streamlit containerized on AWS / OCI cloud instances.',
    evalOrConstraint:
      'Evaluated on bilingual benchmark suites: Recall@4 = 1.0, MRR = 0.9167, 100% abstention on out-of-scope queries, RAGAS Faithfulness = 0.94, and ~28.5 ms avg retrieval latency.',
    tech: ['Python', 'FastAPI', 'Qdrant', 'RAGAS', 'Docker', 'AWS / OCI'],
    repoUrl: 'https://github.com/vatsalv101/EU-AI-Act-RAG',
  },
  {
    id: 'rbac-vector-rag',
    category: 'AI Security & Retrieval',
    title: 'RBAC RAG: Tenant-Isolated Enterprise Vector Search',
    status: 'Active',
    badge: 'Tenant-Isolated RAG',
    focus:
      'Role-Based Access Control RAG architecture enforcing cryptographic JWT role verification and strict metadata vector pre-filtering before similarity search to prevent cross-tenant context leakage.',
    architectureNote:
      'FastAPI backend issues HS256 JWT persona claims translated by RBACTranslator into strict Qdrant FieldCondition pre-filters prior to similarity search, paired with audit logging and a Streamlit validation dashboard.',
    evalOrConstraint:
      'Verified cross-tenant query isolation across multi-role test suites (Finance, HR, Engineering, Employee, C-Level) via automated pytest suites, preventing post-retrieval prompt leakage.',
    tech: ['Python', 'FastAPI', 'Qdrant', 'PyJWT', 'pytest', 'Docker'],
    repoUrl: 'https://github.com/vatsalv101/RBAC',
  },
  {
    id: 'gnss-multipath-isro',
    category: 'Signal ML Research',
    title: 'GNSS NavIC Multipath Detection (ML PoC)',
    badge: 'ISRO SAC',
    focus:
      'Proof-of-concept machine learning pipeline engineering C/N0, elevation angle, and pseudorange residual features to classify line-of-sight vs. multipath reception on NavIC signals.',
    architectureNote:
      'Extracted raw NavIC signal observables into PCA dimensionality reduction and K-Means clustering representations, feeding supervised XGBoost classifiers for multipath discrimination.',
    evalOrConstraint:
      'Evaluated offline feature importance across varied satellite elevation angles and signal-to-noise regimes to validate discriminative boundaries prior to target-hardware deployment.',
    tech: ['Python', 'XGBoost', 'PCA', 'K-Means', 'Scikit-learn'],
  },
  {
    id: 'maze-navigator',
    category: 'Embedded Robotics',
    title: 'Intellimaze: Autonomous Robotic Maze Navigator',
    badge: 'GUJCOST Grant Project',
    focus:
      'Real-time edge control routines, sensor integration (VL53L0X Time-of-Flight), and low-latency motor driving under hardware constraints.',
    architectureNote:
      'Engineered deterministic C++ control loops sampling multi-axis VL53L0X Time-of-Flight distance arrays to drive dual H-bridge actuators via DRV8833.',
    evalOrConstraint:
      'Tightly constrained microcontroller memory, deterministic sensor polling cadence, and closed-loop wall-centering stability.',
    tech: ['Embedded C++', 'DRV8833', 'VL53L0X ToF', 'Control Loops'],
  },
  {
    id: 'agentic-eval-pipelines',
    category: 'Safety & Agentic AI',
    title: 'Stateful Agent & Trajectory Evaluation Pipeline',
    badge: 'LangGraph · Rubric Evals',
    focus:
      'Multi-step tool-calling agent workflows built with state-graph orchestration, Pydantic schema validation, and automated rubric-based output and reasoning audits.',
    architectureNote:
      'Implements cyclical multi-step agent routing via LangGraph state graphs, strict Pydantic/TypeScript tool schemas, and model API integration across OpenAI and Anthropic SDKs.',
    evalOrConstraint:
      'Automated grading harnesses evaluate tool-call precision, multi-hop reasoning drift, and instruction hierarchy compliance within containerized sandbox environments.',
    tech: ['Python', 'LangGraph', 'Pydantic', 'TypeScript', 'Docker'],
  },
];

export const SUPPORTING_REPOS: SupportingRepo[] = [
  {
    id: 'programming-deep-learning',
    name: 'Programming-Deep-Learning',
    description:
      '13-stage hands-on PyTorch series spanning computational graphs, custom backward passes, ViT, BYOL/RotNet, VAEs/GANs, Diffusion (DDPM/DDIM), and a GPT decoder.',
    tech: ['PyTorch', 'Jupyter', 'uv'],
    repoUrl: 'https://github.com/vatsalv101/Programming-Deep-Learning',
  },
  {
    id: 'tensortonic-solutions',
    name: 'TensorTonic-Solutions',
    description:
      'Verified low-level PyTorch autograd and Vision Transformer patchify implementations synchronized with TensorTonic.',
    tech: ['Python', 'PyTorch', 'Autograd'],
    repoUrl: 'https://github.com/vatsalv101/TensorTonic-Solutions',
  },
  {
    id: 'natural-language-processing',
    name: 'Natural-Language-Processing',
    description:
      'M.Sc. NLP Coursework (TU Dortmund): Text representation, transformer attention mechanisms, exercise notebooks, and sequence modeling experiments.',
    tech: ['Python', 'NLP', 'Jupyter'],
    repoUrl: 'https://github.com/vatsalv101/Natural-Language-Processing',
  },
];

export const STACK_COLUMNS: StackColumn[] = [
  {
    id: 'model-engineering',
    title: 'Model Engineering & Quantitative ML',
    code: 'PILLAR_01 / MODELING',
    categories: [
      {
        label: 'Deep Learning & Adaptation',
        skills: ['PyTorch', 'Hugging Face', 'PEFT / LoRA', 'TensorFlow'],
      },
      {
        label: 'Scientific & Classical ML',
        skills: ['NumPy', 'SciPy', 'Scikit-learn', 'XGBoost', 'Pandas'],
      },
      {
        label: 'Languages & Low-Level Compute',
        skills: ['Python', 'C / C++', 'SQL', 'Linux', 'Git'],
      },
    ],
  },
  {
    id: 'applied-systems',
    title: 'Applied AI, Agents & Cloud Systems',
    code: 'PILLAR_02 / SYSTEMS',
    categories: [
      {
        label: 'Agents, Retrieval & Evals',
        skills: [
          'LangGraph',
          'LangChain',
          'Qdrant',
          'SentenceTransformers',
          'RAGAS',
        ],
      },
      {
        label: 'APIs, Validation & Full-Stack',
        skills: [
          'FastAPI',
          'Pydantic',
          'Node.js',
          'TypeScript',
          'MongoDB',
        ],
      },
      {
        label: 'Cloud, Containers & Testing',
        skills: [
          'Docker',
          'AWS (EC2, S3, Lambda, Bedrock)',
          'Oracle OCI',
          'pytest',
        ],
      },
    ],
  },
];

export const SKILL_DOMAINS: SkillDomain[] = STACK_COLUMNS.flatMap((col) =>
  col.categories.map((cat) => ({
    id: cat.label.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    domain: cat.label,
    code: col.code,
    items: cat.skills,
  }))
);

export const EDUCATION: EducationItem[] = [
  {
    id: 'tu-dortmund',
    degree: 'M.Sc. Data Science',
    institution: 'Technische Universität Dortmund',
    location: 'Dortmund, Germany',
    period: '2025 - Expected 2028',
    metric: '1.5 German GPA',
    coursework: [
      'Statistical Theory',
      'Inference',
      'Programming Deep Learning',
      'Natural Language Processing',
      'Advanced Statistical Learning',
    ],
  },
  {
    id: 'ddu-india',
    degree: 'B.Tech in Computer Engineering',
    institution: 'Dharmsinh Desai University',
    location: 'Gujarat, India',
    period: '2021 – 2025',
    metric: '9.02 / 10.00 CPI · 1.5 eq',
    note: 'First Class with Distinction',
    coursework: [
      'Data Structures & Algorithms',
      'Network & Information Security',
      'Compiler Construction',
      'Database Management Systems',
    ],
  },
];

export const RESEARCH_NOTES: ResearchNote[] = [
  {
    id: 'note-dl33-verification',
    date: 'Working Note · 01',
    tag: 'Model Internals',
    title: '6-Step Shape, Gradient & Overfit Contracts in DL-33',
    summary:
      'Design methodology behind DL-33: enforcing progressive module dependencies and automated verification gates before exporting PyTorch paper implementations into reusable building blocks.',
    keyTakeaways: [
      'Trace every tensor transform with explicit assert_shape_contract invariants before scaling training.',
      'Run automated audit_gradients and single-batch overfit gates to catch detached targets and NaN leaks early.',
    ],
    repoUrl: 'https://github.com/vatsalv101/DL-33',
    repoLabel: 'vatsalv101/DL-33',
  },
  {
    id: 'note-eu-ai-act-eval',
    date: 'Working Note · 02',
    tag: 'AI Safety & Eval',
    title: 'Two-Stage Retrieval & Abstention Guardrails on the EU AI Act',
    summary:
      'Lessons from benchmarking bilingual (EN/DE) compliance RAG on Regulation 2024/1689 using Qdrant dense search, BGE cross-encoder reranking, and adversarial out-of-scope abstention suites.',
    keyTakeaways: [
      'Structural DOM parsing (Recitals/Articles/Annexes) avoids splitting normative legal clauses across chunks.',
      'Measuring abstention accuracy alongside RAGAS faithfulness surfaces silent hallucination under missing evidence.',
    ],
    repoUrl: 'https://github.com/vatsalv101/EU-AI-Act-RAG',
    repoLabel: 'vatsalv101/EU-AI-Act-RAG',
  },
  {
    id: 'note-rbac-prefilter',
    date: 'Working Note · 03',
    tag: 'AI Security',
    title: 'Strict Vector Pre-Filtering for Tenant-Isolated RAG',
    summary:
      'Why enterprise access control in RAG systems must live in the vector index filter layer rather than system prompts, demonstrated via JWT-verified Qdrant FieldCondition translation.',
    keyTakeaways: [
      'Prompt-only confidentiality instructions remain vulnerable to context extraction and cross-silo drift.',
      'Translating signed JWT role claims into strict Qdrant pre-filters prevents unauthorized chunks from reaching context before retrieval.',
    ],
    repoUrl: 'https://github.com/vatsalv101/RBAC',
    repoLabel: 'vatsalv101/RBAC',
  },
  {
    id: 'note-gnss-multipath',
    date: 'Working Note · 04',
    tag: 'Signal ML',
    title: 'Detecting GNSS NavIC Multipath Interference (PoC Study)',
    summary:
      'Reflections from Space Applications Centre (ISRO) on using unsupervised clustering and gradient-boosted trees to explore multipath regimes in NavIC signal data.',
    keyTakeaways: [
      'Applying PCA before K-Means clustering helps surface latent multipath signal clusters across correlated GNSS observables.',
      'Validating XGBoost feature importance on offline PoC splits reduces overfitting before considering embedded deployment.',
    ],
  },
];
