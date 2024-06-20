import { Box, Text, Select, Divider, Button } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { postPercurso } from '../api/postPercurso';
import { MyContext } from '../context/context';

export function SideBar({percursos}){

    const [corrida, setCorrida] = useState(false)
    const [percursoSelecionado, setPercursoSelecionado] = useState(null);
    const { sharedState, setSharedState } = useContext(MyContext);

    const inicializarCorrida = async () => {
        await postPercurso();
        setCorrida(prevPercurso => !prevPercurso);
    };

    const finalizarCorrida = async () => {
        // await postPercurso();
        setCorrida(prevPercurso => !prevPercurso);
    };

    const handleCorrida = (event) => {
        const idPercurso = parseInt(event.target.value);
        const percusoEscolhido = percursos.find(percurso => percurso.idPercurso === idPercurso);
        setPercursoSelecionado(percusoEscolhido);
        setSharedState(percusoEscolhido);
    };

    console.log(sharedState);

    return(
    <Box>
        <Box p={5} display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Text fontSize='2xl' as='b'>Configurações</Text>
        </Box>
        <Divider opacity={1}/>
        <Box p={5} display={'flex'} alignItems={'center'} flexDirection={'column'} >
            {corrida ? 
            <Box>
                <Text fontSize='xl' marginRight={'20px'}>Parar carrinho</Text>
                <Button colorScheme='red' size='lg' marginTop={'20px'} onClick={finalizarCorrida}>Parar percurso</Button>
            </Box>
            : 
            <Box>
                <Text fontSize='xl' marginRight={'20px'}>Iniciar carrinho</Text>
                <Button colorScheme='blue' size='lg' marginTop={'20px'} onClick={inicializarCorrida}>Iniciar percurso</Button>
            </Box>
            }
            
        </Box>
        <Divider opacity={1}/>
        <Box p={5} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
            <Text fontSize='xl'>Verificar histórico</Text>
            <Select placeholder='Selecione um percurso' size='lg' marginTop={'20px'} onChange={handleCorrida} >
                {percursos.map((percurso) => (
                    <option key={percurso.idPercurso} value={percurso.idPercurso}>{percurso.idPercurso}</option>
                ))}
            </Select>
        </Box>
        <Divider opacity={1}/>
        <Box p={5} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
            <Text fontSize='xl'>Dados do percurso</Text>
            {percursoSelecionado ?
                <Box display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
                    <Text fontSize='lg' marginTop={'20px'}>Distância percorrida: {percursoSelecionado.distPercorrida} km</Text>
                    <Text fontSize='lg'>Tempo Total: {percursoSelecionado.tempoDecorrido} min</Text>
                </Box>
                : <Text fontSize='lg' marginTop={'20px'}>Selecione um percurso para visualizar os dados</Text>
            }
        </Box>
        <Divider opacity={1}/>
        <Box p={5} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
            <Text fontSize='xl'>Status Atual do Carrinho </Text>
            <Box p={5} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
                <Text fontSize='lg'>Velocidade: 0 km/h</Text>
                <Text fontSize='lg'>Aceleração: 0 cm/s²</Text>
            </Box>
        </Box>
    </Box>
)}

SideBar.propTypes = {
    percursos: PropTypes.arrayOf(PropTypes.object).isRequired
  };
  