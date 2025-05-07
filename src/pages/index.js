// src/pages/index.js
import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Image from '@theme/IdealImage';
import styles from './index.module.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  // Estado para manejar el hover
  const [hovered, setHovered] = useState(false);

  // Definimos los estilos directamente en línea
  const buttonStyleStart = {
    background: 'var(--ifm-color-primary-button-hero)',
    color: 'var(--ifm-color-primary-button-hero-color)',
    fontFamily: 'inherit',
    padding: '0.35em',
    paddingLeft: '1.2em',
    fontSize: '17px',
    fontWeight: 600,
    borderRadius: '0.9em',
    border: 'none',
    letterSpacing: '0.05em',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'inset 0 0 1.6em -0.6em var(--ifm-color-primary-button-hero)',
    overflow: 'hidden',
    position: 'relative',
    height: '2.8em',
    paddingRight: '3.3em',
    cursor: 'pointer',
    textDecoration: 'none'
  };

  const iconStyleStart = {
    background: 'white',
    marginLeft: '1em',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.2em',
    width: hovered ? 'calc(100% - 0.6em)' : '2.2em',
    borderRadius: '0.7em',
    boxShadow: '0.1em 0.1em 0.6em 0.2em var(--ifm-color-primary-button-hero)',
    right: '0.3em',
    transition: 'all 0.3s'
  };

  const svgStyleStart = {
    width: '1.1em',
    transition: 'transform 0.3s',
    color: 'gray',
    transform: hovered ? 'translateX(0.1em)' : 'none'
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">Recursos y guías avanzadas para profesionales de la ciberseguridad</p>
            <div className={styles.buttons}>
              <Link
                to="/docs"
                style={buttonStyleStart}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
              >
                Comenzar ahora
                <div style={iconStyleStart}>
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={svgStyleStart}
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image img={require('/img/banner.webp')} />
          </div>
        </div>
      </div>
    </header>
  );
}

