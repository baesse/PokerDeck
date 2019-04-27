import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../store/types';

class CreateUser extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
    };
  }
  saveUser = (event) => {
    event.preventDefault()
    this.props.onRequestUser(this.state)
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={event  =>{this.saveUser(event)}} className="d-flex">
        <input id="name" placeholder="Nome" onChange={event => this.setState({ name: event.target.value })} />
        <input id="email" placeholder="E-mail" onChange={event => this.setState({ email: event.target.value })} />
        <input id="cpf" placeholder="CPF" onChange={event => this.setState({ cpf: event.target.value })} />
        {this.props.user.name}
        <button>Salvar</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  onRequestUser: (payload) => dispatch({ type: Actions.USER_CREATE_REQUEST, payload}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUser);
