import TopBar from "../components/TopBar/TopBar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Collections from "../components/Collections/Collections";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Features from "../components/Features/Features";
import Destinations from "../components/Destinations/Destinations";
import Reviews from "../components/Reviews/Reviews";
import BrandStory from "../components/BrandStory/BrandStory";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <FeaturedProducts />
        <Features />
        <Destinations />
        <Reviews />
        <BrandStory />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
