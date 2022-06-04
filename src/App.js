
import './App.css';

import ItemListContainer from './components/itemListFolder/ItemListContainer';
import MUNavBar from './components/MUNavBar';
import ItemCount from './components/ItemCount';



function App() {
const onAdd = (count) => {
  
  alert(`Agregaste ${count} productos al carrito`)
}



  return (
    <>
   <MUNavBar/>
   <ItemListContainer greetings={"Bienvenidos a la tienda oficial de Uni"}/>
   <div className='Count'>
   <ItemCount initial = {1} max = {10} onAdd = {onAdd}/>
   </div>
   </>
  );
}

export default App;
