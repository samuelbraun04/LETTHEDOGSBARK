import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './about.css';
import './i18n';

const About = () => {
  const { t, i18n } = useTranslation();
  const [showButtons, setShowButtons] = useState(true);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200; // Adjust this value to change when the buttons should disappear

      if (scrollY > threshold) {
        setShowButtons(false);
      } else {
        setShowButtons(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const languageContainerClass = showButtons ? 'language-container' : 'language-container hidden';

  return (
    <div className="about-page">
      <div className="language-wrapper">
        <div className={`language-container ${languageContainerClass}`}>
          <div className="language-buttons">
            <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>
              English
            </button>
            <button onClick={() => changeLanguage('fr')} disabled={i18n.language === 'fr'}>
              French
            </button>
          </div>
        </div>
      </div>
      <div className="content-section">
        <h1>{t('aboutUs')}</h1>
        <div className="section">
          <h4>{t('whoWeAre')}</h4>
          <p>{t('welcome')}</p>
        </div>
        <hr />
        <div className="section">
          <h4>{t('whySpecial')}</h4>
          <p>{t('scarcityExclusivity')}</p>
        </div>
        <hr />
        <div className="section">
          <h4>{t('whatSetsApart')}</h4>
          <p>{t('uniqueAboutUs')}</p>
        </div>
        <hr />
        <div className="section">
          <h4>{t('ourMission')}</h4>
          <p>{t('communityAndLifestyle')}</p>
        </div>
        <hr />
        <div className="helpMe" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
          <iframe
            src={t('video')}
            loading="lazy"
            title="Synthesia video player - Your AI video"
            allow="encrypted-media; fullscreen;"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
              padding: 0,
              margin: 0,
              overflow: 'hidden',
            }}
          ></iframe>
        </div>
      </div>

      <div className="image-section">
        <img src="./src/assets/hmgoepprod (1).jpg" alt="About us" className="bigImage" />
      </div>
    </div>
  );
};

export default About;
