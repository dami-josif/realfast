import { createContext,useState } from "react";

const AppContext = createContext();
const AppProvider = ({children}) => {
    const [uid,setUid] = useState('trrt64');
    const [email,setEmail] = useState('oluwadamilare985@gmail.com');

    return(
        <AppContext.Provider value={{uid,setUid,email,setEmail}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider }