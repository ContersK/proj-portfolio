import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Container from "../../Components/Container";
import { Outlet } from "react-router-dom";

function PageBase() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}

export default PageBase;
