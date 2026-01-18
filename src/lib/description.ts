import {
    Zap, Layers, Users, Target, Network, Building2,
    Shield, Code, Feather, Rocket, Globe, Play,
    ArrowRight, CheckCircle2, ChevronRight, Check, TrendingUp
} from 'lucide-react';

// ==================== SOLUTIONS ====================
export const solutions = [
    {
        id: 'genai',
        icon: Zap,
        title: 'AI & Generative AI Solutions',
        tagline: 'Turn trusted knowledge into usable intelligence',
        description: 'Applied Generative AI systems built on curated, domain-specific knowledge to deliver accurate, explainable, and production-ready intelligence.',
        components: [
            { name: 'Knowledge Unification', desc: 'Consolidate documents and data into a single trusted knowledge base' },
            { name: 'Retrieval-Augmented Pipelines', desc: 'RAG for accurate, explainable outputs' },
            { name: 'Content & Image Engines', desc: 'Structured generation for text and images' },
            { name: 'Production Infrastructure', desc: 'Scalable deployment integrated into existing products' }
        ],
        benefits: [
            'Reduce hallucination with verified sources',
            'Automate content and insight generation',
            'Deliver explainable, business-ready outputs'
        ],
        forWhom: 'Product teams and knowledge-driven organizations',
        color: 'from-blue-600 to-indigo-600'
    },
    {
        id: 'agents',
        icon: Layers,
        title: 'Agent AI Solutions',
        tagline: 'Autonomous systems that decide and act',
        description: 'Autonomous and semi-autonomous agents that plan, execute, and verify business operations across finance, operations, and content systems.',
        components: [
            { name: 'Agent Orchestration', desc: 'Coordinate multiple agents to achieve complex goals' },
            { name: 'Action & Verification', desc: 'Plan, execute, and confirm outcomes' },
            { name: 'Tool Integration', desc: 'Connect agents to databases and APIs' },
            { name: 'Monitoring & Safety', desc: 'Human-in-the-loop oversight and auditing' }
        ],
        benefits: [
            'Automate manual workflows',
            'Reduce operational overhead',
            'Enable adaptive automation without brittle rules'
        ],
        forWhom: 'Operations, finance, and automation teams',
        color: 'from-cyan-500 to-blue-600'
    },
    {
        id: 'creator',
        icon: Users,
        title: 'Social Media & Creator Economy',
        tagline: 'Story-driven platforms and creator ecosystems',
        description: 'Platforms that turn authentic storytelling into scalable creator ecosystems, with automation for publishing, distribution, and audience growth.',
        components: [
            { name: 'Creator Publishing', desc: 'Streamlined submission and multi-format publishing' },
            { name: 'Story-to-Video Pipelines', desc: 'Convert written stories into video content' },
            { name: 'Engagement Intelligence', desc: 'Tools to grow reach and interaction' },
            { name: 'Monetization & Discovery', desc: 'Improve creator visibility and earnings' }
        ],
        benefits: [
            'Increase engagement and reach',
            'Reduce publishing overhead',
            'Improve creator monetization and discoverability'
        ],
        forWhom: 'Creators, publishers, and community platforms',
        color: 'from-pink-500 to-rose-600'
    },
    {
        id: 'marketing',
        icon: Target,
        title: 'Marketing, SEO & Discovery',
        tagline: 'Search-first visibility backed by intelligence',
        description: 'Long-term content and discovery systems that use AI to optimize search visibility, content authority, and performance analytics across platforms including YouTube.',
        components: [
            { name: 'SEO Automation', desc: 'AI-driven optimization and content planning' },
            { name: 'Discovery Engines', desc: 'Improve content ranking and authority' },
            { name: 'Analytics Dashboards', desc: 'Unified performance and insights' },
            { name: 'YouTube Growth Tools', desc: 'Optimization and publishing pipelines for video' }
        ],
        benefits: [
            'Improve organic reach and discoverability',
            'Unify marketing insights for better decisions',
            'Build long-term, trustable content authority'
        ],
        forWhom: 'Marketing teams and content strategists',
        color: 'from-amber-500 to-orange-500'
    },
    {
        id: 'work-ecosystem',
        icon: Network,
        title: 'Freelancing & Work Ecosystem',
        tagline: 'AI-first platforms to match skills with real work',
        description: 'Intelligent work platforms that connect talent with opportunities using AI-based matching, delivery pipelines, and reputation systems.',
        components: [
            { name: 'Talent Matching', desc: 'Skill-first matching with contextual signals' },
            { name: 'Delivery Pipelines', desc: 'Manage tasks and handoffs end-to-end' },
            { name: 'Reputation Engines', desc: 'Track performance and outcomes' },
            { name: 'Global Workflows', desc: 'Scale for remote, distributed teams' }
        ],
        benefits: [
            'Reduce skill mismatch',
            'Improve transparency in delivery',
            'Enable scalable, global work platforms'
        ],
        forWhom: 'Marketplaces, platforms and hiring teams',
        color: 'from-emerald-500 to-teal-500'
    },
    {
        id: 'web-mobile',
        icon: Building2,
        title: 'Web, System Software & Mobile',
        tagline: 'Production-ready foundations for intelligent products',
        description: 'End-to-end web, backend, and mobile engineering to deliver secure, high-performance systems that host intelligent products.',
        components: [
            { name: 'Web & Frontend', desc: 'Accessible, performant interfaces' },
            { name: 'Backend & APIs', desc: 'Scalable, secure services' },
            { name: 'Mobile Apps', desc: 'Native Android and iOS experiences' },
            { name: 'Security & DevOps', desc: 'Hardening, CI/CD, and monitoring' }
        ],
        benefits: [
            'Deliver scalable, secure platforms',
            'Seamless cross-platform experiences',
            'Production-grade operations and monitoring'
        ],
        forWhom: 'Organizations building customer-facing intelligent applications',
        color: 'from-violet-500 to-purple-500'
    }
];

