import { Box, Flex, Heading } from '@chakra-ui/react';

export function Header() {

    return (
        <>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Flex as="header" width="100%" padding="4" bg="#d81c1c" color="white" alignItems="center" justifyContent="space-between" height={'70px'}>
                    <Flex alignItems="center">
                        <Heading as="h1" size="lg">Katiau ⚡</Heading>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
