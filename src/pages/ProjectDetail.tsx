import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Database,
  Lock,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  pitch: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  stats: {
    impact: string;
    architecture: string;
    stack: string;
    status: string;
  };
  challenge: {
    context: string;
    bottlenecks: string[];
  };
  architectureFlow: {
    step: string;
    label: string;
    detail: string;
  }[];
  engineeringHighlights: {
    title: string;
    description: string;
    implementation: string;
  }[];
  productionDeliverables: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  medicinachain: {
    id: 'medicinachain',
    title: 'MedicinaChain — Enterprise Modular HMIS & HealthTech SaaS',
    category: 'Enterprise HealthTech · Full-Time Employment (Current Role)',
    pitch:
      'A multi-tenant clinical and hospital management platform with dynamic runtime module decoupling, allowing healthcare facilities to subscribe to custom modules on medicinachain.org and configure their HMIS without monolithic bloat.',
    image: '/uploads/medicinachain.jpg',
    demoUrl: 'https://medicinachain.org',
    githubUrl: 'https://github.com/jared-solutions',
    stats: {
      impact: 'Modular Runtime Decoupling',
      architecture: 'Multi-Tenant Spring Boot Engine',
      stack: 'Spring Boot (Java) • React • MySQL • Flyway',
      status: 'Live in Production',
    },
    challenge: {
      context:
        'Traditional hospital management systems (HMIS) ship as rigid, monolithic products where small pharmacies drown in hospital features they never use, while large referral hospitals cannot customize workflows without risking platform breakage.',
      bottlenecks: [
        'One-size-fits-all products forced clinics to pay for and navigate complex inpatient modules they did not need.',
        'High risk of service failure when modifying single hospital modules in monolithic codebases.',
        'Lack of secure multi-tenancy and patient biometric authentication across decentralized clinics.',
      ],
    },
    architectureFlow: [
      {
        step: '01',
        label: 'Facility Onboarding (medicinachain.org)',
        detail: 'Health facility registers profile, selects required modules (Pharmacy, Billing, Lab, Inpatient), and receives cryptographically signed license key.',
      },
      {
        step: '02',
        label: 'Cryptographic License Verification',
        detail: 'Spring Boot backend decodes and validates license keys, binding user permissions strictly to active licensed modules.',
      },
      {
        step: '03',
        label: 'Decoupled React HMIS Frontend',
        detail: 'HMIS client dynamically reconfigures route guards, navigation trees, and visual themes based on licensed modules.',
      },
      {
        step: '04',
        label: 'Multi-Tenant Data Persistence & Queue',
        detail: 'Multi-tenant MySQL schema isolation, Flyway versioned migrations, ActiveMQ event dispatch, and biometric matching (SourceAFIS).',
      },
    ],
    engineeringHighlights: [
      {
        title: 'Dynamic Runtime Module Decoupling',
        description:
          'Facilities require a customized experience where only subscribed modules are accessible and rendered in navigation.',
        implementation:
          'Architected a decoupled frontend module system that parses signed license payloads upon authentication, dynamically registering routes, sidebar trees, and branding themes without hardcoded per-client builds.',
      },
      {
        title: 'Multi-Tenant Isolation & Biometric Verification',
        description:
          'Securing multi-facility patient health records and integrating fingerprint authentication for clinical auditing.',
        implementation:
          'Engineered multi-tenant database isolation at the ORM layer paired with SourceAFIS biometric template matching to authenticate staff and identify patients.',
      },
    ],
    productionDeliverables: [
      '28 modular enterprise domains (Clinical, Pharmacy, Accounting, Lab, Morgue, Assets)',
      'Public subscription and licensing gateway (medicinachain.org)',
      'Flyway database schema migration pipeline and HikariCP connection pooling',
      'Biometric fingerprint matching integration (SourceAFIS)',
      'JasperReports PDF billing, receipts, and clinical report generation',
    ],
  },
  omilife: {
    id: 'omilife',
    title: 'Omilife — Pharmaceutical Distribution Platform',
    category: 'Pharmaceutical Distribution · Production Client Contract',
    pitch:
      'A responsive pharmaceutical ordering and distribution web platform connecting regional healthcare facilities and pharmacies directly with verified pharmaceutical distributors.',
    image: '/uploads/omilife image.png',
    demoUrl: 'https://omilife.co.ke',
    githubUrl: 'https://github.com/jared-solutions',
    stats: {
      impact: 'Catalog & Ordering Portal',
      architecture: 'RESTful E-Commerce Engine',
      stack: 'React.js • Django REST • MySQL',
      status: 'Production Deployed',
    },
    challenge: {
      context:
        'Regional pharmacies and pharmaceutical suppliers in Kenya faced operational friction from manual phone orders, decentralized medicine stock catalogs, and delayed distributor deliveries.',
      bottlenecks: [
        'Medicine orders took up to 48 hours to process via manual phone calls and paper price sheets.',
        'High friction in browsing available distributor catalogs and pricing updates.',
        'Lack of centralized order history and digital invoices.',
      ],
    },
    architectureFlow: [
      {
        step: '01',
        label: 'Client Catalog & Ordering Portal',
        detail: 'Responsive React 18 frontend providing search across distributor pharmaceutical catalogs.',
      },
      {
        step: '02',
        label: 'Django REST API Backend',
        detail: 'Handles catalog querying, pharmacy cart orders, and supplier routing.',
      },
      {
        step: '03',
        label: 'Relational Medicine Store',
        detail: 'MySQL relational database indexing drug categories, wholesale pricing, and verified supplier profiles.',
      },
      {
        step: '04',
        label: 'Automated Supplier Notification',
        detail: 'Instant order dispatch alerts sent to pharmaceutical suppliers for same-day delivery dispatch.',
      },
    ],
    engineeringHighlights: [
      {
        title: 'Optimized Pharmaceutical Catalog Search',
        description:
          'Pharmacies need to quickly search by brand name, generic formulation, and dosage across extensive medicine lists.',
        implementation:
          'Implemented indexed multi-field search and client-side cached query filters, enabling sub-30ms search results across pharmaceutical catalogs.',
      },
    ],
    productionDeliverables: [
      'Responsive medicine ordering and distributor catalog web platform',
      'Pharmacy client registration and order tracking dashboard',
      'REST API endpoints with Django REST Framework',
      'Supplier order dispatch notification system',
    ],
  },
  poultryops: {
    id: 'poultryops',
    title: 'PoultryOps — Commercial Poultry ERP & AgTech SaaS',
    category: 'Commercial AgTech SaaS · Production Client Contract',
    pitch:
      'A multi-tenant commercial poultry farm ERP powering 20+ active farms with real-time flock lifecycle headcount math, egg inventory normalization (crates vs loose eggs), automated Safaricom Daraja M-Pesa STK Push, and Africa\'s Talking SMS dispatch.',
    image: '/uploads/poltry system system.png',
    demoUrl: 'https://poultry.trinitysoft.co.ke/',
    githubUrl: 'https://github.com/jared-solutions',
    stats: {
      impact: 'Powering 20+ Active Farms',
      architecture: 'Multi-Tenant AgTech SaaS Engine',
      stack: "React • Django REST • PostgreSQL • M-Pesa API • Africa's Talking",
      status: 'Live SaaS in Production',
    },
    challenge: {
      context:
        'Commercial egg and poultry operations in Kenya face razor-thin margins and high operational volatility. Farms struggle with daily egg collection mismatches, unrecorded mortality and sales drift, feed consumption losses, and manual reconciliation of hundreds of customer M-Pesa transactions.',
      bottlenecks: [
        'Living flock headcount discrepancies caused by untracked mortalities and undocumented bird culls.',
        'Inventory math errors between loose eggs and 30-egg crate trays causing balance mismatches.',
        'Revenue leakage and delayed debtor follow-ups with retail egg buyers and wholesale distributors.',
        'Lack of automated feed inventory low-stock alerts and veterinary vaccination schedule reminders.',
      ],
    },
    architectureFlow: [
      {
        step: '01',
        label: 'Cage Grid & Daily Egg Collection',
        detail: 'Staff log daily egg collections (Starter, Mid, Normal categories) with automatic 30-egg tray normalization and cage heatmap tracking.',
      },
      {
        step: '02',
        label: 'Biological Headcount & Flock Engine',
        detail: 'Real-time mathematical model calculating live flock population (base_birds - mortalities - sales) and feed burn rate.',
      },
      {
        step: '03',
        label: 'Safaricom Daraja STK Push & C2B IPN',
        detail: 'Native M-Pesa mobile checkout triggers instant STK Push, validated via atomic database webhooks with zero duplicate processing.',
      },
      {
        step: '04',
        label: "Africa's Talking Automated SMS Dispatch",
        detail: 'Cloud SMS gateway automatically sends payment confirmations, printable thermal receipts, and debtor account balance alerts.',
      },
    ],
    engineeringHighlights: [
      {
        title: 'Authoritative Biological Flock Lifecycle Engine',
        description:
          'Calculating exact living birds across multi-tier cage structures vs free-range setups without historical batch data distortion.',
        implementation:
          'Engineered an authoritative biological headcount formula in Django ORM deducting only post-batch mortalities and culled bird sales, ensuring true head counts for egg production percentage calculations.',
      },
      {
        title: 'Egg Store 30-Egg Tray Normalization & Tiered Pricing',
        description:
          'Managing inventory balance across variable packaging sizes (individual eggs vs 30-piece trays) with volumetric price breaks.',
        implementation:
          'Created atomic egg inventory algorithms with remainder borrowing logic, ensuring flawless stock counts when selling fractional trays, coupled with customer-tiered wholesale pricing.',
      },
      {
        title: 'Zero-Leakage Safaricom M-Pesa & Africa\'s Talking Automation',
        description:
          'High transaction volumes require 100% financial accuracy and instant SMS notifications to farm owners and customers.',
        implementation:
          'Built idempotent Daraja webhook handlers combined with Africa\'s Talking SMS queues, automatically sending branded digital receipts, low-feed threshold alerts, and debtor balance reminders.',
      },
    ],
    productionDeliverables: [
      'Multi-tenant commercial poultry SaaS serving 20+ active Kenyan farms',
      'Automated Safaricom Daraja STK Push and C2B IPN payment reconciliation',
      "Africa's Talking SMS integration for automated receipts and debtor reminders",
      'Veterinary biosecurity, vaccination schedule alerts, and mortality tracking',
      'Fine-grained RBAC module licensing (Sales, Health, Feed, Reports) per employee',
      'Offline-capable PWA with mobile-friendly thermal receipt printing',
    ],
  },
  nyumbalink: {
    id: 'nyumbalink',
    title: 'NyumbaLink — Real Estate Marketplace & Automated Rent ERP',
    category: 'PropTech & Automated Fintech · Independent Production Platform',
    pitch:
      'An integrated 2-in-1 PropTech ecosystem powering 300+ tenants and landlords in Kenya across two synchronized engines: a public house-hunting marketplace with verified listings, and a multi-role tenancy ERP automating monthly M-Pesa rent collection, underpayment/overpayment discrepancy detection, and digital lease storage.',
    image: '/uploads/nyumbalink-estate.jpg',
    demoUrl: 'https://nyumbalink.co.ke',
    githubUrl: 'https://github.com/jared-solutions',
    stats: {
      impact: '300+ Tenants & Landlords',
      architecture: 'Dual-Engine PropTech Suite',
      stack: 'React 18 • Django REST • MySQL • M-Pesa Daraja',
      status: 'Live Production Platform',
    },
    challenge: {
      context:
        'Finding and renting residential property in Kenya historically suffered from two disconnected problems: (1) House seekers face unregulated brokers and fraudulent listings, and (2) Once tenants move in, landlords and caretakers struggle with manual bank slips and unverified M-Pesa forwards, causing payment disputes, uncollected arrears, and delayed repairs.',
      bottlenecks: [
        'Fragmented property discovery with unverified listings and predatory middleman broker fees.',
        'Manual rent reconciliation friction: Landlords losing hours matching M-Pesa SMS forwards against unit rent.',
        'Silent underpayment and overpayment errors without automated notification triggers.',
        'Lack of secure digital lease storage and security deposit escrow tracking.',
      ],
    },
    architectureFlow: [
      {
        step: '01',
        label: 'Marketplace Engine (Discovery & Verification)',
        detail: 'Public React 18 web platform allowing house hunters to filter by location, bedrooms, and budget. Landlords list properties with photo galleries and pay automated KSh 500 M-Pesa verification fees.',
      },
      {
        step: '02',
        label: 'Viewing Schedules & Tenant Onboarding',
        detail: 'Prospective tenants book viewing appointments online. Approved tenants are provisioned with unique unit codes and first-time login OTP credentials.',
      },
      {
        step: '03',
        label: 'Automated M-Pesa Rent & Discrepancy Engine',
        detail: 'Tenants pay rent via M-Pesa. System compares payment against expected rent, flagging exact underpayments or overpayments and notifying caretakers in real time.',
      },
      {
        step: '04',
        label: 'Multi-Role Tenancy Operations ERP',
        detail: 'Dedicated dashboards for Landlords, Caretakers, and Tenants managing digital lease agreements, security deposit escrow, utility billing, and prioritized maintenance ticketing.',
      },
    ],
    engineeringHighlights: [
      {
        title: 'Synchronized Dual-Engine PropTech Architecture',
        description:
          'Seamlessly bridging public property discovery with private post-move-in property management ERP.',
        implementation:
          'Architected a unified relational data layer linking public listing metadata with private unit occupancy, tenant accounts, and caretaker assignments across both Django and React applications.',
      },
      {
        title: 'Automated Underpayment / Overpayment Discrepancy Engine',
        description:
          'Tenants often pay partial rent or combine utility fees, creating ledger chaos for caretakers.',
        implementation:
          'Engineered an automated payment validator comparing incoming M-Pesa transactions against expected unit rent. Discrepancies immediately generate audit logs and dispatch real-time notifications to caretakers and tenants.',
      },
      {
        title: 'Digital Lease Agreement & Security Deposit Escrow',
        description:
          'Paper leases lead to disputes over tenancy dates, eviction notices, and unreturned deposits.',
        implementation:
          'Created an immutable lease agreement state engine (Draft -> Active -> Terminated -> Expired) tracking monthly rent, terms, and deposit escrow statuses (Pending, Paid, Refunded).',
      },
    ],
    productionDeliverables: [
      'Public property discovery marketplace (nyumbalink.co.ke) with verified listing workflow',
      'Multi-role property operations ERP (Landlord, Caretaker, Tenant, Admin)',
      'Automated Safaricom M-Pesa rent reconciliation and instant digital receipts',
      'Automated underpayment / overpayment discrepancy detection engine',
      'Prioritized maintenance ticket resolution workflow with status tracking',
      'Digital lease agreement repository with security deposit auditing',
    ],
  },
  'hardware-pos': {
    id: 'hardware-pos',
    title: 'Hardware Store POS & Multi-Branch Inventory Engine',
    category: 'Retail POS & Commercial Inventory · Production Client Contract',
    pitch:
      'An offline-first retail point-of-sale and inventory platform tailored for hardware suppliers, processing 100+ daily M-Pesa Till transactions with barcode checkout, fractional unit sales (pieces, meters, rolls, kg), and real-time stock alert thresholds.',
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=1200',
    demoUrl: 'https://github.com/jared-solutions',
    githubUrl: 'https://github.com/jared-solutions',
    stats: {
      impact: '100+ Daily Transactions',
      architecture: 'Offline-First POS & M-Pesa Till',
      stack: 'React.js • Django REST • MySQL • Thermal ESC/POS',
      status: 'Production Deployed',
    },
    challenge: {
      context:
        'Hardware stores handle thousands of fast-moving construction items across non-standard fractional units (wire by the meter, cement by the kg, timber by the foot). Manual paper cash registers caused stock shrinkage, slow counter queues, and frequent cash drawer discrepancies against customer M-Pesa Till payments.',
      bottlenecks: [
        'Fractional inventory calculation errors when dispensing cut lengths or weighted products.',
        'Lengthy counter wait times due to manual product lookups and unintegrated price calculators.',
        'Delayed cashier reconciliation between cash in drawer and Safaricom Till payment confirmations.',
        'Stockouts of critical building supplies without automated minimum-threshold reorder alerts.',
      ],
    },
    architectureFlow: [
      {
        step: '01',
        label: 'Fast-Scan Cashier Terminal',
        detail: 'Responsive React register with barcode scanner input, hotkey shortcuts, and real-time subtotal/tax computation.',
      },
      {
        step: '02',
        label: 'Fractional Unit & Inventory Engine',
        detail: 'Django REST inventory service managing dynamic dimensional units (Piece, Kg, Meters, Rolls) with atomic stock decrements.',
      },
      {
        step: '03',
        label: 'Safaricom M-Pesa Till Reconciliation',
        detail: 'Native Till integration reconciling mobile payments against counter sale IDs in real time.',
      },
      {
        step: '04',
        label: 'Thermal ESC/POS & Accounting Ledger',
        detail: 'Instant receipt generation for thermal slip printers and automated end-of-day profit/loss ledger calculations.',
      },
    ],
    engineeringHighlights: [
      {
        title: 'High-Speed Atomic Inventory Decrements',
        description:
          'Counter rushes with multiple sales clerks must never trigger negative inventory or concurrency collisions.',
        implementation:
          'Implemented database transaction boundaries (select_for_update) wrapping checkout batches to atomically decrement warehouse stock balances.',
      },
      {
        title: 'Fractional Dimensional Unit Conversion',
        description:
          'Suppliers ship products in bulk rolls or bags, but customers purchase custom fractional cuts.',
        implementation:
          'Engineered a unit-conversion data model supporting decimal precision for rolls, meters, and kilograms with automated stock deduction.',
      },
      {
        title: 'Multi-Channel Cashier Auditing',
        description:
          'Store owners require clear separation between cash drawers, card payments, and M-Pesa Till receipts.',
        implementation:
          'Structured double-entry payment logging that tallies independent settlement channels and flags any drawer discrepancies at end of shift.',
      },
    ],
    productionDeliverables: [
      'High-speed cashier POS interface with barcode scanner compatibility',
      'Fractional unit inventory management (Pieces, Meters, Rolls, Kg)',
      'Safaricom M-Pesa Buy Goods Till payment reconciliation',
      'Automated low-stock reorder thresholds and depletion alerts',
      'Thermal receipt printing engine (ESC/POS compatible)',
      'Daily sales, expenses, and gross margin reporting dashboard',
    ],
  },
  'sacco-system': {
    id: 'sacco-system',
    title: 'Core Banking & SACCO Financial Ledger',
    category: 'Fintech & Cooperative Banking · Enterprise Architecture',
    pitch:
      'Double-entry financial accounting ledger for Savings and Credit Cooperatives (SACCOs), engineered with ACID transaction isolation, member dividend distribution models, loan amortization schedules, and automated audit logging.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200',
    githubUrl: 'https://github.com/jared-solutions',
    stats: {
      impact: '100% ACID Reconciliation',
      architecture: 'Spring Core & HikariCP',
      stack: 'Spring Boot (Java) • React • MySQL 8.0 • REST',
      status: 'Production Architecture',
    },
    challenge: {
      context:
        'SACCO institutions require strict regulatory compliance (SASRA standards), error-free dividend calculations, and zero-tolerance for balance discrepancies across member savings accounts.',
      bottlenecks: [
        'Manual member loan interest amortization calculations prone to compounding errors.',
        'Slow end-of-month dividend distribution processing across thousands of member share ledgers.',
        'Audit trail vulnerabilities in unauthenticated legacy financial databases.',
      ],
    },
    architectureFlow: [
      {
        step: '01',
        label: 'Member KYC & Account Service',
        detail: 'Digital member onboarding with national ID verification, account tiering, and share capital registration.',
      },
      {
        step: '02',
        label: 'Double-Entry Accounting Ledger',
        detail: 'Immutable ledger where every debit strictly equals credit across member savings and loan accounts.',
      },
      {
        step: '03',
        label: 'Loan Amortization & Repayment Engine',
        detail: 'Automated reducing-balance and flat-rate interest calculations with M-Pesa B2C disbursement hooks.',
      },
      {
        step: '04',
        label: 'Regulatory Audit & Statement Generator',
        detail: 'Exportable SASRA-compliant audit logs, member account statements, and annual dividend distributions.',
      },
    ],
    engineeringHighlights: [
      {
        title: 'Strict ACID Double-Entry Ledger Implementation',
        description:
          'Financial deposits and withdrawals must maintain immutable mathematical parity across accounts.',
        implementation:
          'Utilized Spring Boot declarative transaction management (@Transactional isolation=SERIALIZABLE) with HikariCP connection pooling to enforce atomicity.',
      },
      {
        title: 'High-Performance Dividend Distribution Batching',
        description:
          'Annual profit-sharing distributions across thousands of member shares require scalable batch processing.',
        implementation:
          'Built cursor-based batch pipelines in Spring Boot calculating weighted member shares and crediting savings accounts within minutes.',
      },
    ],
    productionDeliverables: [
      'Double-entry member savings and share capital accounting engine',
      'Reducing-balance loan amortization and scheduled deduction module',
      'Automated M-Pesa B2C loan disbursement integration',
      'SASRA-compliant audit logging and regulatory statement exports',
    ],
  },
  'car-hire': {
    id: 'car-hire',
    title: 'FleetFlow — Vehicle Rental & Logistics Dispatch Engine',
    category: 'Logistics & Fleet Operations · Full-Stack Platform',
    pitch:
      'Fleet operations and vehicle rental booking platform featuring real-time availability calendars, automated security deposit holding, GPS mileage log audits, and driver assignment workflows.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200',
    githubUrl: 'https://github.com/jared-solutions',
    stats: {
      impact: 'Sub-Second Dispatch Matrix',
      architecture: 'Async Queue & Booking Matrix',
      stack: 'Node.js • Express • React • MySQL',
      status: 'Production Architecture',
    },
    challenge: {
      context:
        'Car hire agencies deal with double-booking risks during peak holiday seasons, uncollected security damage deposits, and untracked maintenance cycles across scattered fleet vehicles.',
      bottlenecks: [
        'Concurrent booking collisions on high-demand premium SUVs.',
        'Delayed vehicle turnarounds due to manual check-out vehicle damage inspection forms.',
        'Untracked oil change and tire rotation schedules leading to unexpected vehicle breakdowns.',
      ],
    },
    architectureFlow: [
      {
        step: '01',
        label: 'Vehicle Inventory & Rate Matrix',
        detail: 'Fleet catalog displaying daily rental tiers, fuel policies, and insurance packages.',
      },
      {
        step: '02',
        label: 'Dynamic Slot Reservation Engine',
        detail: 'Calendar grid locking selected vehicles for reserved date spans with instant security deposit authorization.',
      },
      {
        step: '03',
        label: 'Digital Handover & Vehicle Inspection',
        detail: 'Mobile checklist with pre-trip odometer reading, fuel level, and condition photo uploads.',
      },
      {
        step: '04',
        label: 'Maintenance & Service Scheduling',
        detail: 'Automated service warnings triggered by cumulative odometer mileage increments.',
      },
    ],
    engineeringHighlights: [
      {
        title: 'Zero-Collision Date Range Reservation Lock',
        description:
          'Preventing two customers from booking overlapping rental windows for the same vehicle.',
        implementation:
          'Implemented SQL date overlap query constraints paired with Redis distributed locks during checkout processing.',
      },
    ],
    productionDeliverables: [
      'Interactive fleet booking calendar with real-time vehicle status indicators',
      'Automated security deposit pre-authorization and refund workflow',
      'Mobile-responsive vehicle digital inspection and hand-off checklist',
      'Odometer-triggered fleet maintenance reminder system',
    ],
  },
  'spa-salon': {
    id: 'spa-salon',
    title: 'AuraCare — Multi-Branch Salon & Service Booking Engine',
    category: 'Service Booking & Operations · Enterprise Web Platform',
    pitch:
      'Enterprise booking and service operations platform for wellness salons and aesthetic clinics. Features real-time stylist slot calendar locking, automated SMS appointment reminders, service commission splitting, and consumables inventory tracking.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1200',
    githubUrl: 'https://github.com/jared-solutions',
    stats: {
      impact: '99.8% Booking Reliability',
      architecture: 'Slot Concurrency & SMS Engine',
      stack: 'React.js • Django REST • MySQL • SMS Gateway',
      status: 'Production Architecture',
    },
    challenge: {
      context:
        'High-end wellness clinics and salon chains face high client no-show rates, double-booked specialist stylists, and manual commission disputes at the end of the month.',
      bottlenecks: [
        'Customer no-shows causing idle specialist chair time and revenue loss.',
        'Overlapping appointment bookings during peak evening and weekend rush hours.',
        'Lack of automated stylist commission calculations based on tiered service packages.',
      ],
    },
    architectureFlow: [
      {
        step: '01',
        label: 'Service Menu & Specialist Selection',
        detail: 'Interactive treatment catalog with duration estimates, pricing tiers, and specialist portfolios.',
      },
      {
        step: '02',
        label: 'Real-Time Slot Calendar Lock',
        detail: 'Atomic time slot booking preventing double-booking across salon chairs and aesthetic rooms.',
      },
      {
        step: '03',
        label: 'Automated SMS Reminders & M-Pesa Deposit',
        detail: 'Scheduled SMS notifications sent 24h and 2h prior to appointment with optional booking deposit.',
      },
      {
        step: '04',
        label: 'Staff Commission & Consumable Inventory',
        detail: 'Automatic service revenue split calculation and inventory deduction for treatment products.',
      },
    ],
    engineeringHighlights: [
      {
        title: 'Stylist Schedule Concurrency Protection',
        description:
          'Ensuring specialist time slots cannot be simultaneously confirmed by two competing online clients.',
        implementation:
          'Engineered temporary 10-minute pessimistic lock holds on time slots during checkout, automatically releasing on cart abandonment.',
      },
    ],
    productionDeliverables: [
      'Multi-specialist appointment booking interface with calendar visualization',
      'Automated transactional SMS reminder system reducing no-shows',
      'Stylist commission calculation and payroll summary engine',
      'Treatment consumables stock tracking with depletion warnings',
    ],
  },
};

