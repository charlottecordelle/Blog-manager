import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { type Article } from "../../models/article.interface";
import "./Article.css";

const Article = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const articleId = searchParams.get("id");

    if (!articleId) {
      navigate("/all");
      return;
    }

    const existingArticles = localStorage.getItem("articles");
    const articles: Article[] = existingArticles
      ? JSON.parse(existingArticles)
      : [];

    const foundArticle = articles.find((a) => String(a.id) === articleId);

    if (foundArticle) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setArticle(foundArticle);
    } else {
      navigate("/all");
    }
  }, [navigate, searchParams]);

  if (!article) {
    return <div className="article-detail">Article non trouvé</div>;
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="article-detail">
      <button className="back-btn" onClick={() => navigate("/all")}>
        ← Retour
      </button>

      <article className="article-container">
        <header className="article-header">
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span className="author">Par {article.author}</span>
            <span className="category">{article.category}</span>
            <span className="date">
              {formatDate(article.createdAt)}
            </span>
          </div>
        </header>

        <main className="article-content">
          <p>{article.content}</p>
        </main>
      </article>
    </div>
  );
};

export default Article;
