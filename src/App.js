import {
  Routes,
  Route,
} from "react-router-dom";

import {
  Container
} from "@chakra-ui/react";

import { Header, NavMenu, Footer, Posts } from "./components";



const articals = {
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

export default function App() {


  const maxWith = "850px"

  return (
    <>
      <NavMenu maxWith={maxWith} />
      <Container maxW={maxWith} mt={10} mb={10}>
        <Header />

        <Routes>
          <Route path="/posts" element={<Posts data={articals} />} />
        </Routes>

      </Container>
      <Footer maxWith="4xl" />
    </>
  );
}

