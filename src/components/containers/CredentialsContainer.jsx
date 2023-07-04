import { connect } from "react-redux";
import { Credentials } from "../pure/Credentials";

const mapStateToProps = (state) => {
  return {
    user: state.userState
  };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const CredentialsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Credentials);

export default CredentialsContainer;
