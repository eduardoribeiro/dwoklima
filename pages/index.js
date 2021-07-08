import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marcas from "../components/Brands";
import Service from "../components/Service";
import About from "../components/About";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Layout pageTitle="DwoKlima">
      <Header />
      <Hero />
      <Service />
      <Marcas />
      <About />
      <Footer />
    </Layout>
  )
}
export default Index;