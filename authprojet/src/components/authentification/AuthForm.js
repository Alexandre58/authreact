import React, { useRef } from "react";
import Button from "../Ui/Button";
import ErrorModal from "./ErrorModal";

const AuthForm = () => {
  // /**RECUP DES DONNEES DU FORMULAIRE AVEC USEREF */

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  console.log(emailInputRef);
  console.log(passwordInputRef);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log(enteredEmail);
    console.log(enteredPassword);
    //la logique à executer input vide
    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      return alert("Veillez remplir les champs du formulaire");
    }
    //regex
    const regexEmail = (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };
    if (!regexEmail(enteredEmail)) {
      return;
    }

    //pour vider les champs apres utilisation
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  return (
    <section className="authForm_container_div">
      <h2>Se Connecter</h2>

      <form onSubmit={submitHandler}>
        <div className="authForm_container_email">
          <label htmlFor="email">Votre email</label>
          <input ref={emailInputRef} type="email" name="email" id="email" />
        </div>
        <div className="authForm_container_email">
          <label htmlFor="password">Votre mot de passe</label>
          <input
            ref={passwordInputRef}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <Button type={"submit"} onClick={() => {}}>
          Se Connecter
        </Button>
      </form>
      <ErrorModal title="il y a une erreur" message="Les champs sont vides" />
    </section>
  );
};

export default AuthForm;
