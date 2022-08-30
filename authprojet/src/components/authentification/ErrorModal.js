import React from "react";
import ReactDOM from "react-dom";

import Button from "../Ui/Button";

const ErrorModalPourMettreDansLaDivIndexHtmlAuDessusDeRoot = (props) => {
  console.log("****ErrorModal.js====>");
  console.log(props);
  console.log("****ErrorModal.js<====");

  return (
    //info:pour fermer la fenetre autre qu'avec le button il y a un conClick sur la backDrop qui est le nom de la props dans authForm
    <div className="backDrop_modal" onConfirm={props.onConfirm}>
      <div className="modal_div_container">
        <header className="modal_header_container">
          <p>{props.title}</p>
        </header>
        <section className="modal_section_container">
          <p>{props.message}</p>
        </section>

        <footer className="modal_section_container">
          <Button onClickProps={props.onConfirm}>OK</Button>
        </footer>
      </div>
    </div>
  );
};
//bonne pratique pour les poppop et les modal rajouter un div dans le fichier index.html et l'appeler ici, cela evite de de mettre la modal dans la div root du dom
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ErrorModalPourMettreDansLaDivIndexHtmlAuDessusDeRoot
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
