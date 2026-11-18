// Portfolio Data & Interactions for Myesha Farjana Oishi

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initPortfolioFilter();
  initAIChat();
  initContactForm();
  initCVModal();
});

/* ==========================================================
   1. MOBILE MENU TOGGLE
   ========================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

/* ==========================================================
   2. PORTFOLIO FILTERING
   ========================================================== */
function initPortfolioFilter() {
  const tabs = document.querySelectorAll('.portfolio-tab');
  const items = document.querySelectorAll('.project-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Set active tab styling
      tabs.forEach(t => {
        t.classList.remove('bg-brandGreen', 'text-white');
        t.classList.add('bg-gray-100', 'text-gray-700');
      });
      tab.classList.remove('bg-gray-100', 'text-gray-700');
      tab.classList.add('bg-brandGreen', 'text-white');

      const filter = tab.getAttribute('data-filter');

      items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'flex';
          item.classList.add('animate-fadeIn');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================
   3. PROJECT CASE STUDY MODAL
   ========================================================== */
const projectData = {
  finflow: {
    title: "FinFlow Mobile Banking",
    category: "Fintech · Mobile UI/UX",
    image: "assets/projects/finflow.jpg",
    desc: "FinFlow is a next-generation mobile banking app built for young professionals and digital nomads. It combines fast peer-to-peer transfers, virtual card generation, and real-time expense analytics into a clean, minimalist user interface.",
    contributions: [
      "Conducted 12 user interviews to identify common friction points in bank onboarding.",
      "Designed an intuitive 3-step KYC verification workflow with 98% completion rate.",
      "Engineered an end-to-end Figma design system containing 240+ components with dark and light modes.",
      "Collaborated with developers via Zeplin and Figma inspect tools for exact layout implementation."
    ],
    tags: ["Figma", "iOS / Android", "FinTech", "Design System"]
  },
  aura: {
    title: "Aura Telehealth Portal",
    category: "HealthTech · Patient & Doctor Dashboard",
    image: "assets/projects/aura-health.jpg",
    desc: "Aura is a dual-sided digital healthcare platform connecting remote patients with medical specialists. It features instant video appointments, prescription tracking, and intuitive vital signs telemetry charts.",
    contributions: [
      "Created accessibility-tested UI components conforming to WCAG 2.1 AAA contrast standards.",
      "Streamlined EHR (Electronic Health Record) dashboard for doctors to review lab results in under 30 seconds.",
      "Prototyped interactive calendar booking and automated reminder push notification states.",
      "Designed secure patient portal for HIPAA-compliant medical records management."
    ],
    tags: ["Figma", "Telehealth", "Dashboard", "Accessibility"]
  },
  nexus: {
    title: "Nexus Gemini AI Studio",
    category: "AI Workspace · Multimodal SaaS",
    image: "assets/projects/nexus-ai.jpg",
    desc: "Nexus AI is an innovative workspace that integrates Google's Gemini models for product managers and UI designers. It enables prompt chaining, multimodal visual ideation, and automated wireframe layout generation.",
    contributions: [
      "Designed human-in-the-loop AI interaction patterns and conversational copilot UI.",
      "Developed infinite canvas interface allowing side-by-side prompt iterations and image generation.",
      "Created token usage indicators, latency feedback states, and editable AI output cards.",
      "Delivered complete responsive SaaS component set for desktop, tablet, and mobile views."
    ],
    tags: ["Gemini AI", "Canvas UI", "Prompt Engineering", "SaaS"]
  },
  zenith: {
    title: "Zenith Digital Agency",
    category: "Brand Identity · Creative Web Design",
    image: "assets/projects/zenith-agency.jpg",
    desc: "A bespoke website for a modern digital product studio. The design balances bold typography, subtle scroll animations, and interactive client showcases to maximize inbound inquiries.",
    contributions: [
      "Designed unique branding guidelines, spatial grid, and color harmonies.",
      "Created responsive layouts optimized for ultra-fast load times and high conversions.",
      "Crafted custom vector illustrations and animated icon sets.",
      "Increased user time-on-page by 48% through interactive case study carousels."
    ],
    tags: ["Web Design", "Tailwind CSS", "Branding", "Micro-Interactions"]
  },
  cloudpulse: {
    title: "CloudPulse Infrastructure Dashboard",
    category: "B2B SaaS · Telemetry & Observability",
    image: "assets/projects/cloudpulse.jpg",
    desc: "An enterprise monitoring dashboard designed for DevOps engineers. CloudPulse simplifies cloud server fleet observability, CPU/Memory telemetry, incident alerts, and network bottlenecks.",
    contributions: [
      "Designed dense data visualization graphs, heatmaps, and customizable widget grids.",
      "Created rapid-response alert modals and severity triage filters.",
      "Designed dark-first UI optimized for multi-monitor NOC displays.",
      "Reduced incident identification time by 35% based on usability tests."
    ],
    tags: ["Data Viz", "DevOps UI", "Figma", "Enterprise SaaS"]
  },
  saffron: {
    title: "Saffron Bites Food Delivery",
    category: "E-Commerce · Mobile App UX",
    image: "assets/projects/saffron-bites.jpg",
    desc: "A food ordering mobile app celebrating South Asian cuisine. It emphasizes mouth-watering imagery, live order tracking, recipe customization, and one-tap checkout.",
    contributions: [
      "Mapped user journeys from restaurant discovery to door delivery.",
      "Designed a gamified rewards system and visual meal customizer.",
      "Prototyped live GPS rider tracking screen with micro-animations.",
      "Conducted A/B testing on checkout flow, raising conversion by 22%."
    ],
    tags: ["Mobile UX", "E-Commerce", "Prototyping", "Animation"]
  }
};

window.openProjectModal = function(id) {
  const modal = document.getElementById('project-modal');
  const project = projectData[id];
  if (!modal || !project) return;

  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-category').textContent = project.category;
  document.getElementById('modal-image').src = project.image;
  document.getElementById('modal-image').alt = project.title;
  document.getElementById('modal-desc').textContent = project.desc;

  const contribList = document.getElementById('modal-contributions');
  contribList.innerHTML = project.contributions.map(c => `<li>${c}</li>`).join('');

  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = project.tags.map(t => 
    `<span class="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">${t}</span>`
  ).join('');

  modal.showModal();
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.close();
};

/* ==========================================================
   4. CV MODAL PREVIEW
   ========================================================== */
function initCVModal() {
  const btn = document.getElementById('download-cv-btn');
  const modal = document.getElementById('cv-modal');
  if (!btn || !modal) return;

  btn.addEventListener('click', () => {
    modal.showModal();
  });
}

/* ==========================================================
   5. INTERACTIVE GEMINI AI ASSISTANT ("Ask Myesha AI")
   ========================================================== */
function initAIChat() {
  const chatForm = document.getElementById('ai-chat-form');
  const userInput = document.getElementById('ai-user-input');
  const chatHistory = document.getElementById('ai-chat-messages');

  if (!chatForm || !userInput || !chatHistory) return;

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = userInput.value.trim();
    if (!query) return;

    // Add user message bubble
    appendChatMessage('user', query);
    userInput.value = '';

    // Show typing state
    const typingId = showTypingIndicator();

    // Generate response using local Gemini AI knowledge base
    setTimeout(() => {
      removeTypingIndicator(typingId);
      const answer = generateAIResponse(query);
      appendChatMessage('ai', answer);
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 650);
  });
}

window.sendQuickPrompt = function(promptText) {
  const userInput = document.getElementById('ai-user-input');
  const chatForm = document.getElementById('ai-chat-form');
  if (!userInput || !chatForm) return;

  userInput.value = promptText;
  chatForm.dispatchEvent(new Event('submit', { cancelable: true }));
};

function appendChatMessage(sender, text) {
  const chatHistory = document.getElementById('ai-chat-messages');
  const msgWrapper = document.createElement('div');
  msgWrapper.className = 'flex items-start gap-3' + (sender === 'user' ? ' justify-end' : '');

  if (sender === 'ai') {
    msgWrapper.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-brandYellow text-brandGreen font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
        M
      </div>
      <div class="bg-white/10 rounded-2xl rounded-tl-none p-4 text-sm text-white/90 max-w-[85%] leading-relaxed border border-white/5">
        ${text}
      </div>
    `;
  } else {
    msgWrapper.innerHTML = `
      <div class="bg-brandYellow text-brandGreen-dark font-medium rounded-2xl rounded-tr-none p-3.5 text-sm max-w-[85%] leading-relaxed shadow">
        ${text}
      </div>
      <div class="w-8 h-8 rounded-full bg-white/20 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
        You
      </div>
    `;
  }

  chatHistory.appendChild(msgWrapper);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

function showTypingIndicator() {
  const chatHistory = document.getElementById('ai-chat-messages');
  const typingDiv = document.createElement('div');
  const id = 'typing-' + Date.now();
  typingDiv.id = id;
  typingDiv.className = 'flex items-center gap-2 text-white/50 text-xs px-2 py-1';
  typingDiv.innerHTML = `
    <span class="inline-block w-2 h-2 rounded-full bg-brandYellow animate-bounce"></span>
    <span class="inline-block w-2 h-2 rounded-full bg-brandYellow animate-bounce [animation-delay:0.2s]"></span>
    <span class="inline-block w-2 h-2 rounded-full bg-brandYellow animate-bounce [animation-delay:0.4s]"></span>
    <span class="ml-1 text-[11px]">Myesha's AI Twin is thinking...</span>
  `;
  chatHistory.appendChild(typingDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;
  return id;
}

function removeTypingIndicator(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function generateAIResponse(query) {
  const q = query.toLowerCase();

  if (q.includes('skill') || q.includes('tool') || q.includes('figma') || q.includes('software')) {
    return "Myesha specializes in <strong>UI/UX Design, iOS/Android App Design, Web Design, and Design Systems</strong>. Her daily toolkit includes <strong>Figma (advanced 98%), Adobe XD, Illustrator, Photoshop, Tailwind CSS, and Gemini AI</strong> for generative prompt flows!";
  }

  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('call') || q.includes('whatsapp') || q.includes('reach')) {
    return "You can reach Myesha directly via:<br>• <strong>Email:</strong> <a href='mailto:oishimyesha@gmail.com' class='text-brandYellow underline'>oishimyesha@gmail.com</a><br>• <strong>Phone / WhatsApp:</strong> <a href='https://wa.me/8801327183767' class='text-brandYellow underline'>01327183767</a><br>• <strong>Location:</strong> Rajpara, Rajshahi, Bangladesh. She usually responds in under 24 hours!";
  }

  if (q.includes('location') || q.includes('where') || q.includes('rajshahi') || q.includes('bangladesh') || q.includes('live')) {
    return "Myesha is based in <strong>Rajpara, Rajshahi, Bangladesh</strong>. She works with local teams as well as international remote clients across the globe.";
  }

  if (q.includes('freelance') || q.includes('hire') || q.includes('available') || q.includes('project') || q.includes('job') || q.includes('rate')) {
    return "Yes! 🚀 <strong>Myesha is currently open for freelance projects, contractual UI/UX roles, and full-time product design opportunities</strong>. You can click the 'Hire Me' button or send a message in the contact form below to get an estimate!";
  }

  if (q.includes('project') || q.includes('portfolio') || q.includes('work') || q.includes('case study')) {
    return "Myesha has completed <strong>60+ projects</strong> across FinTech (like FinFlow mobile banking), HealthTech (Aura telehealth portal), AI SaaS (Nexus Gemini AI Studio), and B2B Dashboards (CloudPulse). You can view full case studies right in the Projects section above!";
  }

  if (q.includes('gemini') || q.includes('ai')) {
    return "Myesha actively integrates <strong>Google Gemini AI</strong> into modern digital products — designing conversational AI copilots, multimodal workflows, and intelligent user experiences that feel intuitive and human-first.";
  }

  if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('assalamu alaikum') || q.includes('valo')) {
    return "Hello! Great to connect with you. I'm Myesha's AI persona. How can I assist you with your design project, wireframe needs, or UI consultation today?";
  }

  return `Thanks for asking! Myesha Farjana Oishi is a passionate UI/UX & Product Designer based in Rajshahi, Bangladesh with 3+ years of experience in mobile apps, web design, and SaaS dashboards. Feel free to contact her at <a href='mailto:oishimyesha@gmail.com' class='text-brandYellow underline'>oishimyesha@gmail.com</a> or via WhatsApp at <a href='https://wa.me/8801327183767' class='text-brandYellow underline'>01327183767</a>!`;
}

/* ==========================================================
   6. CONTACT FORM HANDLER
   ========================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('contact-feedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const service = document.getElementById('contact-service').value;
    const budget = document.getElementById('contact-budget').value;
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      feedback.className = 'p-4 rounded-xl text-sm font-medium bg-red-50 text-red-700 block border border-red-200';
      feedback.textContent = 'Please fill out all required fields (*).';
      return;
    }

    // Success feedback
    feedback.className = 'p-4 rounded-xl text-sm font-medium bg-emerald-50 text-emerald-800 block border border-emerald-200';
    feedback.innerHTML = `
      <div class="flex items-center gap-2 mb-1">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
        <strong>Thank you, ${name}!</strong>
      </div>
      Your message is ready. Opening your email app to send directly to <strong>oishimyesha@gmail.com</strong>...
    `;
    lucide.createIcons();

    // Prepare mailto link
    const subject = encodeURIComponent(`Project Inquiry: ${service} (${name})`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Service: ${service}\n` +
      `Expected Budget: ${budget}\n\n` +
      `Project Brief:\n${message}\n\n` +
      `Sent from Myesha Farjana Oishi's Portfolio Website.`
    );

    setTimeout(() => {
      window.location.href = `mailto:oishimyesha@gmail.com?subject=${subject}&body=${body}`;
    }, 1200);
  });
}
