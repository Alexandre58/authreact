import AuthForm from "./components/authentification/AuthForm";
import AxiosRequest from "./components/baseDeDnneesAxios.js/AxiosRequest";

function App() {
  return (
    <div className="App_container_div">
      <h1 className="app_h1">Hello React first commit effectué</h1>
      <AuthForm />
      <AxiosRequest />
    </div>
  );
}

export default App;
