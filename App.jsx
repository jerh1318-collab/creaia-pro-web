import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  UserRound,
  BriefcaseBusiness,
  BarChart3,
  GitBranch,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Cloud,
  Star,
  Send,
  ArrowRight,
  ClipboardList,
  CreditCard,
  Download,
  MessageCircle,
  Mail,
  Clock3,
  Search,
  Bell,
  UserCircle,
  Plus,
  Home,
  FolderOpen,
  Settings,
  WalletCards,
  Check,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/51991561272?text=Hola%20CreaIA%20Pro%2C%20quiero%20solicitar%20un%20archivo%20profesional.%20Necesito%20informaci%C3%B3n%20sobre%20sus%20servicios.";

const services = [
  {
    icon: FileText,
    title: "CreaIA Docs",
    text: "Cartas, reclamos, solicitudes.",
    color: "linear-gradient(135deg, #2f80ff, #23d5d5)",
  },
  {
    icon: UserRound,
    title: "CreaIA CV",
    text: "CVs y documentos laborales.",
    color: "linear-gradient(135deg, #10b981, #2dd4bf)",
  },
  {
    icon: BriefcaseBusiness,
    title: "CreaIA Business",
    text: "Brochures, cotizaciones, propuestas.",
    color: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
  {
    icon: BarChart3,
    title: "CreaIA Excel",
    text: "Presupuestos, control y dashboards.",
    color: "linear-gradient(135deg, #22c55e, #10b981)",
  },
  {
    icon: GitBranch,
    title: "CreaIA Gestión",
    text: "Correos, responsables y seguimiento.",
    color: "linear-gradient(135deg, #f97316, #fbbf24)",
  },
];

const prices = [
  { icon: FileText, title: "Carta o solicitud", price: "S/20", color: "#2563eb" },
  { icon: MessageCircle, title: "Reclamo personalizado", price: "S/25", color: "#0891b2" },
  { icon: UserRound, title: "CV profesional", price: "S/40", color: "#7c3aed" },
  { icon: BriefcaseBusiness, title: "Brochure para negocio", price: "S/70", color: "#f97316" },
  { icon: BarChart3, title: "Excel de control", price: "S/50", color: "#059669" },
  { icon: Mail, title: "Control de correos", price: "S/80", color: "#ea580c" },
];

const packages = [
  {
    name: "Paquete Reclamo Pro",
    price: "S/45",
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
    items: ["1 reclamo personalizado", "Texto para correo", "Mensaje para WhatsApp", "Entrega Word + PDF"],
  },
  {
    name: "Paquete CV Pro",
    price: "S/50",
    gradient: "linear-gradient(135deg, #0d9488, #10b981)",
    items: ["CV profesional", "Perfil laboral", "Mensaje para postular", "Diseño moderno"],
  },
  {
    name: "Paquete Negocio Básico",
    price: "S/100",
    gradient: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
    items: ["Brochure 1 hoja", "Texto comercial", "WhatsApp Business", "Entrega PDF + imagen"],
  },
  {
    name: "Paquete Gestión Básica",
    price: "S/180",
    gradient: "linear-gradient(135deg, #f97316, #f59e0b)",
    items: ["Control de correos", "Línea de tiempo", "Matriz de responsables", "Pendientes y acciones"],
    badge: "Mejor valor",
  },
];

const floatingCards = [
  { icon: Zap, title: "Rápido", text: "Archivos listos en menos tiempo", side: "left", className: "float-1" },
  { icon: ShieldCheck, title: "Seguro", text: "Tus datos siempre protegidos", side: "left", className: "float-2" },
  { icon: CheckCircle2, title: "Profesional", text: "Formatos listos para usar", side: "left", className: "float-3" },
  { icon: Sparkles, title: "IA Inteligente", text: "Contenido optimizado", side: "right", className: "float-4" },
  { icon: Cloud, title: "100% Online", text: "Desde cualquier lugar", side: "right", className: "float-5" },
];

function Logo({ compact = false }) {
  return (
    <div className="logo-row">
      <div className="logo-mark">
        <div className="logo-c" />
        <div className="logo-dot dot-a" />
        <div className="logo-dot dot-b" />
      </div>
      {!compact && <span className="logo-text">CreaIA Pro</span>}
    </div>
  );
}

function FloatingFeature({ item }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`floating-card ${item.side} ${item.className}`}
    >
      <div className="floating-icon">
        <Icon size={23} />
      </div>
      <div>
        <p>{item.title}</p>
        <span>{item.text}</span>
      </div>
    </motion.div>
  );
}

