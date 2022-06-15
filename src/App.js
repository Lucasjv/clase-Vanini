
import './App.css';

import ItemListContainer from './components/itemListFolder/ItemListContainer';

import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import BSTNavbar from './components/BSTNavBar';
import TestEventos from './components/TestEventos';




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
<Route path='/testeventos' element={<TestEventos/>}></Route>
</Routes>
</BrowserRouter>



   <div className='Count'>
   <ItemCount initial = {1} max = {10} onAdd = {onAdd}/>
   </div>
   </>
  );
}

export default App;
