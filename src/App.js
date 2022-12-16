import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
    <p>salam alikom cv hbb</p>
    <button>click here </button>
    </div>
  );
}

export class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default App;