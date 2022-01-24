import React, { useContext, useState} from 'react'

export const LoginContext = React.createContext()

export const useLoginContext = ()=>{
    return useContext(LoginContext)
}

export default function Login(props) {
  
    const [isLogged, setIsLogged] = useState(false)
  
    console.log(isLogged)
    return <LoginContext.Provider value={{isLogged,setIsLogged}}>
        {props.children}
    </LoginContext.Provider>
}


