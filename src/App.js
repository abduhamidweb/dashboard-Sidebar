import React, {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import SignedUser from './SignedUser.jsx'
import UnsignedUser from './UnsignedUser.jsx'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js';



function App() {
  const [isSigned, setIsSigned] = useState(true)

  return (
    <>
      <Sidebar />

    </>
  );

 
  // isSigned ? (
  //   <BrowserRouter>
  //     <SignedUser />
  //   </BrowserRouter>
  // ) : (
  //   <UnsignedUser />
  // )
}

export default App;
