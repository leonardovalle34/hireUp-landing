import Image from "next/image";
import Link from "next/link";

// ─── SVG icons ────────────────────────────────────────────────────────────────

function AceRobot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Ace — mascote do HireUp"
    >
      <defs>
        <radialGradient id="aceGlow" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="148" rx="98" ry="72" fill="url(#aceGlow)" />

      {/* Antenna */}
      <rect x="94" y="4" width="12" height="30" rx="6" fill="#3b82f6" />
      <circle cx="100" cy="4" r="10" fill="#60a5fa" />
      <circle cx="100" cy="4" r="5" fill="#bfdbfe" />

      {/* Head */}
      <rect x="26" y="32" width="148" height="86" rx="22" fill="#1e40af" />
      <rect
        x="36"
        y="38"
        width="128"
        height="10"
        rx="5"
        fill="white"
        opacity="0.07"
      />

      {/* Left eye */}
      <circle cx="68" cy="76" r="20" fill="#1d4ed8" />
      <circle cx="68" cy="76" r="13" fill="#93c5fd" />
      <circle cx="68" cy="76" r="7" fill="#1e3a8a" />
      <circle cx="62" cy="70" r="3" fill="white" />

      {/* Right eye */}
      <circle cx="132" cy="76" r="20" fill="#1d4ed8" />
      <circle cx="132" cy="76" r="13" fill="#93c5fd" />
      <circle cx="132" cy="76" r="7" fill="#1e3a8a" />
      <circle cx="126" cy="70" r="3" fill="white" />

      {/* Smile */}
      <path
        d="M 72 102 Q 100 118 128 102"
        stroke="#93c5fd"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Neck */}
      <rect x="80" y="116" width="40" height="16" rx="5" fill="#172554" />

      {/* Body */}
      <rect x="12" y="130" width="176" height="82" rx="18" fill="#1e3a8a" />

      {/* Screen on body */}
      <rect
        x="34"
        y="146"
        width="132"
        height="22"
        rx="8"
        fill="#1d4ed8"
        opacity="0.7"
      />
      <rect
        x="42"
        y="152"
        width="82"
        height="10"
        rx="5"
        fill="#60a5fa"
        opacity="0.9"
      />

      {/* Buttons */}
      <circle cx="54" cy="188" r="8" fill="#1d4ed8" />
      <circle cx="78" cy="188" r="8" fill="#3b82f6" />
      <circle cx="102" cy="188" r="8" fill="#60a5fa" />
      <circle cx="126" cy="188" r="8" fill="#3b82f6" />
      <circle cx="150" cy="188" r="8" fill="#1d4ed8" />

      {/* Arms */}
      <rect x="0" y="138" width="14" height="46" rx="7" fill="#1e40af" />
      <circle cx="7" cy="188" r="8" fill="#1d4ed8" />
      <rect x="186" y="138" width="14" height="46" rx="7" fill="#1e40af" />
      <circle cx="193" cy="188" r="8" fill="#1d4ed8" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function NewsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 shrink-0 text-emerald-500"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XMarkIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 shrink-0 text-gray-300"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 text-yellow-400"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

