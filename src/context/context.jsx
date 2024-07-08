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

    const [control, setControl] = useState(false)

    return (
        <MyContext.Provider value={{ sharedState, setSharedState, control, setControl }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };
