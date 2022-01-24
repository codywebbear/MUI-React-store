import React from 'react'
import CssBaseline from '@mui/material/CssBaseline' //reset css
import NavBar from './component/NavBar'
import ListComponent from './component/ListComponent'
import FetchAllData from './context/allProducts'
import Login from './context/login'


function App() {
    
    return (
        <>
        <Login>
        <FetchAllData>
        <CssBaseline/>
        <NavBar />
        <ListComponent />
        </FetchAllData>
        </Login>
        </>
    )
}

export default App
