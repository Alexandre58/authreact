import React from "react";

const AuthForm = () => {
  return (
    <div className="authForm_container_div">
      <h2>Se Connecter</h2>
      <form onSubmit={() => {}}>
        <div className="authForm_container_email">
          <label htmlFor="email">Votre email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="authForm_container_email">
          <label htmlFor="password">Votre mot de passe</label>
          <input type="text" name="password" id="password" required />
        </div>

        <button type="button" onClick={() => {}}>
          Valider
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
