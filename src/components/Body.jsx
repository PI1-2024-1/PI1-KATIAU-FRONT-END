import { Grid, GridItem } from "@chakra-ui/react";
import { SideBar } from "./SideBar";
import { GraficoVelocidade } from "./GraficoVelocidade";
import { GraficoTrajetoria } from "./GraficoTrajetoria";
import { getPercursos } from "../api/getPercursos";
import { useEffect, useState } from "react";


export function Body() {
    
    const [percursos, setPercursos] = useState([]);
    
    useEffect(() => {
        async function mostrarPercursos() {
            try { 
                const percursos = await getPercursos();
                setPercursos(percursos);
            } catch (error) {
                console.error('Erro ao buscar os dados da API:', error);
                throw error;
            }
        }
        console.log(mostrarPercursos())
    }, []);

    
    return (
        <Grid
        h='900px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
        >
            <GridItem rowSpan={2} colSpan={1} shadow='md' borderWidth='1px' marginLeft={'10px'} marginTop={'10px'}>
                <SideBar percursos={percursos}/>
            </GridItem>
            <GridItem id="velocidades" colSpan={2} shadow='md' borderWidth='1px' marginTop={'10px'} marginRight={'10px'}>
                <GraficoVelocidade/>
            </GridItem>
            <GridItem id="Percurso" colSpan={2} shadow='md' borderWidth='1px' marginTop={'10px'} marginRight={'10px'} >
                <GraficoTrajetoria/>
            </GridItem>
            <GridItem colSpan={2} shadow='md' borderWidth='1px' bg='papayawhip' marginTop={'10px'} marginRight={'10px'} />
            <GridItem colSpan={2} shadow='md' borderWidth='1px' bg='papayawhip' marginTop={'10px'} marginRight={'10px'} />
        </Grid>
    );
}