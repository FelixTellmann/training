import './normalize.scss';
import './typography.scss';
import './app.scss';
import React from 'react';


import Link from 'next/link';

export const testing = (input: string) => {
  const pair1 = ["A", "T"];
  const pair2 = ["C", "G"];
  let output: String[][] = [];

  const array = input.split('');
  output = array.map(letter => {
    switch (letter) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  });

  return (output);
};

export const fearNotLetter = (input) => {
  const letterArray = input.split('');
  let counter = 0;
  const result = letterArray.map((item, i) => {
    let missingLetter = '';
    if (i === 0) {
      counter = item.charCodeAt(0);
    } else if (item.charCodeAt(0) === counter + 1) {
      counter++;
    } else {
      missingLetter = String.fromCharCode(counter + 1);
      counter = counter + 2;
    }
    return missingLetter;
  }).filter(a => a).toString();

  return result || undefined;
};

export const countBitsInNumToBinaryInput = (input: number) => {
  let binaryNumber = [];
  toBinaryDigit(input);

  function toBinaryDigit(num) {
    binaryNumber.unshift(num % 2);
    if ((num - (num % 2)) / 2 >= 1) {
      toBinaryDigit((num - (num % 2)) / 2);
    }
  }

  return binaryNumber.reduce((a, b) => a + b);
};



const App = () => {
  return (
    <div className="layout">
      <header className="header">
        <img className="logo" src="http://www.playlogix.com/images/logo.svg" alt="Company Logo" />
        <nav className="nav">
          <Link href="/index"><a className="nav__link">Home</a></Link>
          <Link href="/products"><a className="nav__link">Products</a></Link>
          <Link href="/team"><a className="nav__link">Team</a></Link>
          <Link href="/careers"><a className="nav__link">Careers</a></Link>
          <Link href="/code"><a className="nav__link">Code</a></Link>
          <Link href="/blog"><a className="nav__link">Blog</a></Link>
          <Link href="/contact"><a className="nav__link">Get in touch</a></Link>
          <Link href="/work"><a className="nav__link nav__link--call-to-action">Work with us</a></Link>
        </nav>
      </header>
      <main>
        <section className="section section--hero">
          <div className="section__title section__title--hero">
            <h1>We're your startup sidekicks.</h1>
            <p>We're a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur dicta dolorum
              expedita fugiat id magni qui, ullam voluptate voluptatibus. Aliquid et.
            </p>
          </div>
        </section>
        <section className="section section--partner">
          <div className="section__title section__title--annotation">
            <h2>Why<br />
              <strong>partner</strong><br />
              with us?
            </h2>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid enim incidunt, ipsam labore
              quis vel.
            </blockquote>
            <Link href="/products"><a className="button">What we Offer</a></Link>
          </div>
          <div className="section__content block block--grid-2">
            <div className="block__item">
              <img className="block__item__img" src="/home-section--guidance.png" alt="" />
              <h3>Guidance.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta, minus! Asperiores harum maiores,
                molestias necessitatibus quam rem repellendus! Et libero nesciunt nisi
              </p>
            </div>
            <div className="block__item">
              <img className="block__item__img" src="/home-section--immersion.png" alt="" />
              <h3>Immersion.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta, minus! Asperiores harum maiores,
                molestias necessitatibus quam rem repellendus! Et libero nesciunt nisi
              </p>
            </div>
            <div className="block__item">
              <img className="block__item__img" src="/home-section--agile.png" alt="" />
              <h3>Agile.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta, minus! Asperiores harum maiores,
                molestias necessitatibus quam rem repellendus! Et libero nesciunt nisi
              </p>
            </div>
            <div className="block__item">
              <img className="block__item__img" src="/home-section--expertise.png" alt="" />
              <h3>Expertise.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta, minus! Asperiores harum maiores,
                molestias necessitatibus quam rem repellendus! Et libero nesciunt nisi
              </p>
            </div>
          </div>
        </section>
        <section className="section section--process">
          <div className="section__title section__title--annotation">
            <h2>Our <strong>process</strong></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deleniti dicta eaque excepturi
              exercitationem fugiat illum laudantium molestiae nam nisi, porro quae quas quasi ratione soluta tempora
              temporibus ullam veniam. Dolores ipsam iste natus necessitatibus nostrum perferendis, vero. Esse, quod!
            </p>
            <Link href="/about">Check it Out</Link>.
          </div>
          <ol className="section__content block block--ol">
            <li className="block__item">
              <h3>Discover, refine and validate.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci architecto corporis
                cupiditate
                delectus earum eum in, laboriosam nisi perspiciatis quibusdam recusandae sequi vitae voluptatibus!
                Architecto autem enim ex laboriosam, non quasi sint temporibus voluptas! Debitis deserunt
                dignissimos ex
                fuga laboriosam molestias nihil quo.
              </p>
            </li>
            <li className="block__item">
              <h3>Build, test and launch.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci architecto corporis
                cupiditate
                delectus earum eum in, laboriosam nisi perspiciatis quibusdam recusandae sequi vitae voluptatibus!
                Architecto autem enim ex laboriosam, non quasi sint temporibus voluptas! Debitis deserunt
                dignissimos ex
                fuga laboriosam molestias nihil quo.
              </p>
            </li>
            <li className="block__item">
              <h3>iterate and grow.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci architecto corporis
                cupiditate
                delectus earum eum in, laboriosam nisi perspiciatis quibusdam recusandae sequi vitae voluptatibus!
                Architecto autem enim ex laboriosam, non quasi sint temporibus voluptas! Debitis deserunt
                dignissimos ex
                fuga laboriosam molestias nihil quo.
              </p>
            </li>
          </ol>
        </section>
        <section className="section section--work">
          <div className="section__title section__title--annotation">
            <h2>Our <strong>work</strong></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ducimus, expedita fugit mollitia
              necessitatibus numquam obcaecati quo? Beatae, cumque, dolorem dolores fuga harum ipsam maiores, mollitia
              nostrum obcaecati placeat qui recusandae reprehenderit totam ullam veritatis?
            </p>
            <Link href="/work"><a className="button">view case Studies</a></Link>
          </div>
          <div className="section__content block block--grid-3">
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
            <div className="block__item">
              <Link href="//www.google.com"><a className="button button--image"><img src="#" alt="" /></a></Link>
            </div>
          </div>
        </section>
        <section className="section section--call-to-action">
          <div className="section__title section__title--annotation">
            <h2>Sound like a good <strong>fit</strong> for your business?</h2>
          </div>
          <div className="section__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem dolorem explicabo nemo placeat
              provident quam, ratione. Dolorum exercitationem incidunt iure labore odio odit quisquam repudiandae,
              voluptates. Deserunt dolores inventore iste minima.
            </p>
            <Link href="/work"><a className="button button--inverted">Work with us</a></Link>
            <p>Have a question? <Link href="/work">Get in touch</Link></p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__contact">
          <div>address details</div>
          <div>contact no</div>
          <div>email address</div>
        </div>
        <div className="footer__copyright">
          <div>copyright</div>
        </div>
      </footer>
    </div>
  );
};

export default App;