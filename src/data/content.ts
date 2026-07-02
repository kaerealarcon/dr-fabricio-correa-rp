export interface CtaLink {
  texto: string
  url: string
}

export interface Depoimento {
  nome: string
  status: string
  texto: string
}

export interface ServicoItem {
  nome: string
  descricao: string
}

export interface ImplanteTopico {
  numero: number
  titulo: string
  descricao: string
}

export const whatsappNumero = '5517991934797'
export const telefoneExibicao = '17 99193-4797'
export const telefoneUrl = 'tel:+5517991934797'

function whatsappUrl(mensagem: string): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumero}&text=${encodeURIComponent(mensagem)}`
}

export const site = {
  title: 'Dentista em Rio Preto 24 horas | Dr. Fabrício Corrêa',
  desenvolvidoPor: 'MazyOS',
  copyright: 'Copyright © 2026 Dentista em Rio Preto Dr. Fabrício Corrêa',
}

export const navegacao = [
  { label: 'Início', url: '/' },
  { label: 'Entre em contato', url: '/contato' },
]

export const hero = {
  titulo: 'Dentista em Rio Preto 24 horas.',
  subtitulo: 'Dr. Fabricio Corrêa | CRO-SP 161429',
  chamada: 'Emergência 24h, perto de você',
  descricao:
    'Atendimento imediato com Dr. Fabricio Corrêa, cirurgião-dentista com ampla vivência clínica e mais de 20 anos de experiência em prótese dentária, atuando com excelência em emergências, implantes e extrações. Não atendemos convênio.',
  ctaWhatsapp: { texto: 'Fale agora no WhatsApp', url: whatsappUrl('Olá, gostaria de atendimento') } satisfies CtaLink,
  ctaTelefone: { texto: 'ou ligue para 17 99193-4797', url: telefoneUrl } satisfies CtaLink,
  aviso:
    'Atendemos exclusivamente na clínica, sem convênios, priorizando agilidade e qualidade no seu atendimento de emergência.',
}

export const localizacao = {
  titulo: 'Clínica perto de você.',
  descricao: 'Nossa clínica está localizada na Rua Adib Buchala, 220 – Vila São João, com fácil acesso.',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Adib+Buchala,+220+-+Vila+Sao+Joao,+São+José+do+Rio+Preto+-+SP',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Rua+Adib+Buchala,+220+-+Vila+Sao+Joao,+São+José+do+Rio+Preto+-+SP&output=embed',
  ctaWhatsapp: { texto: 'Fale agora no WhatsApp', url: whatsappUrl('Olá, gostaria de atendimento') } satisfies CtaLink,
  ctaTelefone: { texto: 'ou ligue para 17 99193-4797', url: telefoneUrl } satisfies CtaLink,
}

export const diferenciais = {
  titulo: 'Urgência e Emergência Odontológica',
  itens: [
    'Mais de 20 anos de experiência',
    'Atendimento rápido, humanizado e resolutivo',
    'Preços acessíveis e pagamento facilitado',
    'Consultório moderno e equipado',
  ],
  ctaWhatsapp: { texto: 'Fale agora no WhatsApp', url: whatsappUrl('Olá, gostaria de atendimento') } satisfies CtaLink,
  ctaTelefone: { texto: 'ou ligue para 17 99193-4797', url: telefoneUrl } satisfies CtaLink,
}

export const servicos: ServicoItem[] = [
  { nome: 'Dente Fraturado', descricao: 'Solução imediata para dentes fraturados.' },
  { nome: 'Extrações de dente', descricao: 'Extração imediata quando tem indicação.' },
  { nome: 'Dor de dente', descricao: 'Atendimento imediato para diagnóstico e alívio da dor.' },
]

export const avaliacoes = {
  titulo: 'Opiniões dos pacientes',
  profissional: 'Dr. Fabrício Corrêa',
  nota: 5.0,
  totalAvaliacoes: 244,
  depoimentos: [
    {
      nome: 'Leandro Taglietto',
      status: 'Cliente Verificado',
      texto:
        'Melhor cirurgião de São José do Rio Preto e região, retirou todos os meus medos de estar em consultorio ondotologico Dr.Fabricio melhor profissional que eu ja passei gratidao imensamente',
    },
    {
      nome: 'Juvenal Figueiredo',
      status: 'Cliente Verificado',
      texto:
        'Atendimento com responsabilidade e dedicação… demonstrando um ótimo conhecimento no assunto. Obrigado Dr. Fabricio, estou muito grato. Sucesso, indicarei a outras pessoas.',
    },
    {
      nome: 'Alexsandra Henrique',
      status: 'Cliente Verificado',
      texto: 'Uma ótima experiência o Dr Fabrício e um ótimo profissional, me atendeu quando eu mais precisava. Podem ir sem medo',
    },
    {
      nome: 'Andreia Souza',
      status: 'Cliente Verificado',
      texto:
        'Atendimento rápido, sem atrasos , o Dr Fabricio Correa é um excelente profissional,capacitado e nos trás segurança e tranquilidade no tratamento. Com certeza recomendo !',
    },
    {
      nome: 'Janiquecia Araújo',
      status: 'Cliente Verificado',
      texto:
        'Um profissional excelente me atendeu de imediato pra uma emergência, e foi educado e humano super recomendo e a clínica é linda e aconchegante tudo perfeito',
    },
    {
      nome: 'Marco Rodrigues',
      status: 'Cliente Verificado',
      texto: 'fui muito bem atendido na recepção. Dr. Fabrício Correa me atendeu super bem e no horário marcado. Muito bom.',
    },
    {
      nome: 'Neia Joanelli',
      status: 'Cliente Verificado',
      texto: 'Excelente profissional,super indico !!obrigada Dr.Fabricio pelo atendimento.',
    },
    {
      nome: 'Valdirene Soares',
      status: 'Cliente Verificado',
      texto:
        'Olá... Atendimento excelente, super indico ótima qualificação e recebimento ao paciente desde o contato até o atendimento a clínica.',
    },
    {
      nome: 'Joelma Guimarães',
      status: 'Cliente Verificado',
      texto: 'Atendimento alto padrão. Excelente profissionais. Ótimo lugar',
    },
    {
      nome: 'Ana Arantes',
      status: 'Cliente Verificado',
      texto: 'Profissional mega competente, atencioso e resoluto. Agradeço por todos atendimentos e soluções! Super indico!',
    },
    {
      nome: 'Soraya Regina',
      status: 'Cliente Verificado',
      texto:
        'Excelente atendimento, o Dr Fabrício muito atencioso e a senhora que estava lá também, ambiente agradável e clareza nas explicações , super recomendo!!!',
    },
    {
      nome: 'Vandira Anjos',
      status: 'Cliente Verificado',
      texto: 'Doutor Fabricio, parabéns pelo seu trabalho , estou muito satisfeita com com seu trabalho, meu sorriso está de volta obrigada pelo carinho',
    },
    {
      nome: 'Tonny Martins',
      status: 'Cliente Verificado',
      texto: 'Dr. Fabrício Corrêa como sempre impecável na conduta técnica e humana. Nota mil👏👏👏',
    },
    {
      nome: 'Anaisa Peres',
      status: 'Cliente Verificado',
      texto: 'Fui muito bem atendida tanto pela recepcionista quanto pelo dentista, super rápidos e atenciosos, super recomendo',
    },
    {
      nome: 'Marta Vasconcelos',
      status: 'Cliente Verificado',
      texto:
        'Muito feliz com o atendimento, até porque hoje é sábado e foi de uma atenção ímpar, sendo que foi uma emergência e nem moro em rio preto. Super indico.',
    },
    {
      nome: 'Maria morais',
      status: 'Cliente Verificado',
      texto:
        'Foi ótima a experiência, é um profissional exelente, ele é super atencioso, eu desconheço outro profissional como o Dr Fabrício, ele ama o que faz, e faz com amor e carinho , todos meus amigos que foram atendidos por ele, saíram satisfeitos com o trabalho dele. Parabens.',
    },
  ] as Depoimento[],
}

export const implantes = {
  titulo: 'Implante dentário em Rio Preto.',
  subtitulo: 'Prótese protocolo: Porque este tratamento é ideal para você?',
  topicos: [
    {
      numero: 1,
      titulo: 'Implante dentário fixo sobre apenas 4 pinos.',
      descricao:
        'Mais segurança e estabilidade: A técnica All-on-Four, internacionalmente, proporciona uma prótese protocolo fixa sobre apenas quatro implantes, devolvendo função e estética de forma permanente.',
    },
    {
      numero: 2,
      titulo: 'Solução recomendada para Próteses Móveis e Dentaduras.',
      descricao:
        'Deixe o desconforto no passado: Esqueça os momentos de insegurança com próteses móveis. A técnica All-on-Four fixa a prótese com segurança, sem risco de deslocamento ao mastigar ou sorrir.',
    },
    {
      numero: 3,
      titulo: 'Ideal até para casos mais complexos.',
      descricao:
        'Tratamento inovador para sorrisos difíceis: Mesmo em maxilas atróficas, a técnica resolve até 90% dos casos anteriormente considerados inoperáveis, trazendo uma solução inovadora para pacientes com perda dental.',
    },
  ] as ImplanteTopico[],
  ctaWhatsapp: { texto: 'Fale agora no WhatsApp', url: whatsappUrl('Olá, gostaria de atendimento') } satisfies CtaLink,
  galeriaCases: {
    titulo: 'Veja alguns cases',
    totalImagens: 10,
  },
}

export const rodape = {
  bio: 'Fabricio Corrêa é Cirurgião-dentista e técnico em prótese há mais de 20 anos, atua na área de implantes e prótese dentária.',
  redesSociais: [{ rede: 'Instagram', url: 'https://www.instagram.com/odontofabricio' }],
  whatsappFlutuante: {
    numero: '+55 (17) 99193-4797',
    url: `https://api.whatsapp.com/send?phone=${whatsappNumero}`,
    textoBotao: 'Fale no WhatsApp',
    tituloWidget: 'Chame no WhatsApp',
    subtitulo: 'Clínica Dr. Fabricio Corrêa Odontologia',
    mensagem: 'Responderemos em alguns instantes.',
  },
}

export const paginaContato = {
  titulo: 'Entre em contato',
  subtitulo: 'Tire suas dúvidas e solicite o seu orçamento.',
  telefoneWhatsapp: {
    numero: '17 99193-4797',
    url: `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(
      'Olá, estou no site e quero mais informações sobre a prótese fixa.',
    )}`,
  },
  endereco: {
    logradouro: 'Rua Adib Buchala, 220',
    bairro: 'Vila São Manoel',
    cidade: 'São José do Rio Preto',
    estado: 'SP',
  },
}
