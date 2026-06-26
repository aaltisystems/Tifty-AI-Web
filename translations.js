const translations = {
  es: {
    // Navbar
    nav_solutions: "Soluciones",
    nav_benefits: "Beneficios",
    nav_demo: "Demo Interactiva",
    nav_contact: "Contacto",
    nav_btn: "Auditoría Gratis",
    
    // Hero
    hero_badge: "Agencia de Implementación de IA",
    hero_title: "La Era de la <br><span class='gradient-text'>Autonomía Corporativa</span>",
    hero_desc: "Diseñamos e implementamos infraestructura de Inteligencia Artificial a medida para empresas líderes. Desde Agentes de Voz hiperrealistas hasta Chatbots avanzados y automatización cognitiva de procesos. Redefine la productividad y escala sin fricciones.",
    hero_btn_primary: "Agendar Auditoría Gratis",
    hero_btn_secondary: "Explorar Soluciones",
    
    // Metrics
    metric_1_label: "Eficiencia operativa en flujos repetitivos",
    metric_2_label: "Tiempo de primera respuesta al cliente",
    metric_3_label: "Soporte y cierre de ventas autónomo",
    
    // Services
    services_label: "Nuestras Soluciones",
    services_title: "Infraestructura Cognitiva",
    services_subtitle: "Implementamos sistemas avanzados de IA listos para integrarse en tu stack tecnológico actual y transformar tus flujos de trabajo.",
    
    service_1_title: "Chatbots Inteligentes",
    service_1_desc: "Agentes de chat cognitivos con memoria a largo plazo y comprensión contextual profunda. Automatizan soporte, cualifican prospectos y guían al cliente a la conversión.",
    service_1_feat_1: "Integración con CRMs y Bases de Datos",
    service_1_feat_2: "Comprensión multimodal de intenciones",
    service_1_feat_3: "Atención en múltiples idiomas 24/7",
    
    service_2_title: "Agentes de Voz (Voice AI)",
    service_2_desc: "Agentes telefónicos autónomos con latencia ultra baja, entonación natural y empatía conversacional. Capaces de realizar llamadas entrantes o salientes de forma natural.",
    service_2_feat_1: "Agendamiento y toma de citas en tiempo real",
    service_2_feat_2: "Voces humanas personalizables sin acento robot",
    service_2_feat_3: "Transferencia inteligente a agentes humanos",
    
    service_3_title: "Automatización de Procesos",
    service_3_desc: "Unión de herramientas y lógica mediante IA autónoma. Automatizamos flujos complejos de tareas, desde el análisis de documentos y facturas hasta respuestas a correos y reportes.",
    service_3_feat_1: "Lectura inteligente de facturas y PDFs",
    service_3_feat_2: "Sincronización automatizada entre sistemas",
    service_3_feat_3: "Monitoreo y toma de decisiones cognitivas",
    
    // Benefits
    benefits_label: "¿Por qué Tifty AI?",
    benefits_title: "Resultados Tangibles, No Promesas",
    benefits_left_title: "El Retorno de la IA",
    benefits_left_desc: "Las empresas que implementan agentes de inteligencia artificial autónomos reportan un crecimiento acelerado sin la necesidad de escalar proporcionalmente sus equipos de soporte u operaciones.",
    benefits_left_cost: "Costo de Operación",
    benefits_left_volume: "Volumen de Atención",
    benefits_left_time: "Tiempo de Integración",
    benefits_left_weeks: "3-4 Semanas",
    
    benefit_1_title: "Ahorro de Costes Crítico",
    benefit_1_desc: "Reducimos los gastos asociados con tareas operativas repetitivas y de bajo valor, permitiendo a tus empleados enfocarse en la estrategia y la innovación de la empresa.",
    benefit_2_title: "Escalabilidad Exponencial",
    benefit_2_desc: "Atiende simultáneamente miles de chats o llamadas de voz sin tiempos de espera, sin fallos y manteniendo siempre el máximo estándar de calidad y consistencia de marca.",
    benefit_3_title: "Integración Sin Fricciones",
    benefit_3_desc: "Diseñamos sistemas que se acoplan perfectamente con las herramientas que ya utilizas, como Salesforce, HubSpot, Slack o ERPs propios, garantizando una transición invisible.",
    
    // Demo
    demo_label: "Demo interactiva",
    demo_title: "Prueba la velocidad de nuestra IA",
    demo_desc: "Hemos configurado un asistente de IA para que respondas tus dudas iniciales al instante. Hazle preguntas sobre tiempos de desarrollo, seguridad de datos o integraciones.",
    demo_btn: "Solicitar Demo Personalizada",
    chat_bot_name: "Tifty AI Core",
    chat_bot_status: "En línea y pensando",
    chat_welcome: "¡Hola! Soy el asistente inteligente de Tifty AI. ¿En qué puedo ayudarte hoy sobre la automatización e implementación de IA para tu negocio?",
    chat_input_placeholder: "Pregunta sobre integraciones, precios o tiempos...",
    
    // Contact
    contact_label: "Da el primer paso",
    contact_title: "¿Listo para automatizar tu negocio?",
    contact_subtitle: "Agenda una auditoría técnica gratuita de 30 minutos. Analizaremos tus flujos actuales e identificaremos dónde la IA puede ahorrarte más tiempo y dinero.",
    contact_email_title: "Correo Directo",
    
    form_name_label: "Nombre Completo",
    form_name_placeholder: "Escribe tu nombre",
    form_company_label: "Empresa / Negocio",
    form_company_placeholder: "Nombre de tu empresa",
    form_email_label: "Correo Electrónico Corporativo",
    form_email_placeholder: "tu@empresa.com",
    form_challenge_label: "Principal Desafío Actual",
    form_challenge_placeholder: "Selecciona tu desafío",
    form_challenge_1: "Automatizar atención al cliente (chat/voz)",
    form_challenge_2: "Reducir costos operativos repetitivos",
    form_challenge_3: "Escalar ventas sin escalar equipo",
    form_challenge_4: "Automatizar procesamiento de documentos",
    form_challenge_5: "Integrar IA en sistemas existentes (CRM/ERP)",
    form_challenge_6: "Otro desafío específico",
    form_submit_audit: "Solicitar Auditoría Gratis",
    form_sending_audit: "Enviando solicitud...",
    form_error_name: "Por favor, ingresa tu nombre completo",
    form_error_company: "Por favor, ingresa el nombre de tu empresa",
    form_error_email: "Por favor, ingresa un correo electrónico válido",
    form_error_challenge: "Por favor, selecciona tu principal desafío",
    form_error_network: "Error de conexión. Por favor, inténtalo de nuevo.",
    form_success_audit_title: "¡Auditoría Solicitada con Éxito!",
    form_success_audit_desc: "Nuestro equipo analizará tu caso y un consultor senior se pondrá en contacto contigo en las próximas 12 horas para agendar tu auditoría personalizada.",
    form_submit: "Enviar Solicitud",
    form_sending: "Enviando Solicitud...",
    form_success_title: "¡Solicitud Recibida!",
    form_success_desc: "Un consultor senior de Tifty AI se pondrá en contacto contigo en las próximas 12 horas para agendar tu llamada.",
    
    // Footer
    footer_brand_desc: "Implementación profesional de inteligencia artificial a escala para empresas que lideran el mercado.",
    footer_nav: "Navegación",
    footer_legal: "Legal",
    footer_terms: "Términos de Servicio",
    footer_privacy: "Política de Privacidad",
    footer_security: "Seguridad de Datos",
    footer_rights: "&copy; 2026 Tifty AI. Todos los derechos reservados."
  },
  en: {
    // Navbar
    nav_solutions: "Solutions",
    nav_benefits: "Benefits",
    nav_demo: "Interactive Demo",
    nav_contact: "Contact",
    nav_btn: "Free Audit",
    
    // Hero
    hero_badge: "AI Implementation Agency",
    hero_title: "The Era of <br><span class='gradient-text'>Corporate Autonomy</span>",
    hero_desc: "We design and implement custom Artificial Intelligence infrastructure for leading enterprises. From hyper-realistic Voice Agents to advanced Chatbots and cognitive process automation. Redefine productivity and scale seamlessly.",
    hero_btn_primary: "Schedule Free Audit",
    hero_btn_secondary: "Explore Solutions",
    
    // Metrics
    metric_1_label: "Operational efficiency in repetitive workflows",
    metric_2_label: "First customer response time",
    metric_3_label: "Autonomous support and sales closing",
    
    // Services
    services_label: "Our Solutions",
    services_title: "Cognitive Infrastructure",
    services_subtitle: "We deploy advanced AI systems ready to integrate into your current tech stack and transform your workflows.",
    
    service_1_title: "Smart Chatbots",
    service_1_desc: "Cognitive chat agents with long-term memory and deep contextual understanding. They automate support, qualify leads, and guide customers to conversion.",
    service_1_feat_1: "Integration with CRMs and Databases",
    service_1_feat_2: "Multimodal intent understanding",
    service_1_feat_3: "Multi-language 24/7 customer care",
    
    service_2_title: "Voice AI Agents",
    service_2_desc: "Autonomous telephone agents with ultra-low latency, natural inflections, and conversational empathy. Capable of handling inbound or outbound calls naturally.",
    service_2_feat_1: "Real-time appointment scheduling",
    service_2_feat_2: "Custom human-like voices with no robotic accent",
    service_2_feat_3: "Smart handoff to human agents",
    
    service_3_title: "Process Automation",
    service_3_desc: "Connecting tools and logic through autonomous AI. We automate complex workflows, from document and invoice analysis to email replies and reporting.",
    service_3_feat_1: "Intelligent PDF and invoice reading",
    service_3_feat_2: "Automated synchronization between systems",
    service_3_feat_3: "Cognitive decision making & monitoring",
    
    // Benefits
    benefits_label: "Why Tifty AI?",
    benefits_title: "Tangible Results, Not Promises",
    benefits_left_title: "The Return of AI",
    benefits_left_desc: "Companies implementing autonomous AI agents report accelerated growth without the need to proportionally scale their support or operations teams.",
    benefits_left_cost: "Operating Cost",
    benefits_left_volume: "Support Volume",
    benefits_left_time: "Integration Time",
    benefits_left_weeks: "3-4 Weeks",
    
    benefit_1_title: "Critical Cost Savings",
    benefit_1_desc: "We reduce expenses associated with repetitive, low-value operational tasks, allowing your employees to focus on strategy and innovation.",
    benefit_2_title: "Exponential Scalability",
    benefit_2_desc: "Simultaneously handle thousands of chats or voice calls with zero wait times, zero downtime, and a consistent brand voice.",
    benefit_3_title: "Frictionless Integration",
    benefit_3_desc: "We design systems that couple seamlessly with the tools you already use, such as Salesforce, HubSpot, Slack, or in-house ERPs, ensuring a smooth transition.",
    
    // Demo
    demo_label: "Interactive Demo",
    demo_title: "Test the speed of our AI",
    demo_desc: "We have configured an AI assistant to answer your initial questions instantly. Ask questions about development timelines, data security, or integrations.",
    demo_btn: "Request Custom Demo",
    chat_bot_name: "Tifty AI Core",
    chat_bot_status: "Online and active",
    chat_welcome: "Hello! I am the Tifty AI smart assistant. How can I help you today regarding AI implementation and process automation for your business?",
    chat_input_placeholder: "Ask about integrations, prices or timelines...",
    
    // Contact
    contact_label: "Take the first step",
    contact_title: "Ready to automate your business?",
    contact_subtitle: "Schedule a free 30-minute technical audit. We will analyze your current workflows and identify where AI can save you the most time and money.",
    contact_email_title: "Direct Email",
    
    form_name_label: "Full Name",
    form_name_placeholder: "Write your name",
    form_company_label: "Company / Business",
    form_company_placeholder: "Your company name",
    form_email_label: "Corporate Email Address",
    form_email_placeholder: "you@company.com",
    form_challenge_label: "Main Current Challenge",
    form_challenge_placeholder: "Select your challenge",
    form_challenge_1: "Automate customer support (chat/voice)",
    form_challenge_2: "Reduce repetitive operational costs",
    form_challenge_3: "Scale sales without scaling team",
    form_challenge_4: "Automate document processing",
    form_challenge_5: "Integrate AI into existing systems (CRM/ERP)",
    form_challenge_6: "Other specific challenge",
    form_submit_audit: "Request Free Audit",
    form_sending_audit: "Sending request...",
    form_error_name: "Please enter your full name",
    form_error_company: "Please enter your company name",
    form_error_email: "Please enter a valid email address",
    form_error_challenge: "Please select your main challenge",
    form_error_network: "Connection error. Please try again.",
    form_success_audit_title: "Audit Requested Successfully!",
    form_success_audit_desc: "Our team will analyze your case and a senior consultant will get in touch with you within the next 12 hours to schedule your personalized audit.",
    form_submit: "Submit Request",
    form_sending: "Sending Request...",
    form_success_title: "Request Received!",
    form_success_desc: "A senior Tifty AI consultant will get in touch with you within the next 12 hours to schedule your call.",
    
    // Footer
    footer_brand_desc: "Professional artificial intelligence implementation at scale for market-leading companies.",
    footer_nav: "Navigation",
    footer_legal: "Legal",
    footer_terms: "Terms of Service",
    footer_privacy: "Privacy Policy",
    footer_security: "Data Security",
    footer_rights: "&copy; 2026 Tifty AI. All rights reserved."
  },
  pl: {
    // Navbar
    nav_solutions: "Rozwiązania",
    nav_benefits: "Korzyści",
    nav_demo: "Interaktywna Demo",
    nav_contact: "Kontakt",
    nav_btn: "Bezpłatny Audyt",
    
    // Hero
    hero_badge: "Agencja Wdrażania AI",
    hero_title: "Era <br><span class='gradient-text'>Autonomii Korporacyjnej</span>",
    hero_desc: "Projektujemy i wdrażamy spersonalizowaną infrastrukturę Sztucznej Inteligencji dla wiodących przedsiębiorstw. Od hiperrealistycznych Agentów Głosowych po zaawansowane Chatboty i kognitywną automatyzację procesów. Zdefiniuj na nowo produktywność i skaluj się bez barier.",
    hero_btn_primary: "Zarezerwuj Bezpłatny Audyt",
    hero_btn_secondary: "Odkryj Rozwiązania",
    
    // Metrics
    metric_1_label: "Wydajność operacyjna w powtarzalnych procesach",
    metric_2_label: "Czas pierwszej odpowiedzi dla klienta",
    metric_3_label: "Autonomiczne wsparcie i zamykanie sprzedaży",
    
    // Services
    services_label: "Nasze Rozwiązania",
    services_title: "Infrastruktura Kognitywna",
    services_subtitle: "Wdrażamy zaawansowane systemy AI gotowe do integracji z Twoim obecnym ekosystemem technologicznym w celu transformacji pracy.",
    
    service_1_title: "Inteligentne Chatboty",
    service_1_desc: "Kognitywni agenci czatu z pamięcią długoterminową i głębokim zrozumieniem kontekstu. Automatyzują wsparcie, kwalifikują leady i prowadzą klientów do konwersji.",
    service_1_feat_1: "Integracja z systemami CRM i bazami danych",
    service_1_feat_2: "Wielomodalne rozumienie intencji",
    service_1_feat_3: "Obsługa klienta w wielu językach 24/7",
    
    service_2_title: "Agenci Głosowi (Voice AI)",
    service_2_desc: "Autonomiczni agenci telefoniczni o ultra niskim opóźnieniu, naturalnej intonacji i empatii konwersacyjnej. Zdolni do naturalnego wykonywania i odbierania połączeń.",
    service_2_feat_1: "Rezerwacja spotkań i terminów w czasie rzeczywistym",
    service_2_feat_2: "Spersonalizowane ludzkie głosy bez robotycznego akcentu",
    service_2_feat_3: "Inteligentne przekazywanie połączeń do ludzi",
    
    service_3_title: "Automatyzacja Procesów",
    service_3_desc: "Łączenie narzędzi i logiki za pomocą autonomicznej AI. Automatyzujemy złożone przepływy zadań, od analizy dokumentów i faktur po odpowiedzi na e-maile i raportowanie.",
    service_3_feat_1: "Inteligentne odczytywanie faktur i plików PDF",
    service_3_feat_2: "Automatyczna synchronizacja między systemami",
    service_3_feat_3: "Kognitywne podejmowanie decyzji i monitorowanie",
    
    // Benefits
    benefits_label: "Dlaczego Tifty AI?",
    benefits_title: "Namacalne Rezultaty, a nie Obietnice",
    benefits_left_title: "Zwrot z Inwestycji w AI",
    benefits_left_desc: "Firmy wdrażające autonomicznych agentów sztucznej inteligencji zgłaszają przyspieszony wzrost bez konieczności proporcjonalnego skalowania zespołów wsparcia czy operacyjnych.",
    benefits_left_cost: "Koszt Operacyjny",
    benefits_left_volume: "Wolumen Obsługi",
    benefits_left_time: "Czas Integracji",
    benefits_left_weeks: "3-4 Tygodnie",
    
    benefit_1_title: "Kluczowe Oszczędności Kosztów",
    benefit_1_desc: "Redukujemy wydatki związane z powtarzalnymi operacjami o niskiej wartości, pozwalając Twoim pracownikom skupić się na strategii i innowacjach.",
    benefit_2_title: "Wykładnicza Skalowalność",
    benefit_2_desc: "Obsługuj jednocześnie tysiące czatów lub połączeń głosowych bez czekania, bez przestojów i z zachowaniem spójnego głosu marki.",
    benefit_3_title: "Bezproblemowa Integracja",
    benefit_3_desc: "Projektujemy systemy, które idealnie pasują do narzędzi, z których już korzystasz, takich jak Salesforce, HubSpot, Slack czy własne systemy ERP, zapewniając płynne przejście.",
    
    // Demo
    demo_label: "Interaktywna Demo",
    demo_title: "Przetestuj szybkość naszej AI",
    demo_desc: "Skonfigurowaliśmy asystenta AI, aby natychmiast odpowiadał na Twoje wstępne pytania. Zapytaj o czas wdrożenia, bezpieczeństwo danych lub integracje.",
    demo_btn: "Poproś o Spersonalizowaną Demo",
    chat_bot_name: "Tifty AI Core",
    chat_bot_status: "Online i aktywny",
    chat_welcome: "Cześć! Jestem inteligentnym asystentem Tifty AI. W czym mogę Ci dzisiaj pomóc w kwestii wdrożenia AI i automatyzacji procesów w Twojej firmie?",
    chat_input_placeholder: "Zapytaj o integracje, ceny lub terminy...",
    
    // Contact
    contact_label: "Zrób pierwszy krok",
    contact_title: "Gotowy na automatyzację biznesu?",
    contact_subtitle: "Umów się na bezpłatny 30-minutowy audyt techniczny. Przeanalizujemy Twoje obecne procesy i wskażemy, gdzie AI może zaoszczędzić najwięcej czasu i pieniędzy.",
    contact_email_title: "Bezpośredni E-mail",
    
    form_name_label: "Imię i Nazwisko",
    form_name_placeholder: "Wpisz swoje imię",
    form_company_label: "Firma / Biznes",
    form_company_placeholder: "Nazwa Twojej firmy",
    form_email_label: "Służbowy Adres E-mail",
    form_email_placeholder: "ty@firma.com",
    form_challenge_label: "Główne Obecne Wyzwanie",
    form_challenge_placeholder: "Wybierz swoje wyzwanie",
    form_challenge_1: "Automatyzacja obsługi klienta (czat/głos)",
    form_challenge_2: "Redukcja powtarzalnych kosztów operacyjnych",
    form_challenge_3: "Skalowanie sprzedaży bez zwiększania zespołu",
    form_challenge_4: "Automatyzacja przetwarzania dokumentów",
    form_challenge_5: "Integracja AI z istniejącymi systemami (CRM/ERP)",
    form_challenge_6: "Inne konkretne wyzwanie",
    form_submit_audit: "Poproś o Bezpłatny Audyt",
    form_sending_audit: "Wysyłanie zgłoszenia...",
    form_error_name: "Proszę podać swoje imię i nazwisko",
    form_error_company: "Proszę podać nazwę firmy",
    form_error_email: "Proszę podać prawidłowy adres e-mail",
    form_error_challenge: "Proszę wybrać główne wyzwanie",
    form_error_network: "Błąd połączenia. Spróbuj ponownie.",
    form_success_audit_title: "Audyt Zamówiony Pomyślnie!",
    form_success_audit_desc: "Nasz zespół przeanalizuje Twój przypadek i starszy konsultant skontaktuje się z Tobą w ciągu najbliższych 12 godzin, aby umówić spersonalizowany audyt.",
    form_submit: "Wyślij Zgłoszenie",
    form_sending: "Wysyłanie zgłoszenia...",
    form_success_title: "Zgłoszenie Otrzymane!",
    form_success_desc: "Starszy konsultant Tifty AI skontaktuje się z Tobą w ciągu najbliższych 12 godzin w celu umówienia rozmowy.",
    
    // Footer
    footer_brand_desc: "Profesjonalne wdrażanie sztucznej inteligencji na dużą skalę dla firm będących liderami rynku.",
    footer_nav: "Nawigacja",
    footer_legal: "Kwestie Prawne",
    footer_terms: "Warunki Świadczenia Usług",
    footer_privacy: "Polityka Prywatności",
    footer_security: "Bezpieczeństwo Danych",
    footer_rights: "&copy; 2026 Tifty AI. Wszelkie prawa zastrzeżone."
  }
};
