import { Outlet } from "react-router-dom";

// Import routes
import { Router } from './router/router';

// Import Chackra-ui Components
import { Container } from "@chakra-ui/react";

// Import Custom Components
import { NavMenu, Footer } from "./components";

export default function App() {
  const maxWith = "850px"

  return (
    <>
      <NavMenu maxWith={maxWith} />
      <Container maxW={maxWith} mt={10} mb={10}>
        {/* <Header /> */}

        <Router />

        <Outlet />

      </Container>
      <Footer maxWith="4xl" />
    </>
  );
}

