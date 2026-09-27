export const profile = {
  name: 'Rajesh Phulwaria',
  location: 'Jodhpur, Rajasthan, India',
  phone: '+91-7737346389',
  email: 'phulwariarajesh152@gmail.com',
  github: 'https://github.com/RajeshPhulwaria006/',
  linkedin: 'https://linkedin.com/in/rajesh-phulwaria-b61093315/', 
  tagline: 'AI/ML Research Enthusiast · Deep Learning · Transformers · LLMs',
  summary:
    'Exploring intelligent systems from mathematical foundations to practical AI systems.',
  bio: `AI/ML-focused BCA student interested in understanding intelligent systems from first principles. Experienced in mathematical analysis of neural networks, PyTorch/TensorFlow implementations, Transformer architectures, LLM fundamentals, and Generative AI systems. Published research on gradient flow and neural network optimization, with a focus on translating theoretical understanding into practical AI systems.`,
}

export const researchInterests = [
  'Large Language Models',
  'Generative AI',
  'Transformer Architectures',
  'Natural Language Processing',
  'Representation Learning',
  'Neural Network Optimization',
  'Deep Learning',
  'Computer Vision',
  'AI Agents',
  'Retrieval-Augmented Generation',
  'Multimodal AI',
  'Scientific Machine Learning',
]

export const skills = {
  Languages: ['Python', 'C++', 'SQL', 'Java (Beginner)', 'HTML/CSS', 'JavaScript (Beginner)'],
  'Machine Learning': [
    'Regression',
    'Classification',
    'Feature Engineering',
    'Preprocessing',
    'Natural Language Processing',
    'EDA',
    'Model Selection',
    'Cross Validation',
  ],
  'Deep Learning': [
    'PyTorch',
    'TensorFlow',
    'CNNs',
    'RNNs',
    'LSTMs',
    'Attention-Mechanism',
    'Encoder-Decoder',
    'Backpropagation',
    'Gradient Flow',
    'Optimization',
    'Model Evaluation',
  ],
  'LLM / Generative AI': [
    'Transformers',
    'Self-Attention',
    'Positional Encoding',
    'BPE Tokenization',
    'Embeddings',
    'LLMs',
    'Prompt Engineering',
    'Context Engineering',
    'Function Calling',
    'Vector DB',
    'Hugging Face',
    'Gemini API',
  ],
  'Tools / Research': [
    'NumPy',
    'Pandas',
    'Scikit-Learn',
    'Jupyter Notebook',
    'FastAPI',
    'Docker',
    'Git',
    'Linux',
    'Experiment Design',
    'Literature Reading',
    'Reproducible Experiments',
    'Scientific Documentation',
  ],
}

export type Project = {
  id: string
  title: string
  tech: string[]
  points: string[]
  diagram: string[]
  githubUrl?: string
  note?: string
  tag?: string
}

