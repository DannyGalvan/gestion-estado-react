import "./App.css";
import CredentialsContainer from "./components/containers/CredentialsContainer";
import LoginFormContainer from "./components/containers/LoginFormContainer";

function AppReduxSaga() {
  return (
    <div className="App">
      <LoginFormContainer />
      <CredentialsContainer />
    </div>
  );
}

export default AppReduxSaga;
