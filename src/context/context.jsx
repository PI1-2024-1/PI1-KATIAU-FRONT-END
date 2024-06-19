import { createContext, useState } from 'react';

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
const MyProvider = ({ children }) => {
    const [sharedState, setSharedState] = useState({
        idPercurso: '',
        distPercorrida: '',
        tempoDecorrido: '',
      }
    );

    return (
        <MyContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };
