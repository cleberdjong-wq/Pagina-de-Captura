/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, memo } from 'react';
import { Check, X, ChevronDown, ChevronUp, MessageSquare, Star, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQ_ITEMS = [
  {
    question: "Qual o valor do investimento?",
    answer: "O investimento varia de acordo com o tamanho do seu negócio e seus objetivos de crescimento. Durante nossa reunião de apresentação, faremos um diagnóstico e apresentaremos a melhor proposta para o seu momento."
  },
  {
    question: "O que é Funil de Performance Otimizado?",
    answer: "É uma metodologia exclusiva que integra múltiplos canais de aquisição (Google, Meta, etc.) com uma estratégia de conversão otimizada, garantindo que apenas leads qualificados cheguem ao seu time comercial."
  },
  {
    question: "Posso Cancelar a qualquer momento?",
    answer: "Sim, trabalhamos com transparência. Os termos de cancelamento são discutidos e estabelecidos em contrato para garantir segurança para ambas as partes."
  },
  {
    question: "Quanto devo investir em tráfego pago?",
    answer: "O valor ideal depende do seu segmento e da meta de vendas. Recomendamos um valor mínimo para que o funil tenha dados suficientes para otimizar e gerar resultados consistentes."
  },
  {
    question: "A oorloop é uma agência e tem time?",
    answer: "Sim, somos uma agência completa com especialistas em tráfego, design, copy e estratégia, focados exclusivamente em gerar ROI para nossos clientes."
  },
  {
    question: "Como contratar os serviços da oorloop?",
    answer: "O primeiro passo é preencher o formulário nesta página para agendar uma reunião de diagnóstico. Se houver fit entre o seu negócio e nossa metodologia, apresentaremos o plano de ação."
  }
];

const REVIEWS = [
  {
    name: "Joao Paulo",
    text: "Excelente empresa , recomendo , atenciosos e trouxe um finil que deu resultado ao meu negócio.",
    info: "2 avaliações • 6 meses atrás"
  },
  {
    name: "Gabriel Gonçalves",
    text: "Sem dúvidas a melhor opção em Agência de Marketing em Salvador! Com atendimento personalizado e atenção a cada detalhe, tenham certeza que eles te ajudarão a elevar os resultados do seu negócio.",
    info: "4 avaliações • 6 meses atrás"
  },
  {
    name: "Carla Adina",
    text: "Excelente empresa!! Compromisso e responsabilidade na entrega❤️",
    info: "2 avaliações • 6 meses atrás"
  },
  {
    name: "N.F. Acessórios e peças elétricas p/ autos LTDA",
    text: "Gostamos muito dos serviços prestados a nossa empresa. Principalmente da atenção , rapidez nas respostas e eficiência.",
    info: "1 avaliação • 6 meses atrás"
  }
];

const PARTNER_LOGOS = [
  { name: "NF Peças", src: "https://i.imgur.com/stmylI2.jpeg" },
  { name: "Global Distribuidora", src: "https://i.imgur.com/Xx2r6kK.png" },
  { name: "Ponto de Vista Drones", src: "https://i.imgur.com/7Eq4MNi.jpeg" },
  { name: "Jonatas Oliveira", src: "https://i.imgur.com/Ckfw3Ql.jpeg" }
];

const ContactForm = memo(function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    site: '',
    segmento: '',
    faturamento: '',
    momento: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formata a mensagem para o WhatsApp
    const message = `Olá oorloop! Acabei de preencher o formulário no site:%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*WhatsApp:* ${formData.whatsapp}%0A` +
      `*Site/Rede Social:* ${formData.site}%0A` +
      `*Segmento:* ${formData.segmento}%0A` +
      `*Faturamento:* ${formData.faturamento}%0A` +
      `*Momento:* ${formData.momento}`;

    // Redireciona para o WhatsApp após um pequeno delay para simular processamento
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(`https://api.whatsapp.com/send?phone=5571992121703&text=${message}`, '_blank', 'noopener,noreferrer');
      
      // Limpa o formulário
      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        site: '',
        segmento: '',
        faturamento: '',
        momento: ''
      });
    }, 1000);
  };

  return (
    <div className="bg-white rounded-[2rem] p-5 md:p-8 text-black shadow-2xl md:sticky md:top-8">
      <div className="bg-red-600 -mx-5 md:-mx-8 -mt-5 md:-mt-8 p-4 rounded-t-[2rem] mb-4 md:mb-6">
        <h2 className="text-white text-center font-bold text-lg leading-tight">
          Cadastre-se e Agende uma Reunião de Apresentação
        </h2>
      </div>
      <form className="space-y-2.5 md:space-y-3" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="nome"
          required
          placeholder="Nome" 
          value={formData.nome}
          onChange={handleInputChange}
          className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400" 
        />
        <input 
          type="email" 
          name="email"
          required
          placeholder="E-mail" 
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400" 
        />
        <input 
          type="tel" 
          name="whatsapp"
          required
          placeholder="Whatsapp" 
          value={formData.whatsapp}
          onChange={handleInputChange}
          className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400" 
        />
        <input 
          type="text" 
          name="site"
          placeholder="Site ou Rede Social da sua Empresa" 
          value={formData.site}
          onChange={handleInputChange}
          className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400" 
        />
        <input 
          type="text" 
          name="segmento"
          placeholder="Segmento do seu Negócio" 
          value={formData.segmento}
          onChange={handleInputChange}
          className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400" 
        />
        <div className="relative">
          <select 
            name="faturamento"
            value={formData.faturamento}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none text-gray-500"
          >
            <option value="">Qual é o Faturamento Mensal da sua Empresa?</option>
            <option value="Até R$ 10k">Até R$ 10k</option>
            <option value="R$ 10k a R$ 50k">R$ 10k a R$ 50k</option>
            <option value="R$ 50k a R$ 100k">R$ 50k a R$ 100k</option>
            <option value="Acima de R$ 100k">Acima de R$ 100k</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
        <div className="relative">
          <select 
            name="momento"
            value={formData.momento}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none text-gray-500"
          >
            <option value="">Qual o seu momento hoje?</option>
            <option value="Estou começando agora">Estou começando agora</option>
            <option value="Já faturo mas quero escalar">Já faturo mas quero escalar</option>
            <option value="Preciso de mais leads qualificados">Preciso de mais leads qualificados</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#32a832] hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-green-900/20 uppercase tracking-wider disabled:opacity-50 mt-2"
        >
          {isSubmitting ? 'ENVIANDO...' : 'QUERO AGENDAR UMA REUNIÃO'}
        </button>
      </form>
    </div>
  );
});

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black">
      {/* Notification Popup */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-4 right-4 z-50 bg-white text-black p-4 rounded-lg shadow-2xl flex items-center gap-3 border-l-4 border-green-500 max-w-xs"
          >
            <div className="bg-green-500 p-2 rounded-full">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold">Aparecida</p>
              <p className="text-[10px] text-gray-600">Agendou a Consultoria</p>
              <p className="text-[10px] text-gray-400">7 minuto(s) atrás</p>
            </div>
            <button onClick={() => setShowNotification(false)} className="ml-auto text-gray-400 hover:text-black">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-2 md:pt-8 pb-8 md:pb-12 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <div className="text-3xl md:text-4xl font-bold tracking-tighter flex items-end">
              <span className="text-[#00FF41]">oorloop</span>
              <span className="text-[#00FF41] text-[10px] font-medium ml-1 mb-1 lowercase tracking-widest">agência</span>
            </div>
          </div>

          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            Empresário, vamos gerar <span className="text-red-500">Leads Ultraqualificados</span> todos os dias e <span className="text-green-500">Aumentar as Vendas do seu Negócio</span> com o Funil de Performance Otimizado™
          </h1>

          <div className="flex flex-col items-center md:items-start gap-2 md:gap-3">
            <div className="flex items-center gap-2 bg-white/5 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 w-full max-w-sm md:w-fit justify-center md:justify-start">
              <span className="text-green-500">✅</span>
              <span className="text-sm font-medium">Seu funil de vendas rodando 24h por dia</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 w-full max-w-sm md:w-fit justify-center md:justify-start">
              <span className="text-green-500">✅</span>
              <span className="text-sm font-medium">Atraímos clientes certos para comprar</span>
            </div>
          </div>

          <div className="hidden md:block pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-4 items-center">
              {PARTNER_LOGOS.map((logo, i) => (
                <div key={i} className="bg-white p-2 rounded-full h-12 w-12 flex items-center justify-center shadow-lg shadow-white/5 overflow-hidden">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-full w-full object-contain rounded-full"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-white">
              <span className="font-bold">+ de 100 empresas confiam na oorloop</span>
            </p>
            <p className="text-xs text-red-500 mt-1 font-bold uppercase tracking-wider">
              Desde 2020 <span className="text-white">Ajudando Negócios a crescer!</span>
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div id="contato" className="w-full">
          <ContactForm />
          <div className="mt-8 text-center md:hidden space-y-6">
            <p className="text-lg font-bold uppercase tracking-wider">
              <span className="text-red-600">Desde 2020</span> <span className="text-white">Ajudando Negócios a crescer!</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 items-center opacity-70">
              {PARTNER_LOGOS.map((logo, i) => (
                <div key={i} className="bg-white p-1.5 rounded-full h-10 w-10 flex items-center justify-center overflow-hidden">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="h-full w-full object-contain rounded-full" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-12 md:py-24 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative order-1 md:order-2">
          <img 
            src="https://i.imgur.com/8BO9yuE.jpeg" 
            alt="Frustrated person" 
            className="rounded-2xl shadow-2xl grayscale w-full"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500/20 blur-3xl rounded-full"></div>
        </div>
        <div className="space-y-8 order-2 md:order-1 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight uppercase">
            Cansado de investir em marketing que só atrair curiosos e <span className="text-red-500">não geram vendas?</span>
          </h2>
          <div className="space-y-3">
            {[
              "Pessoas que não respondem o WhatsApp",
              "Só chega Lead RUIM totalmente desqualificado",
              "Curiosos que não geram vendas de fato!"
            ].map((text, i) => (
              <div key={i} className="flex items-center justify-center md:justify-start gap-3 bg-white/5 p-3 rounded-full border border-white/10">
                <span className="text-red-500 font-bold">X</span>
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-1">
            <img 
              src="https://i.imgur.com/OdozIPv.jpeg" 
              alt="Happy team" 
              className="rounded-2xl shadow-2xl w-full"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="space-y-8 order-2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight uppercase">
              O seu negócio precisa de estratégia! <span className="text-green-500">Funil de Vendas rodando 24h</span>
            </h2>
            <div className="space-y-3">
              {[
                "Lead Ultraqualificado chegando todos os dias",
                "Funil Integrando os canais com foco em VENDAS",
                "Sua Máquina de Vendas rodando 24h por dia"
              ].map((text, i) => (
                <div key={i} className="flex items-center justify-center md:justify-start gap-3 bg-white/10 p-3 rounded-full border border-white/20">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
          Venda mais <span className="text-green-500">usando o poder do Funil de Performance Otimizado</span>
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Se você quer acelerar o crescimento do seu negócio, precisa atrair as pessoas certas todos os dias para o seu negócio... É exatamente isso que fazemos! Implementamos o Funil de Performance Otimizado, atraindo o cliente certo!
        </p>
        <button 
          onClick={scrollToForm}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full transition-all shadow-xl shadow-green-900/40 uppercase tracking-widest text-sm"
        >
          QUERO RECEBER UMA APRESENTAÇÃO DO FUNIL
        </button>
      </section>


      {/* Testimonials Section */}
      <section className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 uppercase text-center">
          O que alguns de nossos clientes estão dizendo
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-white text-black p-8 rounded-2xl shadow-xl flex flex-col relative border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="bg-blue-600 p-1 rounded">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-3">{review.name}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow italic">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center text-[10px] text-gray-400 border-t pt-4">
                <span>{review.info}</span>
                <div className="flex gap-3">
                  <span className="cursor-pointer hover:text-blue-600">Útil</span>
                  <span className="cursor-pointer hover:text-red-600">Denunciar</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 px-4 bg-gray-100 text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 uppercase">
            Principais Dúvidas
          </h2>
          <div className="space-y-2">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 md:p-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[11px] md:text-sm uppercase pr-4">{item.question}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 md:w-5 md:h-5 shrink-0" /> : <ChevronDown className="w-4 h-4 md:w-5 md:h-5 shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-sm text-gray-600 border-t border-gray-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={scrollToForm}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full transition-all shadow-xl shadow-green-900/20 uppercase tracking-widest text-sm"
            >
              QUERO RECEBER UMA APRESENTAÇÃO DO FUNIL
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-black border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-center">
            <div className="text-4xl font-bold tracking-tighter flex items-end">
              <span className="text-[#00FF41]">oorloop</span>
              <span className="text-[#00FF41] text-[10px] font-medium ml-1 mb-1 lowercase tracking-widest">agência</span>
            </div>
          </div>
          
          <div className="text-[11px] text-gray-500 space-y-2 tracking-wide">
            <p>Oorloop Agência - Todos os Direitos Reservados - CNPJ: 44.568.033/0001-08</p>
            <p>contato@oorloop.com.br | WhatsApp + 55 71 99654-7340</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5571996547340" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
