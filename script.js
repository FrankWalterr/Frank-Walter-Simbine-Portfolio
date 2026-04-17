/**
 * Portfólio - Frank Walter Simbine
 * Funcionalidades: tema claro/escuro, tradução PT/EN, navbar responsiva,
 * scroll suave, animações, validação de formulário, mailto e WhatsApp.
 */

(function () {
  'use strict';

  // ========== TRADUÇÕES ==========
  const translations = {
    pt: {
      nav: { inicio: 'Início', sobre: 'Sobre Mim', skills: 'Skills', projetos: 'Projetos', percurso: 'Percurso', contacto: 'Contacto' },
      hero: {
        greeting: 'Olá, eu sou',
        title: 'Estudante de Desenvolvimento de Software',
        intro: 'Estudante de tecnologias de informação apaixonado por programação, desenvolvimento web e inteligência artificial, focado em criar soluções práticas e evoluir continuamente.',
        btnProjects: 'Ver Projetos',
        btnContact: 'Entrar em Contacto'
      },
      about: {
        title: 'Sobre Mim',
        para1: 'Frank Walter Simbine é um estudante de desenvolvimento de software com forte interesse em programação, desenvolvimento web e inteligência artificial. Dedica-se a desenvolver projetos práticos para consolidar as suas competências e mantém um ritmo constante de aprendizagem de novas tecnologias.',
        para2: 'O seu percurso reflecte uma abordagem orientada à resolução de problemas e à evolução técnica, com foco em criar soluções úteis e em acompanhar as tendências do sector.',
        
      },
      skills: { title: 'Skills', languages: 'Linguagens', web: 'Tecnologias Web', tools: 'Ferramentas' },
      projects: {
        title: 'Projetos',
        viewCode: 'Ver Código',
        p1: { name: 'Sistema de Notas', desc: 'Programa em Java que calcula médias de alunos e mostra a situação final (aprovado ou reprovado). Resolve a necessidade de automatizar o cálculo de notas e a emissão do resultado de forma rápida e clara.', problem: 'Problema que resolve: cálculo manual de médias e definição do status do aluno.' },
        p2: { name: 'To-Do List Web', desc: 'Aplicação simples para organizar tarefas do dia a dia usando HTML, CSS e JavaScript. Permite adicionar, marcar como concluída e remover tarefas, mantendo a lista organizada.', problem: 'Problema que resolve: organização de tarefas numa interface web leve e acessível.' },
        p3: { name: 'API Simples em Python', desc: 'API básica para gestão de dados usando Python. Oferece endpoints para criar, ler, actualizar e eliminar registos, servindo como base para aplicações que consomem dados via HTTP.', problem: 'Problema que resolve: expor e gerir dados de forma estruturada através de uma API REST.' }
      },
      cta: { title: 'Vamos construir algo juntos', text: 'Se tem um projeto em mente ou quer trocar ideias sobre tecnologia, entre em contacto.', btn: 'Falar comigo' },
      journey: {
        title: 'Percurso',
        item1: { title: 'Estudante de Desenvolvimento de Software', desc: 'Formação em desenvolvimento de software com foco em boas práticas e projetos reais.' },
        item2: { title: 'Aprendizagem contínua', desc: 'Dedicação constante à programação e à actualização de competências técnicas.' },
        item3: { title: 'Desenvolvimento Web', desc: 'Interesse em front-end e back-end, construindo interfaces e aplicações web.' },
        item4: { title: 'Inteligência Artificial', desc: 'Exploração de conceitos e ferramentas de IA para aplicações práticas.' },
        item5: { title: 'Projetos práticos', desc: 'Foco em projectos que resolvem problemas reais e consolidam conhecimentos.' }
      },
      contact: {
        title: 'Contacto',
        infoTitle: 'Informações de contacto',
        form: { name: 'Nome completo *', email: 'Email *', phone: 'Telefone (opcional)', message: 'Mensagem / Assunto *', sendEmail: 'Enviar por Email', sendWhatsApp: 'Enviar pelo WhatsApp' },
        validation: { nameRequired: 'Nome é obrigatório.', emailRequired: 'Email é obrigatório.', emailInvalid: 'Email inválido.', messageRequired: 'Mensagem é obrigatória.' },
        success: 'Mensagem preparada. O seu cliente de email ou WhatsApp será aberto.',
        error: 'Por favor, preencha os campos obrigatórios correctamente.'
      },
      footer: { copyright: '© Todos os direitos reservados', backTop: '↑ Voltar ao topo' }
    },
    en: {
      nav: { inicio: 'Home', sobre : 'About', skills: 'Skills', projetos: 'Projects', percurso: 'Journey', contacto: 'Contact' },
      hero: {
        greeting: "Hi, I'm",
        title: 'Software Development Student',
        intro: 'Software development student passionate about programming, web development and artificial intelligence, focused on creating practical solutions and evolving continuously.',
        btnProjects: 'View Projects',
        btnContact: 'Contact'
      },
      about: {
        title: 'About Me',
        para1: 'Frank Walter Simbine is a software development student with a strong interest in programming, web development and artificial intelligence. He is committed to building practical projects to strengthen his skills and maintains a steady pace of learning new technologies.',
        para2: 'His path reflects a problem-solving and technical growth approach, with a focus on creating useful solutions and keeping up with industry trends.',
        downloadCV: 'Download CV (PDF)'
      },
      skills: { title: 'Skills', languages: 'Languages', web: 'Web Technologies', tools: 'Tools' },
      projects: {
        title: 'Projects',
        viewCode: 'View Code',
        p1: { name: 'Grade System', desc: 'Java program that calculates student averages and shows the final status (pass or fail). Solves the need to automate grade calculation and output results quickly and clearly.', problem: 'Problem it solves: manual average calculation and student status definition.' },
        p2: { name: 'To-Do List Web', desc: 'Simple app to organise daily tasks using HTML, CSS and JavaScript. Add, mark as done and remove tasks, keeping the list organised.', problem: 'Problem it solves: task organisation in a light, accessible web interface.' },
        p3: { name: 'Simple Python API', desc: 'Basic API for data management using Python. Provides endpoints to create, read, update and delete records, as a base for applications that consume data via HTTP.', problem: 'Problem it solves: exposing and managing data in a structured way through a REST API.' }
      },
      cta: { title: "Let's build something together", text: 'If you have a project in mind or want to exchange ideas about tech, get in touch.', btn: 'Get in touch' },
      journey: {
        title: 'Journey',
        item1: { title: 'Software Development Student', desc: 'Training in software development with a focus on best practices and real projects.' },
        item2: { title: 'Continuous learning', desc: 'Ongoing dedication to programming and updating technical skills.' },
        item3: { title: 'Web Development', desc: 'Interest in front-end and back-end, building interfaces and web applications.' },
        item4: { title: 'Artificial Intelligence', desc: 'Exploring AI concepts and tools for practical applications.' },
        item5: { title: 'Practical projects', desc: 'Focus on projects that solve real problems and consolidate knowledge.' }
      },
      contact: {
        title: 'Contact',
        infoTitle: 'Contact information',
        form: { name: 'Full name *', email: 'Email *', phone: 'Phone (optional)', message: 'Message / Subject *', sendEmail: 'Send by Email', sendWhatsApp: 'Send via WhatsApp' },
        validation: { nameRequired: 'Name is required.', emailRequired: 'Email is required.', emailInvalid: 'Invalid email.', messageRequired: 'Message is required.' },
        success: 'Message prepared. Your email or WhatsApp client will open.',
        error: 'Please fill in the required fields correctly.'
      },
      footer: { copyright: '© All rights reserved', backTop: '↑ Back to top' }
    }
  };

  // Estado: idioma e tema (guardados em localStorage)
  let currentLang = localStorage.getItem('portfolio-lang') || 'pt';
  let currentTheme = localStorage.getItem('portfolio-theme') || 'light';

  // Elementos do DOM (referências comuns)
  const body = document.body;
  const navbar = document.getElementById('navbar');
  const navbarMenu = document.getElementById('navbar-menu');
  const btnTheme = document.getElementById('btn-theme');
  const btnLang = document.getElementById('btn-lang');
  const btnMobileMenu = document.getElementById('btn-mobile-menu');
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const btnWhatsApp = document.getElementById('btn-whatsapp');
  const btnBackTop = document.getElementById('btn-back-top');
  const footerYear = document.getElementById('footer-year');
  const btnDownloadCv = document.getElementById('btn-download-cv');

  // ========== TEMA (Dark / Light) ==========
  function applyTheme(theme) {
    currentTheme = theme;
    body.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    localStorage.setItem('portfolio-theme', theme);
  }

  function toggleTheme() {
    const next = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  if (btnTheme) btnTheme.addEventListener('click', toggleTheme);

  // Aplicar tema guardado ao carregar
  applyTheme(currentTheme);

  // ========== IDIOMA (PT | EN) ==========
  function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) value = value && value[k];
    return value != null ? value : key;
  }

  function updatePageLanguage() {
    document.documentElement.lang = currentLang === 'pt' ? 'pt' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const t = getTranslation(key);
      if (t && typeof t === 'string') el.textContent = t;
      else if (t && typeof t === 'object') {
        // para chaves como "projects.p1.name" que devolvem objeto em alguns casos
        const lastKey = key.split('.').pop();
        if (t[lastKey] !== undefined) el.textContent = t[lastKey];
      }
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    updatePageLanguage();
  }

  if (btnLang) {
    btnLang.addEventListener('click', function () {
      setLanguage(currentLang === 'pt' ? 'en' : 'pt');
    });
  }

  updatePageLanguage();

  // ========== MENU MÓVEL ==========
  if (btnMobileMenu && navbar) {
    btnMobileMenu.addEventListener('click', function () {
      navbar.classList.toggle('open');
      navbarMenu.classList.toggle('open');
    });
    // Fechar ao clicar num link
    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navbar.classList.remove('open');
        navbarMenu.classList.remove('open');
      });
    });
  }

  // ========== SCROLL SUAVE ==========
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ========== SECÇÃO ACTIVA NA NAVBAR ==========
  const sections = document.querySelectorAll('.section[id]');

  function updateActiveSection() {
    const scrollY = window.pageYOffset;
    let active = null;
    sections.forEach(function (section) {
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) active = section.getAttribute('id');
    });
    document.querySelectorAll('.nav-link').forEach(function (link) {
      const section = link.getAttribute('data-section');
      link.classList.toggle('active', section === active);
    });
  }

  window.addEventListener('scroll', function () { requestAnimationFrame(updateActiveSection); });
  updateActiveSection();

  // ========== REVEAL NO SCROLL ==========
  const revealEls = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;
    revealEls.forEach(function (el) {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - revealPoint) el.classList.add('visible');
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  revealOnScroll();

  // ========== FORMULÁRIO: VALIDAÇÃO ==========
  function showFeedback(message, isError) {
    if (!formFeedback) return;
    formFeedback.textContent = message;
    formFeedback.hidden = false;
    formFeedback.className = 'form-feedback ' + (isError ? 'error' : 'success');
  }

  function clearErrors() {
    ['name', 'email', 'message'].forEach(function (id) {
      const err = document.getElementById('error-' + id);
      if (err) err.textContent = '';
    });
  }

  function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const t = translations[currentLang].contact.validation;
    let valid = true;
    clearErrors();

    if (!name || !name.value.trim()) {
      const err = document.getElementById('error-name');
      if (err) err.textContent = t.nameRequired;
      valid = false;
    }
    if (!email || !email.value.trim()) {
      const err = document.getElementById('error-email');
      if (err) err.textContent = t.emailRequired;
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      const err = document.getElementById('error-email');
      if (err) err.textContent = t.emailInvalid;
      valid = false;
    }
    if (!message || !message.value.trim()) {
      const err = document.getElementById('error-message');
      if (err) err.textContent = t.messageRequired;
      valid = false;
    }
    return valid;
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm()) {
        showFeedback(getTranslation('contact.error'), true);
        return;
      }
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = (document.getElementById('phone') && document.getElementById('phone').value) || '';
      const message = document.getElementById('message').value.trim();
      const subject = 'Contacto do portfólio - ' + name;
      const body = message + (phone ? '\n\nTelefone: ' + phone : '') + '\n\nEnviado por: ' + email;
      const mailto = 'mailto:franksimbine@example.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailto;
      showFeedback(getTranslation('contact.success'), false);
    });
  }

  // WhatsApp: abrir wa.me com texto da mensagem
  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', function () {
      if (!validateForm()) {
        showFeedback(getTranslation('contact.error'), true);
        return;
      }
      const name = document.getElementById('name').value.trim();
      const message = document.getElementById('message').value.trim();
      const phone = '351912345678'; // Número para wa.me (sem +)
      const text = 'Olá! Sou ' + name + '.\n\n' + message;
      window.open('https://wa.me/' + phone + '?text=' + encodeURIComponent(text), '_blank');
      showFeedback(getTranslation('contact.success'), false);
    });
  }

  // ========== RODAPÉ: ANO ==========
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  // ========== VOLTAR AO TOPO ==========
  if (btnBackTop) {
    function toggleBackTop() {
      btnBackTop.classList.toggle('visible', window.pageYOffset > 400);
    }
    window.addEventListener('scroll', toggleBackTop);
    toggleBackTop();
    btnBackTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  

  // Links dos projetos "Ver Código" – actualize com URLs reais dos repositórios em projectRepoUrls
  const projectRepoUrls = ['#', '#', '#']; // Ex: ['https://github.com/user/sistema-notas', '...', '...']
  document.querySelectorAll('.project-link').forEach(function (link, i) {
    if (projectRepoUrls[i] && projectRepoUrls[i] !== '#') link.setAttribute('href', projectRepoUrls[i]);
    else {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        alert(currentLang === 'pt' ? 'Adicione os links dos repositórios no array projectRepoUrls em script.js.' : 'Add your project repo links in the projectRepoUrls array in script.js.');
      });
    }
  });
})();
