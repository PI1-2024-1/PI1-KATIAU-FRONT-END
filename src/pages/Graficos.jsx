
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { Box, Button } from '@chakra-ui/react';

export function Graficos() {
    const [count, setCount] = useState(0);
    return (
        <>

                <Box textAlign="center" mt="8" style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                    
                    <h1>Vite + React</h1>
                    <div className="card">
                        <Button onClick={() => setCount(count => count + 1)}>
                            count is {count}
                        </Button>
                        <p>
                            Edit <code>src/App.jsx</code> and save to test HMR
                        </p>
                    </div>
                    <p className="read-the-docs">
                        Click on the Vite and React logos to learn more
                    </p>
                </Box>
        </>
    )
}

