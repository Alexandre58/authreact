/* eslint-disable */
//ci dessus pour désactiver les message erreur terminal du regex
import React, { useRef, useState } from "react";
import Button from "../Ui/Button";
import ErrorModal from "./ErrorModal";

const AuthForm = () => {
  // /**RECUP DES DONNEES DU FORMULAIRE AVEC USEREF */

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  //encours de chargement(is Loding) creation du state//voir la video 361 pour continuer isLoding
  const [isLoding, setIsLoding] = useState(false);
  //1 GERER LA MODAL ERRORMODEL AVEC UN USESTATE(affichage de la fenêtre en cas d'erreur)
  const [error, setError] = useState();
  //1 tout dabord controler si error est a true ou a false
  console.log(typeof error);
  if (error) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(emailInputRef);
  console.log(passwordInputRef);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    //la logique à executer input vide
    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setError({
        titleDeSetError: "un ou plusieurs champs sont vides",
        messageDeSetError: "Merci d'entrer votre nom et votre mot de passe",
      });
      return {
        /**  alert("Veillez remplir les champs du formulaire");*/
      };
    }
    //regex
    const regexEmail = (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };
    if (!regexEmail(enteredEmail)) {
      {
        /**1 affichage de la fenetre avec le setState */
      }
      setError({
        titleDeSetError: "Votre email n'est pas valide",
        messageDeSetError: "Merci d'entrer un format d'email valide",
      });
      return;
    }

    //pour vider les champs apres utilisation
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };
  //1 faire un reset du state error= nouvelle function pour le button de fermeture de la fenetre modal ErrorModal.js(message a l'utilistaeur) quand une erreur est survenue dans le formulaire
  //passer cette function qui est dans l'enfant avec un props onConfirm={errorHandler} dans le component ErrorModal ci-dessous ligne 90 a 100
  const errorHandler = () => {
    setError(null);
  };

  return (
    <section className="authForm_container_div">
      <h2>Se Connecter</h2>
      <form onSubmit={submitHandler}>
        <div className="authForm_container_email">
          <label htmlFor="email">Votre email</label>
          <input
            ref={emailInputRef}
            type="text"
            name="email"
            id="email"
            required={false}
          />
        </div>
        <div className="authForm_container_email">
          <label htmlFor="password">Votre mot de passe</label>
          <input
            ref={passwordInputRef}
            type="text"
            name="password"
            id="password"
            required={false}
          />
        </div>
        <Button type={"submit"} onClick={() => {}}>
          Se Connecter
        </Button>
      </form>
      {/**1 if error true errorModal s'affiche vu que le log indique true puis affiche ce qu'il y a dans setError*/}
      {error && (
        <ErrorModal
          title={error.titleDeSetError}
          message={error.messageDeSetError}
          onConfirm={errorHandler}
        />
      )}

      {isLoding && (
        <>
          <div className="lds-circle">
            <div></div>
          </div>
          <p className="authForm_p_encoursDe">En cours de chargement...</p>
        </>
      )}
    </section>
  );
};

export default AuthForm;