// ==================== PRODUCTS ====================
export const products = [
    {
        id: 'almedics',
        icon: Shield,
        category: 'healthcare',
        title: 'ALMedics',
        subtitle: 'Intelligent Healthcare Knowledge & AI Platform',
        description: 'Generative AI–powered healthcare intelligence delivering accurate, structured, role-specific medical knowledge. Built on curated medical knowledge from verified learning materials, not generic web data.',
        keyCapabilities: [
            'Multi-Role Intelligence: Student, Patient & Doctor modes',
            'Medical Image Intelligence with clinical-grade analysis',
            'Knowledge-Aware Generative AI with high precision',
            'Contextual awareness and medical relevance focus'
        ],
        technologies: ['Generative AI', 'Medical Knowledge Base', 'Image Processing', 'Clinical NLP'],
        timeline: 'Live',
        color: 'from-emerald-600 to-teal-600'
    },
    {
        id: 'finance-auto',
        icon: Code,
        category: 'finance',
        title: 'Finance Auto System',
        subtitle: 'AI-Powered Financial Operations Platform',
        description: 'Intelligent financial management platform powered by AI agents enabling natural language financial operations. Create bills, invoices, and manage records through simple prompts.',
        keyCapabilities: [
            'Prompt-based bill and invoice creation',
            'AI agent database interaction',
            'Automated financial task handling',
            'Direct payment updates and record management'
        ],
        technologies: ['AI Agents', 'Natural Language Processing', 'Database Automation', 'Financial APIs'],
        timeline: 'Live',
        color: 'from-blue-600 to-cyan-600'
    },
    {
        id: 'autonomous-control',
        icon: Layers,
        category: 'platforms',
        title: 'Autonomous System Control',
        subtitle: 'LLM-Powered System Automation Research Platform',
        description: 'Research-oriented platform focused on controlling complete digital environments using LLM intelligence. Dynamic reasoning-based automation without predefined tools or hardcoded workflows.',
        keyCapabilities: [
            'Full system-level LLM-based control',
            'Dynamic decision-making architecture',
            'Adaptive automation across environments',
            'Research-driven AI autonomy framework'
        ],
        technologies: ['Large Language Models', 'System APIs', 'Dynamic Reasoning', 'Autonomous Execution'],
        timeline: 'Research',
        color: 'from-purple-600 to-indigo-600'
    },
    {
        id: 'lovever',
        icon: Feather,
        category: 'platforms',
        title: 'Lovever',
        subtitle: 'Real-Life Storytelling & Social Media Platform',
        description: 'Storytelling-focused social platform dedicated to authentic love stories. Share emotions and experiences while transforming stories into engaging digital content.',
        keyCapabilities: [
            'User-driven story submission and publishing',
            'Community storytelling environment',
            'Story-to-video content conversion',
            'Wide audience reach through multiple formats'
        ],
        technologies: ['Social Platform', 'Content Management', 'Video Generation', 'Community Tools'],
        timeline: 'Live',
        color: 'from-pink-600 to-rose-600'
    },
    {
        id: 'blog-platform',
        icon: Rocket,
        category: 'platforms',
        title: 'Blog Platform',
        subtitle: 'Knowledge & Discovery Hub',
        description: 'Multi-domain blog platform prioritizing research-driven content. Deep focus on papers, patents, and original research across AI, emerging tech, mobility, and future-oriented domains.',
        keyCapabilities: [
            'Research paper and patent-based content',
            'High-quality technical writing',
            'Multi-domain knowledge coverage',
            'Long-term discoverability optimization'
        ],
        technologies: ['Content Management', 'SEO Optimization', 'Research Database', 'Publishing Tools'],
        timeline: 'Live',
        color: 'from-amber-600 to-orange-600'
    },
    {
        id: 'lovever-youtube',
        icon: Play,
        category: 'platforms',
        title: 'Lovever YouTube',
        subtitle: 'Story-Based Video Content Platform',
        description: 'Video ecosystem transforming written stories into engaging visual narratives. Structured scripting, professional narration, and consistent storytelling-focused publishing.',
        keyCapabilities: [
            'Story-based video production',
            'Professional scripting and narration',
            'Channel management and publishing',
            'Content strategy and consistency'
        ],
        technologies: ['Video Production', 'Content Scripting', 'Channel Management', 'Analytics'],
        timeline: 'Live',
        color: 'from-red-600 to-pink-600'
    },
    {
        id: 'no-more-hunger',
        icon: Globe,
        category: 'platforms',
        title: 'No More Hunger',
        subtitle: 'Social Impact & Community Platform',
        description: 'NGO initiative built on the belief that food and dignity are human rights. Community-driven system connecting people through time, effort, and shared action—not donations.',
        keyCapabilities: [
            'Community connection infrastructure',
            'Effort-based contribution system',
            'Need-matching algorithms',
            'Impact tracking and transparency'
        ],
        technologies: ['Community Platform', 'Matching Algorithms', 'Impact Analytics', 'Coordination Tools'],
        timeline: 'Live',
        color: 'from-green-600 to-emerald-600'
    },
    {
        id: 'geo-Attend',
        icon: Code,
        category: 'Employee Management',
        title: 'Geo-HR',
        subtitle: 'Intelligent Human Resource Management Platform',
        description: 'Complete HR management application managing people, processes, and workforce data in a unified system. Structured, scalable HR operations without unnecessary complexity.',
        keyCapabilities: [
            'Employee information management',
            'Attendance and workforce tracking',
            'Leave and policy management',
            'Organizational structure handling'
        ],
        technologies: ['HR Management System', 'Employee Database', 'Attendance Tracking', 'Reporting Tools'],
        timeline: 'Live',
        color: 'from-indigo-600 to-blue-600'
    },
    {
        id: 'easy-ledger',
        icon: Shield,
        category: 'finance',
        title: 'Easy Ledger',
        subtitle: 'Business Finance & Loan Management Application',
        description: 'Financial management solution designed for small businesses, retail shops, and wholesale operations. Clear financial visibility without requiring complex accounting knowledge.',
        keyCapabilities: [
            'Loan tracking and repayment management',
            'Daily financial records and transactions',
            'Customer and supplier account management',
            'Business-level financial visibility'
        ],
        technologies: ['Financial Management', 'Accounting System', 'Transaction Tracking', 'Reporting'],
        timeline: 'Live',
        color: 'from-slate-600 to-gray-600'
    }
];

// ==================== CATEGORIES ====================
export const projectTypes = [
    { id: 'ai-genai', label: 'AI & Generative AI', icon: Zap },
    { id: 'agent-ai', label: 'Agent AI', icon: Layers },
    { id: 'creator-economy', label: 'Creator Economy', icon: Users },
    { id: 'marketing-seo', label: 'Marketing & SEO', icon: Target },
    { id: 'freelancing', label: 'Freelancing & Work', icon: Network },
    { id: 'web-mobile', label: 'Web & Mobile', icon: Building2 }
];

export const productCategories = [
    { id: 'all', label: 'All Products' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'finance', label: 'Finance & HR' },
    { id: 'platforms', label: 'Platforms' }
];

export const solutionCategories = [
    { id: 'genai', label: 'AI & Generative AI', color: 'from-blue-600 to-indigo-600' },
    { id: 'agents', label: 'Agent AI', color: 'from-cyan-500 to-blue-600' },
    { id: 'creator', label: 'Creator Economy', color: 'from-pink-500 to-rose-600' },
    { id: 'marketing', label: 'Marketing & SEO', color: 'from-amber-500 to-orange-500' },
    { id: 'work-ecosystem', label: 'Freelancing & Work', color: 'from-emerald-500 to-teal-500' },
    { id: 'web-mobile', label: 'Web & Mobile', color: 'from-violet-500 to-purple-500' }
];

