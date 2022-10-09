import logo from './logo.svg';
import './App.css';
import ContactoListComponent
 from './components/conteiner/contacto_List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoListComponent></ContactoListComponent>      </header>
    </div>
  );
}

export default App;
