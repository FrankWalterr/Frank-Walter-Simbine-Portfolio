import ucmFegPreview from '../assets/ucm-feg-preview.png'

export const translations = {
  pt: {
    seo: { title: 'Frank Walter Simnbine', description: 'Frank Walter Simbine - Estudante de tecnologias de informação apaixonado por programação, web e IA. Portfólio com projetos, skills e contacto.' },
    a11y: { skipContent: 'Saltar para conteúdo', toggleTheme: 'Alternar tema claro/escuro', toggleLang: 'Alternar idioma (PT/EN)', menu: 'Abrir menu de navegação', navLabel: 'Navegação principal', whatsappFloat: 'Abrir conversa no WhatsApp' },
    nav: { inicio: 'Início', sobre: 'Sobre', skills: 'Skills', projetos: 'Projetos', contacto: 'Contacto' },
    hero: {
      greeting: 'Olá, eu sou',
      tagline: 'Um retrato rápido do que faço em TI, web e produto digital.',
      title: 'Estudante de Tecnologias de Informação',
      intro: 'Apaixonado por desenvolvimento web e software, focado em transformar ideias em soluções reais, práticas e funcionais. À procura de oportunidades para crescer e contribuir na área de tecnologia.',
      btnProjects: 'Ver Projetos',
      btnContact: 'Entrar em Contacto'
    },
    about: {
      title: 'Sobre Mim',
      tagline: 'Quem sou, onde estudo e dados úteis num relance.',
      para1: 'Sou estudante de Tecnologias de Informação na Universidade Católica de Moçambique, com forte interesse em desenvolvimento web e de software.',
      para2: 'Acredito que a melhor forma de crescer como desenvolvedor é construindo e testando projetos reais. Por isso, dedico-me continuamente a aprender novas ferramentas, linguagens e metodologias sempre com o objetivo de transformar conhecimento em soluções funcionais e úteis.',
      para3: 'O meu foco é tornar-me um profissional fullstack, capaz de contribuir para o desenvolvimento de soluções inovadoras, acompanhando a constante evolução do mundo digital.',
      education: {
        degree: {
          title: 'Formação',
          course: 'Licenciatura em Tecnologias de Informação (em curso)',
          institution: 'Universidade Católica de Moçambique (UCM)',
          period: 'Desde 2023 · 4.º ano'
        },
        certs: {
          title: 'Certificações',
          items: [
            'Dart & Flutter: The Complete Flutter Development Course (Udemy)',
            'The Ultimate React Course 2024: React, Next.js, Redux (Udemy)'
          ]
        },
        languages: {
          title: 'Idiomas',
          items: [
            'Português — Nativo',
            'Inglês — Intermediário'
          ]
        },
        location: {
          title: 'Localização',
          value: 'Beira, Moçambique'
        }
      },
      downloadCV: 'Descarregar CV (PDF)'
    },
    skills: { title: 'Skills', tagline: 'Ferramentas que uso com frequência em frente e atrás do ecrã.', frontend: 'Frontend', backend: 'Backend', fullstack: 'Full Stack' },
    projects: {
      title: 'Projetos',
      tagline: 'Alguns trabalhos que mostram raciocínio técnico e entrega.',
      viewCode: 'Ver Código',
      p1: {
        name: 'Detecção e contagem de veículos em vídeo',
        desc: 'Sistema de detecção e contagem de veículos aplicado a vídeos em tempo real, com área de contagem e registo automático de eventos. Permite monitorizar o fluxo rodoviário de forma contínua e apoiar a análise de tráfego de maneira centralizada e fiável.',
        tools: [
          { name: 'OpenCV', icon: 'code' },
          { name: 'Python', icon: 'skill-python' },
          { name: 'YOLOv8', icon: 'cpu' }
        ]
      },
      p2: {
        name: 'Plataforma estudantil UCM-FEG',
        desc: 'Plataforma web para organizar e centralizar a vida comunicacional e informativa da Associação dos Estudantes da UCM-FEG avisos, eventos, documentos e serviços num só lugar. Reduz a desorganização da informação estudantil e a dependência exclusiva de meios informais como redes sociais e murais, oferecendo acesso mais rápido e fiável a avisos, eventos e documentos da associação.',
        previewImage: ucmFegPreview,
        tools: [
          { name: 'Blade Templates', icon: 'skill-html' },
          { name: 'JavaScript', icon: 'skill-js' },
          { name: 'Laravel', icon: 'server' },
          { name: 'Tailwind CSS', icon: 'tailwind' }
        ]
      },
      p3: {
        name: 'Capital Way — Website Institucional',
        desc: 'Website institucional desenvolvido para a Capital Way, transportadora moçambicana que conecta destinos com segurança e conforto. O site apresenta todas as rotas e preços disponíveis, tabela de envio de carga, terminais com contactos, secção de conforto a bordo com carrossel interactivo e formulário de contacto funcional. Totalmente responsivo para telemóvel e disponível em Português e Inglês, com navegação suave e design moderno alinhado à identidade visual da marca.',
        tools: [
          { name: 'Lucide React', icon: 'sparkles' },
          { name: 'React', icon: 'react' },
          { name: 'Tailwind CSS', icon: 'tailwind' }
        ],
        previewImage: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcapital-way-az8h.vercel.app%2F?w=1200',
        liveUrl: 'https://capital-way-az8h.vercel.app/',
        liveLabel: 'Ver online'
      }
    },
    cta: {
      tagline: 'Antes de preencher o formulário — convite directo.',
      badge: 'Aberto a colaborações',
      title: 'Ideias fortes merecem uma execução cuidada',
      lead: 'Parcerias, freelancing e desafios técnicos — com foco em soluções claras e impacto real.',
      text: 'Gosto de alinhar expectativas cedo: desafio, prazos, tecnologia e valor entregue. Se algo neste portfólio lhe parece pertinente, avance — e desenhamos o próximo passo em conjunto.',
      btn: 'Falar comigo'
    },
    contact: {
      title: 'Contacto',
      tagline: 'Pode escrever por e-mail, formulário ou WhatsApp. Respondo assim que possível.',
      whatsappDirectMessage: 'Olá Frank Walter, cheguei aqui pelo teu portfólio e gostava de falar contigo.',
      infoTitle: 'Informações de contacto',
      infoLead: 'Prefere contacto directo? Escolha o canal que for mais confortável para si.',
      formTitle: 'Enviar mensagem',
      form: { name: 'Nome completo *', email: 'Email *', phone: 'Telefone (opcional)', message: 'Mensagem / Assunto *', sendEmail: 'Enviar por Email', sendWhatsApp: 'Enviar pelo WhatsApp' },
      validation: { nameRequired: 'Nome é obrigatório.', emailRequired: 'Email é obrigatório.', emailInvalid: 'Email inválido.', messageRequired: 'Mensagem é obrigatória.' },
      emailSuccess: 'A abrir o seu cliente de email...',
      whatsappSuccess: 'A abrir o WhatsApp...',
      error: 'Por favor, preencha os campos obrigatórios correctamente.'
    },
    footer: { madeBy: 'Feito por', location: 'em Moçambique', copyright: '© Todos os direitos reservados', backTop: '↑ Voltar ao topo' }
  },
  en: {
    seo: { title: 'Frank Walter Simbine | Software Development Student', description: 'Frank Walter Simbine - Software development student passionate about programming, web and AI. Portfolio with projects, skills and contact.' },
    a11y: { skipContent: 'Skip to content', toggleTheme: 'Toggle light/dark theme', toggleLang: 'Toggle language (PT/EN)', menu: 'Open navigation menu', navLabel: 'Main navigation', whatsappFloat: 'Open a WhatsApp chat' },
    nav: { inicio: 'Home', sobre: 'About', skills: 'Skills', projetos: 'Projects', contacto: 'Contact' },
    hero: {
      greeting: "Hi, I'm",
      tagline: 'A quick snapshot of what I do in IT, web, and digital product.',
      title: 'Software Development Student',
      intro: 'Software development student passionate about programming, web development and artificial intelligence, focused on creating practical solutions and evolving continuously.',
      btnProjects: 'View Projects',
      btnContact: 'Contact'
    },
    about: {
      title: 'About Me',
      tagline: 'Who I am, where I study, and useful facts at a glance.',
      para1: 'Frank Walter Simbine is a software development student with a strong interest in programming, web development and artificial intelligence. He is committed to building practical projects to strengthen his skills and maintains a steady pace of learning new technologies.',
      para2: 'His path reflects a problem-solving and technical growth approach, with a focus on creating useful solutions and keeping up with industry trends.',
      para3: 'His goal is to become a fullstack professional, capable of contributing to innovative solutions while keeping up with the constant evolution of the digital world.',
      education: {
        degree: {
          title: 'Education',
          course: 'Bachelor’s in Information Technologies (in progress)',
          institution: 'Catholic University of Mozambique (UCM)',
          period: 'Since 2023 · 4th year'
        },
        certs: {
          title: 'Certifications',
          items: [
            'Dart & Flutter: The Complete Flutter Development Course (Udemy)',
            'The Ultimate React Course 2024: React, Next.js, Redux (Udemy)'
          ]
        },
        languages: {
          title: 'Languages',
          items: [
            'Portuguese — Native',
            'English — Intermediate'
          ]
        },
        location: {
          title: 'Location',
          value: 'Beira, Mozambique'
        }
      },
      downloadCV: 'Download CV (PDF)'
    },
    skills: { title: 'Skills', tagline: 'Tools I use often on the client, server, and in between.', frontend: 'Frontend', backend: 'Backend', fullstack: 'Full Stack' },
    projects: {
      title: 'Projects',
      tagline: 'A few builds that show technical thinking and shipped work.',
      viewCode: 'View Code',
      p1: {
        name: 'Vehicle detection and counting in video',
        desc: 'System for detecting and counting vehicles on real-time video, with a counting zone and automatic event logging. Supports continuous road-traffic monitoring and reliable, centralised traffic analysis.',
        tools: [
          { name: 'OpenCV', icon: 'code' },
          { name: 'Python', icon: 'skill-python' },
          { name: 'YOLOv8', icon: 'cpu' }
        ]
      },
      p2: {
        name: 'UCM-FEG Student Association Platform',
        desc: 'Web platform to organise and centralise communication and information for the UCM-FEG Students Association — notices, events, documents and services in one place. Reduces scattered student information and over-reliance on informal channels such as social media and notice boards, enabling quicker, more reliable access to association updates and documents.',
        previewImage: ucmFegPreview,
        tools: [
          { name: 'Blade Templates', icon: 'skill-html' },
          { name: 'JavaScript', icon: 'skill-js' },
          { name: 'Laravel', icon: 'server' },
          { name: 'Tailwind CSS', icon: 'tailwind' }
        ]
      },
      p3: {
        name: 'Capital Way — Transport Management System',
        desc: 'Web application for day-to-day operations of an interprovincial carrier in Mozambique: ticketing, fleet, finance, alerts and driver schedules. Replaces paper tickets and notebooks with centralised records, improves fleet visibility and compliance alerts (insurance, maintenance, documentation), clarifies revenue by route and payment method, and reduces scheduling errors and conflicts.',
        tools: [
          { name: 'Lucide React', icon: 'sparkles' },
          { name: 'React', icon: 'react' },
          { name: 'Tailwind CSS', icon: 'tailwind' }
        ],
        previewImage: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcapital-way-az8h.vercel.app%2F?w=1200',
        liveUrl: 'https://capital-way-az8h.vercel.app/',
        liveLabel: 'View online'
      }
    },
    cta: {
      tagline: 'Before you use the form — a direct invitation.',
      badge: 'Open to collaborations',
      title: 'Strong ideas deserve careful execution',
      lead: 'Partnerships, freelance work and technical challenges — focused on clear solutions and real impact.',
      text: 'I like to align expectations early: scope, timelines, technology and delivered value. If something here feels relevant, reach out — we can shape the next step together.',
      btn: 'Get in touch'
    },
    contact: {
      title: 'Contact',
      tagline: 'Reach me by email, form, or WhatsApp. I will get back to you as soon as possible.',
      whatsappDirectMessage: 'Hi Frank Walter, I found your portfolio and would love to connect.',
      infoTitle: 'Contact information',
      infoLead: 'Prefer direct contact? Choose the channel that is most comfortable for you.',
      formTitle: 'Send message',
      form: { name: 'Full name *', email: 'Email *', phone: 'Phone (optional)', message: 'Message / Subject *', sendEmail: 'Send by Email', sendWhatsApp: 'Send via WhatsApp' },
      validation: { nameRequired: 'Name is required.', emailRequired: 'Email is required.', emailInvalid: 'Invalid email.', messageRequired: 'Message is required.' },
      emailSuccess: 'Opening your email client...',
      whatsappSuccess: 'Opening WhatsApp...',
      error: 'Please fill in the required fields correctly.'
    },
    footer: { madeBy: 'Made by', location: 'in Mozambique', copyright: '© All rights reserved', backTop: '↑ Back to top' }
  }
}

export const getTranslation = (translationsObj, lang, key) => {
  const keys = key.split('.')
  let value = translationsObj[lang]
  for (const k of keys) value = value?.[k]
  return value != null && typeof value === 'string' ? value : key
}
