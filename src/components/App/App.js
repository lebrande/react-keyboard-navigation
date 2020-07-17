import React from 'react';
import Form from '../Form/Form';
import './App.css';

const App = () => {
  return (
    <>
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Keyboard Navigation</h1>
            <h2 className="subtitle">Using tab and arrows</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="App__form">
            <Form />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="content">
            <p>
              Keyboard Navigation Example by <a href="https://www.youtube.com/channel/UCqawL4rsFulZi1zjpromBNQ">JS Dżem</a> | <a href="https://twitter.com/le_brande">@lebrande</a><br />
              Styled with <a href="https://bulma.io/">Bulma</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;