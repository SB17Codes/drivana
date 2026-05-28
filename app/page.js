const disclaimer =
  "Drivana is not a vehicle importer or reseller. Drivana provides search, verification, coordination, and administrative assistance services. The client remains the official buyer and importer of the vehicle according to applicable regulations.";

const contact = {
  whatsapp:
    "https://wa.me/213555000000?text=Bonjour%20Drivana%2C%20je%20souhaite%20une%20estimation%20pour%20acheter%20une%20voiture%20de%20moins%20de%203%20ans%20en%20France.",
  phone: "+213 555 000 000",
  email: "contact@drivana.co",
};

const audiences = [
  "Résidents algériens",
  "Familles en Algérie",
  "Algériens en France",
  "Garages vérifiés",
  "Véhicules -3 ans",
  "Documents contrôlés",
  "Budget clarifié",
  "Export coordonné",
];

const cars = [
  {
    model: "Compacte française récente",
    age: "2024 · France",
    image: "/images/drivana-compact.png",
    copy: "Cible type Peugeot 308, Renault Mégane ou équivalent, avec historique et origine à contrôler.",
  },
  {
    model: "SUV urbain -3 ans",
    age: "2023 · France",
    image: "/images/drivana-suv.png",
    copy: "Cible type Captur, 2008 ou C3 Aircross, utile quand entretien, kilométrage et vendeur sont traçables.",
  },
  {
    model: "Familiale française récente",
    age: "2024 · France",
    image: "/images/drivana-family.png",
    copy: "Cible type C5 Aircross, 3008 ou Austral, à analyser avec coût global, conformité et disponibilité.",
  },
];

const services = [
  {
    title: "Recherche France",
    copy: "Shortlist de véhicules de moins de 3 ans selon budget, carburant, kilométrage, historique et disponibilité réelle.",
  },
  {
    title: "Vérification dossier",
    copy: "Contrôle vendeur, annonce, documents, signaux d'alerte, cohérence du prix et points d'éligibilité avant décision.",
  },
  {
    title: "Coordination export",
    copy: "Accompagnement sur négociation, achat, transport, export et étapes administratives, sans se substituer à l'acheteur.",
  },
];

const process = [
  "Critères reçus",
  "Annonces filtrées",
  "Dossier vérifié",
  "Export coordonné",
];

function Brand() {
  return (
    <a className="brand magnetic" href="#top" aria-label="Accueil Drivana">
      <span className="brand-icon">D</span>
      <span className="brand-wordmark">Drivana</span>
    </a>
  );
}

