import {
    SimpleGrid,
    Heading,
    Divider
} from '@chakra-ui/react'

import { CardList } from "../../components";

const data = {
    title: "Articals",
    maxWith: "sm",
    data: [
      {
        imageUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg",
        url: "https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg",
        postedAt: "April, 10, 2022",
        title: "How to become Web Developer?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ducimus. Sunt, laudantium, necessitatibus distinctio in eligendi asperiores molestias, nostrum tempore harum omnis placeat corrupti eos? In iusto officia magni perspiciatis."
      
      },
      {
        imageUrl: "https://r4ys.com/wp-content/uploads/2020/05/What-is-SEO.png",
        url: "https://r4ys.com/wp-content/uploads/2020/05/What-is-SEO.png",
        postedAt: "April, 10, 2022",
        title: "Do you know about SEO?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ducimus. Sunt, laudantium, necessitatibus distinctio in eligendi asperiores molestias, nostrum tempore harum omnis placeat corrupti eos? In iusto officia magni perspiciatis."
      },
      {
        imageUrl: "https://laravelnews.imgix.net/images/tailwind-intellisense.jpg?ixlib=php-3.3.1",
        url: "https://laravelnews.imgix.net/images/tailwind-intellisense.jpg?ixlib=php-3.3.1",
        postedAt: "April, 10, 2022",
        title: "How add Telwient css to our react project",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ducimus. Sunt, laudantium, necessitatibus distinctio in eligendi asperiores molestias, nostrum tempore harum omnis placeat corrupti eos? In iusto officia magni perspiciatis."
      },
      {
        imageUrl: "https://5.imimg.com/data5/SK/FD/EF/ANDROID-28363567/product-jpeg-500x500.jpeg",
        url: "https://5.imimg.com/data5/SK/FD/EF/ANDROID-28363567/product-jpeg-500x500.jpeg",
        postedAt: "April, 10, 2022",
        title: "Python Course 🚀❤️‍🔥",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ducimus. Sunt, laudantium, necessitatibus distinctio in eligendi asperiores molestias, nostrum tempore harum omnis placeat corrupti eos? In iusto officia magni perspiciatis."
      }
    ]
  }

export const Posts = () => {
    return (
        <>
            <Heading mt={10} as='h4'>
                {data.title}
            </Heading>
            <Divider variant='dashed' mt={4} mb={4} />
            <SimpleGrid columns={[2, null, 3]} spacing='10px'>
                <CardList data={data.data} />
            </SimpleGrid>
        </>
    )
}