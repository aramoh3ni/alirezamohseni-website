import {
    SimpleGrid,
    Heading,
    Divider
} from '@chakra-ui/react'

import { CardList } from './CardList'

export const Posts = ({ data }) => {
    return (
        <>
            <Heading mt={10}>
                {data.title}
            </Heading>
            <Divider variant='dashed' mt={4} mb={4} />
            <SimpleGrid columns={[2, null, 3]} spacing='10px'>
                <CardList data={data.data} />
            </SimpleGrid>

        </>
    )
}