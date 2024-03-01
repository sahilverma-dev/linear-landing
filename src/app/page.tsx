import { ClientsSection } from "./_components/sections/clients";
import { HeroSection } from "./_components/sections/hero-section";
import Container from "./_components/shared/container";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HeroSection />
        </Container>
      </div>
      <Container>
        <ClientsSection />
      </Container>
    </>
  );
};

export default Home;
