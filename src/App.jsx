import { Box } from '@chakra-ui/react';
import { Graficos } from './pages/Graficos';
import { Header } from './components/Header';
import './App.css';

function App() {
  return (
      <Box>
        <Header />
        <Graficos />
      </Box>
  );
}

export default App;
