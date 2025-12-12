import "./Article-card.css";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import "./Modal.css";
import { type Article } from "../../models/article.interface";
import { useNavigate } from "react-router-dom";

function ArticleCard({ article }: { article: Article }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  const goToArticle = () => {
    navigate("/article");
  };

  const handleDelete = () => {
    const existingArticles = localStorage.getItem("articles");
    const articles: Article[] = existingArticles
      ? JSON.parse(existingArticles)
      : [];

    const filteredArticles = articles.filter((a) => a.id !== article.id);
    localStorage.setItem("articles", JSON.stringify(filteredArticles));

    window.dispatchEvent(new Event("articlesUpdated"));

    setIsDeleteModalOpen(false);
  };

  return (
    <div className="article-card">
      <h3>{article.title}</h3>
      <p className="content">{article.content}</p>
      <div className="muted">
        <p>{article.author}</p>
        <p>{article.category}</p>
      </div>
      <div className="btn-group">
        <button type="button" className="redirectBtn" onClick={goToArticle}>
          Voir plus...
        </button>
        <div className="btn-group">
          <button className="modifyBtn" onClick={() => setIsOpen(true)}>
            <Pencil size={20} />
          </button>
          <button
            className="deleteBtn"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <Trash size={20} />
          </button>
        </div>

        {isOpen && (
          <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Titre de la modale</h2>

              <button className="close-btn" onClick={() => setIsOpen(false)}>
                Fermer
              </button>
            </div>
          </div>
        )}

        {isDeleteModalOpen && (
          <div
            className="modal-overlay"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Supprimer l'article</h2>
              <p>Êtes-vous sûr de vouloir supprimer cet article ?</p>
              <div className="modal-actions">
                <button
                  className="btn-cancel"
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  Annuler
                </button>
                <button className="btn-delete" onClick={handleDelete}>
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleCard;