import React from 'react'
import CssBaseline from '@mui/material/CssBaseline' //reset css
import NavBar from './component/NavBar'
import ListComponent from './component/ListComponent'
import FetchAllData from './context/allProducts'



function App() {
    
    return (
        <>
        <FetchAllData>
        <CssBaseline/>
        <NavBar />
        <ListComponent />
        </FetchAllData>
        </>
    )
}

export default App
