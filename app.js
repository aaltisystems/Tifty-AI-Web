// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

let currentLang = localStorage.getItem("preferred_lang") || "es";

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initCustomCursor();
    initInteractiveCards();
    initGsapAnimations();
    initChatSimulator();
    initContactForm();
    initPulseBeams();
    initFloatingCta();
    initTranslation();
});

/* --------------------------------------------------------------------------
   NAVBAR LOGIC
   -------------------------------------------------------------------------- */
function initNavbar() {
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // Scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Mobile burger menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Burger animation
        const spans = menuToggle.querySelectorAll("span");
        spans[0].style.transform = navLinks.classList.contains("active") ? "rotate(45deg) translate(5px, 5px)" : "none";
        spans[1].style.opacity = navLinks.classList.contains("active") ? "0" : "1";
        spans[2].style.transform = navLinks.classList.contains("active") ? "rotate(-45deg) translate(6px, -6px)" : "none";
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const spans = menuToggle.querySelectorAll("span");
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
        });
    });
}

/* --------------------------------------------------------------------------
   CUSTOM CURSOR
   -------------------------------------------------------------------------- */
function initCustomCursor() {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // Follow mouse
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });

    // Smooth ring interpolation (lerp)
    function animateRing() {
        // Calculate difference
        const dx = mouseX - ringX;
        const dy = mouseY - ringY;
        
        // Lerp factor (speed)
        ringX += dx * 0.15;
        ringY += dy * 0.15;
        
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effects on buttons, inputs and links
    const hoverElements = document.querySelectorAll("a, button, input, textarea, .service-card, .metric-card, .chat-send-btn, .floating-cta");
    hoverElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            document.body.classList.add("custom-cursor-hover");
        });
        el.addEventListener("mouseleave", () => {
            document.body.classList.remove("custom-cursor-hover");
        });
    });

    // Hide cursor when leaving window
    document.addEventListener("mouseleave", () => {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
    });
}

/* --------------------------------------------------------------------------
   INTERACTIVE CARDS (Spotlight illumination follow mouse)
   -------------------------------------------------------------------------- */
