import React from 'react'
import PropTypes from "prop-types"
//import { push } from 'react-router-redux'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormModule, Container, H2 } from './Style'
import LoginForm from "./LoginForm";
import { login } from "Actions/Login";

class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <FormModule>
        <Container>
          <H2>Login to your account</H2>
          <LoginForm submit={this.submit} />
        </Container>
      </FormModule>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};


//,
//login: PropTypes.func.isRequired

export default connect(null, { login })(LoginPage);




// const mapStateToProps = state => ({ count: state.counter.count, isIncrementing: state.counter.isIncrementing, isDecrementing: state.counter.isDecrementing })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   changePage: () => push('/admin')
// }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
