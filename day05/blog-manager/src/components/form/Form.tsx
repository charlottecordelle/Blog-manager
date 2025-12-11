import "./Form.css";
import { useState } from "react";
import { type Article } from "../../models/article.interface";

function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const isFormValid =
    title.trim() !== "" && content.trim() !== "" && author.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    const existingArticles = localStorage.getItem("articles");
    const articles: Article[] = existingArticles
      ? JSON.parse(existingArticles)
      : [];

    const nextId =
      articles.length > 0
        ? Math.max(...articles.map((a) => Number(a.id))) + 1
        : 1;

    const newArticle: Article = {
      id: nextId,
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
      createdAt: new Date(),
    };

    articles.push(newArticle);
    localStorage.setItem("articles", JSON.stringify(articles));

    setTitle("");
    setContent("");
    setAuthor("");

    console.log(newArticle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card">
        <h2>Nouvel article</h2>
        <div className="form-group">
          <label>Titre</label>
          <input
            type="text"
            placeholder="Donnez un titre"
            name="titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contenu</label>
          <textarea
            placeholder="Rentrez du texte"
            name="contenu"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Auteur</label>
          <input
            type="text"
            placeholder="Votre nom"
            name="auteur"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" className="btn" disabled={!isFormValid}>
          Valider
        </button>
      </div>
    </form>
  );
}

export default Form;
