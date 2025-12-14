import "./Footer.css";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Cha'Blog</h3>
          <p>Partagez vos expériences et vos apprentissages !</p>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/all">Mes Articles</Link>
            </li>
            <li>
              <Link to="/new">Nouvel Article</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Me suivre</h4>
          <div className="social-links">
            <a href="#" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Cha'Blog. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
