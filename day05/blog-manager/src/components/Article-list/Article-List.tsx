import { useState, useEffect } from "react";
import { type Article } from "../../models/article.interface";
import ArticleCard from "../article-card/Article-card";
import "./Article-List.css";

function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const loadArticles = () => {
      const existingArticles = localStorage.getItem("articles");
      const parsedArticles: Article[] = existingArticles
        ? JSON.parse(existingArticles)
        : [];
      setArticles(parsedArticles);
    };

    loadArticles();

    const handleArticlesUpdated = () => {
      loadArticles();
    };

    window.addEventListener("articlesUpdated", handleArticlesUpdated);

    return () => {
      window.removeEventListener("articlesUpdated", handleArticlesUpdated);
    };
  }, []);

  return (
    <div className="article-list">
      {articles.length === 0 ? (
        <p>Aucun article pour le moment</p>
      ) : (
        articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))
      )}
    </div>
  );
}

export default ArticleList;