import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  PlusCircle,
  Eye,
  SquareLibrary,
  FolderGit2,
  BriefcaseBusiness,
  GraduationCap,
  Star,
} from "lucide-react";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Cha'Blog</h1>
          <p className="subtitle">
            Partagez vos expériences et vos apprentissages !
          </p>
          <p className="description">
            Ce blog a été conçu afin de partager vos expériences scolaires comme
            professionnelles. C'est un endroit de partage mais aussi d'entraide
            !
          </p>
        </div>
      </section>

      <section className="features">
        <h2>Fonctionnalités</h2>
        <div className="features-grid">
          <div className="feature-card">
            <PlusCircle size={40} />
            <h3>Créer</h3>
            <p>
              Créez de nouveaux articles rapidement avec un formulaire simple et
              catégorisez les pour une meilleure organisation.
            </p>
          </div>

          <div className="feature-card">
            <Eye size={40} />
            <h3>Consulter</h3>
            <p>
              Parcourez tous vos articles et accédez aux détails complets de ces
              derniers en un clic.
            </p>
          </div>

          <div className="feature-card">
            <BookOpen size={40} />
            <h3>Modifier</h3>
            <p>
              Mettez à jour vos articles à tout moment. Modifiez le titre, le
              contenu, l'auteur ou la catégorie facilement.
            </p>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Catégories</h2>
        <div className="categories-grid">
          <div className="category-item">
            <span>
              <SquareLibrary size={40} />
            </span>
            <h4>Apprentissage</h4>
            <p>Partage tes découvertes et apprentissages</p>
          </div>
          <div className="category-item">
            <span>
              <FolderGit2 size={40} />
            </span>
            <h4>Projets</h4>
            <p>Présente tes projets et réalisations</p>
          </div>
          <div className="category-item">
            <span>
              <BriefcaseBusiness size={40} />
            </span>
            <h4>Carrière</h4>
            <p>Réfléchis sur ton développement professionnel</p>
          </div>
          <div className="category-item">
            <span>
              <GraduationCap size={40} />
            </span>
            <h4>Vie Étudiante</h4>
            <p>Partage tes expériences d'étudiant</p>
          </div>
          <div className="category-item">
            <span>
              <Star size={40} />
            </span>
            <h4>Trends</h4>
            <p>Discute des tendances actuelles</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Prêt à partager?</h2>
        <p>Crée ton premier article et commence à exprimer tes idées :)</p>
        <button className="btn-large" onClick={() => navigate("/new")}>
          Créer un Article
        </button>
      </section>
    </div>
  );
};

export default Home;
