import { Box, Flex, Heading, Link } from '@chakra-ui/react';

export function Header() {

    return (
        <>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Flex as="header" width="100%" padding="4" bg="#d81c1c" color="white" alignItems="center" justifyContent="space-around" height={'70px'}>
                    <Flex alignItems="center" >
                        <Heading as="h1" size="lg">⚡KATIAU⚡ </Heading>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
