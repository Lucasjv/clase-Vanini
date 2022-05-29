
import './App.css';
import ItemListContainer from './components/itemList/ItemListContainer';
import MUNavBar from './components/MUNavBar';

function App() {
  return (
    <>
   <MUNavBar/>
   <ItemListContainer greetings={"Bienvenidos a la tienda oficial de Uni"}/>
   </>
  );
}

export default App;
