import {
  PracticeArea,
  TeamMember,
  CaseStudy,
  SmartContractTemplate,
  LegalArticle,
  FAQItem,
  OfficeLocation,
  SitePlanModule
} from '../types';

export const SITE_PLAN_MODULES: SitePlanModule[] = [
  {
    stepNumber: '01',
    titleAr: 'الهيكلية والتجربة البصرية العصرية (Hero & Brand Identity)',
    titleEn: 'Modern Aesthetic & Hero Identity',
    descriptionAr: 'تصميم واجهة سينمائية داكنة بلمسات ذهبية وفضية تعكس هيبة القانون العريق الممتد من اسم بابينيان مع إحساس التقنية الحديثة.',
    descriptionEn: 'A cinematic dark UI with gold and metallic accents embodying the ancient heritage of jurist Papinian merged with legal tech modernism.',
    featuresAr: ['شعار بابينيان الهندسي المبتكر', 'مؤشرات أرقام ونسب نجاح حية', 'تقييم مبدئي فوري للقضايا عبر الذكاء الاصطناعي', 'دعم ثنائي اللغة (عربي / إنجليزي)'],
    featuresEn: ['Geometric Papinian Logo', 'Live Track Record & Metric Counters', 'AI Preliminary Case Assessment', 'Bilingual Dual Support'],
    icon: 'Shield',
    status: 'جاهز ومعتمد'
  },
  {
    stepNumber: '02',
    titleAr: 'عن بابينيان ورؤية الإرث والتكنولوجيا (Firm Heritage & Edge)',
    titleEn: 'About Papinian & Comparative Matrix',
    descriptionAr: 'استعراض جذور التسمية التاريخية (إميليوس بابينيانوس - رماد العدالة) ومقارنة تفاعلية بين المحاماة التقليدية ونموذج بابينيان الرقمي الشامل.',
    descriptionEn: 'Historic story of jurist Aemilius Papinianus combined with an interactive comparison matrix between traditional practice and Papinian 360 solution.',
    featuresAr: ['قصة التسمية والإرث القانوني', 'جدول المقارنة التفاعلي', 'المبادئ الأربعة: النزاهة، السرية، السرعة، والتحليل الاستشرافي'],
    featuresEn: ['Heritage Narrative', 'Interactive Distinction Matrix', '4 Core Pillars: Integrity, Secrecy, Agility, Foresight'],
    icon: 'Award',
    status: 'جاهز ومعتمد'
  },
  {
    stepNumber: '03',
    titleAr: 'تخصصات ومجالات الممارسة القانونية (Practice Areas Grid)',
    titleEn: 'Comprehensive Practice Areas Grid',
    descriptionAr: 'عرض شمول لكل التخصصات القضائية والاستشارية مع إمكانية التصفية، والتفتيش التفصيلي عن نطاقات العمل ورؤساء الفرق.',
    descriptionEn: 'Categorized grid covering corporate, litigation, IP, arbitration, labor, real estate, and digital regulations with deep modal view.',
    featuresAr: ['تصفية حية حسب القطاع', 'نافذة تفاعلية لكل تخصص (Modal Detail)', 'مباشرة القضايا وتحديد المستشار المسؤول'],
    featuresEn: ['Live Category Filters', 'Interactive Service Modal', 'Direct Lead Counsel Assignment'],
    icon: 'Scale',
    status: 'جاهز ومعتمد'
  },
  {
    stepNumber: '04',
    titleAr: 'أدوات وحاسبات بابينيان القانونية التفاعلية (Interactive Legal Tools)',
    titleEn: 'Interactive Legal Calculators Engine',
    descriptionAr: 'محرّك تفاعلي لحساب تكاليف ورسوم التقاضي، مستحقات نهاية الخدمة وفق نظام العمل، وتحليل درجة مخاطر العقود التجاريّة.',
    descriptionEn: 'Live estimation engines for court fees, labor rights according to labor code, and commercial contract risk score matrix.',
    featuresAr: ['حاسبة رسوم التقاضي والتكاليف', 'حاسبة حقوق ومكافأة نظام العمل', 'مؤشر قياس مخاطر العقود التجارية'],
    featuresEn: ['Court Fee Estimator', 'Labor Code Rights Engine', 'Contract Risk Rating Matrix'],
    icon: 'Calculator',
    status: 'جاهز ومعتمد'
  },
  {
    stepNumber: '05',
    titleAr: 'مركز العقود والأنموذجات الذكية (Smart Contract Studio)',
    titleEn: 'Smart Document Generator Studio',
    descriptionAr: 'استوديو تفاعلي لتوليد وتعيين الشروط الأساسية للعقود النموذجية (NDA، عقود التأسيس، والخدمات) مع معاينة فورية وطباعة مباشرة.',
    descriptionEn: 'Interactive contract builder for NDAs, LLC Charters, and Service Agreements with customizable clauses and print export.',
    featuresAr: ['توليد عقود عدم الأفصاح NDA', 'اتفاقيات التأسيس والخدمات', 'معاينة العقد فورياً وطباعته أو تحميله'],
    featuresEn: ['NDA Customizer', 'LLC & Commercial Service Contracts', 'Live Contract Preview & Print Export'],
    icon: 'FileText',
    status: 'جاهز ومعتمد'
  },
  {
    stepNumber: '06',
    titleAr: 'سجل النجاح والقضايا الكبرى (Sectors & Track Record)',
    titleEn: 'Track Record & Case Studies',
    descriptionAr: 'توثيق المحطات والقضايا النوعية التي خاضتها بابينيان بحجم تسويات واستحواذات تجاوزت مليارات الدولارات مع آراء العملاء.',
    descriptionEn: 'Detailed portfolio of multi-million dollar arbitrations, M&As, IP victories with client testimonials and quantifiable results.',
    featuresAr: ['قضايا التحكيم والاستحواذ الضخمة', 'سلاسل نتائج بالأرقام والنسب', 'آراء كبار التنفيذيين ورؤساء مجالس الإدارة'],
    featuresEn: ['High-stakes Cases Portfolio', 'Measurable Metrics', 'Board Level Testimonials'],
    icon: 'Briefcase',
    status: 'جاهز ومعتمد'
  },
  {
    stepNumber: '07',
    titleAr: 'فريق كبار النخبة والمستشارين (Legal Elite Partners)',
    titleEn: 'Senior Elite Legal Partners',
    descriptionAr: 'بطاقات تعريفية بكبار المحامين والمستشارين، مؤهلاتهم الأكاديمية العالمية، وإتاحة طلب حجز جلسة استشارة مع المستشار مباشرة.',
    descriptionEn: 'Comprehensive bios of senior attorneys, Harvard/Oxford credentials, landmark cases, and direct booking integration.',
    featuresAr: ['سير ذاتية موسعة لكل شريك', 'المؤهلات من أعرق الجامعات العالمية', 'طلب حجز مباشر وتواصل مشفر'],
    featuresEn: ['Extended Partner Bios', 'Top University Credentials', 'Direct Encrypted Booking'],
    icon: 'Users',
    status: 'جاهز ومعتمد'
  },
  {
    stepNumber: '08',
    titleAr: 'نظام حجز الاستشارات المشفرة (Encrypted Consultation Booking)',
    titleEn: '3-Step Consultation Booking Engine',
    descriptionAr: 'نظام حجز ذكي من 3 خطوات لتحديد نوع اللقاء (حضوري/عن بُعد)، تحديد الموعد، رفع المستندات المبدئية، ومعاينة الرسوم.',
    descriptionEn: 'Structured booking workflow with calendar slot picking, preliminary document attachment simulation, and transparent pricing.',
    featuresAr: ['اختيار الموعد والمستشار', 'إرفاق ملفات القضية المشفرة', 'تأكيد فوري عبر البريد والواتساب'],
    featuresEn: ['Slot & Attorney Selector', 'Encrypted Attachment Simulation', 'Instant Confirmation Dispatch'],
    icon: 'Calendar',
    status: 'جاهز ومعتمد'
  },
  {
    stepNumber: '09',
    titleAr: 'المركز المعرفي ومكتبة بابينيان (Legal Insights & FAQs)',
    titleEn: 'Legal Knowledge Hub & FAQ Engine',
    descriptionAr: 'مقالات تحليلية حديثة للأنظمة المحدثة، وإجابات شاملة ومصنفة للأسئلة الشائعة التي تهم الشركات والأفراد.',
    descriptionEn: 'Deep-dive analytical articles on modern regulations, technological law, and filterable interactive FAQ accordion.',
    featuresAr: ['مقالات قانونية متجددة 2026', 'محرك بحث وتصفية للأسئلة الشائعة', 'وضع القراءة الموسعة للمقالات'],
    featuresEn: ['2026 Regulatory Insights', 'Searchable FAQ Categories', 'Full Article Reader Window'],
    icon: 'BookOpen',
    status: 'جاهز ومعتمد'
  },
  {
    stepNumber: '10',
    titleAr: 'الفروع العالمية والخط الساخن للطوارئ (Global Presence & Hotline)',
    titleEn: 'Global Offices & Emergency Hotline',
    descriptionAr: 'خريطة انتشار الفروع (الرياض، دبي، لندن، الكويت)، زِرّ الاتصال السريع بخلية الطوارئ القانونية على مدار 24 ساعة.',
    descriptionEn: 'Multi-city presence representation, interactive office cards, and 24/7 emergency hotline trigger.',
    featuresAr: ['فروع الرياض، دبي، لندن، الكويت', 'خط ساخن 24/7 للحالات المستعجلة', 'تحديد الموقع والمراسلة الفورية عبر واتساب'],
    featuresEn: ['Riyadh, Dubai, London, Kuwait Branches', '24/7 Urgent Response Hotline', 'Interactive Location & Direct WhatsApp'],
    icon: 'Globe',
    status: 'جاهز ومعتمد'
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate-ma',
    titleAr: 'حوكمة الشركات والاندماج والاستحواذ (M&A)',
    titleEn: 'Corporate Governance & M&A',
    shortDescAr: 'صياغة اتفاقيات الاستحواذ المفهومة، الهيكلة القانونية للشركات، والفحص النافي للجهالة بمقاييس عالمية.',
    shortDescEn: 'Comprehensive M&A advice, corporate structuring, joint ventures, and rigorous legal due diligence.',
    fullDescAr: 'يقدم فريق بابينيان استشارات متكاملة لكبرى الشركات والمجموعات القابضة والصناديق الاستثمارية. تشمل خدماتنا صياغة عقود الاندماج والاستحواذ، إجراء الفحص النافي للجهالة القانوني الشامل، إعادة هيكلة رأس المال، وتطبيق أحدث ممارسات الحوكمة والامتثال للأنظمة التجارية local & international.',
    fullDescEn: 'Our corporate team counsels leading conglomerates, private equity firms, and startups on cross-border transactions, restructuring, regulatory compliance, and high-value mergers.',
    iconName: 'Building2',
    category: 'corporate',
    featuresAr: [
      'الفحص النافي للجهالة (Legal Due Diligence)',
      'صياغة اتفاقيات المساهمين وشراء الأسهم',
      'إعادة الهيكلة والتصفية الودية للشركات',
      'إعداد لوائح الحوكمة الداخلية ولجان المراجعة'
    ],
    featuresEn: [
      'Comprehensive Legal Due Diligence',
      'Shareholders & Share Purchase Agreements',
      'Corporate Restructuring & Consolidation',
      'Internal Governance & Compliance Charters'
    ],
    leadCounselAr: 'د. بابينيان المنصور',
    leadCounselEn: 'Dr. Papinian Al-Mansoor'
  },
  {
    id: 'int-arbitration',
    titleAr: 'التحكيم الدولي والنزاعات العابرة للحدود',
    titleEn: 'International Arbitration & Cross-Border Disputes',
    shortDescAr: 'تمثيل الشركات والمؤسسات أمام هيئات التحكيم الدولية (ICC, LCIA, SCCA, DIFC-LCIA).',
    shortDescEn: 'High-stakes advocacy before major international arbitration tribunals.',
    fullDescAr: 'نمتلك خبرة دولية متعمقة في إدارة نزاعات الاستثمار والمقاولات الضخمة والطاقة والتجارة الدولية. يتولى فريقنا الدفاع وإعداد المذكرات وصياغة شرط التحكيم وتنفيذ أحكام التحكيم الأجنبية وفق اتفاقية نيويورك.',
    fullDescEn: 'We hold extensive experience in high-value construction, energy, and commercial arbitrations. Our lawyers draft arbitration clauses, present oral pleadings, and enforce international awards seamlessly.',
    iconName: 'Scale',
    category: 'international',
    featuresAr: [
      'تمثيل الموكلين أمام غرف التحكيم العالمية',
      'تنفيذ الأحكام الأجنبية المحلية والعالمية',
      'وساطات وتسويات المنازعات التجارية المعقدة',
      'صياغة البنود الشرطية في العقود الدولية'
    ],
    featuresEn: [
      'Client Representation in Major Arbitral Forums',
      'Foreign Arbitral Awards Enforcement',
      'Complex Mediation & Dispute Resolution',
      'International Contract Clause Drafting'
    ],
    leadCounselAr: 'المستشارة إيلينا روستوفا',
    leadCounselEn: 'Counsel Elena Rostova'
  },
  {
    id: 'ip-digital-tech',
    titleAr: 'الملكية الفكرية والتقنية والذكاء الاصطناعي',
    titleEn: 'Intellectual Property & AI Compliance',
    shortDescAr: 'حماية الملكية الفكرية، براءات الاختراع، العلامات التجارية، وحوكمة بيانات الذكاء الاصطناعي.',
    shortDescEn: 'Safeguarding patents, trademarks, software IP, and AI data governance regulatory compliance.',
    fullDescAr: 'تتميز بابينيان بممارستها المتقدمة في حماية الابتكارات التقنية، وحماية العلامات التجارية الإقليمية والدولية، وتنظيم عقود الترخيص للبرمجيات، وصياغة سياسات الامتثال لقوانين حماية البيانات الشخصية والأمن السيبراني والذكاء الاصطناعي.',
    fullDescEn: 'We guide tech pioneers and enterprises through IP litigation, brand protection, software licensing agreements, data privacy framework compliance, and cutting-edge AI legal frameworks.',
    iconName: 'Cpu',
    category: 'digital',
    featuresAr: [
      'تسجيل العلامات التجارية وبراءات الاختراع الدولية',
      'التقاضي في دعاوى الانتهاك والقرصنة التجارية',
      'عقود تراخيص التقنية وتطوير البرمجيات',
      'حاسبة الامتثال لقوانين حماية البيانات والذكاء الاصطناعي'
    ],
    featuresEn: [
      'Global Patent & Trademark Registration',
      'IP Infringement & Copyright Litigation',
      'SaaS & Software Licensing Contracts',
      'AI & Data Protection Regulatory Compliance'
    ],
    leadCounselAr: 'المستشار فهد القحطاني',
    leadCounselEn: 'Counsel Fahad Al-Qahtani'
  },
  {
    id: 'commercial-litigation',
    titleAr: 'التقاضي التجاري والمالي المعقد',
    titleEn: 'Commercial & Financial Litigation',
    shortDescAr: 'الدفاع والتمثيل أمام المحاكم التجارية والعمالية والإدارية بكفاءة عالية واستراتيجية إثبات صلبة.',
    shortDescEn: 'Strategic litigation defence in commercial, banking, administrative, and economic tribunals.',
    fullDescAr: 'يتولى نخبة من أقدم المحامين المعتمدين لدى بابينيان إعداد لوائح الدعوى والمذكرات الجوابية، والترافع أمام المحاكم بكافة درجاتها (ابتدائية، استئناف، عليا) بمهارة عالية تضمن حماية المركز القانوني للموكل وإحراز أحكام ناجزة.',
    fullDescEn: 'Our top litigators craft bulletproof legal memoranda and represent clients in commercial, administrative, and appellate courts with precision and relentless focus on victory.',
    iconName: 'Gavel',
    category: 'litigation',
    featuresAr: [
      'منازعات الأوراق التجارية والأعمال البنكية',
      'قضايا الإفلاس وإعادة التنظيم المالي',
      'الدفاع عن المسؤولين والتنفيذيين في قضايا الشركات',
      'تنفيذ السندات والأحكام النهائية بسرعة'
    ],
    featuresEn: [
      'Banking & Securities Dispute Litigation',
      'Bankruptcy & Financial Restructuring',
      'Corporate Officers Liability Defense',
      'Execution & Asset Recovery Proceedings'
    ],
    leadCounselAr: 'المستشارة سارة الهاشمي',
    leadCounselEn: 'Counselor Sarah Al-Hashemi'
  },
  {
    id: 'real-estate-infra',
    titleAr: 'العقارات والمشاريع والبنية التحتية',
    titleEn: 'Real Estate & Infrastructure Development',
    shortDescAr: 'استشارات التطوير العقاري، عقود الفيديك (FIDIC)، المقاولات الكبرى، وحصل الصكوك والتراخيص.',
    shortDescEn: 'Real estate megaproject advisory, FIDIC construction contracts, zoning, and land acquisition.',
    fullDescAr: 'تقديم المشورة في أكبر مشاريع التطوير العقاري والبنية التحتية، إعداد وصياغة عقود المقاولات الهندسية (FIDIC)، حل منازعات التأخير والتكاليف الإضافية، والصناديق العقارية والاستثمارية المباشرة.',
    fullDescEn: 'Advising developers and investors on megaprojects, structuring FIDIC construction contracts, resolving engineering disputes, and managing real estate investment trusts (REITs).',
    iconName: 'Building',
    category: 'corporate',
    featuresAr: [
      'صياغة عقود الهندسة والمقاولات (FIDIC)',
      'منازعات التأخير وأوامر التغيير بالمشاريع',
      'تأسيس الصناديق العقارية والهيكلة القانونية',
      'فحص ونقل ملكيات العقارات التجارية الكبرى'
    ],
    featuresEn: [
      'FIDIC Construction Contract Structuring',
      'Delay Claims & Variation Dispute Resolution',
      'Real Estate Investment Funds (REITs)',
      'Commercial Property Title Verification'
    ],
    leadCounselAr: 'المحامي عمر الشمري',
    leadCounselEn: 'Attorney Omar Al-Shammari'
  },
  {
    id: 'labor-executive',
    titleAr: 'قضايا العمل واستشارات الإدارة التنفيذية',
    titleEn: 'Labor Code & Executive Employment',
    shortDescAr: 'إدارة علاقات العمل، عقود كبار التنفيذيين، سياسات الموارد البشرية، والنزاعات العمالية الجماعية.',
    shortDescEn: 'Executive employment agreements, workforce restructurings, labor compliance, and dispute resolution.',
    fullDescAr: 'مساعدة الشركات في صياغة لوائح العمل الداخلية المعتمدة، عقود عدم المنافسة للقياديين، إدارة المزايا ومكافآت نهاية الخدمة، وحل النزاعات العمالية وفق أحدث تعديلات نظام العمل.',
    fullDescEn: 'Assisting corporations with certified internal HR regulations, C-suite non-compete agreements, executive severance packages, and labor court claims mitigation.',
    iconName: 'ShieldAlert',
    category: 'litigation',
    featuresAr: [
      'عقود الإدارة التنفيذية وشروط عدم المنافسة',
      'اعتماد لوائح العمل الداخلية من الجهات المختصة',
      'تسوية النزاعات العمالية الجماعية والفردية',
      'حاسبة حقوق ومكافآت العمل الإلكترونية'
    ],
    featuresEn: [
      'Executive C-Suite Contracts & Non-Competes',
      'Certified Internal Labor Regulations',
      'Labor Disputes Resolution & Settlement',
      'Digital Labor Code Compensation Engine'
    ],
    leadCounselAr: 'المستشارة سارة الهاشمي',
    leadCounselEn: 'Counselor Sarah Al-Hashemi'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dr-papinian-almansoor',
    nameAr: 'د. بابينيان المنصور',
    nameEn: 'Dr. Papinian Al-Mansoor',
    roleAr: 'الشريك الرئيسي والمؤسس - دكتوراه في القانون التجاري الدولي',
    roleEn: 'Managing Senior Partner - PhD International Commercial Law',
    bioAr: 'خبرة تمتد لأكثر من 22 عاماً في قيادة قضايا الاندماج والتحكيم الدولي والتقاضي عالي القيمة. محاضر سابق في القانون التجاري ومستشار غير متفرغ لعدد من الهيئات والشركات الدولية.',
    bioEn: 'Over 22 years of elite experience in international commercial law, cross-border M&A, and landmark arbitration. Advisor to multinational corporations and sovereign entities.',
    specialtiesAr: ['التحكيم الدولي', 'حوكمة الشركات', 'الاستحواذ والاندماج', 'قضايا الطاقة'],
    specialtiesEn: ['International Arbitration', 'Corporate Governance', 'M&A', 'Energy Sector Law'],
    experienceYears: 22,
    educationAr: ['دكتوراه في القانون التجاري - جامعة هارفارد', 'ماجستير القانون الدولي - جامعة أكسفورد', 'بكالوريوس الأنظمة - جامعة الملك سعود'],
    educationEn: ['Ph.D. Commercial Law - Harvard Law School', 'LL.M International Law - Oxford University', 'LL.B Law - King Saud University'],
    image: 'https://images.pexels.com/photos/8112110/pexels-photo-8112110.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    email: 'p.almansoor@papinianlaw.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'counselor-sarah-alhashemi',
    nameAr: 'المستشارة سارة الهاشمي',
    nameEn: 'Counselor Sarah Al-Hashemi',
    roleAr: 'رئيس قسم التقاضي والترافع التجاري',
    roleEn: 'Head of Commercial Litigation Practice',
    bioAr: 'ترافعت في أكثر من 600 قضية تجارية وعمالية كبرى بنسبة نجاح تجاوزت 98%. متخصصة في نزاعات العقود المالية الصعبة والشركات المسجلة في الأسواق المالية.',
    bioEn: 'Pled in over 600 complex commercial cases with a stellar 98%+ success rate. Specialist in corporate disputes, securities litigation, and financial recovery.',
    specialtiesAr: ['التقاضي التجاري', 'منازعات الأسواق المالية', 'قضايا الإفلاس', 'التنفيذ'],
    specialtiesEn: ['Commercial Litigation', 'Capital Markets Disputes', 'Insolvency Law', 'Execution'],
    experienceYears: 16,
    educationAr: ['ماجستير القانون المالي والتجاري - جامعة لندن (KCL)', 'بكالوريوس الشريعة والقانون'],
    educationEn: ['LL.M Financial Law - King’s College London', 'LL.B Law & Sharia'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    email: 's.hashemi@papinianlaw.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'counselor-elena-rostova',
    nameAr: 'المستشارة إيلينا روستوفا',
    nameEn: 'Counsel Elena Rostova',
    roleAr: 'رئيس قسم التحكيم والعقود الدولية',
    roleEn: 'Head of International Arbitration & Cross-Border Affairs',
    bioAr: 'محكمة معتمدة في مركز التحكيم التجاري لدول مجلس التعاون وغرفة باريس الدولية (ICC). قادت جلسات تسوية تجاوزت قيمتها 450 مليون دولار.',
    bioEn: 'Certified arbitrator at GCC Commercial Arbitration Centre and ICC Paris. Led international disputes settlements exceeding $450 million in claim value.',
    specialtiesAr: ['التحكيم الدولي ICC/LCIA', 'عقود الفيديك FIDIC', 'استثمارات الطاقة', 'القانون الدولي'],
    specialtiesEn: ['ICC/LCIA Arbitration', 'FIDIC Contracts', 'Energy Investments', 'International Law'],
    experienceYears: 18,
    educationAr: ['ماجستير في التحكيم التجاري - جامعة السوربون باريس', 'بكالوريوس القانون الدولي'],
    educationEn: ['LL.M Arbitration - Sorbonne University Paris', 'LL.B International Law'],
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
    email: 'e.rostova@papinianlaw.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'counselor-fahad-alqahtani',
    nameAr: 'المستشار فهد القحطاني',
    nameEn: 'Counsel Fahad Al-Qahtani',
    roleAr: 'رئيس قسم الملكية الفكرية والتقنيات الناشئة',
    roleEn: 'Head of IP & Emerging Tech Regulation',
    bioAr: 'خبير قانوني في حوكمة الأصول الرقمية والذكاء الاصطناعي وبراءات الاختراع. قاد تسجيل وحماية أصول فكرية لأكثر من 120 شركة تقنية ناشئة وعالمية.',
    bioEn: 'Legal authority in digital asset regulation, artificial intelligence law, and patent defense. Advised over 120 tech scale-ups and global tech giants.',
    specialtiesAr: ['حماية الملكية الفكرية', 'أنظمة الذكاء الاصطناعي', 'الأمن السيبراني', 'عقود التكنولوجيا'],
    specialtiesEn: ['Intellectual Property', 'AI Regulatory Frameworks', 'Cybersecurity Law', 'Tech Licensing'],
    experienceYears: 14,
    educationAr: ['ماجستير قانون التقنية والذكاء الاصطناعي - جامعة كاليفورنيا بيركلي', 'بكالوريوس القانون'],
    educationEn: ['LL.M Tech & AI Law - UC Berkeley School of Law', 'LL.B Law'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    email: 'f.qahtani@papinianlaw.com',
    linkedin: 'https://linkedin.com'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-arbitration-40m',
    titleAr: 'تسوية نزاع تحكيمي في مشروع بنية تحتية بقيمة 42 مليون دولار',
    titleEn: '$42M Infrastructure Cross-Border Arbitration Victory',
    categoryAr: 'التحكيم الدولي والمقاولات',
    categoryEn: 'International Arbitration & Construction',
    clientSectorAr: 'شركة مقاولات دولية كبرى',
    clientSectorEn: 'Major Global Infrastructure Contractor',
    outcomeValueAr: 'استرداد 42.5 مليون دولار وتبرئة الموكل بالكامل',
    outcomeValueEn: 'Full $42.5M Award Recovery & Zero Liability Settlement',
    summaryAr: 'تمثيل التحالف المنفذ لمشروع ميناء ومرفق لوجستي في نزاع معقد يتعلق بأوامر التغيير والتأخير القسري أمام هيئة تحكيم دولية وفق قواعد ICC.',
    summaryEn: 'Represented a logistics consortium in a complex dispute regarding engineering variations and site access delays under ICC rules.',
    strategyAr: [
      'تقديم دراسة فنية هيدروليكية ومحاكاة هندسية معتمدة',
      'إسقاط الادعاءات بالتقصير عبر توثيق مراسلات المشروع الإلكترونية',
      'إلزام الطرف الآخر بتعويض تكاليف التحكيم وأتعاب المحاماة بالكامل'
    ],
    strategyEn: [
      'Presented certified engineering and timeline simulation models',
      'Refuted liability claims through forensic email documentation',
      'Secured 100% legal costs reimbursement for our client'
    ],
    year: '2025'
  },
  {
    id: 'case-fintech-merger-180m',
    titleAr: 'إنجاز صفقة استحواذ تقني عابر للحدود بقيمة 180 مليون دولار',
    titleEn: '$180M Cross-Border FinTech Acquisition Strategy',
    categoryAr: 'الاندماج والاستحواذ والشركات',
    categoryEn: 'M&A & FinTech Regulation',
    clientSectorAr: 'مجموعة استثمارية في التقنية المالية',
    clientSectorEn: 'Regional Venture Investment Firm',
    outcomeValueAr: 'إتمام الصفقة دون أي تعثر وبالموافقات التنظيمية الكاملة',
    outcomeValueEn: 'Successful Deal Close with Full Regulatory Approval',
    summaryAr: 'إدارة الفحص النافي للجهالة القانوني والمفاوضات وصياغة اتفاقيات شراء الأسهم لاتحاد شركات استحوذ على منصة دفوعات رقمية تعمل في 4 دول.',
    summaryEn: 'Managed legal due diligence, antitrust approval, and share purchase structuring for a 4-country digital payments acquisition.',
    strategyAr: [
      'هيكلة الصفقة لتقليل الملاحظات الضريبية والتنظيمية في 4 سلطات قضائية',
      'إعداد آلية الضمان والتنفيذ لحماية المستثمرين من المخاطر التشغيلية',
      'الحصول على موافقات البنك المركزي وهيئة السوق المالية بمرونة عالية'
    ],
    strategyEn: [
      'Multi-jurisdictional structuring optimization across 4 countries',
      'Designed escrow & indemnification mechanisms for downside protection',
      'Expedited Central Bank & Financial Market Authority clearances'
    ],
    year: '2025'
  },
  {
    id: 'case-ip-defense',
    titleAr: 'إلغاء حكم قضائي وحماية علامة تجارية عالمية بقيمة 25 مليون دولار',
    titleEn: '$25M Trademark & Brand Infringement Protection',
    categoryAr: 'الملكية الفكرية والتجارة',
    categoryEn: 'IP Law & Trademark Defense',
    clientSectorAr: 'علامة تجارية عالمية في مجال الضيافة',
    clientSectorEn: 'Global Luxury Hospitality Group',
    outcomeValueAr: 'حظر منتجات المقلد وإلغاء تسجيل العلامة المعتدية',
    outcomeValueEn: 'Injunction, Cancellation of Infringing Brand & Full Damages',
    summaryAr: 'مواجهة محاولة تعدٍ وتصنيع مقلد لعلامة تجارية فاخرة في المنطقة الشرقية والدفاع بحرفية أمام المحكمة التجارية.',
    summaryEn: 'Defended a iconic luxury brand against counterfeit distribution and illegal trademark squatting in high court.',
    strategyAr: [
      'استصدار أمر قضائي عاجل بالحجز التحفظي على المنتجات المقلدة',
      'إثبات الأسبقية في الاستعمال والافتراء التجار',
      'الحصول على حكم بالتعويض المالي ومصادرة كافة المواد'
    ],
    strategyEn: [
      'Secured immediate ex-parte injunction and inventory seizure',
      'Proven prior usage and secondary meaning in regional market',
      'Awarded punitive damages and permanent injunction'
    ],
    year: '2024'
  }
];

export const SMART_CONTRACT_TEMPLATES: SmartContractTemplate[] = [
  {
    id: 'nda-standard',
    titleAr: 'اتفاقية عدم الإفصاح وحماية السرية (NDA)',
    titleEn: 'Non-Disclosure Agreement (NDA)',
    categoryAr: 'العقود العامة والشركات',
    categoryEn: 'General Commercial',
    descriptionAr: 'نموذج عقد عدم إفصاح ثنائي مشدد لحماية المعلومات التجارية والسوداء والمشروعات المستقبلية.',
    descriptionEn: 'Mutual robust non-disclosure agreement to protect trade secrets and sensitive project information.',
    defaultPartyA: 'شركة بابينيان للحلول المتقدمة (الطرف الأول)',
    defaultPartyB: 'شركة الأفق للاستثمار والتطوير (الطرف الثاني)',
    defaultTermsAr: [
      'يلتزم الطرفان بعدم الإفصاح عن المعلومات السرية المتبادلة لمدة (3) سنوات من تاريخ التوقيع.',
      'تشمل المعلومات السرية كافة البيانات المالية، خطط العمل، الأكواد البرمجية، وقوائم العملاء.',
      'تخضع هذه الاتفاقية للأنظمة التجارية المعمول بها وتكون المحاكم المختصة هي الفصل في أي نزاع.'
    ],
    defaultTermsEn: [
      'Both parties agree to maintain strict confidentiality of shared information for 3 years.',
      'Confidential information encompasses financial data, source code, business strategy, and client rosters.',
      'This agreement is governed by standard commercial laws and enforceable in high court.'
    ],
    clauseOptions: [
      {
        id: 'penalty-clause',
        labelAr: 'إضافة شرط جزائي محدد ($50,000)',
        labelEn: 'Add Liquidated Damages ($50,000)',
        textAr: 'في حال إثبات خرق أي طرف لبنود هذه الاتفاقية، يلتزم بدفع تعويض اتفاقي غير قابل للتخفيض بمبلغ 50,000 دولار أمريكي دون الحاجة لإثبات الضرر.',
        textEn: 'In case of proven breach, the defaulting party shall pay liquidated damages of USD $50,000 without requiring further proof of exact loss.'
      },
      {
        id: 'arbitration-clause',
        labelAr: 'إحالة أي نزاع للتحكيم المباشر',
        labelEn: 'Binding Expedited Arbitration Clause',
        textAr: 'يتم تسوية أي نزاع ينشأ عن تفسير أو تنفيذ هذا العقد عن طريق التحكيم النهائي المنفرد وفق قواعد مركز التحكيم التجاري المحلي.',
        textEn: 'Any dispute arising shall be finally settled under expedited arbitration by a sole arbitrator.'
      }
    ]
  },
  {
    id: 'llc-incorporation',
    titleAr: 'عقد تأسيس شركة ذات مسؤولية محدودة (LLC Charter)',
    titleEn: 'LLC Articles of Association Charter',
    categoryAr: 'تأسيس الشركات',
    categoryEn: 'Corporate Formation',
    descriptionAr: 'مسودة عقد تأسيس شركة ذات مسؤولية محدودة مستوفية لكافة متطلبات وزارة التجارة وهيئات الاستثمار.',
    descriptionEn: 'Standard Articles of Association compliant with commercial companies regulations.',
    defaultPartyA: 'المؤسس الأول (حصة 60%)',
    defaultPartyB: 'المؤسس الثاني (حصة 40%)',
    defaultTermsAr: [
      'الغرض من الشركة: تقديم الخدمات الاستشارية والتقنية وإدارة المشاريع.',
      'رأس مال الشركة المقسم: 500,000 ريال/درهم مقسم إلى حصص متساوية.',
      'تدار الشركة بواسطة مدير عام يعين بقرار من الجمعية العمومية للمشركين.'
    ],
    defaultTermsEn: [
      'Company Objective: Provision of management consulting, technology, and operations.',
      'Authorized Capital: Divided into equal transferable shares.',
      'Management: The company is managed by a General Manager appointed by general assembly.'
    ],
    clauseOptions: [
      {
        id: 'tag-along',
        labelAr: 'شرط حق البيع المتبادل (Tag-Along / Drag-Along)',
        labelEn: 'Include Drag-Along & Tag-Along Rights',
        textAr: 'في حال تلقي الشريك الأغلبية عرض شراء لأكثر من 51% من الحصص، يحق له إلزام باقي الشركاء ببيع حصصهم بذات الشروط والأحكام.',
        textEn: 'If the majority shareholder receives a bona fide offer for >51%, drag-along rights shall apply under equal terms.'
      }
    ]
  },
  {
    id: 'commercial-service',
    titleAr: 'عقد تقديم خدمات تجارية واستشارية',
    titleEn: 'Master Commercial Services Agreement',
    categoryAr: 'العقود التجارية',
    categoryEn: 'Services Contract',
    descriptionAr: 'اتفاقية تقديم خدمات احترافية تحدد نطاق العمل، الدفعات، ومعايير جودة التسليم (SLA).',
    descriptionEn: 'Professional services contract specifying scope of work, SLAs, and payment milestones.',
    defaultPartyA: 'مزود الخدمة (الطرف الأول)',
    defaultPartyB: 'العميل (الطرف الثاني)',
    defaultTermsAr: [
      'يقوم الطرف الأول بتقديم الخدمات المبينة في ملحق نطاق العمل بكل مهنية وحرفية.',
      'يستحق الطرف الأول الأتعاب المتفق عليها بناءً على تحقق مراحل الإنجاز المعتمدة.',
      'تنتقل حقوق الملكية الفكرية للمخرجات للطرف الثاني فور سداد كامل الأتعاب.'
    ],
    defaultTermsEn: [
      'Party A shall execute the services described in Exhibit A with professional standard of care.',
      'Party A is entitled to agreed fees upon certified milestone achievements.',
      'IP of deliverable transfers to Party B upon full payment settlement.'
    ],
    clauseOptions: [
      {
        id: 'sla-penalty',
        labelAr: 'خصم 1% عن كل يوم تأخير في التسليم',
        labelEn: 'Late Delivery Penalty Clause (1%/day)',
        textAr: 'يتحمل مزود الخدمة خصماً بنسبة 1% من قيمة المرحلة عن كل يوم تأخير غير مبرر، وبحد أقصى 15% من قيمة العقد.',
        textEn: 'Service provider incurs a 1% daily penalty for unexcused delays up to a max cap of 15% total value.'
      }
    ]
  }
];

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    id: 'art-corporate-law-2026',
    titleAr: 'التغيرات الجوهرية في أنظمة الشركات والتحول الرقمي لعام 2026',
    titleEn: 'Major Corporate Regulatory Shifts & Digital Governance in 2026',
    categoryAr: 'أنظمة الشركات',
    categoryEn: 'Corporate Law',
    readTime: '6 دقائق',
    date: '15 فبراير 2026',
    authorAr: 'د. بابينيان المنصور',
    authorEn: 'Dr. Papinian Al-Mansoor',
    summaryAr: 'دراسة تحليليّة لأحدث التعديلات التشريعية على حوكمة الشركات، إمكانية عقد الجمعيات عبر البلوكشين، وقوانين الاندماج المرنة.',
    summaryEn: 'An analytical review of new corporate compliance frameworks, blockchain voting protocols, and agile cross-border M&A rules.',
    contentAr: 'تشهد البيئة التشريعية التجارية تحولاً تسارعياً نحو تمكين التكنولوجيا وتخفيف الأعباء البيروقراطية عن الشركات الاستثمارية. في هذا المقال، نسلط الضوء على 5 محاور رئيسية يجب على رؤساء مجالس الإدارة والإدارات القانونية مراعاتها في خطط عام 2026، بدءاً من أتمتة محاضر الاجتماعات ووصولاً إلى آليات حماية صغار المساهمين أثناء الجولات الاستثمارية المتأخرة...',
    contentEn: 'The regulatory commercial landscape is witnessing unprecedented digital acceleration aimed at cutting friction for enterprise investors. In this article, we break down 5 essential legal shifts for 2026 corporate boards...',
    image: 'https://images.pexels.com/photos/8112154/pexels-photo-8112154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tagsAr: ['أنظمة 2026', 'الشركات', 'الحوكمة', 'الاستثمار'],
    tagsEn: ['2026 Laws', 'Corporate', 'Governance', 'Investment']
  },
  {
    id: 'art-ai-ip-protection',
    titleAr: 'الذكاء الاصطناعي والملكية الفكرية: من يملك المخرجات والابتكارات؟',
    titleEn: 'Artificial Intelligence & IP: Who Owns AI-Generated Assets?',
    categoryAr: 'التقنية والملكية الفكرية',
    categoryEn: 'Tech & IP Law',
    readTime: '8 دقائق',
    date: '02 فبراير 2026',
    authorAr: 'المستشار فهد القحطاني',
    authorEn: 'Counsel Fahad Al-Qahtani',
    summaryAr: 'كيف تحمي مؤسستك من المخاطر القانونية الناجمة عن استخدام أدوات الذكاء الاصطناعي التوليدي في البرمجة والتصميم.',
    summaryEn: 'How to safeguard your enterprise from legal risks when integrating generative AI into software and design products.',
    contentAr: 'تثير تطبيقات الذكاء الاصطناعي التوليدي تساؤلات حادة في أروقة المحاكم حول مدى أحقية الشركات في تسجيل براءات اختراع أو حقوق طباعة لنتاجات تولدت بواسطة خوارزميات. يعرض هذا المقال الآراء القضائية الأحدث وسُبل إعداد عقود الموظفين والمطورين لمنع تسرب الأسرار التجارية...',
    contentEn: 'Generative AI models challenge traditional intellectual property doctrines worldwide. This paper reviews key judicial decisions and best practice contractual safeguards for enterprise software teams...',
    image: 'https://images.pexels.com/photos/8082233/pexels-photo-8082233.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tagsAr: ['الذكاء الاصطناعي', 'الملكية الفكرية', 'الأمن السيبراني'],
    tagsEn: ['AI Law', 'IP', 'Cybersecurity']
  },
  {
    id: 'art-arbitration-tips',
    titleAr: 'كيف تضمن صياغة شرط تحكيم صلب يمنع المماطلة القضائية؟',
    titleEn: 'How to Draft an Unassailable Dispute & Arbitration Clause',
    categoryAr: 'التحكيم الدولي',
    categoryEn: 'Arbitration',
    readTime: '5 دقائق',
    date: '20 يناير 2026',
    authorAr: 'المستشارة إيلينا روستوفا',
    authorEn: 'Counsel Elena Rostova',
    summaryAr: 'أبرز 4 أخطاء قاتلة تجعل شرط التحكيم باطلاً أو سبباً في بطلان الحكم بعد سنوات من التقاضي.',
    summaryEn: 'Top 4 fatal drafting mistakes that compromise arbitration clauses and nullify arbitral awards years later.',
    contentAr: 'شرط التحكيم ليس مجرد بند شكلي في نهاية العقد؛ بل هو صمام الأمان الحقيقي الذي يحمي استثماراتك. يستعرض المقال صياغة النموذج المعياري لتحديد عدد المحكمين، اللغة، مكان التحكيم والقانون الواجب التطبيق لتجنب الثغرات الإجرائية...',
    contentEn: 'An arbitration clause is not mere boilerplate text at the end of a commercial contract. It is the primary security valve protecting multi-million dollar investments...',
    image: 'https://images.pexels.com/photos/8082224/pexels-photo-8082224.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tagsAr: ['التحكيم', 'العقود التجاريّة', 'المحاكم'],
    tagsEn: ['Arbitration', 'Contracts', 'Dispute Resolution']
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    questionAr: 'كيف تبدأ جلسة الاستشارة القانونية الأولى مع بابينيان؟',
    questionEn: 'How do I initiate an initial legal consultation with Papinian?',
    answerAr: 'يمكنك اختيار حجز استشارة إما عبر زيارة أحد فروعنا (الرياض، دبي، لندن، الكويت) أو جلسة مشفرة مرئية عبر نظام الحجز بالموقع. سيتم توجيه طلبك فوراً للمستشار المختص بتخصص قضيّتك.',
    answerEn: 'You can schedule an in-person meeting at our Riyadh, Dubai, London, or Kuwait offices, or request an encrypted video consultation online. Your request is immediately matched with the dedicated senior attorney.',
    category: 'general'
  },
  {
    id: 'faq-2',
    questionAr: 'ما هي اتفاقية السرية والتوثيق المتبعة لدى الشركة؟',
    questionEn: 'What non-disclosure & confidentiality safeguards are in place?',
    answerAr: 'تطبق بابينيان بروتوكول سرية صارم (Encrypted Privilege SLA). جميع المستندات والمعلومات المرفقة مشفرة وفق معايير AES-256، وتخضع لسرية المهنة القانونية المحمية بنص النظام.',
    answerEn: 'Papinian operates under strict legal privilege protocols. All uploaded case material is encrypted using AES-256 standard and fully protected under attorney-client privilege.',
    category: 'general'
  },
  {
    id: 'faq-3',
    questionAr: 'كيف تحسب أتعاب المحاماة والخدمات القانونية؟',
    questionEn: 'How are legal fees and retainer structures calculated?',
    answerAr: 'نقدم عدة نماذج مرنة للأتعاب: أتعاب مقطوعة للمشاريع والعقود (Fixed Fee)، أتعاب قائمة على النسبة المئوية في بعض قضايا التحكيم والاسترداد، أو عقود الاحتفاظ السنوية الشاملة (Retainer Model) للشركات.',
    answerEn: 'We offer flexible fee models: Fixed project fees, performance-oriented success fees for arbitrations and recovery, or annual corporate retainer arrangements tailored to operational scale.',
    category: 'fees'
  },
  {
    id: 'faq-4',
    questionAr: 'هل تقومون بالترافع وتنفيذ أحكام التحكيم الأجنبية؟',
    questionEn: 'Do you enforce foreign arbitral awards locally?',
    answerAr: 'نعم، تمتلك بابينيان دراية استثنائية في قضايا محاكم التنفيذ وإحضار وتنفيذ أحكام التحكيم الدولية الصادرة عن غرف التحكيم العالمية طبقاً لاتفاقية نيويورك للتحكيم.',
    answerEn: 'Yes, our litigation department possesses a stellar record in court enforcement of international arbitral awards under the New York Convention.',
    category: 'litigation'
  },
  {
    id: 'faq-5',
    questionAr: 'ما الذي تميز به بابينيان عن مكاتب المحاماة التقليدية؟',
    questionEn: 'What sets Papinian apart from traditional law firms?',
    answerAr: 'نجمع بين أصول الفقه القانوني الراسخ والسرعة والتحول التقني الشامل. نوفر أدوات حاسبة، نماذج عقود ذكية، خط ساخن 24/7 للظروف المستعجلة، ومستشارين خريجي أعرق الجامعات العالمية.',
    answerEn: 'We bridge deep legal mastery with agile digital tech. We offer real-time fee estimators, interactive contract tools, a 24/7 emergency hotline, and attorneys from top institutions like Harvard & Oxford.',
    category: 'corporate'
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    countryAr: 'المملكة العربية السعودية',
    countryEn: 'Saudi Arabia',
    addressAr: 'مركز الملك عبدالله المالي (KAFD)، البرج المالي الرئيسي، الدور 38',
    addressEn: 'King Abdullah Financial District (KAFD), Main Financial Tower, Floor 38',
    phone: '+966 11 890 4000',
    email: 'riyadh@papinianlaw.com',
    workingHoursAr: 'الأحد - الخميس: 8:00 ص - 6:00 م',
    workingHoursEn: 'Sun - Thu: 8:00 AM - 6:00 PM',
    isHeadquarters: true
  },
  {
    cityAr: 'دبي',
    cityEn: 'Dubai',
    countryAr: 'الإمارات العربية المتحدة',
    countryEn: 'United Arab Emirates',
    addressAr: 'مركز دبي المالي العالمي (DIFC)، برج بوابة الأبراج، الدور 22',
    addressEn: 'Dubai International Financial Centre (DIFC), Gate Precinct 4, Floor 22',
    phone: '+971 4 580 9000',
    email: 'dubai@papinianlaw.com',
    workingHoursAr: 'الاثنين - الجمعة: 8:30 ص - 6:30 م',
    workingHoursEn: 'Mon - Fri: 8:30 AM - 6:30 PM'
  },
  {
    cityAr: 'لندن',
    cityEn: 'London',
    countryAr: 'المملكة المتحدة',
    countryEn: 'United Kingdom',
    addressAr: 'حي ميفير، شارع كيرزون 45، لندن W1J 8YN',
    addressEn: '45 Curzon Street, Mayfair, London W1J 8YN',
    phone: '+44 20 7946 0900',
    email: 'london@papinianlaw.com',
    workingHoursAr: 'الاثنين - الجمعة: 9:00 ص - 5:30 م',
    workingHoursEn: 'Mon - Fri: 9:00 AM - 5:30 PM'
  },
  {
    cityAr: 'الكويت',
    cityEn: 'Kuwait City',
    countryAr: 'دولة الكويت',
    countryEn: 'Kuwait',
    addressAr: 'مدينة الكويت، شرق، برج الحمراء الأيقوني، الدور 41',
    addressEn: 'Sharq, Al Hamra Tower, Floor 41, Kuwait City',
    phone: '+965 22 00 8890',
    email: 'kuwait@papinianlaw.com',
    workingHoursAr: 'الأحد - الخميس: 8:00 ص - 5:00 م',
    workingHoursEn: 'Sun - Thu: 8:00 AM - 5:00 PM'
  }
];
