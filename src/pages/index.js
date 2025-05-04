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
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">Recursos y guías avanzadas para profesionales de la ciberseguridad</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/Cursos/cursos">
                Comenzar ahora →
              </Link>
              <Link
                className="button button--outline button--lg button--secondary"
                to="/blog">
                Consulta el blog
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image img={require('../../static/img/banner.png')} />
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
      link: '/docs/malware-analysis'
    },
    {
      title: 'Pentesting',
      icon: '🛡️',
      description: 'Metodologías, herramientas y procedimientos para pruebas de penetración',
      link: '/docs/pentesting'
    },
    {
      title: 'Respuesta a incidentes',
      icon: '🚨',
      description: 'Protocolos y mejores prácticas para gestionar brechas de seguridad',
      link: '/docs/incident-response'
    },
    {
      title: 'Seguridad en la nube',
      icon: '☁️',
      description: 'Protección de recursos e infraestructura en entornos cloud',
      link: '/docs/cloud-security'
    },
  ];

  return (
    <section className={styles.topicsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Áreas de especialización</h2>
        <div className={styles.topicsGrid}>
          {topics.map((topic, idx) => (
            <Link key={idx} to={topic.link} className={styles.topicCard}>
              <div className={styles.topicIcon}>{topic.icon}</div>
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
    background: '#FFB100',
    color: 'black',
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
    boxShadow: 'inset 0 0 1.6em -0.6em #FFB100',
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
    boxShadow: '0.1em 0.1em 0.6em 0.2em #FFB100',
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
        <h2 className={styles.sectionTitle} style={{ color: '#000000' }}>Últimas actualizaciones</h2>
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
                  fill="currentColor"
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
            <p style={{ color: '#d0d0d0' }}>Conecta con profesionales de la ciberseguridad, haz preguntas, comparte conocimientos y mantente al día con las últimas amenazas y defensas.</p>
            <div className={styles.communityButtons}>
              <a href="https://github.com/facebook/docusaurus" className="button button--secondary" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
{/*               <button class="Btn">
                <svg class="svgIcon" viewBox="0 0 496 512" height="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                <span class="text">Github</span>
              </button> */}
              <a href="https://discordapp.com/invite/docusaurus" className="button button--outline button--secondary" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </div>
          </div>
          <div className={styles.communityImage}>
            <img src="/img/community.svg" alt="Comunidad de ciberseguridad" />
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
