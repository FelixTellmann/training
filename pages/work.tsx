import './normalize.scss';
import './typography.scss';
import Link from 'next/link';


const App = () => {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo"><img src="" alt="Company Logo" /></div>
        <nav className="nav">
          <Link href="/index"><a className="nav__link">Home</a></Link>
          <Link href="/products"><a className="nav__link">Products</a></Link>
          <Link href="/team"><a className="nav__link">Team</a></Link>
          <Link href="/careers"><a className="nav__link">Careers</a></Link>
          <Link href="/code"><a className="nav__link">Code</a></Link>
          <Link href="/blog"><a className="nav__link">Blog</a></Link>
          <Link href="/contact"><a className="nav__link">Get in touch</a></Link>
          <Link href="/work"><a className="nav__link">Work</a></Link>
        </nav>
      </header>
      <main className="page">
        <section className="page__hero section">
          <div className="section__title section__title--hero">
            <h1>We're your startup sidekicks.</h1>
            <p>We're a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur dicta dolorum
              expedita fugiat id magni qui, ullam voluptate voluptatibus. Aliquid et.
            </p>
          </div>
        </section>
        <section className="page__partner section">
          <div className="section__title section__title--quote">
            <h2>Why <strong>partner</strong> with us?</h2>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid enim incidunt, ipsam labore
              quis vel.
            </blockquote>
            <Link href="/products"><a className="button">What we Offer</a></Link>
          </div>
          <div className="section__content section__content--blocks">
            <div className="block-content block-content--grid">
              <div className="block-content__icon">Svg Here</div>
              <h4>Guidance.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta, minus! Asperiores harum maiores, molestias necessitatibus quam rem repellendus! Et libero nesciunt nisi</p>
            </div>
            <div className="block-content">
              <div className="block-content__icon">Svg Here</div>
              <h4>Immersion.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta, minus! Asperiores harum maiores, molestias necessitatibus quam rem repellendus! Et libero nesciunt nisi</p>
            </div>
            <div className="block-content">
              <div className="block-content__icon">Svg Here</div>
              <h4>Agile.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta, minus! Asperiores harum maiores, molestias necessitatibus quam rem repellendus! Et libero nesciunt nisi</p>
            </div>
            <div className="block-content">
              <div className="block-content__icon">Svg Here</div>
              <h4>Expertise.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta, minus! Asperiores harum maiores, molestias necessitatibus quam rem repellendus! Et libero nesciunt nisi</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;