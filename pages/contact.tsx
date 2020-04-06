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
    </div>
  );
};

export default App;