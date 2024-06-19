import { Grid, GridItem } from "@chakra-ui/react";
import { SideBar } from "./SideBar";
import { GraficoVelocidade } from "./GraficoVelocidade";
import { getPercursos } from "../api/getPercursos";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "../context/context";
import { GraficoTempo } from "./GraficoTempo";

export function Body() {
    const [percursos, setPercursos] = useState([]);
    const [percursoSelecionado, setPercursoSelecionado] = useState(null);
    const { sharedState } = useContext(MyContext);

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
        mostrarPercursos();

        setPercursoSelecionado(sharedState);


    }, [sharedState]);

    console.log(percursoSelecionado);

    return (
        <Grid
            h='900px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={2} colSpan={1} shadow='md' borderWidth='1px' marginLeft={'10px'} marginTop={'10px'}>
                <SideBar percursos={percursos} />
            </GridItem>
            <GridItem colSpan={2} shadow='md' borderWidth='1px' marginTop={'10px'} marginRight={'10px'}>
                <GraficoVelocidade percursoSelecionado={percursoSelecionado} />
            </GridItem>
            <GridItem colSpan={2} shadow='md' borderWidth='1px' bg='papayawhip' marginTop={'10px'} marginRight={'10px'} />
            <GridItem colSpan={2} shadow='md' borderWidth='1px' bg='papayawhip' marginTop={'10px'} marginRight={'10px'} >
                <GraficoTempo percursoSelecionado={percursoSelecionado} />
            </GridItem>
            <GridItem colSpan={2} shadow='md' borderWidth='1px' bg='papayawhip' marginTop={'10px'} marginRight={'10px'} />
        </Grid>
    );
}