// ==================== BLOG ====================
export const blogs = [
    {
        id: 'genai-production',
        title: 'Moving Generative AI from Hype to Production',
        category: 'AI & GenAI',
        date: 'Jan 15, 2026',
        author: 'Agnitian Research',
        readTime: '8 min read',
        excerpt: 'The gap between GPT demos and production systems is vast. Learn how to bridge it with RAG, knowledge bases, and real-world constraints.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28ffmdl5EM4_CsdpZKkz9O-qEVbDhzjS6lQ&s',
        tags: ['Generative AI', 'Production', 'RAG', 'LLM'],
        content: 'Full article content here...'
    },
    {
        id: 'agent-workflows',
        title: 'Autonomous Agents: Beyond Hardcoded Workflows',
        category: 'Agent AI',
        date: 'Jan 10, 2026',
        author: 'Agnitian Research',
        readTime: '10 min read',
        excerpt: 'Why agents are replacing traditional automation. Understanding planning, reasoning, and autonomous execution in business systems.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G3W8fM0LYf43i22wsCxTnwJeLAGE43_OeQ&s',
        tags: ['Agents', 'Automation', 'AI', 'Workflow'],
        content: 'Full article content here...'
    },
    {
        id: 'creator-economy',
        title: 'Building Platforms for Authentic Storytelling',
        category: 'Creator Economy',
        date: 'Jan 8, 2026',
        author: 'Agnitian Research',
        readTime: '7 min read',
        excerpt: 'How platforms like Lovever are transforming content creation through community, authenticity, and multi-format distribution.',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=300&fit=crop',
        tags: ['Creator Economy', 'Platform', 'Community'],
        content: 'Full article content here...'
    },
    {
        id: 'seo-strategy',
        title: 'Long-Form Content: The SEO Advantage for Thought Leaders',
        category: 'Marketing & SEO',
        date: 'Jan 5, 2026',
        author: 'Agnitian Research',
        readTime: '9 min read',
        excerpt: 'Why research-driven, long-form content outperforms shallow articles in search rankings and audience retention.',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw0NDw8NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHiggGBolHRYVITEhJSktLi4uFx8zODMsNygvLisBCgoKDg0OFhAQFy0dHR0tLSstLS0wLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALgBEgMBEQACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAABAAIEBQYDB//EAEQQAAEEAQIDBAUICAILAAAAAAEAAgMRBAUSEyExBkFRYRQiU3GSFSMyM4GRsdEHQmJyc6GywVLwJTRjdHWCg5Oz0uH/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIEBQMG/8QAMhEBAAIBAgMFBwQCAwEAAAAAAAECEQMSBCExEyJBUmEUMlFxgaHRM5Gx4QXBYnLwI//aAAwDAQACEQMRAD8A3wviH3zIIEKsZZBRGYRiyCIQqjJRGQRCERk1vf3rb4a3KYeV5w3dMxw3cQOp+1bunV46+pNsQ3HMvyvly717bcvCJw5+c31gLJodPJaXF6m3FY6tvRnlPJ8AFznqaURIFBr5mPvaem4c2nwKsTh6aWpst6Pjp2a4eqRRaaI8Ct/R1cvTX0azzjxeowsy65roUu4uto4dBzwR5VzC985asRzYwTAEtd4WPcpE45LemecOfrWOCN4HrNrcR3tWhx+jE13xHOOvybXCakxO2ekuNS5LoikEipAIKkAiooBVQQgKRctFRspBkERkEYsgiMwiEKsSEGQURkEYs4+v2L34ee+89To7GJ9HzPMrq16NC/V92c+fkvWGEuRmfWO/z3Lj8X+rLf0fch8QtV6JAoJESDUy8Uk746Eg8ejh4FZVtMTl76epEd23R8odW4ZDHhzZOpBHXzHit7S1+XNlbhd8bqzmHqNPzBIARz7iujS+XH19HZOH1e/z768+ZWUy84hhO8hjr/wkFeWtbGnbPwZUr34+birgukEEqKkFSARQgkAUUKqlBz0bSQIRGQKIzCMWQRGQRiQiFBkCiMmurms9OcXiWF4zEw6eDMD5UuzSWjeuG+OvmQvaHhLk6g2n+8Bcnjq41Po3tCc1ay03uVESBREgkGhqzfVY+rLHfyI5/wBl6adttmxw/OZj4trQso3S6ejd5cZpcsvRZPNu6u9t/etu055uTp8pw+eo8onHx2j+YWtxkzGjLPQ/UhxlxnQCKURFAKqkUIBBIrFBIrno2kgURkERkERmEYsgiFEKIQiMkQw5pAsm2g0Q5wPeurXVzzeUaOeTuwThzR7uh7luUtloXpiZaepxUQ77Fo/5DT6WbHD25YaK5jaKiJAoJESDV1NtxP76Ady60DZ/lasdXtoTi8NXQJQSBa6OhL24yvJ7Ld82b8vxC6E9HAx33x1V1RBvi4fmtTjrY0oj4yz4aM6mXHXIdBIJBIBBKqEUFAIqQCK5yNooEIjIIjIIjIIxZBENohVQhQZAojTnj2u3DoefmD3r10pnLOJzDs6VPu2gc11dG2WlxFMRMtvVug94WPH/AKf1ePDdXMC47dSiFBIJAoAoOBgxVMXNLg0uJDBW0C+S39CM4l0b2zp4l7WOT1K8l0vBwLV72Xw1KS9jfAErm8dbnWr04euMy0VoNlIJBIJAFVQihBIBFSDmBG4yRCERkERkERkEYsgiFEKIUCgxkgElNJLeY9Ydy9NKN14jpljNprEzDf0fDayQbHO27Tzebsjv8v8A4uvSldOYw1NfVtbTndDe1PHleQGxyOaOe4MNH3LX4zfqYitZmHjw+pp0jvWiJ+bT+TpvZSfAVo+z6vlls+0aXmhfJ03spPgKez6vllPaNLzQvk+b2UnwlOw1PLJ7RpeaF8nzeyk+Ep2Gr5ZX2jS80EafN7KT4Sp2Gr5ZT2jS80L5Pm9lJ8JV9n1fLJ7RpeaAcCb2UnP9gqdhq+WT2jS80PO4uFPE4GWKWGn7A6RhDHH9k9D0JW3SlqTGXR9o0tWs1raJ+T1LSdo7x3remeUOVPvS1Jn2b+we5cjiL7rz6PetcQwXgySCQSCRQgCqoQSARUg5YRusgjEhBkEYsgiMgiMwjEoFEVIhQIP5rKs4tEpLX13VxDC6OMbp5gWwsHUXyDl0tS9bxt8P9Lw/DTe26fdr1/D3WPYYwd4Y0fyXrnk+dtjdL6c1ebHk8T2317VcKWM40OE/Dmkx8aJ828ynJkJG0gPFNvvpbGlSlo5zOXle1onlD5Y/aDV2Z2JhZUOAzi4s+TPwuIXNbGXj1TvI9ly59XKzp6e2ZiZSL2zETDDsj26lytN1HNymQsmwWOlDImvax8Zh3x8nOJ5uDh1TU0Ii8VjxKakzWZnwacfbnUH6dh5EcWGc3K1Z2ncNzJRCPVdt5b7B3Ac7pZ9jSLTHPERlO0tMQ932ely3Y7Dnxwx5Zc/ezHJMQbuO0iye6u9a99ue70elc45ulaxZPP8AbXnBBZqsyI34fNyLw4m0xp5+Tp/4nlrW/wCs/wAw+MRbwQA66skjvPQBO0zoTbL1tntejUXJe6QSCQSAJRUqAooQSDEoqVVzAo3GQRCiEFEZBEZBElmCjEhEIRDaCRCgxELNxfsZvIrftG6vemZxhd1sbc8ntovot/dHd5LsV6Q+ct1ln/nosmLyH6SvqNP/AOM6b/5CvfQ62+UvPU6R84a+vZLBr2G0vYHfJOc3aXNDtzjbRXiQ1xHuPgsq57KfnDG3vw8LpcLgzS8VrTw9dw9PhkrlZxsy5L/6XL7VsWn3p8sz94eUeEfF981gdp2I10pxWO7V5IdkNfwzjtJkBlDrG3b1vyUj358e6vh9X6p2RjYzEiZFmnU2sdIPTHTCd0hLy6i8E3Vgde4LT1M7ucYe9cY65djn5LFk8/23w3zYzGsIDm5MUgskXTX8r+1eHEW205+Lqf4jVrp68zaOU1mP4cvFLhGGOAbX6rfHxXPvqzNYpHRvakVm82jm+i8WIQKAVEgEEipBiUVIBVUg5ijcQRGQKIyCIbQIRiyBVRkCojK0QoiQKBCSkvZQOdsb82/6Le9nh712aZ2xyfPXxunm+m53+B33s/NZc/gx5fH+WtnYDMgMbNBxWxysmYHFvqyt5teOfUKxujp/pJis9Z/lrz6HjyZDcx+K1+Uxuxs5Ld7W0RQ5+Dj96yi14jb4fRJrTOc/yYNDx4/RSzEYDgiQYhBbeOHinbefepuvzz4m2nLm+E/ZnEki9HfgxPh478nhucC3juvdJ16mz96sX1InP+02U+P2bul6bFixiHHx2wRBxcI2ObtDj1PVSZtaczCxFY6S27d7M/Ez81MW+C934udr27hC2Fo4jedtPc7wK1eMidkcvH8tvgsdp18Pw4IK5rqJQSorQFoJFCCQSARRaKrVAg5ijcKBCJLJEKIURkCiMgURkCiEFEKIlRkoj2EP0W/uj8F169IcC3vSzWTFx+2GoSYun5mTCQ2aCEvYS0OAcCOoPVemlWLXiJYak4rMw81JreqYOBNl5r8TKmyPRItNigYW/Py7rDxTb5FpoH9U9F7RTTveK15Yzl57rVrmWei6zqeLnQ6fqr8eb06GaXFmgaGhk0bdz4jTQCAPLw5m1L0pak2p4FbWi0Rbxcnsz2r1QnScjJkxp8PVMmTFEbIeHPE9rnN3WKFW2+/ks76Wn3ojlNWNb25TPi/UlptghZI0Nd+p/wCdv91rcX+n9W1wf6v0efXNdVWiJBIqQCCQCKrQFqgRQgLRcOeo20gQiEIjIKoVBBEZBEIVRkCojK1UKBUYvYQn1Wdfot/BdWvSHBt70swVmwed/SIf9E6l/uz/AMQvXh/1KsNX3JeO13s8cLS8fKZLl5ggzdN1KVk8nELImAgtZ4NG/wC4LYpqb9SazGOUw8bU21znPSXRn1iHVNX0k4TuNFgQ5mVky7HtDBJGGMZzHW65efkVjFJ09K27xwy3Ra9ceDy3YeAYh0HUZnOmxsqXLw2tle4x4GUZHNY+IdBu2m/tPgvXVndvrHWOfzedIxtmfF+2haDbIVhi0Nd+pH77fwK1uL/T+ra4P9T6PPrnOqUEgkAUEgEVWgFVSDEoAlFSK0KUbIRSiIISyCIURBCWQRCiFVGQKDIFGLJEeuxS8xxnazmxtXIfAfsrp0ztjk4GpjfaM+M+H9vqN/8Ahj/7jv8A1WXP0/f+mHL4z+39sMjG4rHRyRQSxvG18ch3xvb4FpbRCsbonMfyk7Z65/b+2XBO3Zsi2bduzcdu2q21t6V3K97r/s7vr+39tfT9Lhxg5uPjYmO153PbAwRB58TtbzVte89Zz9ZSIrHTP7R+T8lQ8JsHo2HwGu3Nh4Y4LXXdhm2gbJN13putnOfvKYr05/tH5bga7/Z/E/8AJMT6ff8ABmPX7fk07wj+N/5Jz9PucvX7flzdeJ4TbDKMjfolxPR3iFrcXM7I+bc4LHaT8nAXPdRIJBIJFBQCokUIBFBKARVaK06Ue4VFSLlIiUCqG0CCjEgoFEIKIyBRGQKJL2GIfm4v4bP6QunT3YfP6kd+3zl9SVmww/Pv0k63k4eZpMsD5eHG3LnyYGPIZPBGYy8ObdOphfV9Oq2uGrFq2ifR4a0zW0YGu6tK6TtA+HIl4TNFxcjGLJXhsZcx54jKPqk8uYWVKximY8ZY2me9z8HHme7H0x+fBrGVnSRTaXkZMfpbpPRgXkPiIa4mjxCCD12DwWcd7U2zTHXwTpXMTno7Dtflb2hmuST0IY82KyMyO4JnjxmZLnbbrdRIurXn2cdjHx6/fDLdPaejv/o5Mp0vCfPJJNNLG6Z0kr3PeQ97nN5nwaQF48RjtJw9NL3Iy9La8cM3N14/Ns/iD+ly1+K92Pm3OCjvz8vw4S0XTSCQSCQCokUIC0UIC0VjaKUGoEe5QVIgKKqQCCQKBCIbRCCgQUY4Zgoj2OJ9XF/DZ/SF06e7HyfP6nv2+cvrSrF5LtFjCTV9FDmF8Rg1aOX1SWbXQNG1x8+a2dOcaV/o8bxm9fq8Zg6VkY7e0uI9skgh01uNiv2OPFgBkMQBr1jtc0cvctmb1t2do8ZeEVmN0ejpaG3GytK1LCxsDIxMj5Obx3zQcJuVkNjO0t5kuO8E9B9JYX3V1K2m2YyyrETWYiHIy8TKOjR6gIpTmSallTPZwnmThyQOxj6tWBTWlekTXtdnhj/eWOJ2bvV+t6Ph8DGxscChBjww/AwN/stC05tM/FtVjERDcCxVzdf+rZ/EH9JWtxXux825wX6k/JwloukUEgFRIoQRQCKCii0AihFFoNakeqRSCiFBIAhAUiqkAgytEIKBCIyBRHscNlRRuMhaBGwm2toDaO9dTSp3a83zutfv27vjL6s2ubvbPvZz9dojLfvtek6XrP2eXaf8Y+4jLXN3tn3M5+s0MLaHXmOSnZY6zP2Xf/xhlTaDuMdpqnUwNN9OavZx8Z+yb/SPuDJGDRnoiwQTGKKsaXrP2Tf6R9yZIwaM1O5ct0d8+idnHxn7G/0j7vq1rTdSOO00a2HafA+CvZx8Z+yb/SGBfFyuccxY9aMWOlhXso+M/wDvom/0hztdDTE1zXl4EoF2wj6J8FqcZSIrHXq3uBtnUmPT8OEue6qQSCQCAQSKEAUUIoQCKEV8qRnlUhlbUMikMpBUihDIKKrQSCCDIFENomB2vhObPomjl7o8bKZJk5ex210kcMYLY/cTf8j3LvcL3dLf4xEPleK56019ZavaTs9BjDTdDxTLBi6pqEs2UBIXOMUUTd0YcedGmnnfMeHJe9NSbbrz1iHjamMVjpLRzdOZpc+r6djbxg5nZ7My2wveXiOdjHsJBPiL59engFYvOpFbT1iYhNsVmY8MObg5zxox0+U+vj5GkZeOT+vhZM0cja/dcXN8uQWUx/8ATdHr+8JE9zHydntF2JwH61gxOicWaiNSycscWS3ytG8EG/V5k8gsdPWv2cznphbUrvj1c+SDS29oM2POEnEbkaVHpuwy8pBDGKcW918Lr5rPvzpRt9csZ275z6Nvs7mvxdY1Qu/1TUdRz8InuZmxjixk/vNe9vv9yxvETpx8YiJWs4tPq5OraBjP7M4epOYTlwY8EEb97tojOa6xt6H6x3PzWdbz2s1/90YzWNkS/SXaFj6fhtxsVro4fSOJtc90h3OabNnn3Bcnj7zesTPx/Lqf4+sV1JiPh+HPXLdhIJBIC0FaKLQwLRUgEUIBFCKy2KJlbETcuGhuXDQ3LhIbhwii7mJiVXcDEUXcxMR8EXcxMZRd0MS0oyzAooKyg2+1Gk5hGlapgME2VgNIdjlwbx8eRjQ4CyOYo9/6191Hu8HavZbbdJiHynGRPbWmvhMtfVMTVM3HxdR9DZi6jp2c6bGw3SNfxsUxtD2l1/SJvw5D7V7V7OkzXOYmOrwmbWjPjD5Q6LqOcdW1HLxfRp5dIyNNwMJrw91OY4kk3Vl1AE11PhZym1a7a1nPPMykZnMy1+0PYrKkw9Ckhid6XiQYWLmwh7GkwN2PNm6Ox7OgP6ytNSItbPSeiWrmK4er1fSpn6vpOUyMux8eHUGzS20CN0kYDAQTZsjuC8qzEado8Zwzn3olwX4+pYmr6lkQaaMzGz5MGp3TxRiJkcQa5zWk2ebneH0QvTuW06xNsTGWOZi0zEdWc3ZKebF16J0Zjmm1abP055c23PaGGJ4IPq2WlvPnTikakRas+mJTbyl887s3lu7MR6c3Hcc1rYQcfdHuBblB553t+jz6qxaO13Z5f0YnZh7HtGKhH8Rv4OXL4z9OPm6fATnV+n4eatc12MK0MK0MJBUgKRVSBpDIpDKpDIpDK2ouRSGX0AWLHKpDJpENIhDUMnaiZO1DK2omVtQytiG5cMeSG5cEeATK75HorD3Jk7W0NyKZ7QGtklDWgAAPNADuXpGvqRGIlr206WmZmsc2fpcntZfjKe0avmY9jp+WF6ZL7WX41faNXzHYaflhemy+1k+Mqe0avmk7DT8sL02X2snxlX2jV80nYaflgemy+1k+Iqe0avmlew0/LC9Nl9rL8ZT2jV80nYaflj9h6ZL7WX43J7Rq+aV7DT8sfs+U873ja5xcLujz5qW1b25TOWdNOtJzWMNfYFhl65lbEMrahlbUMrahlbUMqkMqlTI2qLkUgKVVUgqQVKBpENIGkQoFESBURIGkQoJBIEIhQSCUAqJAIqQBCApVcqkMqkMqkMqkMqkMqkMqkBSKKQVIoIQyqQACimlUKgQEQ0iZNIKkQ0gqQNIiQKCQKiJBUgkEgkEqCkVUgqQyKQyqQyqQyqQyqQyqQyqRRSApVRSGVSKEAFFKIaQICIaREgQERUgaQSIqQNIIBA0oGkRUgqQVIKkFSApFVKipBUgKQVIKkEgkAgqRRSKEAQqCkXIpRSiEIFESCQKIUEiFBIJAhBBQKIURIKkFSGUgkFSCpBUhkUiqkFSoKRVSCpAIBAIopFSApRSAiFUVKIaVFSIQFA0gaRFSGVSCAQNImUgkEgURIJBIGkAgqQNICkEihBIKlQIqpAUiikBSCQf/2Q==',
        tags: ['SEO', 'Content Marketing', 'Strategy'],
        content: 'Full article content here...'
    },
    {
        id: 'ai-healthcare',
        title: 'The Future of Medical Knowledge: AI Systems in Healthcare',
        category: 'AI & GenAI',
        date: 'Dec 28, 2025',
        author: 'Agnitian Research',
        readTime: '11 min read',
        excerpt: 'Exploring role-specific medical intelligence, image analysis, and how ALMedics is transforming clinical knowledge delivery.',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhITExMVEhUVFxUVFRIVFRUVFRUVFRUWFhUVFhUYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHx8tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLf/AABEIAK4BIgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EADkQAAEDAgQDBQcDBAEFAAAAAAEAAhEDBAUSITFBUWEGInGBkRMyobHB0fAUQpIjUmLhchVDwtLx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAIhEAAgMAAwACAwEBAAAAAAAAAAECESEDEjEiQRMyYVEE/9oADAMBAAIRAxEAPwB1gdP25idBun9bBBl7rjm67H7LKdmcQFvUIfo12mbkevRbk3rA2cwPgQVqk3Z53GouOmTq09wUvumgAkpzXcHOJ5lL3087p4DbqeadEmKhYiNdzqVncZsf6mpnTQclrL5+QdfkkF2wOmd+aKEkzOV7QBTw4QYPu/IomowzB3CLZYl0NHmUaE7/AOFn6MEJdd2MLQUKWWArLq0DguGZjXUlOlRR9zbQVXTYjQrZY2xDgn+C4WIEhewnDXvEwYT6hbFm6IvqKLmxAashjFCCtnfVtFk8SdJRsVoz1ekl9QJxdhK6gU5F+KQOVJlYheJXAksuM7C4zEJ3c4mGU4nWFm6FXKvXNbMqXhBw+QJXuS5xJQrnklW1GqNKnqou2a40kGULaWyj8LcGzPFV2rSICaVbMBoMJ0jNKTYywaxDiTC5XpFtSOCOw/uQjLy10LlwlAhtczUtrYdqtLg9HMFZXs4K5nLDOU7QAKp9sE/q28IKpS1QQwvbbphhttLgvNpJxg9tqiCrG9tSgKeRG29tKuFlrvop9jSoC32JXkWcPHN3qurux3RmRrUg5VMuDTKjbXMhQuW5lcypjmheBwRTHCPBZ+zpOCZNe5o2JHTf0QoayjF3ZmnmFmMxlaau3PqAeogpFVAmAJPIbok2HWeFNqAPdryj6o5tqGiAq8HBY3K7QyTHimLmyhY6SoU1aalSdwV90AN9ErqXLWndEDOYjazqgMNtM9VjObgE7Dg5qX02ZKodyMoiM+w4VhjGU2jKIhBY/hrcuYaInBcZp1aTSXAEASCYQ2OYmwgMaZ4kqEe3Y9Cf4/x4YuvakkhKr7DYWtptGpQeKgZStB57RhLixS6vhxWqfCHrNC4CwxtWzIXhaECYWhr0gvOpDIUvVD93RkXAyulpKJr0+8VfToCEtF+2IX0qUrraUFGUWQVJ9LVA622M22nda7wTK4aMjfJBU64LAEZSc0wCUHJCrjYzYBDfJNMQI9nA5IGhRDi2DsmDrZxIQ7IPRovwWhFMK55kwr7ZuVsL1vQkkoiNfQDd0tEnrNWivmpHVbG6dAkDUd1vezlOl7LUCeM/NYK2r5n5abS88T+0ea2Nhh7i0Z3+TdAl5MQ/B7a0ZUHNl2U7FSFXXVQt7dtME7DiSgLzEBIyjQceJUDU3S0a+18F5DNe0gGV5cGz5xZsMI6i3ml9OvCs/WALYeZY7okBXmuAsw/EDwVf6xxS0Oman9QDsqahaO9AB4nmkVtckFOKT2vaQ7YjVChrAsdr5GZ2ug8EuZ2gfAG3XiVGvaBrtQTyJJKNw/Avad4+780UkvSbcpPBvYUWVmgl3ehJcSrU2uLMwJHLb1Tmph8Nd7PR0EBANtQaMNbAiapI1LuUoIeVgmDS4D84ple4aYlZhuMmjUAaAGjhz6rf4dcivSBjcIt1oIJSwzFO/fT0CLt8Qc46lSxaxgyl1HQplojVM0VG7ICEv7kuC5QdIXKzUBn4KnvVNSorLvQoGrUTCEatRU3F1DVF7kJfNMJWPDRcasuKOpu0S5jNVKvXyhRcqNahfhbUrBqo/VFBuk6lQ9qouTZqjBIbUq55q1lU8yk4rprZU8zZlTZVJD3CsTLSJct9g102oBqCvj1avkKNwfHX03Atd5IU/TsZ9nr0xGiGY/KEjsO0jS0Fxjn909LhUZIV+Od+mPn4q1A1R2YLM381qnsm6NHvFadrO6Ql9jh5ZMiSTJPDXZaIujG02qCcGs2sADRAWiNZtJozHwbxKTU7xjBDSHO5jVoP1KGdUc93FxKlLWaINRWBV5fOedduA4D7rtnaF5k7fNWWuH8XeiYGq1n2SDpXrJin0XlQcRHJeQGtHy24cQqQ+UyvKAhKiwgrYecSkq6m9QhciFx1h1PVE0K5al9GojW6oUNY2s2NcZ3HJP6DQG6LI2tYsKf215ISyQ8GkXVrtlMEu35cB1Kzd7iBeHRzOnAhFdorN1VhLCZGsf3LKULvLo7SPmurBXN3TGFv2dL/AOo/QTIadzxnwT+yvvZjRpdHAcl6wxEVqYc/uuAgg6BwHJLLnFKQzZXDMJAbxnoEVvoH8dRqahbWZmCzlzRylE4Vd+zBc/uAhrdTpPP1MKy9bm1XRwM2paD2z0W7UJfTMFGCqAJJgIsERdiNPRJXNK09WnmYHjYpU6hJgBFMWUWmLhQKtNnLUyp2Tjw+SnVuaNERUdqf2tGZ3nG3nCVspBMxt5QLXEIJ1Ely11FtOvVZmYWsJ2nvHxjZc7UYbToV3Npjuw0wTMS0EiVB02aotxVszZs9FScNTwCAMwI5EgifBC3FUBd1D+ViW4tIIWm7N4fmc0H3SEmpMNR4HUL65hvZ5nsWuAgxug4h/I2IMX7HUnNkbrPDsrlPdElbinSqZsr+HHmnFtZNGpS0FTPl9z2buNA2RO4W47L2dWnSa2pJjnyWmo24cZhW3DA1BKmPJ2tFNSkR81l+1ePuaW0WzlcO+QYPgCtRimIU6TZeYnSUotLehcv0yl3A8Crp/ZjavEwLs7hxdBaS1vEOG/gtWGspjTT5oPvUTBEfJX1WteATvy5+Km9KxSSIi7c8wweavbZ8XGeilbNA0AhXXD4C6tHXlsDNJnJeVJevJupOzMX9DupLl1Wtr0czUjr2sFaDG0LKtI7hVtdzTGqyAgXslcccLVdQrQqBUjQq32c6hccM6cOCnTrFh6JZQrFpTBneC4I3o3IIWex/C5eKrGz/AHAfOEfRGUprRghDwPpkcQxYNfAbLQ2GtOwMbkLMVa5e/N7oB4BfRMcwBtxlM5HARmA3HXmsRiNg62eabteIPA9UBoqvTtTFKj2uY5xLYnUDcbarSdkb32tDKSSWGNeXBZnDXsc7UlpbqHZczQf8hyTjA70+3IhrWuEdwQ1zhsR1RA8yh5cNjVJ61055n9o90fUpti0loA/cY8uKVvoxAGqWT+gxX2OcNn2IbvrKqrvZTIc8wJjqTyHVHMphjNTAaNTw0GpKytxXdcVc40a33Bt59Cfsl/VFP2ejGpcVa+k+zZ/aHuzEHbMY26Ln/SswOUAljS46kkNBjeOqnbXAAMvc0xIlwAPiXOEfFCOc+sZ1aD17x8SNkhSq8O0rplM6d5w2A59Sr2Nc9xqPMuJk6D67KdG0Y3aB00jxH5/q53dj5SFx1/6NMLqsFG49qA5oY497XXKQBr1KwTLPWHJ9c1Xv00DRPdkRJBEnXU6qq3oEE6AnKW5XNB3blBE7Hbz2TJUTnLt59BWFWjGAiGd7IcxElvHuncb6x0X0HCMwpjiF87tnEQMswf8Axa0jyI2X0LALsGmPDmNOCWQ8FpC6Z3tBqTx8kdaW4cB+clys5v5xRFiAEH4Olo1ZYta0ARI/dz+KQ4pUgEpldXMCMwj86JHc1c2aCPUj6JYofkaqkZXHqBqHK52hI7w+R5Jn2fwttCCNY2XadiBJgku3BII9ITK1Gmiq3lGeEVdhFdoeO9ql4tspJJnkjpVFUpEVkW0HqNd8oRtdWgymoVyyiuF5TXUwoEPcS2pBTai2WpTd0oKpEzyB69tokddmVy0lN+mqXXVsHHRMKLDQzLQYThUjVTwvDJ3C19jY5WgxAOynOdFePj7Mx+JYGWjMBpJHmIP1Sqm4tMFfTb23zUssSc2Yect+gWMvcNL3QxskzAHQSfkhCdh5eLq8AKbs2yvt60LmAsArsze6MxPgGO/0uW9GZBc1pEiHGPdidfP4KhIb0Xys7i/ZR1aoXioYOpzSSOg6J1Qp5f3snlm+qZ0WDSXN3jQzwlI8KR0z+EYDTtwcsku3JVt7bNDYgRyj5cloHWn+TPX6oO+sS4GC31QUgygZR7yMomYJg8fA81CpTM/FHWlm1xOYEunugbO0kt+G/XwmFOkXnRJN6U44/EWYrirq/wDSDcjT70nV0cJ4BE2NuwU9ZzSIgty5YMzrMzHxVv8A0UyZ2OvWeHzTOnh9NjSOMRo4bodrG6UZ/SpVgZopnp7w4+SaV8rhJLp4uME/cqhuGGm4OEsEakPac3KZGh6jTRWWNQ1X8Rl4ZwCdPegc9dErwdK3QPSoFxkB7W8AYLjB3nh4BMbc5YDwXtMiCAtThmCB8OgjnruirzAe7pw9RyIUnyGpf8+GHxfC8kVKZlh3ndp3g8x1/CC2s0wHTGwjfpPMdPw7I2T6dOo2pmIykzqYEGD4yFgHtfmzwWx0MeIH0/8AivCfZGTk4ujGjKWWqG3DsoImZnMI2P5ITjDL6m3utf8Atc6ec6xMcviSs1ZWrwRVrZnudq1o1OgcCTI8EXh9s4EGHe6RBGkny2VqMvZ36by2oOfTNUODgJ7vgoW1Y7hCUpbFSlIa3LnbrroM2keKMu7ym57TTGUOGo68kjRSLZbd1yY1j+UD4oajw589dTw3U2154nkTr9D+QpVH+7Aj/KTrymTpCQp/S63tM3juTvuJj0UKTcuYDgd+YdJ09CrKVfL47HX08+ErlSpM+p8hAA8Ahtj5RSSgr6tlBRD3rOY7ewIlPFWyc5Ui21uMzk8pbLJYK+StdbjRNNUS43ZLKuIoUl5Tst1F1tsl2IiE1DYCXXplVj6Ql4LabpRNjZlzlC2tyXaLS4fawAjOVIEIdmEWFEtA29B9kyY8jWeU9YVdNkKayN2zfFUiV0YJDeUA9D3tPVIcTqOgwQ3iSIaSZmSecx6JzVcs3jlcgGPkD81Tj9J8zwCqVw6nVzOZnAhhBYCQ97A8GOUT5lB3V65xPdp5JJDCWnKSZc4HeSTr5chADbhxJ2/i37KX6k8cv8W/ZaKMVl4BP9g8HD7o6yBB3H8glgrn/H+Lfsire7PT+LfsuaOTRo6VMEbj+QVNzTGunxQ1C7/NlbVrSFOmXUk0JL+oabwQHtgGHB0e8RPDoPgqsNqgHVh/l/pCYhiJc54AEAwD/wAZH1Kqt786abcJ6R8gPRSlrLQxGhur6m2O4f5D7Kii+mXSWHcES/cGRI06oSjTq1f6gacs5c0SJjb0Ta3tHNAlvh3R9kuIa2NIp1mgOpgNAAJlu3p8ExtbSif+00cdIG3h4pVbQCBudNNPjomd/W9lRJHGBOuk8dB5ISdleP4j21ewCBA6K2vcMA3C+dnGa2uWejiHxvEzp9Uwddn2cOkuO51jy0UX28SNa6NXZbiJplwJpkQ4EvPugTueizWJPoOY0NYT3jMVRE8xC7c3r2UazniRlyiRuXd0aH9on4FZAYk5rPZFjSQZzFomeQI4fVVh8fTNy1N2jSYfSYHAGm5p1/7k8T00Wie2gAcomGlvvbuBb3hO897bksfhuMe1EPyse3RuVpl05iZ3HIeaMw+6dUc1odBLSfd08NlouNemCUJ9vBrSrnMQxr9TBAfuO9whOP05FvTeWOaJjNmHUag+C7a4cHf0Q1rnEtPtIM7d6deZK521u/Zsp2o1aMshvvHf3f8ALpxUeTlXiNXFwOrkKjdgOMyOJ1B89OCa29y1w7rnbcNNVmbVhyFzdc0wYg8p6GNxtzlcwfEQ2oadSWmdO593J4vBJqnhrg4Bo7xmTpGw8VW+qOZ9P9o5luHtHOB+aoS4tCOqNoVpgNxVEQCfQfdZDGaTy7QPcNzLSI126rVXLPJZ/FLRztnH1KtAy8qbR3AKDhqWuEcwQtvYUdAsTglvUadST5kra2leAJS8o3BnoyFNeQ/6xcWema+0RXmVdSkCgKV8iqdyCtNNGO0xjg4ZTJnjsU1DmkkhIG1ETRuoU5RstxzSVDteQVK8V5riFFxZoUkyu6qaLMYo/NITu8rJFfBX41Rl55WJhRgoa70RT6kFQu6WYK5lBLJ5cYRtSkQjMDwvimNzZQlctodRdWKaFVXVrvKxzuQ08eHxVjbKUux+nDWNHMmOcD/aWTwaC0ScETYU5IVdRsBSpVsqzG1GotXMaOCHxLGg2GtygnjHujmeZWeucQcB8kFSJdJOpPxKAxqbDH6dOf3Ecddzx23VFXH69UO7p9mZE5SQTp3Z22KRufECG8z3W6n0UbVzi7jlMwOAOmoG2wRpC9mNrcFwiCJA2bsQZHxCZurTlljhPCdumyX2dPK1xIaGtl2d06cYmfH1UWXQqe4IgRm1k9dTp+bJlEHcPxm4a406LQRGpkj3zpyGw+J6JdWwUOHuiR1PDqCqKFB/tW5Glztw0TJgSdtdgVpsDuMx7wgkyAZ9ddSi44CMtM7h1qxrw2q0tcNZE6EDQGfzbkn2EYbQFPO55zFsNZ5xPhoQm13g+bVoEzJ4lxGzR5/miU1WuYRmjRoEkabxHhPFZ5NrDZGKemks7oNbDe6eexn6FYXtTcmpVAmROp4k8uhR93jWRoME7RwkS4cN9WbrP4ZWNSuHO4g77HV0eOw9FOEdHm8NhgrZEOJk6k8+p6rvaDAs81JJfMlx3J5ypW74LdvQBai3AqNgrUsMjVmb7K4wSTTqaOG/DzhbB1MOC+e9q7J1tUFdnA69QtV2exYVaYM8F0leoWEvpk7zDwUrusGB2WlBDiqLioGzK6M2dLjT0Q4dh5adU4/TCFO0AfqFOqCFzk2wRgkgQ24XlcvLrZ1IxFW3IVOdzU3JCoq0gVqswNAtK/I3RlG+BS24t0A/MEaOs1jLnkVey6WSt7pwTGldpXEZcjQ4qVCUNXpyvUHkr1WtBhBBbsT3tuQj8OsXjK8tlo3HGEU+hmCMsbkgBpA00lFywEYq9GNJjTqBCHvWIoVAAgryuIUV6a3VC+s8MBJ0WcuHmq/NBjgPqi69c1nuH7WGPF3H0Xn04jRdOX0CEPsU3FNVMokphXpyu2jIKkVSE2IW5aJI6D6lEWtmRAI1iSP7WgTHifqnl9SEB8THujmefgPiUHbtOvEuMePE/RE5gttY5t+J+a0FlhDC0jLwGo4ESr8Kweo+DGVg/ceP/EcVrba1a1gaB9yeZRBVnzLFg7KWkQBsBtpz5pdg1UZiFve0uHDKSAsDUNOm/wBwzprrrz/d9E/pJ4xrc0ZOitsmFhaRw3HmibGrTe0d0/H/ANk3sKVNxjL8/ujYUNsNv2vB+SUdo6GhgwOPHrsvXNF1N4c0QOSKc/O2CFGcLNPHOj5/dPb7NwObMC3INC2AXl2Y8DLtIXMDouLp1gbeCY4vhkO02nZaTs7gctBjRJFbpSTVYDt4dE97P3uZ0IDG7QUxoqOx9NxquPBWrDO3pqO0GHirScI4LBYFXNu40SYgmF9SqtlsL5r2vsvZ1BVHA6+CHGwcsadm4wvVs80qx+tCZYNXDqTY5JLj25XRXyOn+iDuzdWWhOLinISXs+yGhP8AglnjG49iLSwryLNM8l5Dsd1Pn7q6qNwhH3ICqdWlbjzAx9ZDveFRmlWthE4prOhH4WwOSnEHorA7lccatrQAlVd/9REvudEkqXP9RKkO3ZpTVAagRWdmnZV06pKsmFNsso2Tr3D40lV3Vb2dJ7+IB9dgp0qZcddlVj1uX27w3Qktiejglsehf2fINPXed+fijLhvLglODVTTlru6eIPAppVII0KmyyAXu13HqrKcf8vl58139GSeSLq2Ip0w5xiTtxPQdSgcRsrWrcuytGbmdgPE8AtXaYHTt+8e8+N+A8AquxNOG1DzIEJviZhcvaDWWQNXurtpUlKru6gQi8MfomawVPQi+oB4IK+Z9qbA03ajTgfovptV8EJT2jw1temR6HquiCasxXZ9+kLT2joIKx+FE03lh3Bham2fKYRGmdRD2odrRsrsMqyIXr+jGoS/wr9WZrG6HFbLBmAUh4LIYm/MAE2s8Sy045BK1Y8ZUUdpasmEb2StIbPNZy7ufaVI5rc4LSy0wjLIiR2QbUKz3aWyD2ERMhaCohLtoMKcHTK8itGU7LVXsZkf+0x5cERivecI4onE6IZJCrw+iahDirf0zU/1G2GW+VgR0rjBAVdV6i9ZoSpBoLV5Bgry46z4rUrCVNtylmZTL1vPJoY/qF4XKWB67nRsFMLuasqFlXylCuevMKFhofVL/RC2T8z0EXojBnzUKEmPBaaakYCvpNkqmiyUdbsUmaUWtpr11TPsiD4+hldfVghSNbMIhAIBXw5ldonRwGjxv580C3CalPYh/gdfQp62AuPIQaCmwC3cABn7sbzpAG6AfdG5qyPdbo0cv9pwXzoYI5OAI+Kf4HhrG97K2TqIaAEGqHWlmEW5o0Rm0J1KqxW7BCKx2vlYfBZV1zmQir06TrDtapLk6w90Qs2yp3k8tamgT0Ihtdtlsqim+WkFEsdLUte/LKVDsxWNUMlzI4ptaHZK8erTWZ4wnjKQ9mCiTGVnVghO3DO1ZC0vNYWnw2tKEkUg/oU17CClmJ1xTELWYkzQlfOsdry8DqjHQSzA3AKZqVMxX0q0ENCxvZO3EArZ09lPkH4jlZ8CUmF7nqZRzU8duy1uiAwTXU7roxpWCcrlRf2hqBoE+CY4a0ZBCzvbm6Daex01RnZq/wA9Juh2Ra+IE/mPH1EEa0uUa1bdBWtSXrlELkOgV5QC8kGs/9k=',
        tags: ['Healthcare', 'AI', 'Medical Knowledge', 'ALMedics'],
        content: 'Full article content here...'
    },
    {
        id: 'finance-automation',
        title: 'Natural Language Finance: Automating Financial Operations with AI',
        category: 'Agent AI',
        date: 'Dec 22, 2025',
        author: 'Agnitian Research',
        readTime: '8 min read',
        excerpt: 'How AI agents are simplifying financial management through natural language interfaces and prompt-based automation.',
        image: 'https://images.unsplash.com/photo-1553729784-e91953dec042?w=500&h=300&fit=crop',
        tags: ['Finance', 'Automation', 'AI Agents'],
        content: 'Full article content here...'
    }
];

