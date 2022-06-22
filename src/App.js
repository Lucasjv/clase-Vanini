
import './App.css';

import ItemListContainer from './components/itemListFolder/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import BSTNavbar from './components/BSTNavBar';
import TestEventos from './components/TestEventos';
import Cart from './components/Cart';
import MyProvider from './components/Context/CartContext';




function App() {







  return (
    <>

<BrowserRouter>

<MyProvider>
<BSTNavbar/>


<Routes>
  <Route path='/' element={<ItemListContainer/> }></Route>
  <Route path='/categoria/:id' element={<ItemListContainer/>}></Route>
  <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
  <Route path='/categoria/remera/item/:id' element={<ItemDetailContainer/>}></Route>
  <Route path='/categoria/gorra/item/:id' element={<ItemDetailContainer/>}></Route>
  <Route path='/categoria/taza/item/:id' element={<ItemDetailContainer/>}></Route>
<Route path='/testeventos' element={<TestEventos/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
</Routes>

</MyProvider>
</BrowserRouter>




   </>
  );
}

export default App;
