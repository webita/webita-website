import React from 'react';

    function Header() {
      return (
        <header>
          <h1>Webita.eu Replica</h1>
        </header>
      );
    }

    function Navigation() {
      return (
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      );
    }

    function MainContent() {
      return (
        <main>
          <section id="home">
            <h2>Welcome to Webita.eu</h2>
            <p>This is a replica of the Webita.eu website.</p>
          </section>
          <section id="services">
            <h2>Our Services</h2>
            <p>Details about our services will go here.</p>
          </section>
          <section id="about">
            <h2>About Us</h2>
            <p>Information about the company will go here.</p>
          </section>
          <section id="contact">
            <h2>Contact Us</h2>
            <p>Contact information will go here.</p>
          </section>
        </main>
      );
    }

    function Footer() {
      return (
        <footer>
          <p>&copy; 2023 Webita.eu Replica</p>
        </footer>
      );
    }

    function App() {
      return (
        <div>
          <Header />
          <Navigation />
          <MainContent />
          <Footer />
        </div>
      );
    }

    export default App;