export const blogCategories = [
    { id: 'all', label: 'All Articles' },
    { id: 'genai', label: 'AI & GenAI' },
    { id: 'agents', label: 'Agent AI' },
    { id: 'creator', label: 'Creator Economy' },
    { id: 'marketing', label: 'Marketing & SEO' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'finance', label: 'Finance' }
];

// ==================== SERVICES (Home Section) ====================
export const services = [
    {
        id: 'genai-service',
        icon: Zap,
        title: 'Generative AI & Knowledge Systems',
        summary: 'Turn trusted knowledge into usable intelligence',
        description: 'We build Generative AI systems on curated, domain-specific knowledge to deliver accurate, explainable intelligence. From RAG pipelines to production-ready content generation—intelligence that traces back to verified sources.',
        features: ['Knowledge Unification', 'RAG Systems', 'Content Generation', 'Production Infrastructure'],
        useCases: ['Healthcare Intelligence (ALMedics)', 'Financial Knowledge Systems', 'Research & Discovery', 'Content Automation']
    },
    {
        id: 'agent-service',
        icon: Layers,
        title: 'Autonomous & Agent AI',
        summary: 'Systems that decide, plan, and act',
        description: 'Autonomous agents that reason through business problems and execute decisions. Perfect for financial operations, content workflows, and complex automations that need flexibility beyond hardcoded rules.',
        features: ['Agent Orchestration', 'Multi-step Planning', 'Tool Integration', 'Human Oversight'],
        useCases: ['Financial Automation', 'Workflow Orchestration', 'Autonomous Control Systems', 'Process Automation']
    },
    {
        id: 'creator-service',
        icon: Feather,
        title: 'Creator & Storytelling Platforms',
        summary: 'Platforms for authentic content creation',
        description: 'Social and content platforms designed for storytellers, creators, and communities. From love stories to research insights—platforms that prioritize authentic expression and wide reach.',
        features: ['Story Submission & Curation', 'Multi-Format Publishing', 'Community Tools', 'Audience Reach'],
        useCases: ['Social Storytelling (Lovever)', 'Content Conversion', 'Research Publishing', 'Video Narratives']
    },
    {
        id: 'seo-service',
        icon: TrendingUp,
        title: 'Marketing, SEO & Discovery',
        summary: 'Content that gets discovered and resonates',
        description: 'Strategic content and SEO solutions to increase visibility and discoverability. We focus on research-driven content, technical optimization, and long-term discovery strategies.',
        features: ['SEO Optimization', 'Research-Driven Content', 'Technical Audits', 'Discovery Strategy'],
        useCases: ['Blog Platform Growth', 'Thought Leadership', 'Organic Reach', 'Knowledge Discovery']
    },
    {
        id: 'work-service',
        icon: Users,
        title: 'Freelancing & Work Ecosystems',
        summary: 'Platforms connecting talent and opportunity',
        description: 'Community-driven work platforms connecting freelancers, creators, and organizations. Build ecosystems where effort, skills, and resources create sustainable impact.',
        features: ['Talent Matching', 'Task Marketplace', 'Collaboration Tools', 'Impact Tracking'],
        useCases: ['Freelance Networks', 'Gig Platforms', 'Community Work', 'Skills-Based Matching']
    },
    {
        id: 'enterprise-service',
        icon: Building2,
        title: 'Enterprise Systems & Operations',
        summary: 'Complete business solutions at scale',
        description: 'Enterprise-grade platforms for HR management, financial operations, and business intelligence. Built for clarity, scalability, and ease of use across organizations.',
        features: ['HR Management', 'Financial Visibility', 'Employee Tracking', 'Operational Intelligence'],
        useCases: ['HR Operations (Geo-HR)', 'Financial Management (Easy Ledger)', 'Business Intelligence', 'Org Structure Management']
    }
];
