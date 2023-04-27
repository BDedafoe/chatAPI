import { useState } from 'react';
import { BrowswerRouter, Routes, Route, Navigate } from 'react-router-dom';
import Chat from "@/components/chat";
import Login from "@/components/login";


function App() {
  return (
      <div className='app'>
        <BrowswerRouter>
          <Routes>
            <Route path='/chat' element={<Chat />} />


          </Routes>
        </BrowswerRouter>
      </div>
  )
}

export default App