// ─── Section components ────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#001020]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="HireUp">
          <Image
            src="/hireUpLogo.png"
            alt="HireUp logo"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <span className="text-xl font-extrabold tracking-tight text-white">
            HireUp
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#planos"
            className="hidden text-sm font-medium text-white/70 transition hover:text-white sm:block"
          >
            Planos
          </a>
          <a
            href="https://app.hireup.online"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Entrar
          </a>
          <a
            href="https://app.hireup.online"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-md transition hover:bg-blue-500 active:scale-95"
          >
            Começar grátis
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      className="overflow-hidden bg-gradient-to-br from-[#001633] to-[#060042] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-label="Início"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-sm text-blue-300">
            <span>✨</span>
            <span>Inteligência Artificial + Inglês Profissional</span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fale inglês com{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              confiança
            </span>{" "}
            nas suas entrevistas
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-blue-100/75 sm:text-xl">
            Simule entrevistas reais, treine com um tutor de IA personalizado e
            evolua no seu ritmo. Sem awkward silences, sem julgamentos.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="https://app.hireup.online"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-900/60 transition hover:bg-blue-500 active:scale-95"
            >
              Começar grátis
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#como-funciona"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Como funciona
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-blue-200/60 lg:justify-start">
            <li>✓ Sem cartão de crédito</li>
            <li>✓ Cancele quando quiser</li>
            <li>✓ Plano gratuito disponível</li>
          </ul>
        </div>

        {/* Ace robot */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Decorative glow ring */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />
            <Image
              src="/ace-waving.png"
              alt="Ace Robot"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/10">
          {[
            { value: "40 aulas", label: "60 horas de conteúdo" },
            { value: "4 tutores", label: "Personalizados por nível" },
            { value: "200+", label: "Perguntas de quiz" },
            { value: "24/7", label: "Disponível sempre" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 text-center">
              <p className="text-2xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-blue-200/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <MicIcon />,
      title: "Entrevista com IA",
      description:
        "Simule entrevistas reais em inglês com o Ace. Receba feedback instantâneo sobre pronúncia, gramática, vocabulário e fluência.",
      color: "bg-blue-600",
    },
    {
      icon: <BotIcon />,
      title: "Tutor Personalizado",
      description:
        "Converse livremente ou pratique lições estruturadas com 4 tutores de IA adaptados ao seu nível — do iniciante ao avançado.",
      color: "bg-indigo-600",
    },
    {
      icon: <BookIcon />,
      title: "40 Aulas Completas",
      description:
        "Curso estruturado com 60 horas de conteúdo, do básico ao Business English, com explicações, exemplos e quiz em cada aula.",
      color: "bg-violet-600",
    },
    {
      icon: <BrainIcon />,
      title: "Quiz Inteligente",
      description:
        "Pratique gramática e vocabulário com centenas de perguntas que nunca se repetem nos acertos, com explicação detalhada de cada resposta.",
      color: "bg-purple-600",
    },
    {
      icon: <NewsIcon />,
      title: "Notícias em Inglês",
      description:
        "Leia notícias reais e atualizadas de fontes como The Guardian e New York Times, com prática guiada pelo tutor sobre os temas.",
      color: "bg-cyan-600",
    },
    {
      icon: <BarChartIcon />,
      title: "Teste de Nivelamento",
      description:
        "Descubra seu nível real de inglês com um teste completo de gramática, pronúncia, interpretação e conversação.",
      color: "bg-emerald-600",
    },
  ];

  return (
    <section
      id="funcionalidades"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Funcionalidades
          </span>
        </div>
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Tudo que você precisa para dominar o inglês profissional
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-gray-500">
          O HireUp combina IA de última geração com metodologia comprovada para
          acelerar seu aprendizado.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`${f.color} mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-md`}
              >
                {f.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {f.title}
              </h3>
              <p className="leading-relaxed text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Faça o teste de nivelamento",
      description:
        "Em menos de 5 minutos, o Ace avalia seu inglês atual e cria um plano de estudos personalizado para os seus objetivos.",
      emoji: "📊",
    },
    {
      number: "02",
      title: "Treine com seu tutor de IA",
      description:
        "Simule entrevistas, pratique reuniões e corrija seus erros em tempo real. O Ace está disponível 24 horas por dia, 7 dias por semana.",
      emoji: "🎤",
    },
    {
      number: "03",
      title: "Conquiste seus objetivos",
      description:
        "Acompanhe sua evolução, receba relatórios de progresso e chegue preparado para qualquer entrevista ou reunião em inglês.",
      emoji: "🏆",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Como funciona
          </span>
        </div>
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Três passos para o inglês profissional
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-500">
          Do zero ao fluente em menos tempo do que você imagina.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector line (desktop) */}
              {idx < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+3rem)] top-8 hidden h-0.5 w-[calc(100%-6rem)] bg-blue-200 lg:block"
                  aria-hidden="true"
                />
              )}

              {/* Step circle */}
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl shadow-lg shadow-blue-200">
                <span>{step.emoji}</span>
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-extrabold text-blue-600 shadow">
                  {idx + 1}
                </span>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://app.hireup.online"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500 active:scale-95"
          >
            Começar agora, é grátis
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "R$0",
      period: "para sempre",
      description: "Ideal para conhecer o HireUp",
      cta: "Começar grátis",
      highlight: false,
      features: [
        { text: "1 simulação de entrevista a cada 2 dias", included: true },
        { text: "Teste de nivelamento", included: true },
        { text: "40 aulas completas (60h de conteúdo)", included: true },
        { text: "Quiz — 20 perguntas por dia", included: true },
        { text: "Feed de notícias em inglês", included: true },
        { text: "Tutor de IA personalizado", included: false },
        { text: "API key própria", included: false },
      ],
    },
    {
      name: "Practice",
      price: "R$29",
      period: "por mês",
      description: "Para quem quer evoluir de verdade",
      cta: "Assinar Practice",
      badge: "Mais Popular",
      highlight: true,
      features: [
        { text: "1 simulação de entrevista por dia", included: true },
        { text: "Tutor de IA — 30 minutos por dia", included: true },
        { text: "Teste de nivelamento mensal", included: true },
        { text: "40 aulas completas (60h de conteúdo)", included: true },
        { text: "Quiz — 50 perguntas por dia", included: true },
        { text: "Feed de notícias em inglês", included: true },
        { text: "Badges e certificado de conclusão", included: true },
        {
          text: "Entrevistas e Tutor ilimitados com sua API key",
          included: true,
        },
      ],
    },
    {
      name: "Fluent",
      price: "R$99",
      period: "por mês",
      description: "Para quem quer a experiência completa",
      cta: "Assinar Fluent",
      highlight: false,
      features: [
        { text: "3 simulações de entrevista por dia", included: true },
        { text: "Tutor de IA — 30 minutos por dia", included: true },
        { text: "Teste de nivelamento mensal", included: true },
        { text: "40 aulas completas (60h de conteúdo)", included: true },
        { text: "Quiz — 50 perguntas por dia", included: true },
        { text: "Feed de notícias em inglês", included: true },
        { text: "Badges e certificado de conclusão", included: true },
        {
          text: "Entrevistas e Tutor ilimitados com sua API key",
          included: true,
        },
      ],
    },
  ];

  return (
    <section
      id="planos"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Planos
          </span>
        </div>
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Escolha o plano ideal para você
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-gray-500">
          Comece de graça. Faça upgrade quando estiver pronto.
          <br />
          Cancele quando quiser, sem taxas.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border-2 p-8 transition ${
                plan.highlight
                  ? "border-blue-500 bg-gradient-to-b from-blue-50 to-white shadow-xl shadow-blue-100"
                  : "border-gray-200 bg-white shadow-md hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3
                  className={`mb-1 text-xl font-extrabold ${plan.highlight ? "text-blue-700" : "text-gray-900"}`}
                >
                  {plan.name}
                </h3>
                <p className="mb-4 text-sm text-gray-500">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-sm text-gray-400">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3">
                    {f.included ? <CheckIcon /> : <XMarkIcon />}
                    <span
                      className={`text-sm ${f.included ? "text-gray-700" : "text-gray-400"}`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.hireup.online"
                className={`flex w-full items-center justify-center rounded-full py-3.5 text-sm font-bold transition active:scale-95 ${
                  plan.highlight
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200 hover:bg-blue-500"
                    : "border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Todos os planos incluem acesso ao PWA — sem necessidade de instalar
          nada.
        </p>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana Lima",
      role: "Desenvolvedora de Software",
      location: "São Paulo, SP",
      avatar: "👩🏻‍💻",
      stars: 5,
      text: "Depois de 3 meses com o HireUp, consegui a vaga que sempre quis em uma empresa americana. O treino de entrevistas com o Ace foi decisivo. Finalmente parecia uma prática real, não um exercício de escola.",
    },
    {
      name: "Carlos Mendes",
      role: "Gerente de Projetos",
      location: "Belo Horizonte, MG",
      avatar: "👨🏽‍💼",
      stars: 5,
      text: "O feedback em tempo real mudou tudo para mim. Antes eu travava na hora de falar inglês em reunião. Hoje conduzo daily standups inteiras com confiança. Em 2 meses evoluí mais do que em anos de escola.",
    },
    {
      name: "Juliana Costa",
      role: "Analista de Marketing",
      location: "Porto Alegre, RS",
      avatar: "👩🏾‍🎨",
      stars: 5,
      text: "O melhor investimento que fiz na minha carreira. O tutor personalizado realmente entende o meu nível e não fica repetindo o que eu já sei. Me prepara para o inglês do dia a dia, não para fazer prova.",
    },
  ];

  return (
    <section
      id="depoimentos"
      className="bg-blue-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Depoimentos
          </span>
        </div>
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Quem usa, recomenda
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-gray-500">
          Profissionais de todo o Brasil estão transformando suas carreiras com
          o HireUp.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-md"
            >
              {/* Stars */}
              <div
                className="mb-4 flex gap-0.5"
                aria-label={`${t.stars} estrelas`}
              >
                {Array.from({ length: t.stars }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 flex-1 leading-relaxed text-gray-600">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl"
                  aria-hidden="true"
                >
                  {t.avatar}
                </span>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "O HireUp funciona para todos os níveis de inglês?",
      answer:
        "Sim! O teste de nivelamento identifica exatamente onde você está — do básico ao avançado — e o Ace adapta toda a experiência ao seu nível. Não importa se você mal sabe o básico ou já fala bem mas quer polir o inglês corporativo.",
    },
    {
      question: "Como funciona a simulação de entrevista com IA?",
      answer:
        'O Ace assume o papel de um entrevistador real e faz perguntas comuns em inglês, como "Tell me about yourself" ou perguntas técnicas da sua área. Depois de cada resposta, ele aponta erros de gramática, vocabulário e pronúncia, e sugere como melhorar. Tudo em tempo real, via voz.',
    },
    {
      question: "Qual a diferença entre os planos Practice e Fluent?",
      answer:
        "A principal diferença é o número de simulações de entrevista por dia: o Practice permite 1 por dia, enquanto o Fluent permite até 3. Ambos os planos incluem Tutor de IA, todas as 40 aulas, quiz, feed de notícias, badges e certificado de conclusão. Se você usar sua própria API key, as entrevistas e o tutor ficam ilimitados em ambos os planos.",
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer:
        "Sim, sem burocracia. Você pode cancelar diretamente no app ou entrando em contato com o suporte. Não há multa, fidelidade ou prazo mínimo. Ao cancelar, você mantém o acesso até o fim do período já pago.",
    },
    {
      question: "O HireUp funciona bem no celular?",
      answer:
        "Funciona perfeitamente! O HireUp é um PWA (Progressive Web App) — basta abrir no navegador do seu celular e, se quiser, adicionar à tela inicial para ter uma experiência idêntica à de um app nativo. Funciona offline para conteúdos já carregados e é compatível com iOS e Android.",
    },
  ];

  return (
    <section id="faq" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            FAQ
          </span>
        </div>
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Perguntas frequentes
        </h2>
        <p className="mx-auto mb-12 text-center text-lg text-gray-500">
          Não encontrou o que precisava?{" "}
          <a
            href="mailto:oi@hireup.online"
            className="font-medium text-blue-600 hover:underline"
          >
            Fale com a gente
          </a>
          .
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-gray-200 bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-gray-900 hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                {/* Chevron — rotates when open via CSS */}
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2 text-gray-500 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="bg-gradient-to-br from-[#001633] to-[#060042] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-5xl">🚀</p>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Sua próxima entrevista em inglês começa aqui
        </h2>
        <p className="mb-8 text-lg text-blue-100/75">
          Junte-se aos profissionais brasileiros que já estão evoluindo com o
          HireUp. Gratuito para começar, sem cartão de crédito.
        </p>
        <a
          href="https://app.hireup.online"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-xl transition hover:bg-blue-50 active:scale-95"
        >
          Criar minha conta grátis
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="bg-[#000d20] px-4 py-12 sm:px-6 lg:px-8"
      aria-label="Rodapé"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-2 flex space-around">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/hireUpLogo.png"
                alt="HireUp logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="text-xl font-extrabold text-white">HireUp</span>
            </div>
            <p className="text-sm leading-relaxed text-blue-200/50 max-w-xs">
              Inglês profissional com IA para adultos brasileiros. Simule
              entrevistas, treine com tutores de IA e evolua no seu ritmo.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.linkedin.com/company/hire-up-english"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-blue-500 hover:text-blue-400"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/hireup.online/"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-blue-500 hover:text-blue-400"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/40">
              Produto
            </h3>
            <ul className="space-y-2 text-sm text-blue-200/50">
              {[
                { label: "Funcionalidades", href: "#funcionalidades" },
                { label: "Como funciona", href: "#como-funciona" },
                { label: "Planos", href: "#planos" },
                {
                  label: "Contato",
                  href: "mailto:nexustecnologia@protonmail.me",
                },
                { label: "Depoimentos", href: "#depoimentos" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:text-blue-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-blue-200/30">
          <p>
            © {new Date().getFullYear()} HireUp. Todos os direitos reservados.
            Feito com ❤️ no Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