function initInteractiveCards() {
    const cards = document.querySelectorAll(".service-card, .metric-card, .benefits-card-float");
    
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });

    // 3D Perspective tilt for Benefits Float Card
    const floatCard = document.getElementById("float-card");
    if (floatCard) {
        floatCard.addEventListener("mousemove", (e) => {
            const rect = floatCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate tilt angle (max 10 degrees)
            const rotateX = ((centerY - y) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            floatCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        floatCard.addEventListener("mouseleave", () => {
            floatCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    }
}

/* --------------------------------------------------------------------------
   GSAP ANIMATIONS & SCROLL TRIGGERS
   -------------------------------------------------------------------------- */
function initGsapAnimations() {
    // 1. Hero Video scale and opacity scroll-linked fade out
    gsap.to("#hero-video-wrapper", {
        scale: 0.85,
        opacity: 0.05,
        ease: "none",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // 2. Fade-in up for standard reveal items
    const revealItems = gsap.utils.toArray(".reveal-item");
    revealItems.forEach(item => {
        gsap.from(item, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none none"
            }
        });
    });

    // 3. Numbers Counter Animation
    const metricNumbers = gsap.utils.toArray(".metric-number");
    metricNumbers.forEach(num => {
        const fullText = num.innerText;
        const targetVal = parseFloat(num.getAttribute("data-target"));
        
        // Determine structure
        const isPercentage = fullText.includes("%");
        const isRatio = fullText.includes("/7");
        const isPlus = fullText.startsWith("+");
        
        const countObj = { val: 0 };
        
        gsap.to(countObj, {
            val: targetVal,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: num,
                start: "top 90%"
            },
            onUpdate: () => {
                let roundedVal = Math.floor(countObj.val);
                if (isRatio) {
                    num.innerText = `${roundedVal}/7`;
                } else if (isPercentage) {
                    num.innerText = `${isPlus ? '+' : ''}${roundedVal}%`;
                } else {
                    num.innerText = `${isPlus ? '+' : ''}${roundedVal}`;
                }
            },
            onComplete: () => {
                num.innerText = fullText; // Ensure exact final text
            }
        });
    });
}

/* --------------------------------------------------------------------------
   INTERACTIVE CHAT SIMULATOR (TIFTY AI CORE)
   -------------------------------------------------------------------------- */
function initChatSimulator() {
    const chatBody = document.getElementById("chat-body");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");

    if (!chatForm || !chatInput || !chatBody) return;

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        // 1. Add User Message
        appendMessage(text, "user");
        chatInput.value = "";

        // 2. Scroll to bottom
        scrollToBottom();

        // 3. Show typing indicator
        const typing = showTypingIndicator();
        scrollToBottom();

        // 4. Simulate thinking and respond
        setTimeout(() => {
            typing.remove();
            const botResponse = getBotResponse(text);
            appendMessage(botResponse, "bot");
            scrollToBottom();
        }, 1200);
    });

    function appendMessage(text, sender) {
        const msg = document.createElement("div");
        msg.classList.add("chat-message", sender === "user" ? "message-user" : "message-bot");
        msg.innerText = text;
        chatBody.appendChild(msg);
    }

    function showTypingIndicator() {
        const ind = document.createElement("div");
        ind.classList.add("typing-indicator");
        ind.innerHTML = "<span></span><span></span><span></span>";
        chatBody.appendChild(ind);
        return ind;
    }

    function scrollToBottom() {
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(input) {
        const query = input.toLowerCase();

        if (currentLang === "en") {
            if (query.includes("price") || query.includes("cost") || query.includes("rates") || query.includes("budget") || query.includes("cuesta") || query.includes("precio")) {
                return "The cost of implementation varies based on complexity and channels. A typical advanced Chatbot starts from $1,200 USD, and custom Voice AI agents from $2,500 USD. However, the ROI is usually recovered in under 45 days by replacing repetitive manual tasks. Would you like to get a quote for your specific case?";
            }
            if (query.includes("time") || query.includes("weeks") || query.includes("duration") || query.includes("long") || query.includes("timeline") || query.includes("deadline")) {
                return "Our typical implementations take between 3 and 5 weeks. This includes the initial consultation, conversational flow design, API integrations with your CRM/ERP, and strict latency testing to ensure response times are under 800ms.";
            }
            if (query.includes("security") || query.includes("safe") || query.includes("data") || query.includes("privacy") || query.includes("secure") || query.includes("gdpr")) {
                return "Confidentiality and safety are our priorities. We connect all models using SSL encryption and comply with GDPR and local data protection regulations. Your business data is stored in isolated environments and is never used to train public models.";
            }
            if (query.includes("integration") || query.includes("integrate") || query.includes("crm") || query.includes("connect") || query.includes("whatsapp") || query.includes("api") || query.includes("salesforce")) {
                return "We connect seamlessly with your current software stack. We automate workflows on Salesforce, HubSpot, Slack, WhatsApp Business, Gmail, SQL databases, and custom APIs. The AI acts as an employee with controlled access credentials.";
            }
            if (query.includes("hello") || query.includes("hi") || query.includes("morning") || query.includes("afternoon") || query.includes("hey") || query.includes("hola")) {
                return "Hello! Great to meet you. I'm ready to answer any questions about our custom voice and text AI agents, or how we can automate your operations. What would you like to know?";
            }
            if (query.includes("voice") || query.includes("call") || query.includes("phone") || query.includes("calls") || query.includes("voz")) {
                return "Our Voice AI agents are designed for both inbound and outbound calls. They feature hyper-realistic voice cloning, sub-800ms latency to avoid awkward interruptions, and the ability to book meetings or update databases live during the call.";
            }
            return "That's a great question. At Tifty AI, we design custom systems to fit your specific operations. To give you exact technical details, I suggest scheduling a free 30-minute consultation using the contact form below.";
        } else if (currentLang === "pl") {
            if (query.includes("cena") || query.includes("koszt") || query.includes("cennik") || query.includes("budzet") || query.includes("oplaty") || query.includes("precio")) {
                return "Koszt wdrożenia zależy od stopnia złożoności. Zaawansowany Chatbot zazwyczaj zaczyna się od 1200 USD, a dedykowani agenci głosowi od 2500 USD. Jednak zwrot z inwestycji (ROI) jest zazwyczaj widoczny w ciągu pierwszych 45 dni dzięki zastąpieniu powtarzalnych zadań. Czy chciałbyś otrzymać wycenę dla swojej firmy?";
            }
            if (query.includes("czas") || query.includes("tygodnie") || query.includes("termin") || query.includes("ile trwa") || query.includes("tiempo")) {
                return "Nasze wdrożenia trwają zazwyczaj od 3 do 5 tygodni. Obejmuje to: konsultację wstępną, projektowanie ścieżek kognitywnych, integrację API z Twoim CRM/ERP oraz rygorystyczne testy opóźnień w celu zapewnienia płynnych wypowiedzi.";
            }
            if (query.includes("bezpieczenstwo") || query.includes("dane") || query.includes("prywatnosc") || query.includes("bezpieczny") || query.includes("rodo") || query.includes("seguridad")) {
                return "Bezpieczeństwo i poufność są naszym priorytetem. Łączymy modele za pomocą szyfrowania SSL i w pełni przestrzegamy regulacji RODO. Dane Twoich klientów są przechowywane w odizolowanych środowiskach i nigdy nie są używane do trenowania zewnętrznych modeli.";
            }
            if (query.includes("integracja") || query.includes("integrowac") || query.includes("crm") || query.includes("polaczyc") || query.includes("whatsapp") || query.includes("api") || query.includes("integracion")) {
                return "Łączymy się płynnie z Twoim obecnym stosem technologicznym. Automatyzujemy zadania w Salesforce, HubSpot, Slack, WhatsApp Business, Gmail, bazach danych SQL i systemach ERP. AI działa jak pracownik ze zdefiniowanymi uprawnieniami.";
            }
            if (query.includes("czesc") || query.includes("dzien dobry") || query.includes("witam") || query.includes("siema") || query.includes("hola")) {
                return "Cześć! Miło Cię widzieć. Chętnie odpowiem na wszelkie pytania dotyczące naszych agentów tekstowych i głosowych oraz tego, jak możemy zautomatyzować Twoje procesy biznesowe. O co chciałbyś zapytać?";
            }
            if (query.includes("glos") || query.includes("telefon") || query.includes("rozmowa") || query.includes("polaczenie") || query.includes("voice") || query.includes("voz")) {
                return "Nasi Agenci Głosowi (Voice AI) obsługują połączenia przychodzące i wychodzące. Posiadają ultrarealistyczne klonowanie ludzkiego głosu, opóźnienie poniżej 800ms eliminujące pauzy oraz możliwość rezerwacji spotkań w kalendarzu na żywo podczas rozmowy.";
            }
            return "To świetne pytanie. W Tifty AI projektujemy rozwiązania dopasowane do Twoich potrzeb operacyjnych. Aby omówić szczegóły techniczne, sugeruję rezerwację bezpłatnego 30-minutowego audytu przy użyciu formularza kontaktowego poniżej.";
        } else {
            if (query.includes("precio") || query.includes("costo") || query.includes("cuesta") || query.includes("tarifa") || query.includes("presupuesto")) {
                return "El coste de implementación varía según la complejidad y canales. Un Chatbot avanzado suele comenzar desde $1,200 USD, y los Agentes de Voz avanzados desde $2,500 USD. Sin embargo, el ROI se recupera típicamente en menos de 45 días al sustituir costos repetitivos. ¿Te gustaría cotizar tu caso específico?";
            }
            if (query.includes("tiempo") || query.includes("tarda") || query.includes("plazo") || query.includes("duracion") || query.includes("semanas")) {
                return "Nuestras implementaciones duran normalmente entre 3 y 5 semanas. Esto incluye: consultoría inicial, diseño de flujos cognitivos, integraciones de APIs con tu CRM/ERP, y pruebas de latencia para garantizar respuestas ultra rápidas y naturales.";
            }
            if (query.includes("seguridad") || query.includes("datos") || query.includes("privacidad") || query.includes("seguro")) {
                return "La confidencialidad es crítica. Conectamos los modelos usando encriptación SSL de grado bancario y cumplimos con GDPR y regulaciones locales. Los datos de tus clientes nunca se usan para entrenar modelos públicos externos.";
            }
            if (query.includes("integracion") || query.includes("integrar") || query.includes("crm") || query.includes("conectar") || query.includes("whatsapp") || query.includes("api")) {
                return "Nos conectamos de forma transparente a cualquier stack técnico. Automatizamos flujos sobre HubSpot, Salesforce, Slack, WhatsApp Business, Gmail, bases de datos SQL, ERPs locales y APIs propietarias. La IA trabajará como un miembro más con accesos controlados.";
            }
            if (query.includes("hola") || query.includes("buenos dias") || query.includes("buenas tardes") || query.includes("saludos")) {
                return "¡Hola! Un placer saludarte. Estoy listo para contestar cualquier pregunta sobre nuestros agentes conversacionales de voz y texto, o sobre cómo podemos automatizar tus procesos corporativos. ¿Qué te gustaría saber?";
            }
            if (query.includes("voice") || query.includes("voz") || query.includes("telefono") || query.includes("llamada")) {
                return "Nuestros Agentes de Voz (Voice AI) están diseñados para llamadas entrantes y salientes. Cuentan con clonación de voz humana ultra realista, latencia inferior a 800ms para evitar interrupciones y la capacidad de agendar citas o actualizar tu base de datos en plena llamada.";
            }
            return "Es una gran pregunta. En Tifty AI estructuramos cada solución para que encaje a la perfección con tu flujo operativo. Para darte detalles técnicos exactos, te aconsejo agendar nuestra auditoría gratuita de 30 minutos rellenando el formulario de contacto que verás aquí abajo.";
        }
    }
}

/* --------------------------------------------------------------------------
   CONTACT FORM LOGIC
   -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById("contact-form");
    const successScreen = document.getElementById("form-success");
    const submitBtn = document.getElementById("form-submit-btn");
    const formError = document.getElementById("form-error");
    const formErrorText = document.getElementById("form-error-text");

    if (!form || !successScreen || !submitBtn) return;

    // Webhook URL from environment config
    const WEBHOOK_URL = window.__ENV__?.WEBHOOK_URL || "";

    /* ----- Email Validation ----- */
    function validateEmail(email) {
        // RFC 5322 simplified regex
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(email)) return false;

        // Must have at least one dot in domain (e.g., user@domain.com)
        const domain = email.split("@")[1];
        if (!domain || !domain.includes(".")) return false;

        // Block common disposable email domains
        const disposableDomains = [
            "mailinator.com", "guerrillamail.com", "tempmail.com", "throwaway.email",
            "yopmail.com", "10minutemail.com", "trashmail.com", "fakeinbox.com",
            "sharklasers.com", "guerrillamailblock.com", "grr.la", "dispostable.com"
        ];
        if (disposableDomains.includes(domain.toLowerCase())) return false;

        return true;
    }

    /* ----- Form Validation ----- */
    function validateForm(data) {
        const errors = {};
        const t = translations[currentLang] || translations["es"];

        if (!data.name || data.name.trim().length < 2) {
            errors.name = t.form_error_name || "Por favor, ingresa tu nombre completo";
        }
        if (!data.company || data.company.trim().length < 2) {
            errors.company = t.form_error_company || "Por favor, ingresa el nombre de tu empresa";
        }
        if (!data.email || !validateEmail(data.email)) {
            errors.email = t.form_error_email || "Por favor, ingresa un correo electrónico válido";
        }
        if (!data.challenge) {
            errors.challenge = t.form_error_challenge || "Por favor, selecciona tu principal desafío";
        }

        return {
            valid: Object.keys(errors).length === 0,
            errors
        };
    }

    /* ----- Error Display Helpers ----- */
    function showFieldError(fieldId, message) {
        const group = document.getElementById(`form-group-${fieldId}`);
        const errorEl = document.getElementById(`error-${fieldId}`);
        if (group) group.classList.add("error");
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add("visible");
        }
    }

    function clearFieldErrors() {
        const groups = form.querySelectorAll(".form-group");
        groups.forEach(g => g.classList.remove("error"));
        const errorEls = form.querySelectorAll(".form-field-error");
        errorEls.forEach(el => {
            el.textContent = "";
            el.classList.remove("visible");
        });
    }

    function showFormError(message) {
        if (formError && formErrorText) {
            formErrorText.textContent = message;
            formError.classList.add("visible");
        }
    }

    function hideFormError() {
        if (formError) {
            formError.classList.remove("visible");
            if (formErrorText) formErrorText.textContent = "";
        }
    }

    /* ----- Loading State ----- */
    function setLoadingState(loading) {
        const btnText = submitBtn.querySelector(".form-btn-text");
        const t = translations[currentLang] || translations["es"];

        if (loading) {
            submitBtn.disabled = true;
            submitBtn.classList.add("loading");
            if (btnText) btnText.textContent = t.form_sending_audit || "Enviando solicitud...";
        } else {
            submitBtn.disabled = false;
            submitBtn.classList.remove("loading");
            if (btnText) btnText.textContent = t.form_submit_audit || "Solicitar Auditoría Gratis";
        }
    }

    /* ----- Webhook Submission ----- */
    async function submitToWebhook(data) {
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return response;
    }

    /* ----- Clear field error on interaction ----- */
    ["name", "company", "email"].forEach(fieldId => {
        const input = document.getElementById(fieldId);
        if (input) {
            input.addEventListener("input", () => {
                const group = document.getElementById(`form-group-${fieldId}`);
                const errorEl = document.getElementById(`error-${fieldId}`);
                if (group) group.classList.remove("error");
                if (errorEl) errorEl.classList.remove("visible");
            });
        }
    });

    const challengeSelect = document.getElementById("challenge");
    if (challengeSelect) {
        challengeSelect.addEventListener("change", () => {
            const group = document.getElementById("form-group-challenge");
            const errorEl = document.getElementById("error-challenge");
            if (group) group.classList.remove("error");
            if (errorEl) errorEl.classList.remove("visible");
        });
    }

    /* ----- Form Submit Handler ----- */
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // 1. Clear previous errors
        clearFieldErrors();
        hideFormError();

        // 2. Gather form data
        const formData = {
            name: document.getElementById("name")?.value?.trim() || "",
            company: document.getElementById("company")?.value?.trim() || "",
            email: document.getElementById("email")?.value?.trim() || "",
            challenge: document.getElementById("challenge")?.value || "",
            language: currentLang,
            timestamp: new Date().toISOString(),
            source: "tiftyai-website-audit-form"
        };

        // 3. Validate
        const validation = validateForm(formData);
        if (!validation.valid) {
            Object.entries(validation.errors).forEach(([field, message]) => {
                showFieldError(field, message);
            });
            return;
        }

        // 4. Set loading state
        setLoadingState(true);

        // 5. Submit to webhook
        try {
            if (!WEBHOOK_URL || WEBHOOK_URL.includes("your-webhook-url.example.com")) {
                // Simulate success when no real webhook is configured (development mode)
                console.warn("[Tifty AI] No webhook URL configured. Simulating success. Data:", formData);
                await new Promise(resolve => setTimeout(resolve, 1500));
            } else {
                await submitToWebhook(formData);
            }

            // 6. Success — show success screen
            successScreen.style.display = "flex";
            form.reset();

        } catch (error) {
            console.error("[Tifty AI] Webhook submission failed:", error);
            const t = translations[currentLang] || translations["es"];
            showFormError(t.form_error_network || "Error de conexión. Por favor, inténtalo de nuevo.");
        } finally {
            // 7. Reset loading state
            setLoadingState(false);
        }
    });
}