const defaultProjectFallback: CaseStudy = {
  id: 'enterprise-system',
  title: 'Enterprise Software Architecture',
  category: 'Full-Stack Software Engineering',
  pitch:
    'A custom enterprise application engineered with clean architecture principles, robust database design, and modern web interfaces.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
  stats: {
    impact: 'Sub-50ms Response Latency',
    architecture: 'Clean Architecture & REST',
    stack: 'Spring Boot • React • MySQL',
    status: 'Verified Architecture',
  },
  challenge: {
    context:
      'Modern enterprise operations require scalable software systems capable of processing high transaction volumes while ensuring data integrity and zero downtime.',
    bottlenecks: [
      'Legacy manual bottlenecks leading to lost operational hours.',
      'Unstructured data causing reporting inaccuracies.',
      'Security vulnerabilities in unauthenticated legacy endpoints.',
    ],
  },
  architectureFlow: [
    {
      step: '01',
      label: 'Client Layer',
      detail: 'Responsive React interface with client-side validation and caching.',
    },
    {
      step: '02',
      label: 'Security & Auth',
      detail: 'JWT bearer authentication with role-based authorization filters.',
    },
    {
      step: '03',
      label: 'Service Logic',
      detail: 'Decoupled domain services executing business rules and transaction logic.',
    },
    {
      step: '04',
      label: 'Persistence',
      detail: 'Optimized relational database with connection pooling and automated backups.',
    },
  ],
  engineeringHighlights: [
    {
      title: 'Scalable Architecture & ACID Compliance',
      description: 'System operations designed for continuous data consistency.',
      implementation: 'Strict transaction boundaries and optimized query indexing.',
    },
  ],
  productionDeliverables: [
    'Secure REST API with complete documentation',
    'Responsive web interface for desktop and mobile',
    'Role-based access control and audit logging',
    'Optimized database schema and migration scripts',
  ],
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<CaseStudy>(defaultProjectFallback);

  useEffect(() => {
    const lookupKey = id === 'mkulima' ? 'poultryops' : id === 'rentconnect' ? 'nyumbalink' : id === 'gym-system' ? 'hardware-pos' : id;
    if (lookupKey && caseStudies[lookupKey]) {
      setProject(caseStudies[lookupKey]);
    } else {
      setProject({
        ...defaultProjectFallback,
        id: id || 'system',
        title: id ? id.replace('-', ' ').toUpperCase() + ' System' : 'Enterprise System',
      });
    }
  }, [id]);

  const projectKeys = Object.keys(caseStudies);
  const currentIndex = projectKeys.indexOf(id || '');
  const nextProjectKey = projectKeys[(currentIndex + 1) % projectKeys.length];
  const nextProject = caseStudies[nextProjectKey];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 md:pt-32 md:pb-28 bg-background min-h-screen text-foreground selection:bg-emerald-500/20 selection:text-emerald-300">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">
          
          {/* Breadcrumbs & Return Link */}
          <div className="flex items-center justify-between">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Systems Catalog
            </Link>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              {project.category}
            </span>
          </div>

          {/* 1. TOP EXECUTIVE SNAPSHOT (The 10-Second Scan) */}
          <section className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {project.pitch}
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md active:scale-95"
                >
                  Launch Live System <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-card hover:bg-muted border border-border text-foreground transition-all"
                >
                  <Github className="w-4 h-4" /> Inspect Repository
                </a>
              )}
            </div>

            {/* The 4-Pill Stat Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              <div className="p-4 rounded-xl bg-card border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" /> Business Impact
                </span>
                <div className="text-sm sm:text-base font-bold text-foreground font-mono">
                  {project.stats.impact}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-cyan-400" /> Architecture
                </span>
                <div className="text-sm sm:text-base font-bold text-foreground font-mono">
                  {project.stats.architecture}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                  <Layers className="w-3 h-3 text-purple-400" /> Technology
                </span>
                <div className="text-sm sm:text-base font-bold text-foreground font-mono truncate">
                  {project.stats.stack}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Lifecycle Status
                </span>
                <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
                  {project.stats.status}
                </div>
              </div>
            </div>
          </section>

          {/* Project Featured Media Preview */}
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card/60">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>

          {/* 2. THE BUSINESS CHALLENGE (Plain English for HR & Execs) */}
          <section className="p-6 sm:p-8 rounded-2xl bg-card border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <AlertCircle className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-foreground">The Operational Challenge</h2>
                <p className="text-xs font-mono text-muted-foreground">The bottleneck that required solving</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {project.challenge.context}
            </p>

            <div className="pt-2 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Critical Pain Points Addressed:
              </h3>
              <ul className="space-y-2">
                {project.challenge.bottlenecks.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. SYSTEM ARCHITECTURE & DATA FLOW (For Tech Leads & CTOs) */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                System Engineering Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Architectural Data Flow
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {project.architectureFlow.map((node, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-card border border-white/10 space-y-3 relative hover:border-emerald-500/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {node.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400/40" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{node.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{node.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. KEY ENGINEERING HURDLES OVERCOME (Deep Rigor) */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Technical Rigor
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Engineering Hurdles & Solutions
              </h2>
            </div>

            <div className="space-y-4">
              {project.engineeringHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-white/10 space-y-3"
                >
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Problem:</strong> {highlight.description}
                  </p>
                  <div className="p-3.5 rounded-xl bg-muted/60 border border-border text-xs font-mono text-emerald-400 leading-relaxed">
                    <span className="text-muted-foreground font-semibold">Solution Implementation: </span>
                    {highlight.implementation}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. PRODUCTION DELIVERABLES & FEATURES */}
          <section className="p-6 sm:p-8 rounded-2xl bg-card/60 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-foreground">Verified Production Deliverables</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.productionDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. NEXT PROJECT NAVIGATOR */}
          {nextProject && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-card to-muted/40 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  Next Case Study
                </span>
                <h3 className="text-xl font-bold text-foreground mt-0.5">{nextProject.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{nextProject.pitch}</p>
              </div>

              <Link
                to={`/projects/${nextProject.id}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shrink-0 active:scale-95"
              >
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProjectDetail;
