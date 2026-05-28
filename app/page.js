const disclaimer =
  "Drivana is not a vehicle importer or reseller. Drivana provides search, verification, coordination, and administrative assistance services. The client remains the official buyer and importer of the vehicle according to applicable regulations.";

const contact = {
  whatsapp:
    "https://wa.me/213555000000?text=Bonjour%20Drivana%2C%20je%20souhaite%20une%20estimation%20pour%20acheter%20une%20voiture%20en%20France.",
  phone: "+213 555 000 000",
  email: "contact@drivana.co",
};

function Icon({ name }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    message: (
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    ),
    check: <path d="m5 12 4 4L19 6" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </>
    ),
    route: (
      <>
        <path d="M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M8.5 16H15a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h4.5" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    car: (
      <>
        <path d="M5 17h14M6 17v3M18 17v3M4 13l2-5a3 3 0 0 1 3-2h6a3 3 0 0 1 3 2l2 5v4H4z" />
        <path d="M7 13h.01M17 13h.01" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  );
}

function Button({ href, children, variant = "primary", icon = "arrow" }) {
  return (
    <a className={`button ${variant}`} href={href}>
      <span>{children}</span>
      <Icon name={icon} />
    </a>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Drivana accueil">
      <span className="brand-mark">
        <Icon name="car" />
      </span>
      <span>Drivana</span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Navigation principale">
        <a href="#services">Services</a>
        <a href="#process">Processus</a>
        <a href="#packages">Offres</a>
        <a href="#estimate">Estimation</a>
      </nav>
      <Button href="#estimate" variant="nav-button">
        Estimation gratuite
      </Button>
    </header>
  );
}