/* --------------------------------------------------------------------------
   PULSE BEAMS SVG GRADIENT ANIMATION
   -------------------------------------------------------------------------- */
function initPulseBeams() {
    const beams = [
        {
            id: "#hero-grad-0",
            keyframes: [
                { attr: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" }, duration: 0 },
                { attr: { x1: "0%", x2: "0%", y1: "0%", y2: "20%" }, duration: 1, ease: "none" },
                { attr: { x1: "200%", x2: "180%", y1: "0%", y2: "20%" }, duration: 1, ease: "none" }
            ],
            delay: Math.random() * 2
        },
        {
            id: "#hero-grad-1",
            keyframes: [
                { attr: { x1: "20%", x2: "0%", y1: "80%", y2: "100%" }, duration: 0 },
                { attr: { x1: "100%", x2: "90%", y1: "80%", y2: "100%" }, duration: 1, ease: "none" },
                { attr: { x1: "100%", x2: "90%", y1: "-20%", y2: "0%" }, duration: 1, ease: "none" }
            ],
            delay: Math.random() * 2
        },
        {
            id: "#hero-grad-2",
            keyframes: [
                { attr: { x1: "20%", x2: "0%", y1: "80%", y2: "100%" }, duration: 0 },
                { attr: { x1: "100%", x2: "90%", y1: "80%", y2: "100%" }, duration: 1, ease: "none" },
                { attr: { x1: "100%", x2: "90%", y1: "-20%", y2: "0%" }, duration: 1, ease: "none" }
            ],
            delay: Math.random() * 2
        },
        {
            id: "#hero-grad-3",
            keyframes: [
                { attr: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" }, duration: 0 },
                { attr: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" }, duration: 2, ease: "none" }
            ],
            delay: Math.random() * 2
        },
        {
            id: "#hero-grad-4",
            keyframes: [
                { attr: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" }, duration: 0 },
                { attr: { x1: "40%", x2: "10%", y1: "0%", y2: "20%" }, duration: 1, ease: "none" },
                { attr: { x1: "0%", x2: "0%", y1: "180%", y2: "200%" }, duration: 1, ease: "none" }
            ],
            delay: Math.random() * 2
        }
    ];

    beams.forEach(beam => {
        // Create repeating timeline
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, delay: beam.delay });
        
        beam.keyframes.forEach((kf, idx) => {
            if (idx === 0) {
                tl.set(beam.id, kf.attr);
            } else {
                tl.to(beam.id, {
                    attr: kf.attr,
                    duration: kf.duration,
                    ease: kf.ease
                });
            }
        });
    });
}

/* --------------------------------------------------------------------------
   FLOATING CTA LOGIC
   -------------------------------------------------------------------------- */
function initFloatingCta() {
    const cta = document.getElementById("floating-cta");
    if (!cta) return;
    
    gsap.to(cta, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: "#hero",
            start: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });
}

/* --------------------------------------------------------------------------
   TRANSLATION CONTROL (i18n)
   -------------------------------------------------------------------------- */
function initTranslation() {
    const langSelector = document.getElementById("lang-selector");
    if (!langSelector) return;

    const langBtns = langSelector.querySelectorAll(".lang-btn");

    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            changeLanguage(lang);
        });
    });

    // Apply stored language on load
    changeLanguage(currentLang);
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("preferred_lang", lang);

    // 1. Update elements with data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 2. Update placeholders with data-i18n-placeholder
    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute("placeholder", translations[lang][key]);
        }
    });

    // 3. Update active states on buttons
    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // 4. Update Chatbot welcome message if chat-body only contains original welcome message
    const chatBody = document.getElementById("chat-body");
    if (chatBody) {
        // If there is only one message (the bot welcome), translate it
        const messages = chatBody.querySelectorAll(".chat-message");
        if (messages.length === 1 && messages[0].classList.contains("message-bot")) {
            messages[0].innerText = translations[lang]["chat_welcome"];
        }
    }
}