export const projects: Project[] = [
  {
    id: 'niyamit',
    title: 'Niyamit — Legal Metrology Compliance System',
    tech: [
      'Python',
      'FastAPI',
      'PaddleOCR',
      'OpenCV',
      'PostgreSQL',
      'Next.js',
      'TypeScript',
      'Docker'
    ],

    points: [
      'Developed as a team contribution for Smart India Hackathon 2026 Problem Statement 26034, focused on automated compliance verification of packaged commodities under the Legal Metrology (Packaged Commodities) Rules, 2011.',
      'Contributed to the OCR, structured extraction, and deterministic rule-engine pipeline for validating declarations including MRP, net quantity, manufacturer details, country of origin, and consumer-care information.',
      'Worked on image-processing and compliance workflows including multi-angle ingestion, barcode-based physical measurement, text extraction, and statutory violation identification.'
    ],

    diagram: [
      'Product Images',
      'PaddleOCR',
      'Structured Data Extraction',
      'Image / Measurement Processing',
      'Statutory Rule Engine',
      'Compliance Verification',
      'Evidence / Report'
    ],
    githubUrl: 'https://github.com/RajeshPhulwaria006/Niyamit'
  },
  {
    id: 'patient-data-management',
    title: 'Patient Data Management System',
    tech: [
      'Python',
      'FastAPI',
      'Pydantic',
      'Streamlit',
      'Docker',
      'Docker Hub',
      'AWS EC2',
      'Linux'
    ],
    points: [
      'Developed a full-stack patient data management system with RESTful FastAPI APIs, Pydantic validation, and a Streamlit dashboard.',
      'Implemented patient CRUD operations, ID-based search, sorting, automatic BMI calculation, and BMI classification.',
      'Containerized the application with Docker, published the image to Docker Hub, and deployed the application on an AWS EC2 instance.'
    ],
    diagram: [
      'Streamlit Frontend',
      'HTTP/JSON',
      'FastAPI REST API',
      'Pydantic Validation',
      'Patient Data Storage',
      'Docker Container',
      'AWS EC2 Deployment'
    ],
    githubUrl: 'https://github.com/RajeshPhulwaria006/Patient_Data_Management_FastAPI'
  },
  {
    id: 'research-paper-summarizer',
    title: 'Research Paper Summarizer',
    tech: ['Python', 'LangChain', 'Groq', 'GPT-OSS-120B'],
    points: [
      'Built an interactive AI-powered research paper summarizer supporting configurable explanation style and response length.',
      "Used LangChain's PromptTemplate for dynamic prompt construction and Groq for fast LLM inference.",
    ],
    diagram: ['User', 'Paper Title', 'PromptTemplate', 'LangChain', 'Groq API', 'GPT-OSS-120B', 'Summary'],
    githubUrl: 'https://github.com/RajeshPhulwaria006/Research_paper_summarizer',
    note: 'Current version uses the research paper title as input rather than retrieving and processing the actual paper PDF/content.',
    tag: 'Future direction: RAG-based Research Paper Assistant',
  },
  {
    id: 'transformer-from-scratch',
    title: 'Transformer from Scratch',
    tech: ['NumPy', 'PyTorch'],
    points: [
      'Implemented core Transformer components from first principles, including self-attention, positional encoding, feed-forward networks, masking, and normalization.',
      'Studied tensor transformations and mathematical operations underlying modern Transformer architectures.',
    ],
    diagram: ['Input', 'Embedding', 'Positional Encoding', 'Self-Attention', 'Feed Forward', 'Normalization', 'Output'],
    githubUrl: 'https://github.com/RajeshPhulwaria006/Transformer_Architecture_inNumpy'
  },
  {
    id: 'gpt-tokenizer',
    title: 'GPT-Style Tokenizer from Scratch',
    tech: ['Python', 'BPE'],
    points: [
      'Implemented a byte-level BPE tokenizer with pair-frequency analysis, iterative merging, vocabulary construction, and encode/decode pipelines.',
      'Trained on a diverse corpus and analyzed how merge count affects vocabulary size, tokenization granularity, and sequence length.',
    ],
    diagram: ['Text', 'UTF-8 Bytes', 'Pair Counting', 'Most Frequent Pair', 'Merge', 'Vocabulary', 'Token IDs'],
    githubUrl: 'https://github.com/RajeshPhulwaria006/GPT-style_Tokenizer_scratch'
  },
  {
    id: 'jarvis',
    title: 'Jarvis — LLM Powered AI Assistant',
    tech: ['Python', 'Gemini API'],
    points: [
      'Built an AI assistant supporting contextual conversations, speech recognition, browser automation, and real-time information retrieval.',
      'Designed a modular architecture for integrating LLM capabilities and external tools.',
    ],
    diagram: ['User', 'Jarvis', 'LLM', 'Speech', 'Browser', 'Information Retrieval'],
    githubUrl: 'https://github.com/RajeshPhulwaria006/Jarvis-Ai-chatbot'
  },
  {
    id: 'foundational-ai-lab',
    title: 'Foundational AI Lab',
    tech: ['PyTorch', 'TensorFlow'],
    points: [
      'Developed an open-source repository exploring neural networks from mathematical foundations to practical implementations.',
      'Implemented optimization techniques, CNNs, LSTMs, learning pipelines, visualization, and experimentation workflows.',
    ],
    diagram: ['Foundations', 'Optimization', 'CNNs', 'LSTMs', 'Experimentation', 'Visualization'],
    githubUrl: 'https://github.com/RajeshPhulwaria006/AI-journey-foundation',
    tag: 'Research Notebook / Laboratory',
  }
]

export const publication = {
  title: 'A Comparative Analysis of Gradient Flow and Vanishing Gradient Effects in Deep Neural Networks',
  venue: 'Zenodo · 2026',
  description:
    'Investigated gradient propagation across deep neural networks and analyzed activation functions affecting optimization stability and learning dynamics.',
  doi: '10.5281/zenodo.19351203',
  doiUrl: 'https://doi.org/10.5281/zenodo.19351203',
}

export const experience = [
  {
    company: 'Cognifyz Technologies',
    role: 'Data Science Intern',
    description:
      'Built machine learning pipelines involving preprocessing, feature engineering, experimentation, and model evaluation on real-world datasets.',
  },
  {
    company: 'InternsForge',
    role: 'Python Programming Intern',
    description:
      'Developed Python applications while strengthening software engineering and algorithmic problem-solving skills.',
  },
]

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'Aishwarya College, Rajasthan',
  years: '2024-2027',
}

export const openSource = {
  name: 'fraction-raj',
  badge: 'PyPI',
  tech: 'Python',
  url: 'https://pypi.org/project/fraction-raj/1.0.2/',
  description:
    "Published an open-source Python package implementing rational arithmetic using Python's data model and operator overloading.",
}

export const researchJourney = [
  'Python / Programming',
  'Machine Learning',
  'Neural Networks',
  'Optimization & Gradient Flow',
  'Deep Learning',
  'NLP',
  'Transformers',
  'GPT Tokenization',
  'LLMs',
  'Generative AI Systems',
]
