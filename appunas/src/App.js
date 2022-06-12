import React, { useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
function App() {
  // const [page, setPage] = useState('list')
  // console.log(page)
  return (
    <div className="App">
      {/* <h1>TINA NAILS</h1>
      <NavBar />
      <div>
        <button onClick={() => setPage('list')} > List </button>
        <button onClick={() => setPage('detail')}> Detail </button>
      </div>
      {page === 'list' && <ItemListContainer />}
      {page === 'detail' && <ItemDetailContainer />} */}
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/ ' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
