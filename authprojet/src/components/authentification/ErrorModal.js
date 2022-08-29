import React from "react";
import Button from "../Ui/Button";

const ErrorModal = (props) => {
  return (
    <div className="backDrop_modal">
      <div className="modal_div_container">
        <header className="modal_header_container">
          <p>{props.title}</p>
        </header>
        <section className="modal_section_container">
          <p>{props.message}</p>
        </section>

        <footer className="modal_section_container">
          <Button>OK</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
