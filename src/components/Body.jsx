import { Grid, GridItem } from "@chakra-ui/react";
import { SideBar } from "./SideBar";
import { GraficoVelocidade } from "./GraficoVelocidade";

export function Body() {
    return (
        <Grid
        h='900px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
        >
            <GridItem rowSpan={2} colSpan={1} shadow='md' borderWidth='1px' marginLeft={'10px'} marginTop={'10px'}>
                <SideBar/>
            </GridItem>
            <GridItem colSpan={2} shadow='md' borderWidth='1px' marginTop={'10px'} marginRight={'10px'}>
                <GraficoVelocidade/>
            </GridItem>
            <GridItem colSpan={2} shadow='md' borderWidth='1px' bg='papayawhip' marginTop={'10px'} marginRight={'10px'} />
            <GridItem colSpan={2} shadow='md' borderWidth='1px' bg='papayawhip' marginTop={'10px'} marginRight={'10px'} />
            <GridItem colSpan={2} shadow='md' borderWidth='1px' bg='papayawhip' marginTop={'10px'} marginRight={'10px'} />
        </Grid>
    );
}