function SecurityStats() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>500+</h3>
            <p>Artículos técnicos</p>
          </div>
          <div className={styles.statCard}>
            <h3>50+</h3>
            <p>Herramientas analizadas</p>
          </div>
          <div className={styles.statCard}>
            <h3>200+</h3>
            <p>Vulnerabilidades documentadas</p>
          </div>
          <div className={styles.statCard}>
            <h3>15+</h3>
            <p>Guías de certificación</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityTopics() {
  const topics = [
    {
      title: 'Análisis de malware',
      icon: '🔬',
      description: 'Técnicas avanzadas para analizar y comprender código malicioso',
      //link: '/docs/malware-analysis'
    },
    {
      title: 'Pentesting',
      icon: '🛡️',
      description: 'Metodologías, herramientas y procedimientos para pruebas de penetración',
      //link: '/docs/pentesting'
    },
    {
      title: 'Respuesta a incidentes',
      icon: '🚨',
      description: 'Protocolos y mejores prácticas para gestionar brechas de seguridad',
      //link: '/docs/incident-response'
    },
    {
      title: 'Desarrollo de herramientas',
      icon: '👨🏻‍💻',
      description: 'Creación de scripts y herramientas personalizadas para la ciberseguridad',
      //link: '/docs/cloud-security'
    },
  ];

  return (
    <section className={styles.topicsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Áreas de especialización</h2>
        <div className={styles.topicsGrid}>
          {topics.map((topic, idx) => (
            <Link key={idx} to={topic.link} className={styles.topicCard}>
              <div className={styles.topicIcon} style={{
                borderBottom: 'none',
                textDecoration: 'none', 
                boxShadow: 'none',
                border: 'none',
                position: 'relative'
              }}>{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestUpdates() {
  const updates = [
    {
      title: 'Nueva guía de Log4j',
      date: '01 Abril 2025',
      description: 'Hemos publicado una guía completa para identificar y mitigar vulnerabilidades de Log4j',
      link: '/docs/vulnerabilities/log4j'
    },
    {
      title: 'Actualización de OWASP Top 10',
      date: '28 Marzo 2025',
      description: 'Actualización de nuestros contenidos para reflejar los cambios en OWASP Top 10 2025',
      link: '/docs/standards/owasp-top-10'
    },
    {
      title: 'Nuevo curso: Forense digital',
      date: '15 Marzo 2025',
      description: 'Lanzamiento de un curso completo sobre técnicas avanzadas de forense digital',
      link: '/docs/courses/digital-forensics'
    }
  ];

  // Estado para manejar el hover
  const [hovered, setHovered] = useState(false);

  // Definimos los estilos directamente en línea
  const buttonStyle = {
    background: 'var(--ifm-color-primary-button-updates)',
    color: 'var(--ifm-color-primary-button-updates-color)',
    fontFamily: 'inherit',
    padding: '0.35em',
    paddingLeft: '1.2em',
    fontSize: '17px',
    fontWeight: 600,
    borderRadius: '0.9em',
    border: 'none',
    letterSpacing: '0.05em',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'inset 0 0 1.6em -0.6em var(--ifm-color-primary-button-updates)',
    overflow: 'hidden',
    position: 'relative',
    height: '2.8em',
    paddingRight: '3.3em',
    cursor: 'pointer',
    textDecoration: 'none'
  };

  const iconStyle = {
    background: 'white',
    marginLeft: '1em',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2.2em',
    width: hovered ? 'calc(100% - 0.6em)' : '2.2em',
    borderRadius: '0.7em',
    boxShadow: '0.1em 0.1em 0.6em 0.2em var(--ifm-color-primary-button-updates)',
    right: '0.3em',
    transition: 'all 0.3s'
  };

  const svgStyle = {
    width: '1.1em',
    transition: 'transform 0.3s',
    color: '#FFB100',
    transform: hovered ? 'translateX(0.1em)' : 'none'
  };

  return (
    <section className={styles.updatesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Últimas actualizaciones</h2>
        <div className={styles.updatesGrid}>
          {updates.map((update, idx) => (
            <div key={idx} className={styles.updateCard}>
              <div className={styles.updateMeta}>
                <span className={styles.updateDate}>{update.date}</span>
              </div>
              <h3>{update.title}</h3>
              <p>{update.description}</p>
              <Link to={update.link}>Leer más →</Link>
            </div>
          ))}
        </div>
        <div className={styles.viewAllContainer} style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
          <Link
            to="/blog"
            style={buttonStyle}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            Ver todas las actualizaciones
            <div style={iconStyle}>
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={svgStyle}
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className={styles.communitySection}>
      <div className="container">
        <div className={styles.communityContent}>
          <div className={styles.communityText}>
            <h2>Únete a nuestra comunidad</h2>
            <p>Conecta con profesionales de la ciberseguridad, haz preguntas, comparte conocimientos y mantente al día con las últimas amenazas y defensas.</p>
            <div className={styles.communityButtons}>
              <button className={styles.github}>
                <svg className={styles.githubIcon} viewBox="0 0 496 512" height="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                <span className={styles.githubtext}>Github</span>
              </button>
              <button className={styles.discord}>
                <svg className={styles.discordIcon} viewBox="0 0 496 512" height="2em" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#00000" stroke="#00000">
                  <g id="SVGRepo_bgCarrier" stroke-width="2"/>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                  <g id="SVGRepo_iconCarrier"><g><path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#ffffff" fill-rule="nonzero"> </path> </g> </g>
                </svg>
                <span className={styles.discordtext}>Discord</span>
              </button>
            </div>
          </div>
          <div className={styles.communityImage}>
            <img src="/img/community.webp" alt="Comunidad de ciberseguridad" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - Documentación de ciberseguridad`}
      description="Recursos y guías avanzadas para profesionales de la ciberseguridad">
      <HomepageHeader />
      <main>
        <SecurityStats />
        <SecurityTopics />
        <LatestUpdates />
        <CommunitySection />
      </main>
    </Layout>
  );
}
