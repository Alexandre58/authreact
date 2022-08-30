import React from "react";

const Card = ({ listeJsons }) => {
  console.log("=================Card>");
  console.log(listeJsons);
  console.log("<=================Card");

  return (
    <article className="card_article_container">
      <ul>
        <li>user = {listeJsons.id}</li>
        <li>L'auteur = {listeJsons.author}</li>
        <li>
          <img src={listeJsons.photoProfilUrl} width="150" height={150} />
        </li>
        <li>Le title={listeJsons.title}</li>
        <li>Nom={listeJsons.nom}</li>
        <li>Prenom={listeJsons.prenom}</li>
        <li>Biographie={listeJsons.biographie}</li>
        <li>Commentaire={listeJsons.commentaire}</li>
      </ul>
    </article>
  );
};

export default Card;
