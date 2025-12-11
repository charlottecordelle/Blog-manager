import "./Form.css";

function Form() {
  return (
    <form>
      <div className="card">
      <h2>Nouvel article</h2>
        <div className="form-group">
          <label>Titre</label>
          <input type="text" placeholder="Donnez un titre" name="titre" />
        </div>
        <div className="form-group">
          <label>Contenu</label>
          <textarea placeholder="Rentrez du texte" name="titre" />
        </div>
        <div className="form-group">    
          <label>Auteur</label>
          <input type="text" placeholder="Votre nom" name="titre" />
        </div>
        <button type="submit" className="btn">Valider</button>
      </div>
    </form>
  );
}   

export default Form;
