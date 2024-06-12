import { Box, Text, Select, Divider, Button } from '@chakra-ui/react';


export function SideBar(){
    return(
    <Box>
        <Box p={5} display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Text fontSize='2xl' as='b'>Configurações</Text>
        </Box>
        <Divider opacity={1}/>
        <Box p={5} display={'flex'} alignItems={'center'} flexDirection={'column'} >
            <Text fontSize='xl' marginRight={'20px'}>Iniciar carrinho</Text>
            <Button colorScheme='blue' size='lg' marginTop={'20px'}>Iniciar percurso</Button>
        </Box>
        <Divider opacity={1}/>
        <Box p={5} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
            <Text fontSize='xl'>Verificar histórico</Text>
            <Select placeholder='Selecione um percurso' size='lg' marginTop={'20px'} />
        </Box>
        <Divider opacity={1}/>
        <Box p={5} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
            <Text fontSize='xl'>Dados do percurso</Text>
            <Text fontSize='lg' marginTop={'20px'}>Distância: 0 km</Text>
            <Text fontSize='lg'>Tempo: 0 min</Text>
            <Text fontSize='lg'>Velocidade: 0 km/h</Text>
        </Box>
    </Box>
)}