export const translations = {
  pt: {
    seo: { title: 'Frank Walter Simnbine', description: 'Frank Walter Simbine - Estudante de tecnologias de informação apaixonado por programação, web e IA. Portfólio com projetos, skills e contacto.' },
    a11y: { skipContent: 'Saltar para conteúdo', toggleTheme: 'Alternar tema claro/escuro', toggleLang: 'Alternar idioma (PT/EN)', menu: 'Abrir menu de navegação', navLabel: 'Navegação principal', whatsappFloat: 'Abrir conversa no WhatsApp' },
    nav: { inicio: 'Início', sobre: 'Sobre', skills: 'Skills', projetos: 'Projetos', contacto: 'Contacto' },
    hero: {
      greeting: 'Olá, eu sou',
      tagline: 'Um retrato rápido do que faço em TI, web e produto digital.',
      title: 'Estudante de Tecnologias de Informação',
      intro: 'Construo produtos web e software com foco em clareza, entrega e impacto real. Aberto a estágios, freelance e desafios técnicos onde possa crescer e contribuir.',
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
          viewCert: 'Ver certificado',
          close: 'Fechar',
          verified: 'Verificado',
          items: [
            {
              name: 'Introduction to Cybersecurity',
              issuer: 'Cisco Networking Academy',
              date: 'Ago 2024',
              image: '/cisco-cybersecurity-cert.png',
              verified: true
            },
            {
              name: 'Dart & Flutter: The Complete Flutter Development Course',
              issuer: 'Udemy'
            },
            {
              name: 'The Ultimate React Course 2024: React, Next.js, Redux',
              issuer: 'Udemy'
            }
          ]
        },
        languages: {
          title: 'Idiomas',
          items: [
            'Português - Nativo',
            'Inglês - Intermediário'
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
    certifications: {
      title: 'Certificações',
      tagline: 'Aprendizagem contínua em cibersegurança, cloud e IA concluída em paralelo com trabalho académico e de clientes.',
      prefix: 'credenciais',
      verified: 'Verificado',
      inProgress: 'Em curso',
      verify: 'Verificar →',
      items: [
        {
          title: 'Hacker Ético',
          issuer: 'Cisco Networking Academy',
          date: 'Em andamento — 70h',
          inProgress: true,
          url: '',
          tags: ['Ethical Hacking', 'Penetration Testing', 'Vulnerability Assessment']
        },
        {
          title: 'Introduction to Cybersecurity',
          issuer: 'Cisco Networking Academy',
          date: 'Ago 2026',
          code: '',
          url: '',
          tags: ['Cybersecurity', 'Threats & Vulnerabilities']
        },
        {
          title: 'Fundamentos de Cibersegurança',
          issuer: 'LinkedIn Learning',
          date: 'Jul 2026',
          code: '',
          url: '',
          tags: ['Cybersecurity']
        },
        {
          title: 'What Is Generative AI?',
          issuer: 'LinkedIn Learning',
          date: 'Jul 2026',
          code: '',
          url: '',
          tags: ['Generative AI', 'Artificial Intelligence']
        }
      ]
    },
    projects: {
      title: 'Projetos',
      tagline: 'Alguns trabalhos que mostram raciocínio técnico e entrega.',
      viewCode: 'Ver Código',
      onlineGroup: 'disponíveis online',
      offlineGroup: 'outros projetos',
      onlineBadge: 'Online',
      offlineBadge: 'Sem demo',
      p1: {
        name: 'Detecção e contagem de veículos em vídeo',
        type: 'Visão computacional',
        desc: 'Sistema de detecção e contagem de veículos aplicado a vídeos em tempo real, com área de contagem e registo automático de eventos. Permite monitorizar o fluxo rodoviário de forma contínua e apoiar a análise de tráfego de maneira centralizada e fiável.',
        tools: [
          { name: 'OpenCV', icon: 'code' },
          { name: 'Python', icon: 'skill-python' },
          { name: 'YOLOv8', icon: 'cpu' }
        ]
      },
      p2: {
        name: 'Plataforma estudantil UCM-FEG',
        type: 'Plataforma web',
        desc: 'Plataforma web para organizar e centralizar a vida comunicacional e informativa da Associação dos Estudantes da UCM-FEG avisos, eventos, documentos e serviços num só lugar. Reduz a desorganização da informação estudantil e a dependência exclusiva de meios informais como redes sociais e murais, oferecendo acesso mais rápido e fiável a avisos, eventos e documentos da associação.',
        previewImage: '/ucm-feg-preview.png',
        tools: [
          { name: 'Blade Templates', icon: 'skill-html' },
          { name: 'JavaScript', icon: 'skill-js' },
          { name: 'Laravel', icon: 'server' },
          { name: 'Tailwind CSS', icon: 'tailwind' }
        ]
      },
      p3: {
        name: 'Capital Way — Website Institucional',
        type: 'Website institucional',
        desc: 'Website institucional desenvolvido para a Capital Way, transportadora moçambicana que conecta destinos com segurança e conforto. O site apresenta todas as rotas e preços disponíveis, tabela de envio de carga, terminais com contactos, secção de conforto a bordo com carrossel interactivo e formulário de contacto funcional. Totalmente responsivo para telemóvel e disponível em Português e Inglês, com navegação suave e design moderno alinhado à identidade visual da marca.',
        tools: [
          { name: 'Lucide React', icon: 'code' },
          { name: 'React', icon: 'react' },
          { name: 'Tailwind CSS', icon: 'tailwind' }
        ],
        previewImage: '/capital-way-preview.webp',
        liveUrl: 'https://capital-way-az8h.vercel.app/',
        liveLabel: 'Ver online'
      },
      p4: {
        name: 'Portfólio Pessoal — Vandro Correia',
        type: 'Portfólio digital',
        desc: 'Website de portfólio pessoal desenvolvido para o colaborador Vandro Correia, com foco em apresentação profissional dos seus trabalhos e competências. Interface moderna e totalmente responsiva, com navegação fluida entre secções e design alinhado à identidade visual do cliente.',
        tools: [
          { name: 'React', icon: 'react' },
          { name: 'Vite', icon: 'trend' },
          { name: 'Tailwind CSS', icon: 'tailwind' }
        ],
        previewImage: '/vandro-correia-preview.webp',
        liveUrl: 'https://vandro-correia.vercel.app/',
        liveLabel: 'Ver online'
      },
      previewAction: 'Ver projecto'
    },
    cta: {
      tagline: 'Uma boa conversa começa com um desafio claro.',
      badge: 'Disponível para colaborar',
      title: 'Vamos transformar a próxima ideia em produto.',
      lead: 'Projetos web, software e parcerias com objetivos claros do primeiro briefing à entrega.',
      text: 'Se procuras alguém que combine curiosidade técnica, comunicação directa e foco em execução, conta-me o que tens em mente. Definimos o próximo passo juntos.',
      btn: 'Iniciar conversa'
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
      intro: 'I build web products and software with a focus on clarity, delivery and real impact. Open to internships, freelance work and technical challenges where I can grow and contribute.',
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
          viewCert: 'View certificate',
          close: 'Close',
          verified: 'Verified',
          items: [
            {
              name: 'Introduction to Cybersecurity',
              issuer: 'Cisco Networking Academy',
              date: 'Aug 2024',
              image: '/cisco-cybersecurity-cert.png',
              verified: true
            },
            {
              name: 'Dart & Flutter: The Complete Flutter Development Course',
              issuer: 'Udemy'
            },
            {
              name: 'The Ultimate React Course 2024: React, Next.js, Redux',
              issuer: 'Udemy'
            }
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
    certifications: {
      title: 'Certifications',
      tagline: 'Continuous learning across cybersecurity, cloud, and AI — completed alongside client and academic work.',
      prefix: 'credentials',
      verified: 'Verified',
      inProgress: 'In progress',
      verify: 'Verify →',
      items: [
        {
          title: 'Ethical Hacker',
          issuer: 'Cisco Networking Academy',
          date: 'In progress — 70h',
          inProgress: true,
          url: '',
          tags: ['Ethical Hacking', 'Penetration Testing', 'Vulnerability Assessment']
        },
        {
          title: 'Introduction to Cybersecurity',
          issuer: 'Cisco Networking Academy',
          date: 'Aug 2026',
          code: '',
          url: '',
          tags: ['Cybersecurity', 'Threats & Vulnerabilities']
        },
        {
          title: 'Cybersecurity Fundamentals',
          issuer: 'LinkedIn Learning',
          date: 'Jul 2026',
          code: '',
          url: '',
          tags: ['Cybersecurity']
        },
        {
          title: 'What Is Generative AI?',
          issuer: 'LinkedIn Learning',
          date: 'Jul 2026',
          code: '',
          url: '',
          tags: ['Generative AI', 'Artificial Intelligence']
        }
      ]
    },
    projects: {
      title: 'Projects',
      tagline: 'A few builds that show technical thinking and shipped work.',
      viewCode: 'View Code',
      onlineGroup: 'live demos',
      offlineGroup: 'other projects',
      onlineBadge: 'Live',
      offlineBadge: 'No demo',
      p1: {
        name: 'Vehicle detection and counting in video',
        type: 'Computer vision',
        desc: 'System for detecting and counting vehicles on real-time video, with a counting zone and automatic event logging. Supports continuous road-traffic monitoring and reliable, centralised traffic analysis.',
        tools: [
          { name: 'OpenCV', icon: 'code' },
          { name: 'Python', icon: 'skill-python' },
          { name: 'YOLOv8', icon: 'cpu' }
        ]
      },
      p2: {
        name: 'UCM-FEG Student Association Platform',
        type: 'Web platform',
        desc: 'Web platform to organise and centralise communication and information for the UCM-FEG Students Association — notices, events, documents and services in one place. Reduces scattered student information and over-reliance on informal channels such as social media and notice boards, enabling quicker, more reliable access to association updates and documents.',
        previewImage: '/ucm-feg-preview.png',
        tools: [
          { name: 'Blade Templates', icon: 'skill-html' },
          { name: 'JavaScript', icon: 'skill-js' },
          { name: 'Laravel', icon: 'server' },
          { name: 'Tailwind CSS', icon: 'tailwind' }
        ]
      },
      p3: {
        name: 'Capital Way — Transport Management System',
        type: 'Institutional website',
        desc: 'Web application for day-to-day operations of an interprovincial carrier in Mozambique: ticketing, fleet, finance, alerts and driver schedules. Replaces paper tickets and notebooks with centralised records, improves fleet visibility and compliance alerts (insurance, maintenance, documentation), clarifies revenue by route and payment method, and reduces scheduling errors and conflicts.',
        tools: [
          { name: 'Lucide React', icon: 'code' },
          { name: 'React', icon: 'react' },
          { name: 'Tailwind CSS', icon: 'tailwind' }
        ],
        previewImage: '/capital-way-preview.webp',
        liveUrl: 'https://capital-way-az8h.vercel.app/',
        liveLabel: 'View online'
      },
      p4: {
        name: 'Personal Portfolio — Vandro Correia',
        type: 'Digital portfolio',
        desc: 'Personal portfolio website developed for collaborator Vandro Correia, focused on a professional presentation of his work and skills. Modern, fully responsive interface with smooth section navigation and design aligned with the client\'s visual identity.',
        tools: [
          { name: 'React', icon: 'react' },
          { name: 'Vite', icon: 'trend' },
          { name: 'Tailwind CSS', icon: 'tailwind' }
        ],
        previewImage: '/vandro-correia-preview.webp',
        liveUrl: 'https://vandro-correia.vercel.app/',
        liveLabel: 'View online'
      },
      previewAction: 'View project'
    },
    cta: {
      tagline: 'Every good conversation starts with a clear challenge.',
      badge: 'Available to collaborate',
      title: 'Let’s turn the next idea into a product.',
      lead: 'Web projects, software and partnerships with clear goals — from the first brief to delivery.',
      text: 'If you are looking for someone who combines technical curiosity, direct communication and a focus on execution, tell me what you have in mind. We can define the next step together.',
      btn: 'Start a conversation'
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
