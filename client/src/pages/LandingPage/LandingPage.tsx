import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="hero-wrapper">
        <HeroSection />
      </div>
    </div>
  );
};

export default LandingPage;
