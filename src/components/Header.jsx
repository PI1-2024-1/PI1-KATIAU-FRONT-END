import { Box, Flex, Heading, Link } from '@chakra-ui/react';

export function Header() {

    return (
        <>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Flex as="header" width="100%" padding="4" bg="#d81c1c" color="white" alignItems="center" justifyContent="space-around" height={'70px'}>
                    <Flex alignItems="center" >
                        <Heading as="h1" size="lg">KATIAU ⚡⚡ </Heading>
                        <Heading as="h2" size="g"> ( Kart de Alta Tecnologia Integrada, Autônoma e Única ) </Heading>
                        {/* <p> Saiba mais em: </p>
                        <Link href='https://pi1-2024-1.github.io/PI1-KATIAU-docs/' > docs </Link> */}
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
