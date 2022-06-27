
import './App.css';

import ItemListContainer from './components/itemListFolder/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import BSTNavbar from './components/BSTNavBar';
import TestEventos from './components/TestEventos';
import Cart from './components/Cart';
import MyProvider from './components/Context/CartContext';

import { initializeApp } from "firebase/app";


function App() {

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBveIYgoYfJKubJe5pI0TyQnR31MGG1IQ",
  authDomain: "simpsontienda-f64da.firebaseapp.com",
  projectId: "simpsontienda-f64da",
  storageBucket: "simpsontienda-f64da.appspot.com",
  messagingSenderId: "1000718794315",
  appId: "1:1000718794315:web:9493690a80f07083a917ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





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
