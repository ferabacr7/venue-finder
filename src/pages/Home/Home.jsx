import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import FeaturedVenues from "../../components/FeaturedVenues/FeaturedVenues";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CategoriesSection />
        <FeaturedVenues />
      </main>

      <Footer />
    </>
  );
}

export default Home;