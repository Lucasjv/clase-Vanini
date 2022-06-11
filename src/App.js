
import './App.css';

import ItemListContainer from './components/itemListFolder/ItemListContainer';
import MUNavBar from './components/MUNavBar';
import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {



const onAdd = (count) => {
  
  alert(`Agregaste ${count} productos al carrito`)
}



  return (
    <>

<BrowserRouter>
<Routes>
  <Route path='/Home'></Route>
  <Route path='/Contacto'></Route>
  <Route path='/Productos'></Route>
</Routes>
</BrowserRouter>

   <MUNavBar/>
   <ItemDetailContainer/>
   <ItemListContainer greetings={"Bienvenidos a la tienda oficial de Uni"}/>
   <div className='Count'>
   <ItemCount initial = {1} max = {10} onAdd = {onAdd}/>
   </div>
   </>
  );
}

export default App;
