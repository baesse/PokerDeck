import React from 'react';
import { connect } from 'react-redux';
import { API_CALL_REQUEST } from './store/types';
import logo from './logo.svg';

function App(props) {
  const {
    fetching, dog, onRequestDog, error,
  } = props;
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={dog || logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Dog Saga</h1>
      </header>

      {dog ? (
        <p className="App-intro">Keep clicking for new dogs</p>
      ) : (
        <p className="App-intro">Replace the React icon with a dog!</p>
      )}

      {fetching ? (
        <button type="submit" disabled>Fetching...</button>
      ) : (
        <button type="submit" onClick={onRequestDog}>Request a Dog</button>
      )}

      {error && <p style={{ color: 'red' }}>Uh oh - something went wrong!</p>}
    </div>
  );
}

const mapStateToProps = state => ({
  fetching: state.dogs.fetching,
  dog: state.dogs.dog,
  error: state.dogs.error,
});

const mapDispatchToProps = dispatch => ({
  onRequestDog: () => dispatch({ type: API_CALL_REQUEST }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
