import {
  Container
} from "@chakra-ui/react";



import { Header, NavMenu, CardList, Footer } from "./components";

export default function App() {


  const maxWith = "850px"

  return (
    <>
      <NavMenu maxWith={maxWith} />
      <Container maxW={maxWith} mt={10} mb={10}>
        <Header />

        <CardList cardWith={"sm"} cardTitle="Articals" />


        <CardList cardWith={"4xl"} cardTitle="Projects" />

      </Container>
      <Footer maxWith="4xl" />
    </>
  );
}

