import { classNames } from "@/utils";
import { ClientsSection } from "./_components/sections/clients";
import { HeroSection } from "./_components/sections/hero-section";
import Container from "./_components/shared/container";
import { StarsIllustration } from "./_components/icons/stars";
import { UnlikeAnyToolSection } from "./_components/sections/unlike-any-tool";

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
      <div
        className={classNames(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
      <Container>
        <UnlikeAnyToolSection />
      </Container>
    </>
  );
};

export default Home;
