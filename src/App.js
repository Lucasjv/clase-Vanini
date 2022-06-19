
import './App.css';

import ItemListContainer from './components/itemListFolder/ItemListContainer';

import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import BSTNavbar from './components/BSTNavBar';
import TestEventos from './components/TestEventos';
import Cart from './components/Cart';




function App() {



const onAdd = (count) => {
  
  alert(`Agregaste ${count} productos al carrito`)
}



  return (
    <>

<BrowserRouter>
<BSTNavbar/>


<Routes>
  <Route path='/' element={<ItemListContainer/> }></Route>
  <Route path='/categoria/:id' element={<ItemListContainer/>}></Route>
  <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
  <Route path='/categoria/remera/item/:id' element={<ItemDetailContainer/>}></Route>
  <Route path='/categoria/gorras/item/:id' element={<ItemDetailContainer/>}></Route>
  <Route path='/categoria/tazas/item/:id' element={<ItemDetailContainer/>}></Route>
<Route path='/testeventos' element={<TestEventos/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
</Routes>
</BrowserRouter>



   <div className='Count'>
   <ItemCount initial = {1} max = {10} onAdd = {onAdd}/>
   </div>
   </>
  );
}

export default App;
