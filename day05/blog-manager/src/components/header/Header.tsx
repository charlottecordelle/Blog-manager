import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          Mon Site
        </Link>
        
        <ul className="nav-links">
          <li>
            <Link to="/">Accueil</Link>
          </li> 
          <li>
            <Link to="/all">Tout les articles</Link>
          </li>
          <li>
            <Link to="/new">Nouvel Article</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;