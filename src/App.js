import React from 'react'
import CssBaseline from '@mui/material/CssBaseline' //reset css
import NavBar from './component/NavBar'
import ListComponent from './component/ListComponent'
import FetchAllData from './context/allProducts'
import Login from './context/login'
import Cart from './context/cart'

function App() {
    
    return (
        <>
        <Login>
        <Cart>
        <FetchAllData>
        <CssBaseline/>
        <NavBar />
        <ListComponent />
        </FetchAllData>
        </Cart>
        </Login>
        </>
    )
}

export default App