function DashboardMockup() {
  const menu = [
    [Home, "Panel"],
    [FolderOpen, "Mis archivos"],
    [ClipboardList, "Plantillas"],
    [BriefcaseBusiness, "Servicios"],
    [WalletCards, "Pagos"],
    [Settings, "Configuración"],
  ];
  const stats = [
    [FileText, "12", "Documentos"],
    [Clock3, "8", "En proceso"],
    [CheckCircle2, "24", "Completados"],
    [Star, "4.9", "Calificación"],
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="dashboard"
    >
      <aside className="dashboard-sidebar">
        <Logo compact />
        <p>CreaIA Pro</p>
        <div className="dashboard-menu">
          {menu.map(([Icon, label]) => (
            <div key={label}>
              <Icon size={16} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-top">
          <div>
            <h3>¡Bienvenido! 👋</h3>
            <p>Crea tu próximo archivo profesional</p>
          </div>
          <div className="dashboard-icons">
            <Search size={18} />
            <Bell size={18} />
            <UserCircle size={19} />
          </div>
        </div>

        <div className="stats-grid">
          {stats.map(([Icon, value, label]) => (
            <div className="stat-card" key={label}>
              <Icon size={19} />
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="recent-grid">
          <div className="recent-card">
            <h4>Mis archivos recientes</h4>
            {[
              ["Reclamo por servicio defectuoso", "PDF", "Completado"],
              ["CV Profesional - Juan Pérez", "PDF", "Completado"],
              ["Propuesta Comercial - Empresa XYZ", "DOCX", "En proceso"],
              ["Presupuesto de Proyecto", "XLSX", "Completado"],
            ].map(([name, type, status]) => (
              <div className="file-row" key={name}>
                <span>{name}</span>
                <div>
                  <em className={status === "Completado" ? "done" : "process"}>{status}</em>
                  <b>{type}</b>
                </div>
              </div>
            ))}
          </div>

          <div className="create-card">
            <h4>Crear nuevo</h4>
            <p>Elige un servicio para comenzar</p>
            <button>
              <Plus size={16} /> Nuevo archivo
            </button>
            <div className="doc-illustration">
              <FileText size={48} />
              <span>Entrega digital rápida</span>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="page">
      <section className="hero" id="inicio">
        <div className="hero-bg" />
        <header className="header">
          <Logo />
          <nav>
            <a className="active" href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#precios">Precios</a>
            <a href="#paquetes">Paquetes</a>
            <a href="#funciona">Cómo funciona</a>
          </nav>
          <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <Send size={16} /> Solicitar mi archivo
          </a>
        </header>

        <div className="hero-content">
          {floatingCards.map((item) => <FloatingFeature key={item.title} item={item} />)}

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="hero-logo">
            <div className="hero-logo-inner" />
            <span className="hero-dot-a" />
            <span className="hero-dot-b" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}>
            Crea<span>IA Pro</span>
          </motion.h1>
          <p className="hero-title">Documentos, diseños y soluciones digitales con IA</p>
          <p className="hero-subtitle">Tus ideas convertidas en archivos profesionales.</p>

          <div className="hero-buttons">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn primary">
              <Send size={18} /> Crear mi archivo ahora
            </a>
            <a href="#servicios" className="btn secondary">
              Ver servicios <ArrowRight size={18} />
            </a>
          </div>

          <div className="chips">
            <span>Rápido</span>
            <span>Seguro</span>
            <span>100% online</span>
            <span>Revisión personalizada</span>
          </div>

          <DashboardMockup />
        </div>
      </section>

      <main>
        <section className="section services" id="servicios">
          <div className="section-head">
            <p>Servicios</p>
            <h2>Todo lo que necesitas, <span>en un solo lugar</span></h2>
            <small>Soluciones digitales profesionales para personas, emprendedores y empresas.</small>
          </div>

          <div className="services-grid">
            {services.map(({ icon: Icon, title, text, color }) => (
              <motion.div whileHover={{ y: -6 }} key={title} className="service-card">
                <div className="service-icon" style={{ background: color }}>
                  <Icon size={31} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <button><ArrowRight size={17} /></button>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section how" id="funciona">
          <div className="section-head">
            <p>¿Cómo funciona?</p>
            <h2>Proceso simple, <span>rápido y seguro</span></h2>
          </div>

          <div className="steps">
            {[
              [FileText, "Elige el servicio", "Selecciona el tipo de archivo que necesitas."],
              [ClipboardList, "Llena el formulario", "Completa la información necesaria fácilmente."],
              [CreditCard, "Realiza el pago", "Confirma tu pedido con tu método favorito."],
              [Download, "Recibe tu archivo", "Obtén tu entrega profesional lista para usar."],
            ].map(([Icon, title, text], index) => (
              <div className="step" key={title}>
                <div className="step-icon"><Icon size={30} /></div>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section pricing" id="precios">
          <div className="section-head">
            <p>Precios</p>
            <h2>Precios justos para <span>resultados profesionales</span></h2>
          </div>

          <div className="price-grid">
            {prices.map(({ icon: Icon, title, price, color }) => (
              <div className="price-card" key={title}>
                <Icon size={35} color={color} />
                <h3>{title}</h3>
                <small>Desde</small>
                <strong style={{ color }}>{price}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section packages" id="paquetes">
          <div className="section-head">
            <p>Paquetes</p>
            <h2>Ahorra más con nuestros paquetes</h2>
          </div>

          <div className="package-grid">
            {packages.map((pkg) => (
              <motion.div whileHover={{ y: -6 }} key={pkg.name} className="package-card">
                {pkg.badge && <div className="badge">{pkg.badge}</div>}
                <div className="package-top" style={{ background: pkg.gradient }}>
                  <p>{pkg.name}</p>
                  <strong>{pkg.price}</strong>
                </div>
                <div className="package-body">
                  {pkg.items.map((item) => (
                    <div key={item}>
                      <Check size={17} />
                      <span>{item}</span>
                    </div>
                  ))}
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Elegir paquete</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section request" id="pedido">
          <div className="request-box">
            <div className="request-copy">
              <p>Solicitud</p>
              <h2>¿Listo para crear tu archivo profesional?</h2>
              <span>Completa tus datos y te contactaremos para confirmar precio, tiempo de entrega y método de pago.</span>
              <div className="contact-cards">
                <div>
                  <MessageCircle />
                  <b>WhatsApp</b>
                  <small>+51 991 561 272</small>
                </div>
                <div>
                  <Mail />
                  <b>Correo</b>
                  <small>jerh1318@gmail.com</small>
                </div>
                <div>
                  <Clock3 />
                  <b>Yape</b>
                  <small>991 561 272</small>
                </div>
              </div>
            </div>

            <form className="request-form">
              <div className="form-grid">
                <label>Nombre completo<input placeholder="Tu nombre" /></label>
                <label>WhatsApp<input placeholder="+51..." /></label>
              </div>
              <label>Servicio que necesitas
                <select>
                  <option>Carta o solicitud</option>
                  <option>Reclamo personalizado</option>
                  <option>CV profesional</option>
                  <option>Brochure o propuesta</option>
                  <option>Excel de control</option>
                  <option>Control de correos</option>
                </select>
              </label>
              <label>Describe tu pedido
                <textarea placeholder="Cuéntanos qué necesitas crear..." />
              </label>
              <div className="form-grid">
                <label>Formato
                  <select>
                    <option>PDF</option><option>Word</option><option>Excel</option><option>PowerPoint</option><option>Imagen</option>
                  </select>
                </label>
                <label>Urgencia
                  <select>
                    <option>Normal</option><option>Hoy</option><option>Menos de 24 horas</option>
                  </select>
                </label>
              </div>
              <a className="submit-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <Send size={18} /> Enviar solicitud por WhatsApp
              </a>
              <small>Pedido sujeto a confirmación de precio final y pago correspondiente. Pagos disponibles por Yape al mismo número: 991 561 272.</small>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <Logo />
        <p>© 2026 CreaIA Pro. Documentos, diseños y soluciones digitales con IA. Dominio sugerido: creaia-pro.com</p>
      </footer>
    </div>
  );
}
