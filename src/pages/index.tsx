import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import SocialButton from "../../components/SocialButton";
import Github from "../../public/github.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import ProjectCard from "../../components/ProjectCard";

export default function Home() {
  const pageVariants = {
    pageInitial: {
      opacity: 0,
    },
    pageAnimate: {
      opacity: 1,
      transition: { duration: 1 },
    },
    pageExit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={pageVariants}
    >
      <Head>
        <title>JAI GAIGNERY</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        {/* Div 1: Displayed on the left on large screens */}
        <div className="rounded-3xl p-10 flex flex-col gap-16 bg-[url('../../public/gradient-bg.jpg')] bg-cover">
          <h1 className="text-4xl font-semibold">
            Hey! I&apos;m Jai, a full-stack developer with a passion for
            innovation.
          </h1>
          <p className="flex-1">
            As a young full-stack developer with a passion for innovation, my
            goal is to leave my mark on the web by creating captivating and
            powerful web apps, to make every web user&apos;s life just a little
            bit easier.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <a
              href="mailto:jaigaignery@gmail.com"
              className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto"
            >
              Contact me
            </a>

            <div className="flex flex-row gap-5">
              <SocialButton
                bgColour="github"
                url="https://github.com/jaigaignery"
              >
                <Github />
              </SocialButton>
              <SocialButton
                bgColour="instagram"
                url="https://www.instagram.com/fishjailens"
              >
                <Instagram />
              </SocialButton>
              <SocialButton
                bgColour="linkedin"
                url="https://www.linkedin.com/in/jai-gaignery-73b551243/"
              >
                <Linkedin />
              </SocialButton>
            </div>
          </div>
        </div>

        {/* Div 2: Displayed on the right on large screens */}
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('../../public/profile.jpg')] bg-cover bg-center lg:col-start-2" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <ProjectCard
          name="Pollpal"
          description="Seamlessly create and host polls"
          projectUrl="https://pollpal-production.up.railway.app"
          imageUrl="/project-2.png"
        />
        <ProjectCard
          name="LinkForge"
          description="Store and share your socials and links, all from one page"
          imageUrl="/project-3.png"
          projectUrl="https://jaigaignery-linkforge.vercel.app"
          bgColour="#fdd1d2"
        />
        <ProjectCard
          name="Calculator"
          description="Simple calculator app"
          imageUrl="/project-4.png"
          projectUrl="https://calculator-production-b086.up.railway.app/"
          bgColour="#9cbdb6"
        />
        <ProjectCard
          name="Portfolio"
          description="Check out my work (you're already here!)"
          bgColour="#f8cb15"
        />
      </section>
    </motion.div>
  );
}
