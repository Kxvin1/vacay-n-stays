import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";

function Footer() {
  const user = useSelector((state) => state.session.user);

  let decideView;

  if (!user) {
    decideView = (
      <footer className="footer">
        <ul className="footer-ul">
          <li className="footer-text">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/Kxvin1/vacay-n-stays"
              className="white"
            >
              GitHub Repository | VacayNStays 2022
            </a>
          </li>
          <li>
            <div className="github-dev">
              <span className="github-dev-span">Josh</span>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/jrbauti-09"
              >
                <i className="fab fa-github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/joshua-raphael-bautista-8a019a11b/"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </li>
          <li>
            <div className="github-dev">
              <span className="github-dev-span">Beau</span>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/midknightsurfer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/beau-ferguson-387a40112/"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </li>
          <li>
            <div className="github-dev">
              <span className="github-dev-span">Kevin</span>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Kxvin1"
              >
                <i className="fab fa-github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/kevin-b-643664221/"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </li>

          <li>Google Maps API</li>
          <li>Python</li>
          <li>React</li>
          <li>Redux</li>
          <li>SQLAlchemy</li>
          <li>Flask</li>
          <li>PostgreSQL</li>
          <li>Docker</li>
        </ul>
      </footer>
    );
  }

  return <div>{decideView}</div>;
}

export default Footer;