function Header() {
  return (
    <header className="nav-shell">
      <Brand />
      <nav aria-label="Navigation principale">
        <a href="#cars">Véhicules</a>
        <a href="#services">Services</a>
        <a href="#proof">Processus</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta magnetic" href="#contact">
        Estimation <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}

function HeroBoard() {
  return (
    <div className="hero-board magnetic" aria-label="Aperçu Drivana">
      <img
        className="hero-car"
        src="/images/drivana-hero.png"
        alt="Voiture récente sur une route entre la France et la Méditerranée"
      />
      <div className="hero-light" aria-hidden="true" />
      <div className="route-scan" aria-hidden="true" />
      <div className="board-top">
        <span>France</span>
        <span>Recherche · vérification · export</span>
        <span>Algérie</span>
      </div>
      <div className="journey-line" aria-hidden="true">
        {process.map((step) => (
          <span key={step} />
        ))}
      </div>
      <div className="boarding-card">
        <p>Projet actif</p>
        <strong>Véhicule -3 ans vérifié avant achat</strong>
        <span>
          Prix, vendeur, documents, transport et étapes administratives.
        </span>
      </div>
      <div className="mini-feed" aria-label="Mises à jour de coordination">
        <p>
          <span />
          Annonce française pré-qualifiée
        </p>
        <p>
          <span />
          Documents vendeur à contrôler
        </p>
        <p>
          <span />
          Budget global en préparation
        </p>
      </div>
      <div className="board-metrics" aria-label="Indicateurs Drivana">
        <span>98%</span>
        <small>Dossier pré-contrôlé</small>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Voitures récentes de France vers l'Algérie</p>
        <h1>Votre voiture de France, accompagnée jusqu'en Algérie.</h1>
      </div>
      <HeroBoard />
    </section>
  );
}

function Intro() {
  return (
    <section className="intro-block">
      <p>
        Drivana aide les acheteurs algériens à trouver des voitures françaises
        de moins de 3 ans, vérifier les dossiers, comprendre les coûts et
        coordonner les étapes sans devenir importateur ni revendeur.
      </p>
    </section>
  );
}

function AudienceGrid() {
  return (
    <section className="logo-grid" aria-label="Signaux de confiance">
      {audiences.map((item) => (
        <div className="logo-cell" key={item}>
          {item}
        </div>
      ))}
    </section>
  );
}

function CarsSection() {
  return (
    <section className="work-section" id="cars">
      <div className="section-heading">
        <p>Exemples recherchés</p>
        <h2>
          Des véhicules récents du marché français, filtrés avant contact.
        </h2>
      </div>
      <div className="work-rail">
        {cars.map((car, index) => (
          <article
            className="work-card magnetic"
            key={car.model}
            style={{ "--delay": `${index * 120}ms` }}
          >
            <div className="work-card__visual">
              <img src={car.image} alt={`${car.model} récente en France`} />
              <span className="card-shine" aria-hidden="true" />
            </div>
            <p>{car.age}</p>
            <h3>{car.model}</h3>
            <span>{car.copy}</span>
          </article>
        ))}
      </div>
      <div className="quote-panel">
        <p>
          Le bon véhicule n'est pas seulement une bonne annonce. C'est un
          dossier cohérent, traçable et compatible avec votre budget réel.
        </p>
        <span>Recherche, vérification et coordination avant engagement.</span>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      {services.map((service) => (
        <article className="service-card magnetic" key={service.title}>
          <div>
            <h2>{service.title}</h2>
            <p>{service.copy}</p>
          </div>
          <a href="#contact" aria-label={`Demander ${service.title}`}>
            En savoir plus <span aria-hidden="true">→</span>
          </a>
        </article>
      ))}
    </section>
  );
}

function ProofSection() {
  const floatingCards = [
    {
      className: "collab-image--one",
      src: "/images/floating-cards/carmeter-tr.png",
      alt: "Badge véhicule moins de 3 ans",
    },
    {
      className: "collab-image--two",
      src: "/images/floating-cards/france-tr.png",
      alt: "Badge France",
    },
    {
      className: "collab-image--three",
      src: "/images/floating-cards/algerie-tr.png",
      alt: "Badge Algérie",
    },
  ];

  return (
    <section className="collab-section" id="proof">
      {floatingCards.map((card) => (
        <img
          className={`collab-image ${card.className}`}
          src={card.src}
          alt={card.alt}
          key={card.src}
        />
      ))}
      <div className="collab-copy">
        <h2>Un poste de contrôle pour votre achat en France.</h2>
        <p>
          Drivana vous aide à réduire l'incertitude: vendeur identifié,
          documents relus, estimation des frais, négociation assistée et
          coordination logistique jusqu'aux étapes côté Algérie.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer className="footer-section" id="contact">
      <div>
        <p>Estimation gratuite</p>
        <h2>
          Envoyez votre budget. Nous préparons une première shortlist France.
        </h2>
        <small>{disclaimer}</small>
      </div>
      <div className="footer-actions">
        <a className="footer-cta magnetic" href={contact.whatsapp}>
          WhatsApp <span aria-hidden="true">→</span>
        </a>
        <a
          className="footer-cta magnetic footer-cta--light"
          href={`mailto:${contact.email}`}
        >
          Email <span aria-hidden="true">→</span>
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <Intro />
      <AudienceGrid />
      <CarsSection />
      <ServicesSection />
      <ProofSection />
      <ContactSection />
      <a
        className="mobile-whatsapp"
        href={contact.whatsapp}
        aria-label="Contacter Drivana sur WhatsApp"
      >
        WA
      </a>
    </main>
  );
}
