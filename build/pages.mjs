// Content for the service landing pages, English and Arabic.
// Each page targets its own searches; facts match the home page and the study pack.
// Keep claims to what is true today: no licence or certification claims.

export const STAGES = ["#0066FF", "#00D1FF", "#8B5CFF", "#FF3D9A", "#FF8A3D", "#C6F432"];

export const PAGES = [
  {
    slug: "managed-soc-mdr",
    color: "#00D1FF",
    en: {
      nav: "Managed SOC & MDR",
      title: "Managed SOC & MDR in Saudi Arabia | Cyber HAYKALAH",
      desc: "24/7 managed detection and response from an in-Kingdom SOC: named Saudi analysts, MITRE ATT&CK-mapped detection, and evidence for NCA ECC-2 and SAMA CSF.",
      serviceType: "Managed security operations centre and managed detection and response",
      kicker: "Managed SOC · MDR · Saudi Arabia",
      h1: "Managed SOC and MDR, run 24/7 from inside the Kingdom",
      lead: "Continuous monitoring, detection engineering, triage and response for your estate, delivered by named, NCA-qualified Saudi analysts from a security operations centre in Saudi Arabia. Your data stays in the Kingdom.",
      facts: [["24/7", "monitoring, nights and weekends included"], ["4.8", "people per seat watched around the clock: the team you don't have to build"], ["in-KSA", "telemetry processed and stored in Saudi Arabia"]],
      cardsTitle: "What you get",
      cards: [
        ["24/7 monitoring", "Endpoints, network, identity, cloud and email watched around the clock, with no gaps at night or on weekends."],
        ["Detection engineering", "Rules and models mapped to MITRE ATT&CK and tuned to threats seen in Saudi Arabia, so alerts mean something."],
        ["A named analyst", "Every incident has an owner you can call, and severity is always written in words, never colour alone."],
        ["Response on call", "Containment, eradication and recovery steps agreed in advance, with incident response specialists ready."],
        ["Monthly evidence", "Detection and response times, coverage and control evidence, packaged for your next ECC-2 or SAMA assessment."],
        ["Data in the Kingdom", "Telemetry is processed and stored in Saudi Arabia, in line with NDMO data policy."]
      ],
      stepsTitle: "How it works: one loop, six stages",
      steps: [
        ["Collect", "Logs and telemetry from your whole estate onboarded to an in-Kingdom platform."],
        ["Detect", "Rules, models and automation surface what matters and suppress the noise."],
        ["Triage", "A named Saudi analyst rates severity and owns the alert."],
        ["Respond", "Containment and recovery, with incident response on call."],
        ["Remediate", "Root cause fixed and verified by re-test."],
        ["Learn", "New detection content shared across every environment we watch."]
      ],
      fwTitle: "What it helps you evidence",
      fw: [["ECC-2:2024", "Monitoring, logging and incident management controls"], ["SAMA CSF", "Detection and response at Maturity Level 3 or above"], ["NCNICC-1:2025", "Monitoring controls for non-CNI private companies"], ["OTCC-1:2022", "Monitoring of operational technology and industrial systems"]],
      faq: [
        ["What is a managed SOC?", "A managed security operations centre is an outsourced team that monitors your systems around the clock, investigates alerts and responds to incidents. It gives you a 24/7 capability without building and staffing your own centre, which takes around 4.8 people for every seat watched continuously."],
        ["How is MDR different from a managed SOC?", "Managed detection and response focuses on finding and stopping active threats: detection engineering, threat hunting and hands-on containment. Cyber HAYKALAH delivers both as one service, so the work continues past the alert into the response."],
        ["Does our data leave Saudi Arabia?", "No. Monitoring runs from an operations centre in the Kingdom, and telemetry is processed and stored in Saudi Arabia in line with NDMO policy."],
        ["Does a managed SOC help with ECC-2 compliance?", "Yes. Monitoring, logging and incident handling are core ECC-2:2024 requirements, and you receive monthly evidence you can hand to your assessor."]
      ]
    },
    ar: {
      nav: "مركز العمليات المُدار والرصد والاستجابة",
      title: "مركز عمليات أمنية مُدار في السعودية | سايبر هيكلة",
      desc: "رصد واستجابة مُدارة على مدار الساعة من مركز عمليات داخل المملكة: محللون سعوديون مسمّون، ورصد مرتبط بإطار MITRE ATT&CK، وأدلة امتثال لـ ECC-2 وإطار البنك المركزي.",
      serviceType: "مركز عمليات أمنية مُدار ورصد واستجابة مُدارة",
      kicker: "مركز عمليات مُدار · رصد واستجابة · المملكة العربية السعودية",
      h1: "مركز عمليات مُدار ورصد واستجابة، على مدار الساعة من داخل المملكة",
      lead: "مراقبة مستمرة وهندسة رصد وفرز واستجابة لبيئتك التقنية، يقدّمها محللون سعوديون مسمّون ومؤهلون من الهيئة، من مركز عمليات أمنية في المملكة العربية السعودية. وتبقى بياناتك داخل المملكة.",
      facts: [["24/7", "مراقبة تشمل الليل وعطلات نهاية الأسبوع"], ["4.8", "موظفاً لكل مقعد يعمل على مدار الساعة: فريق لا تحتاج إلى بنائه"], ["محلياً", "معالجة بيانات الرصد وتخزينها داخل المملكة"]],
      cardsTitle: "ما الذي تحصل عليه",
      cards: [
        ["مراقبة على مدار الساعة", "الأجهزة الطرفية والشبكة والهويات والسحابة والبريد تحت المراقبة طوال الوقت، دون فجوات ليلاً أو في العطلات."],
        ["هندسة الرصد", "قواعد ونماذج مرتبطة بإطار MITRE ATT&CK ومضبوطة على التهديدات المرصودة في المملكة، لتكون التنبيهات ذات معنى."],
        ["محلل مسمّى", "لكل حادثة مسؤول يمكنك الاتصال به، والخطورة مكتوبة بالكلمات دائماً، لا باللون وحده."],
        ["استجابة جاهزة", "خطوات احتواء واستئصال وتعافٍ متفق عليها مسبقاً، مع مختصين في الاستجابة للحوادث على أهبة الاستعداد."],
        ["أدلة شهرية", "أزمنة الرصد والاستجابة والتغطية وأدلة الضوابط، مُعدّة لتقييمك القادم لـ ECC-2 أو إطار البنك المركزي."],
        ["البيانات داخل المملكة", "تُعالج بيانات الرصد وتُخزّن في المملكة العربية السعودية، وفق سياسات مكتب إدارة البيانات الوطنية."]
      ],
      stepsTitle: "كيف نعمل: دورة واحدة من ست مراحل",
      steps: [
        ["الجمع", "إدماج السجلات وبيانات الرصد من بيئتك كاملة في منصة داخل المملكة."],
        ["الرصد", "قواعد ونماذج وأتمتة تُظهر ما يهم وتُسكت الضجيج."],
        ["الفرز", "محلل سعودي مسمّى يحدد الخطورة ويتولى التنبيه."],
        ["الاستجابة", "احتواء وتعافٍ، مع استجابة للحوادث جاهزة عند الطلب."],
        ["المعالجة", "إصلاح السبب الجذري والتحقق منه بإعادة الاختبار."],
        ["التعلّم", "محتوى رصد جديد يُشارك عبر كل بيئة نراقبها."]
      ],
      fwTitle: "ما الذي يساعدك على إثباته",
      fw: [["ECC-2:2024", "ضوابط المراقبة والسجلات وإدارة الحوادث"], ["SAMA CSF", "الرصد والاستجابة عند مستوى النضج الثالث أو أعلى"], ["NCNICC-1:2025", "ضوابط المراقبة للشركات الخاصة غير المصنّفة بنيةً حساسة"], ["OTCC-1:2022", "مراقبة الأنظمة التشغيلية وأنظمة التحكم الصناعي"]],
      faq: [
        ["ما هو مركز العمليات الأمنية المُدار؟", "مركز العمليات الأمنية المُدار فريق خارجي يراقب أنظمتك على مدار الساعة، ويحقق في التنبيهات، ويستجيب للحوادث. ويمنحك قدرة تعمل طوال الوقت دون أن تبني مركزك الخاص وتوظّف له، وهو ما يتطلب نحو 4.8 موظفين لكل مقعد يعمل باستمرار."],
        ["ما الفرق بين الرصد والاستجابة المُدارة ومركز العمليات المُدار؟", "يركّز الرصد والاستجابة المُدارة على اكتشاف التهديدات النشطة وإيقافها: هندسة الرصد، وتعقّب التهديدات، والاحتواء الفعلي. وتقدّم سايبر هيكلة الاثنين خدمةً واحدة، فلا يتوقف العمل عند التنبيه بل يمتد إلى الاستجابة."],
        ["هل تغادر بياناتنا المملكة؟", "لا. تعمل المراقبة من مركز عمليات داخل المملكة، وتُعالج بيانات الرصد وتُخزّن في المملكة العربية السعودية وفق سياسات مكتب إدارة البيانات الوطنية."],
        ["هل يساعد مركز العمليات المُدار على الامتثال لـ ECC-2؟", "نعم. المراقبة والسجلات ومعالجة الحوادث متطلبات أساسية في ECC-2:2024، وتحصل كل شهر على أدلة يمكنك تقديمها للمقيِّم."]
      ]
    },
    related: ["ecc-2-compliance", "incident-response", "sama-csf"]
  },
  {
    slug: "ecc-2-compliance",
    color: "#0066FF",
    en: {
      nav: "ECC-2 compliance",
      title: "NCA ECC-2:2024 Compliance Services | Cyber HAYKALAH",
      desc: "Close your NCA Essential Cybersecurity Controls gaps: ECC-2:2024 gap assessment, remediation roadmap and continuous evidence across all 108 main controls.",
      serviceType: "NCA Essential Cybersecurity Controls (ECC-2:2024) compliance",
      kicker: "NCA · Essential Cybersecurity Controls",
      h1: "ECC-2:2024 compliance, evidenced continuously",
      lead: "The National Cybersecurity Authority's Essential Cybersecurity Controls set the baseline for government entities and critical infrastructure in Saudi Arabia: 4 domains, 28 subdomains and 108 main controls. We assess where you stand, close the gaps and keep the evidence live.",
      facts: [["108", "main controls in ECC-2:2024"], ["4 · 28", "domains and subdomains"], ["1-2-2", "the control on qualified, full-time Saudi cybersecurity staff"]],
      cardsTitle: "What you get",
      cards: [
        ["Gap assessment", "Every one of the 108 main controls rated against your current state, with owners and priorities."],
        ["Remediation roadmap", "A sequenced plan to close the gaps, starting with the controls that carry the most risk."],
        ["Policies and procedures", "The governance documents ECC-2 expects, written for your organisation and approved by your leadership."],
        ["Continuous evidence", "A live control map, one cell per control, so the evidence is ready before the assessor asks."],
        ["Saudi workforce planning", "Support for control 1-2-2, which requires cybersecurity roles to be filled by qualified, full-time Saudi professionals."],
        ["Assessment support", "Preparation, evidence packs and support through your NCA compliance assessment."]
      ],
      stepsTitle: "How we take you through it",
      steps: [
        ["Scope", "Confirm which entities, systems and controls are in scope."],
        ["Assess", "Rate all 108 main controls against evidence, not interviews alone."],
        ["Prioritise", "Rank the gaps by risk and by effort."],
        ["Remediate", "Close gaps with policy, technical and staffing work."],
        ["Evidence", "Collect and organise proof for every control."],
        ["Maintain", "Keep the control map live as your estate changes."]
      ],
      fwTitle: "Related national frameworks",
      fw: [["ECC-2:2024", "Essential Cybersecurity Controls, the national baseline"], ["OTCC-1:2022", "Operational technology controls, which build on ECC"], ["CCC-2:2024", "Cloud cybersecurity controls for providers and tenants"], ["NCNICC-1:2025", "Controls for non-CNI private-sector companies"]],
      faq: [
        ["What is ECC-2:2024?", "ECC-2:2024 is the second edition of the NCA's Essential Cybersecurity Controls. It replaced ECC-1:2018 and sets 108 main controls across 4 domains and 28 subdomains."],
        ["Who has to comply with ECC-2?", "Government entities inside and outside the Kingdom and their affiliates, and private-sector organisations that own, operate or host critical national infrastructure. Non-CNI private companies are covered separately by NCNICC-1:2025."],
        ["What does control 1-2-2 require?", "That cybersecurity positions are filled by qualified, full-time Saudi professionals. It is one of the controls organisations most often need to plan for."],
        ["How long does it take to close ECC-2 gaps?", "It depends on your starting point. The gap assessment comes first and gives you a scored baseline and a sequenced roadmap, so the effort is clear before you commit to the remediation work."]
      ]
    },
    ar: {
      nav: "الامتثال للضوابط الأساسية ECC-2",
      title: "الامتثال للضوابط الأساسية ECC-2:2024 | سايبر هيكلة",
      desc: "أغلق فجواتك في الضوابط الأساسية للأمن السيبراني: تقييم فجوات ECC-2:2024، وخارطة طريق للمعالجة، وأدلة مستمرة لجميع الضوابط الرئيسة الـ108.",
      serviceType: "الامتثال للضوابط الأساسية للأمن السيبراني ECC-2:2024",
      kicker: "الهيئة الوطنية للأمن السيبراني · الضوابط الأساسية",
      h1: "الامتثال لـ ECC-2:2024، بأدلة مستمرة",
      lead: "تضع الضوابط الأساسية للأمن السيبراني الصادرة عن الهيئة الوطنية للأمن السيبراني خط الأساس للجهات الحكومية والبنى التحتية الحساسة في المملكة: 4 مكونات أساسية و28 مكوناً فرعياً و108 ضوابط رئيسة. نقيّم موقعك، ونغلق الفجوات، ونُبقي الأدلة محدّثة.",
      facts: [["108", "ضوابط رئيسة في ECC-2:2024"], ["4 · 28", "مكونات أساسية وفرعية"], ["1-2-2", "ضابط الكفاءات السعودية المؤهلة بدوام كامل"]],
      cardsTitle: "ما الذي تحصل عليه",
      cards: [
        ["تقييم الفجوات", "تقييم كل ضابط من الضوابط الرئيسة الـ108 مقابل وضعك الحالي، مع تحديد المسؤولين والأولويات."],
        ["خارطة طريق للمعالجة", "خطة متسلسلة لإغلاق الفجوات، تبدأ بالضوابط الأعلى خطورة."],
        ["السياسات والإجراءات", "وثائق الحوكمة التي تتطلبها ECC-2، مكتوبة لجهتك ومعتمدة من قيادتها."],
        ["أدلة مستمرة", "خريطة ضوابط مباشرة، خلية لكل ضابط، لتكون الأدلة جاهزة قبل أن يطلبها المقيِّم."],
        ["تخطيط الكفاءات السعودية", "دعم الالتزام بالضابط 1-2-2 الذي يشترط شغل وظائف الأمن السيبراني بكفاءات سعودية مؤهلة بدوام كامل."],
        ["دعم التقييم", "الإعداد وحزم الأدلة والدعم خلال تقييم الامتثال من الهيئة."]
      ],
      stepsTitle: "كيف نرافقك في الرحلة",
      steps: [
        ["النطاق", "تحديد الجهات والأنظمة والضوابط المشمولة."],
        ["التقييم", "تقييم الضوابط الـ108 بالأدلة، لا بالمقابلات وحدها."],
        ["الأولويات", "ترتيب الفجوات بحسب الخطورة والجهد."],
        ["المعالجة", "إغلاق الفجوات بأعمال السياسات والتقنية والتوظيف."],
        ["الأدلة", "جمع الإثباتات وتنظيمها لكل ضابط."],
        ["الاستدامة", "إبقاء خريطة الضوابط محدّثة مع تغيّر بيئتك."]
      ],
      fwTitle: "أطر وطنية مرتبطة",
      fw: [["ECC-2:2024", "الضوابط الأساسية للأمن السيبراني، خط الأساس الوطني"], ["OTCC-1:2022", "ضوابط الأنظمة التشغيلية المبنية على الضوابط الأساسية"], ["CCC-2:2024", "ضوابط الحوسبة السحابية للمزوّدين والمستأجرين"], ["NCNICC-1:2025", "ضوابط شركات القطاع الخاص غير المصنّفة بنيةً حساسة"]],
      faq: [
        ["ما هي ECC-2:2024؟", "ECC-2:2024 هي الإصدار الثاني من الضوابط الأساسية للأمن السيبراني الصادرة عن الهيئة الوطنية للأمن السيبراني. وقد حلّت محل ECC-1:2018، وتحدد 108 ضوابط رئيسة موزعة على 4 مكونات أساسية و28 مكوناً فرعياً."],
        ["من يجب عليه الالتزام بـ ECC-2؟", "الجهات الحكومية داخل المملكة وخارجها والجهات التابعة لها، ومنشآت القطاع الخاص التي تملك بنى تحتية وطنية حساسة أو تشغّلها أو تستضيفها. أما الشركات الخاصة غير المصنّفة بنيةً حساسة فتغطيها ضوابط NCNICC-1:2025."],
        ["ماذا يشترط الضابط 1-2-2؟", "أن تُشغل وظائف الأمن السيبراني بكفاءات سعودية مؤهلة بدوام كامل. وهو من الضوابط التي تحتاج الجهات غالباً إلى التخطيط لها مبكراً."],
        ["كم يستغرق إغلاق فجوات ECC-2؟", "يعتمد ذلك على نقطة البداية. يأتي تقييم الفجوات أولاً، فيمنحك خط أساس مُقيّماً وخارطة طريق متسلسلة، ليتضح حجم الجهد قبل الالتزام بأعمال المعالجة."]
      ]
    },
    related: ["managed-soc-mdr", "sama-csf", "incident-response"]
  },
  {
    slug: "sama-csf",
    color: "#8B5CFF",
    en: {
      nav: "SAMA Cyber Security Framework",
      title: "SAMA Cyber Security Framework Services | Cyber HAYKALAH",
      desc: "Reach and hold SAMA CSF Maturity Level 3: gap assessment, remediation, 24/7 monitoring and evidence for banks, insurers and payments firms in Saudi Arabia.",
      serviceType: "SAMA Cyber Security Framework maturity and compliance",
      kicker: "Saudi Central Bank · Cyber Security Framework",
      h1: "SAMA Cyber Security Framework: reach Level 3, and stay there",
      lead: "The Saudi Central Bank's Cyber Security Framework requires every regulated financial institution to reach at least Maturity Level 3, Structured and formalized, across 4 domains and 32 subdomains. We help you get there and keep the evidence current.",
      facts: [["L3", "minimum maturity for every regulated institution"], ["4 · 32", "domains and subdomains"], ["0–5", "maturity levels, from Non-existent to Adaptive"]],
      cardsTitle: "What you get",
      cards: [
        ["Maturity assessment", "Each subdomain rated on SAMA's 0–5 scale, with the evidence behind every score."],
        ["Gap remediation", "A plan to lift every subdomain to Level 3, and the policy, process and technical work to deliver it."],
        ["24/7 monitoring", "Managed detection and response that turns day-to-day operations into maturity evidence."],
        ["Third parties and cloud", "Assurance over the suppliers and cloud services your institution depends on."],
        ["Incident response", "Tested playbooks and on-call specialists, so resilience can be demonstrated rather than described."],
        ["Board reporting", "Maturity reporting your board and SAMA can read, with progress shown by domain."]
      ],
      stepsTitle: "The six maturity levels",
      steps: [
        ["Level 0", "Non-existent: the area is not addressed."],
        ["Level 1", "Ad-hoc: controls depend on individuals."],
        ["Level 2", "Repeatable but informal: practices repeat but are not defined."],
        ["Level 3", "Structured and formalized: the minimum SAMA requires."],
        ["Level 4", "Managed and measurable: controls measured with KPIs."],
        ["Level 5", "Adaptive: continuous improvement driven by intelligence."]
      ],
      fwTitle: "Frameworks financial institutions also face",
      fw: [["SAMA CSF", "Cyber Security Framework, Maturity Level 3 minimum"], ["ECC-2:2024", "NCA Essential Cybersecurity Controls"], ["PDPL", "Personal Data Protection Law and its transfer rules"], ["CCC-2:2024", "Cloud cybersecurity controls"]],
      faq: [
        ["What is the SAMA Cyber Security Framework?", "It is the Saudi Central Bank's framework for cybersecurity in the financial sector. It is organised into 4 domains and 32 subdomains, each assessed on a maturity scale from 0 to 5."],
        ["What maturity level do we need?", "At least Level 3, Structured and formalized, which means policies and controls are defined, approved and implemented."],
        ["Who does the framework apply to?", "Institutions regulated by the Saudi Central Bank, such as banks, insurance companies and payments firms."],
        ["Can an outsourced SOC meet SAMA requirements?", "Yes, provided the outsourcing itself meets SAMA's requirements for material outsourcing. We design the service and its reporting so you can show how the outsourced work is governed."]
      ]
    },
    ar: {
      nav: "إطار البنك المركزي السعودي",
      title: "إطار البنك المركزي السعودي للأمن السيبراني | سايبر هيكلة",
      desc: "بلوغ مستوى النضج الثالث في إطار البنك المركزي السعودي والحفاظ عليه: تقييم الفجوات، والمعالجة، والمراقبة على مدار الساعة، والأدلة للبنوك وشركات التأمين والمدفوعات.",
      serviceType: "النضج والامتثال للإطار التنظيمي للأمن السيبراني للبنك المركزي السعودي",
      kicker: "البنك المركزي السعودي · الإطار التنظيمي للأمن السيبراني",
      h1: "إطار البنك المركزي السعودي: ابلغ المستوى الثالث، وحافظ عليه",
      lead: "يشترط الإطار التنظيمي للأمن السيبراني الصادر عن البنك المركزي السعودي أن تبلغ كل مؤسسة مالية خاضعة للتنظيم مستوى النضج الثالث على الأقل، «منظَّم ورسمي»، عبر 4 مجالات و32 مجالاً فرعياً. نساعدك على بلوغه ونُبقي الأدلة محدّثة.",
      facts: [["L3", "الحد الأدنى للنضج لكل مؤسسة خاضعة للتنظيم"], ["4 · 32", "مجالات ومجالات فرعية"], ["0–5", "مستويات نضج، من «غير موجود» إلى «تكيّفي»"]],
      cardsTitle: "ما الذي تحصل عليه",
      cards: [
        ["تقييم النضج", "تقييم كل مجال فرعي على مقياس البنك المركزي من 0 إلى 5، مع الأدلة وراء كل درجة."],
        ["معالجة الفجوات", "خطة لرفع كل مجال فرعي إلى المستوى الثالث، وأعمال السياسات والإجراءات والتقنية لتحقيقها."],
        ["مراقبة على مدار الساعة", "رصد واستجابة مُدارة تحوّل العمليات اليومية إلى أدلة نضج."],
        ["الأطراف الخارجية والسحابة", "ضمانات حول الموردين والخدمات السحابية التي تعتمد عليها مؤسستك."],
        ["الاستجابة للحوادث", "أدلة إجراءات مُختبرة ومختصون جاهزون، لتُثبت الصمود بدلاً من وصفه."],
        ["تقارير مجلس الإدارة", "تقارير نضج يقرؤها مجلس الإدارة والبنك المركزي، مع عرض التقدم لكل مجال."]
      ],
      stepsTitle: "مستويات النضج الستة",
      steps: [
        ["المستوى 0", "غير موجود: المجال غير معالَج."],
        ["المستوى 1", "عشوائي: الضوابط تعتمد على الأفراد."],
        ["المستوى 2", "متكرر لكنه غير رسمي: الممارسات تتكرر دون تعريف."],
        ["المستوى 3", "منظَّم ورسمي: الحد الأدنى الذي يشترطه البنك المركزي."],
        ["المستوى 4", "مُدار وقابل للقياس: ضوابط تُقاس بمؤشرات أداء."],
        ["المستوى 5", "تكيّفي: تحسين مستمر تقوده المعلومات الاستخباراتية."]
      ],
      fwTitle: "أطر أخرى تواجهها المؤسسات المالية",
      fw: [["SAMA CSF", "الإطار التنظيمي للأمن السيبراني، الحد الأدنى المستوى الثالث"], ["ECC-2:2024", "الضوابط الأساسية للأمن السيبراني من الهيئة"], ["PDPL", "نظام حماية البيانات الشخصية ولوائح نقلها"], ["CCC-2:2024", "ضوابط الأمن السيبراني للحوسبة السحابية"]],
      faq: [
        ["ما هو الإطار التنظيمي للأمن السيبراني للبنك المركزي السعودي؟", "هو إطار البنك المركزي السعودي للأمن السيبراني في القطاع المالي، ويتكوّن من 4 مجالات و32 مجالاً فرعياً، يُقيّم كلٌّ منها على مقياس نضج من 0 إلى 5."],
        ["ما مستوى النضج المطلوب؟", "المستوى الثالث على الأقل، «منظَّم ورسمي»، أي أن السياسات والضوابط معرّفة ومعتمدة ومطبقة."],
        ["على من ينطبق الإطار؟", "على المؤسسات الخاضعة لتنظيم البنك المركزي السعودي، مثل البنوك وشركات التأمين وشركات المدفوعات."],
        ["هل يمكن لمركز عمليات خارجي أن يلبي متطلبات البنك المركزي؟", "نعم، بشرط أن يستوفي الإسناد نفسه متطلبات البنك المركزي للإسناد الجوهري. ونصمم الخدمة وتقاريرها لتتمكن من إثبات كيفية حوكمة العمل المُسند."]
      ]
    },
    related: ["managed-soc-mdr", "ecc-2-compliance", "incident-response"]
  },
  {
    slug: "incident-response",
    color: "#FF3D9A",
    en: {
      nav: "Incident response & forensics",
      title: "Incident Response & Digital Forensics, KSA | Cyber HAYKALAH",
      desc: "On-call incident response and digital forensics in Saudi Arabia: containment, root cause, evidence preservation and regulator-ready reports. Retainer or call-out.",
      serviceType: "Incident response and digital forensics",
      kicker: "DFIR · Retainer · Call-out",
      h1: "Incident response and forensics, when every minute counts",
      lead: "When an incident happens, Saudi incident-response specialists help you contain it, find the root cause, preserve the evidence and prepare the report your regulator expects, on a retainer agreed in advance or as an emergency call-out.",
      facts: [["24/7", "on-call response"], ["Retainer", "terms, contacts and playbooks agreed before you need them"], ["in-KSA", "forensic evidence handled and kept in Saudi Arabia"]],
      cardsTitle: "What you get",
      cards: [
        ["Incident response retainer", "Agreed contacts, response times and playbooks, so the first hour is spent responding, not negotiating."],
        ["Containment", "Isolate affected systems and stop the spread without destroying the evidence you will need."],
        ["Forensic investigation", "Establish what happened, when, how the attacker got in and what they touched."],
        ["Evidence preservation", "Chain-of-custody handling for logs, disk and memory images."],
        ["Regulator-ready reporting", "A clear report and evidence pack to support your organisation's regulatory notifications."],
        ["Readiness", "Playbooks and tabletop exercises that test your team before a real incident does."]
      ],
      stepsTitle: "How a response runs",
      steps: [
        ["Prepare", "Retainer, contacts and playbooks agreed in advance."],
        ["Detect", "The alert is confirmed and its severity rated."],
        ["Contain", "Affected systems isolated, evidence preserved."],
        ["Eradicate", "The attacker's access and tools removed."],
        ["Recover", "Systems restored and watched closely."],
        ["Learn", "Root cause, lessons and new detections shared."]
      ],
      fwTitle: "What it helps you evidence",
      fw: [["ECC-2:2024", "Incident and threat management controls"], ["SAMA CSF", "Incident response and resilience"], ["NCNICC-1:2025", "Incident handling for private companies"], ["PDPL", "Handling of personal-data breaches"]],
      faq: [
        ["What is an incident response retainer?", "An agreement made before an incident that sets out who you call, how fast the team responds and how the work is run. It removes the delay of finding and contracting a provider in the middle of a crisis."],
        ["What should we do first if we suspect a breach?", "Isolate affected systems if you can do so safely, preserve logs and evidence, and call your incident response provider. Avoid wiping or rebuilding machines before the evidence is captured."],
        ["Do you notify the regulator for us?", "We prepare the incident report and evidence your organisation needs for its regulatory notifications. The notification itself is made by your organisation."],
        ["Is forensic evidence kept in Saudi Arabia?", "Yes. Evidence is handled and stored in the Kingdom, with chain-of-custody records."]
      ]
    },
    ar: {
      nav: "الاستجابة للحوادث والأدلة الرقمية",
      title: "الاستجابة للحوادث والأدلة الرقمية | سايبر هيكلة",
      desc: "استجابة للحوادث وتحقيق جنائي رقمي في المملكة: احتواء، وسبب جذري، وحفظ للأدلة، وتقارير جاهزة للجهة المنظِّمة. بعقد احتفاظ أو عند الطلب.",
      serviceType: "الاستجابة للحوادث والتحقيق الجنائي الرقمي",
      kicker: "الأدلة الرقمية والاستجابة · عقد احتفاظ · استدعاء",
      h1: "الاستجابة للحوادث والأدلة الرقمية، حين تكون كل دقيقة مهمة",
      lead: "عند وقوع حادثة، يساعدك مختصون سعوديون في الاستجابة للحوادث على احتوائها، وتحديد سببها الجذري، وحفظ الأدلة، وإعداد التقرير الذي تتوقعه الجهة المنظِّمة، بعقد احتفاظ متفق عليه مسبقاً أو باستدعاء طارئ.",
      facts: [["24/7", "استجابة عند الطلب"], ["عقد احتفاظ", "شروط وجهات اتصال وأدلة إجراءات متفق عليها قبل الحاجة"], ["محلياً", "التعامل مع الأدلة الجنائية وحفظها داخل المملكة"]],
      cardsTitle: "ما الذي تحصل عليه",
      cards: [
        ["عقد احتفاظ للاستجابة", "جهات اتصال وأزمنة استجابة وأدلة إجراءات متفق عليها، لتُقضى الساعة الأولى في الاستجابة لا في التفاوض."],
        ["الاحتواء", "عزل الأنظمة المتأثرة وإيقاف الانتشار دون إتلاف الأدلة التي ستحتاجها."],
        ["التحقيق الجنائي", "تحديد ما حدث ومتى، وكيف دخل المهاجم، وما الذي وصل إليه."],
        ["حفظ الأدلة", "التعامل مع السجلات وصور الأقراص والذاكرة وفق سلسلة حيازة موثّقة."],
        ["تقارير جاهزة للجهة المنظِّمة", "تقرير واضح وحزمة أدلة تدعم إشعارات جهتك التنظيمية."],
        ["الجاهزية", "أدلة إجراءات وتمارين محاكاة تختبر فريقك قبل أن تختبره حادثة حقيقية."]
      ],
      stepsTitle: "كيف تسير الاستجابة",
      steps: [
        ["الاستعداد", "عقد الاحتفاظ وجهات الاتصال وأدلة الإجراءات متفق عليها مسبقاً."],
        ["الرصد", "تأكيد التنبيه وتحديد خطورته."],
        ["الاحتواء", "عزل الأنظمة المتأثرة وحفظ الأدلة."],
        ["الاستئصال", "إزالة وصول المهاجم وأدواته."],
        ["التعافي", "استعادة الأنظمة ومراقبتها عن كثب."],
        ["التعلّم", "مشاركة السبب الجذري والدروس وقواعد الرصد الجديدة."]
      ],
      fwTitle: "ما الذي يساعدك على إثباته",
      fw: [["ECC-2:2024", "ضوابط إدارة الحوادث والتهديدات"], ["SAMA CSF", "الاستجابة للحوادث والصمود"], ["NCNICC-1:2025", "معالجة الحوادث في الشركات الخاصة"], ["PDPL", "التعامل مع تسرب البيانات الشخصية"]],
      faq: [
        ["ما هو عقد الاحتفاظ للاستجابة للحوادث؟", "اتفاق يُبرم قبل وقوع الحادثة ويحدد من تتصل به، ومدى سرعة استجابة الفريق، وكيف يُدار العمل. ويُغنيك عن البحث عن مزوّد والتعاقد معه في خضم الأزمة."],
        ["ماذا نفعل أولاً إذا اشتبهنا في اختراق؟", "اعزل الأنظمة المتأثرة إن أمكن ذلك بأمان، واحفظ السجلات والأدلة، واتصل بمزوّد الاستجابة للحوادث. وتجنّب مسح الأجهزة أو إعادة بنائها قبل التقاط الأدلة."],
        ["هل تُبلغون الجهة المنظِّمة نيابةً عنا؟", "نُعدّ تقرير الحادثة والأدلة التي تحتاجها جهتك لإشعاراتها التنظيمية، أما الإشعار نفسه فتقدّمه جهتك."],
        ["هل تُحفظ الأدلة الجنائية داخل المملكة؟", "نعم. يجري التعامل مع الأدلة وحفظها داخل المملكة، مع سجلات لسلسلة الحيازة."]
      ]
    },
    related: ["managed-soc-mdr", "ecc-2-compliance", "sama-csf"]
  }
];

