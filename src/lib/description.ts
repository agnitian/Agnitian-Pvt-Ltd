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
