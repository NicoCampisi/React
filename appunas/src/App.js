import React, { useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
function App() {
  const [page, setPage] = useState('list')
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>  
      {/* <div>
        <button onClick={() => setPage('list')} > List </button>
        <button onClick={() => setPage('detail')}> Detail </button>
      </div>
      {page === 'list' && <ItemListContainer />}
      {page === 'detail' && <ItemDetailContainer />} */}
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
