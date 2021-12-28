import React, { createContext } from 'react';
import useFirebase from '../Firebase/useFirebase'
export const AuthContext=createContext()
const Context = ({children}) => {
    const allContext=useFirebase()
    return (
        <div>
            <AuthContext.Provider value={allContext}>
{children}
            </AuthContext.Provider>
            
        </div>
    )
}

export default Context
