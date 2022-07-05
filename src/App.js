
import './App.css';

import ItemListContainer from './components/itemListFolder/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import BSTNavbar from './components/BSTNavBar';
import TestEventos from './components/TestEventos';
import Cart from './components/Cart';
import MyProvider from './components/Context/CartContext';
import FBCheckOut from './components/FBCheckOut';
import { initializeApp } from "firebase/app";
import CheckOut from './components/CheckOut';


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
<Route path='/testeventos' element={<TestEventos/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/checkout' element={<FBCheckOut/>}></Route>
<Route path='/exit' element={<CheckOut/>}></Route>
</Routes>

</MyProvider>
</BrowserRouter>




   </>
  );
}

export default App;
