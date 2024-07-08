import { Grid, GridItem } from "@chakra-ui/react";
import { SideBar } from "./SideBar";
import { GraficoVelocidade } from "./GraficoVelocidade";
import { GraficoTrajetoria } from "./GraficoTrajetoria";
import { GraficoDistancia } from "./GraficoDistancia";
import { GraficoAceleracao } from "./GraficoAceleracao";
import { GraficoConsumoEnergetico } from "./GraficoConsumoEnergetico";
import { getPercursos } from "../api/getPercursos";
import { useEffect, useState, useContext } from "react";
import { getPercursoDetalhes } from "../api/getTelemetria";
import { MyContext } from "../context/context";

export function Body() {
    const [percursos, setPercursos] = useState([]);
    const [percursoSelecionado, setPercursoSelecionado] = useState(null);
    const [telemetria, setTelemetria] = useState([]);
    const { sharedState } = useContext(MyContext);
    const { control } = useContext(MyContext);

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

        async function getTelemetria() {
            console.log('teste', sharedState)
            if (sharedState.idPercurso !== '')
                try {
                    const telemetrias = await getPercursoDetalhes(sharedState.idPercurso);
                    console.log('Telemetrias', telemetrias);
                    setTelemetria(telemetrias);
                } catch (error) {
                    console.error('Erro ao buscar os dados da API:', error);
                }
        }

        mostrarPercursos();

        if(control){
            setInterval(() => {
                getTelemetria();
            }, 1000);
        } else {
            getTelemetria();
        }
        // Descomentar para atualizar a telemetria a cada 5 segundos
        // getTelemetria();

        setPercursoSelecionado(sharedState);


    }, [sharedState, control]);

    console.log(percursoSelecionado);

    return (
        <Grid
            h='900px'
            templateRows='repeat(4, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={3} colSpan={1} shadow='md' borderWidth='1px' marginLeft={'10px'} marginTop={'10px'}>
                <SideBar percursos={percursos} dados={telemetria}/>
            </GridItem>
            <GridItem colSpan={2} shadow='md' borderWidth='1px' marginTop={'10px'} marginRight={'10px'}>
                <GraficoVelocidade percursoSelecionado={percursoSelecionado} dados={telemetria} />
            </GridItem>
            <GridItem colSpan={2} shadow='md' borderWidth='1px' marginTop={'10px'} marginRight={'10px'}>
                <GraficoAceleracao percursoSelecionado={percursoSelecionado} dados={telemetria} />             
            </GridItem>
            <GridItem colSpan={2} shadow='md' borderWidth='1px' marginTop={'10px'} marginRight={'10px'}>
              <GraficoTrajetoria percursoSelecionado={percursoSelecionado} dados={telemetria} />
            </GridItem>
            <GridItem colSpan={2} shadow='md' borderWidth='1px' marginTop={'10px'} marginRight={'10px'}>
              <GraficoDistancia percursoSelecionado={percursoSelecionado} dados={telemetria} />   
            </GridItem>
            <GridItem  colSpan={4} shadow='md' borderWidth='1px' marginTop={'10px'} marginRight={'10px'} marginBottom={'10px'}>
                <GraficoConsumoEnergetico percursoSelecionado={percursoSelecionado} dados={telemetria} />
            </GridItem>
        </Grid>
    );
}
