import "./Article-card.css";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import "./Modal.css";
import Form from "../form/Form";

function ArticleCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="article-card">
      <h3>Cours de sciences</h3>
      <p className="content">
        orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus
        nisl, pulvinar vel malesuada sed, fringilla viverra erat. In tellus
        nisl, imperdiet vitae congue ut, sollicitudin eu arcu. Sed lobortis sem
        at turpis tristique tincidunt. Sed viverra eget neque non vehicula.
        Morbi feugiat mi nec mattis congue. Aenean euismod ultricies sodales.
      </p>
      <div className="muted">
        <p>Charlotte Cordelle</p>
        <p>Category</p>
      </div>
      <div className="btn-group">
        <button type="button" className="redirectBtn">
          Voir plus...
        </button>
        <div className="btn-group">
          <button className="modifyBtn" onClick={() => setIsOpen(true)}>
            <Pencil size={20} />
          </button>
          <button className="deleteBtn" onClick={() => setIsOpen(true)}>
            <Trash size={20} />
          </button>
        </div>

        {isOpen && (
          <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Titre de la modale</h2>
              <p>Voici le contenu détaillé de ton article 😄</p>
              <Form />

              <button className="close-btn" onClick={() => setIsOpen(false)}>
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleCard;
