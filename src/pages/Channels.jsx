import { useState, useContext, useEffect } from 'react';
import { PageContext } from '../context/PageContext';
import "../scss/pages/Channels.scss";

function Channels() {
  const { setCurrentPage } = useContext(PageContext);

  useEffect(() => {
    setCurrentPage('Channels');
  });

  return (
    <main className="channels-page">
      <section className="intro">
        <h1>Aluminum Channels and their names</h1>
        <p>Learn more about aluminum channels and their names as they are known in Nigeria and other parts of the world.</p>
        <a href="#channel-grid"><i className="fa fa-chevron-down"></i></a>
      </section>

      <section className="channels" id="channel-grid">
        <div className="channels__grid">

        </div>
      </section>
    </main>
  )
}

export function Material({}) {
  return <div className="channels__grid__each">
    <div className="channels__grid__each__img">
      <svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0V0.5M0.5 5.5V16H4M0.5 5.5H13.5M0.5 5.5V0.5M13.5 5.5V16V21.5M13.5 5.5V0.5H9H0.5M3.5 16.5V18M12 25V26.5H13.5V21.5M13.5 21.5H12V23" />
      </svg>
    </div>
    <div className="channels__grid__each__content">
      <h3>Interlock</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facilis itaque eum?</p>
      <div className="tags">
        <span>Casement Windows</span>
        <span>Toilet Doors</span>
      </div>
    </div>
  </div>;
}

export default Channels;