export const HOME = {
  en: {
    title: "Cyber HAYKALAH | Managed SOC & Cybersecurity in Saudi Arabia",
    desc: "Saudi managed SOC and MDR: 24/7 detection and response, NCA ECC-2 and SAMA CSF compliance evidence, incident response and penetration testing. Riyadh · Jeddah.",
    ogTitle: "Cyber HAYKALAH · Structured to defend.",
    ogDesc: "A Saudi security operator: the Kingdom's cyber vision, the rules that shape it, and the services we deliver within them."
  },
  ar: {
    title: "سايبر هيكلة | مركز عمليات الأمن السيبراني المُدار في السعودية",
    desc: "مركز عمليات أمن سيبراني مُدار في المملكة: رصد واستجابة على مدار الساعة، وأدلة امتثال لـ ECC-2 وإطار البنك المركزي، واستجابة للحوادث. الرياض · جدة.",
    ogTitle: "سايبر هيكلة · هيكلةٌ تحمي.",
    ogDesc: "مشغّل أمني سعودي: رؤية المملكة السيبرانية، والأنظمة التي تشكّلها، والخدمات التي نقدّمها في إطارها."
  }
};

// Shared UI strings for the landing pages.
export const UI = {
  en: { home: "Home", services: "Services", faq: "Frequently asked questions", related: "Related services", ctaH: "Talk to us about", ctaP: "Tell us about your estate and what you need to evidence. We'll come back with a scoped proposal.", email: "Email us", back: "Back to the main site", hero: "Overview", cards: "What you get", steps: "How it works", fw: "Frameworks", faqN: "FAQ", contact: "Contact", learn: "Learn more", illus: "Indicative. Operating details are agreed per client." },
  ar: { home: "الرئيسية", services: "الخدمات", faq: "الأسئلة الشائعة", related: "خدمات مرتبطة", ctaH: "تحدّث إلينا عن", ctaP: "أخبرنا عن بيئتك التقنية وما تحتاج إلى إثباته، وسنعود إليك بعرض محدد النطاق.", email: "راسلنا", back: "العودة إلى الموقع الرئيسي", hero: "نظرة عامة", cards: "ما الذي تحصل عليه", steps: "كيف نعمل", fw: "الأطر", faqN: "الأسئلة", contact: "تواصل", learn: "تعرّف أكثر", illus: "استرشادي. تُحدَّد تفاصيل التشغيل مع كل عميل." }
};