function Hero() {
  const trustBadges = [
    "Véhicules vérifiés",
    "Documents contrôlés",
    "Coûts clarifiés",
    "Accompagnement France-Algérie",
  ];

  return (
    <section className="hero section" id="top">
      <div className="hero-content">
        <p className="eyebrow">Assistance achat véhicule France - Algérie</p>
        <h1>Achetez votre voiture en France avec l'accompagnement Drivana.</h1>
        <p className="hero-copy">
          Nous aidons les résidents algériens à rechercher, vérifier, négocier
          et coordonner l'export de véhicules depuis la France, étape par étape.
        </p>
        <div className="hero-actions">
          <Button href="#estimate">Obtenir une estimation gratuite</Button>
          <Button href={contact.whatsapp} variant="secondary" icon="message">
            Parler sur WhatsApp
          </Button>
        </div>
        <div className="trust-row" aria-label="Garanties Drivana">
          {trustBadges.map((badge) => (
            <span key={badge}>
              <Icon name="check" />
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="hero-visual" aria-label="Véhicule premium sur route">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
          alt="Voiture premium sur une route au coucher du soleil"
        />
        <div className="route-card">
          <span>France</span>
          <strong>Recherche + vérification + coordination</strong>
          <span>Algérie</span>
        </div>
      </div>
    </section>
  );
}

function ValuePanel() {
  return (
    <section className="section value-panel" aria-label="Promesse Drivana">
      <div>
        <p className="eyebrow">Clarté, sécurité, accompagnement</p>
        <h2>
          Vous restez l'acheteur officiel. Drivana sécurise les étapes autour de
          votre décision.
        </h2>
      </div>
      <p>
        Le marché français offre de bonnes opportunités, mais l'achat à distance
        demande méthode et vigilance. Drivana vous aide à comprendre les
        risques, contrôler les informations importantes et coordonner les bons
        intervenants sans se présenter comme importateur ou revendeur.
      </p>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: "search",
      title: "Recherche ciblée",
      text: "Sélection de véhicules en France selon votre budget, vos critères et les risques à éviter.",
    },
    {
      icon: "shield",
      title: "Vérification vendeur",
      text: "Contrôles de cohérence sur l'annonce, le vendeur, l'historique disponible et les signaux d'alerte.",
    },
    {
      icon: "file",
      title: "Dossier et éligibilité",
      text: "Pré-contrôle des documents, des informations techniques et des exigences administratives connues.",
    },
    {
      icon: "route",
      title: "Coordination export",
      text: "Organisation avec les intervenants utiles pour le transport, l'export et les étapes jusqu'à l'Algérie.",
    },
  ];

  return (
    <section className="section split-section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Ce que nous faisons</p>
        <h2>Une assistance complète pour acheter avec plus de maîtrise.</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="icon-box">
              <Icon name={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      title: "Demande d'estimation",
      text: "Vous partagez votre budget, le type de véhicule recherché et votre situation.",
    },
    {
      title: "Recherche et pré-sélection",
      text: "Drivana identifie des annonces pertinentes et filtre les options risquées.",
    },
    {
      title: "Vérification et négociation",
      text: "Nous analysons les documents, échangeons avec le vendeur et vous aidons à décider.",
    },
    {
      title: "Coordination jusqu'à l'arrivée",
      text: "Nous vous guidons sur les étapes d'achat, de logistique, d'export et d'administration.",
    },
  ];

  return (
    <section className="section process-section" id="process">
      <div className="section-heading compact">
        <p className="eyebrow">Comment ça marche</p>
        <h2>Un parcours simple, documenté et progressif.</h2>
      </div>
      <div className="timeline">
        {steps.map((step, index) => (
          <article className="timeline-step" key={step.title}>
            <span className="step-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
      <div className="center-actions">
        <Button href="#estimate">Demander une estimation</Button>
        <Button href={contact.whatsapp} variant="secondary" icon="message">
          Nous contacter sur WhatsApp
        </Button>
      </div>
    </section>
  );
}

function CostSection() {
  return (
    <section className="section cost-section">
      <div>
        <p className="eyebrow">Coûts transparents</p>
        <h2>
          Avant de vous engager, vous obtenez une vision réaliste du budget.
        </h2>
        <p>
          Drivana vous aide à comparer le prix du véhicule avec les frais
          potentiels autour du dossier: vérification, transport, export,
          démarches et obligations applicables.
        </p>
      </div>
      <div className="cost-board">
        <div className="cost-line">
          <span>Prix véhicule en France</span>
          <strong>ex. 12 500 EUR</strong>
        </div>
        <div className="cost-line">
          <span>Transport et coordination</span>
          <strong>à estimer</strong>
        </div>
        <div className="cost-line">
          <span>Dossier et assistance</span>
          <strong>selon besoin</strong>
        </div>
        <div className="cost-line total">
          <span>Budget global indicatif</span>
          <strong>personnalisé</strong>
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  const packages = [
    {
      name: "Essentiel",
      price: "Sur estimation",
      detail: "Pour vérifier une opportunité déjà trouvée.",
      features: [
        "Analyse de l'annonce",
        "Contrôle vendeur",
        "Revue des documents clés",
        "Avis de risque",
      ],
    },
    {
      name: "Accompagnement",
      price: "Sur devis",
      detail: "Pour être accompagné de la recherche à la décision.",
      featured: true,
      features: [
        "Recherche personnalisée",
        "Shortlist de véhicules",
        "Négociation assistée",
        "Estimation du coût global",
      ],
    },
    {
      name: "Coordination complète",
      price: "Sur devis",
      detail: "Pour coordonner achat, export et démarches.",
      features: [
        "Suivi étape par étape",
        "Coordination transport",
        "Assistance administrative",
        "Guidance jusqu'à l'Algérie",
      ],
    },
  ];

  return (
    <section className="section packages-section" id="packages">
      <div className="section-heading compact">
        <p className="eyebrow">Offres d'assistance</p>
        <h2>Choisissez le niveau d'accompagnement adapté à votre projet.</h2>
      </div>
      <div className="package-grid">
        {packages.map((plan) => (
          <article
            className={`package-card ${plan.featured ? "featured" : ""}`}
            key={plan.name}
          >
            {plan.featured ? (
              <span className="plan-badge">Recommandé</span>
            ) : null}
            <h3>{plan.name}</h3>
            <p>{plan.detail}</p>
            <strong className="price">{plan.price}</strong>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <aside className="legal-note">{disclaimer}</aside>
      <div className="center-actions">
        <Button href="#estimate">Obtenir une estimation gratuite</Button>
      </div>
    </section>
  );
}

function EducationSection() {
  const vehicleTips = [
    "Privilégier les vendeurs traçables, garages sérieux et historiques documentés.",
    "Éviter les annonces anormalement basses, les documents incomplets et les vendeurs pressants.",
    "Anticiper le prix d'achat, les frais de dossier, le transport, l'export et les obligations locales.",
  ];

  return (
    <section className="section education-section">
      <div className="education-media">
        <img
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
          alt="Tableau de bord d'une voiture moderne"
        />
      </div>
      <div>
        <p className="eyebrow">Acheter plus intelligemment</p>
        <h2>
          Nous vous aidons à reconnaître les bons dossiers et les véhicules à
          éviter.
        </h2>
        <ul className="check-list">
          {vehicleTips.map((tip) => (
            <li key={tip}>
              <Icon name="check" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function EstimateForm() {
  return (
    <section className="section estimate-section" id="estimate">
      <div className="estimate-copy">
        <p className="eyebrow">Estimation gratuite</p>
        <h2>Parlez-nous de votre projet véhicule.</h2>
        <p>
          Recevez une première orientation sur les options possibles, les points
          de vigilance et les étapes à prévoir.
        </p>
        <div className="contact-strip">
          <a href={contact.whatsapp}>
            <Icon name="message" />
            <span>WhatsApp</span>
          </a>
          <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
            <Icon name="car" />
            <span>{contact.phone}</span>
          </a>
        </div>
      </div>
      <form
        className="lead-form"
        action={`mailto:${contact.email}`}
        method="post"
        encType="text/plain"
      >
        <label>
          Nom complet
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Téléphone / WhatsApp
          <input name="phone" autoComplete="tel" required />
        </label>
        <label>
          Budget approximatif
          <select name="budget" required defaultValue="">
            <option value="">Choisir une tranche</option>
            <option>Moins de 10 000 EUR</option>
            <option>10 000 - 15 000 EUR</option>
            <option>15 000 - 25 000 EUR</option>
            <option>Plus de 25 000 EUR</option>
          </select>
        </label>
        <label>
          Type de véhicule recherché
          <textarea
            name="vehicle"
            rows="4"
            placeholder="Marque, modèle, année, carburant, usage..."
            required
          />
        </label>
        <button className="button primary form-button" type="submit">
          <span>Envoyer la demande</span>
          <Icon name="arrow" />
        </button>
      </form>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section final-cta">
      <p className="eyebrow">
        Votre voiture de France, accompagnée jusqu'en Algérie.
      </p>
      <h2>
        Commencez par une estimation claire avant de prendre une décision.
      </h2>
      <div className="center-actions">
        <Button href="#estimate">Obtenir une estimation gratuite</Button>
        <Button href={contact.whatsapp} variant="secondary" icon="message">
          Parler sur WhatsApp
        </Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Brand />
        <p>Votre voiture de France, accompagnée jusqu'en Algérie.</p>
      </div>
      <p className="footer-disclaimer">{disclaimer}</p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValuePanel />
        <ServicesSection />
        <ProcessSection />
        <CostSection />
        <PackagesSection />
        <EducationSection />
        <EstimateForm />
        <FinalCta />
      </main>
      <Footer />
      <a
        className="mobile-whatsapp"
        href={contact.whatsapp}
        aria-label="Contacter Drivana sur WhatsApp"
      >
        <Icon name="message" />
      </a>
    </>
  );
}
