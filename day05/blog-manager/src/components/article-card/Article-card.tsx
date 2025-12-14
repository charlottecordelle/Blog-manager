import "./Article-card.css";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import "./Modal.css";
import { type Article, Category } from "../../models/article.interface";
import { useNavigate } from "react-router-dom";

function ArticleCard({ article }: { article: Article }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [author, setAuthor] = useState(article.author);
  const [category, setCategory] = useState(article.category);
  const navigate = useNavigate();

  const goToArticle = () => {
    navigate(`/article?id=${article.id}`);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingArticles = localStorage.getItem("articles");
    const articles: Article[] = existingArticles
      ? JSON.parse(existingArticles)
      : [];

    const updatedArticles = articles.map((a) =>
      a.id === article.id
        ? {
            ...a,
            title: title.trim(),
            content: content.trim(),
            author: author.trim(),
            category: category,
          }
        : a
    );

    localStorage.setItem("articles", JSON.stringify(updatedArticles));
    window.dispatchEvent(new Event("articlesUpdated"));

    setIsOpen(false);
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
              <h2>Modifier mon article</h2>
              <form onSubmit={handleEditSubmit}>
                <div className="form-group">
                  <label>Titre</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Contenu</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Auteur</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Catégorie</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Category)}
                  >
                    <option value={Category.APPRENTISSAGE}>
                      {Category.APPRENTISSAGE}
                    </option>
                    <option value={Category.PROJETS}>{Category.PROJETS}</option>
                    <option value={Category.CARRIERE}>
                      {Category.CARRIERE}
                    </option>
                    <option value={Category.VIE_ETUDIANTE}>
                      {Category.VIE_ETUDIANTE}
                    </option>
                    <option value={Category.TRENDS}>{Category.TRENDS}</option>
                  </select>
                </div>
                <div className="modal-actions">
                  <button
                    type="button"
                    className="btnCancel"
                    onClick={() => setIsOpen(false)}
                  >
                    Annuler
                  </button>
                  <button type="submit" className="btnSave">
                    Enregistrer
                  </button>
                </div>
              </form>
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
                  className="btnCancel"
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  Annuler
                </button>
                <button className="btnDelete" onClick={handleDelete}>
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
