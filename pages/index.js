import Link from "next/link";
import Menu from '../components/menu';
import Hero from '../components/hero';
import { FaTools } from 'react-icons/fa';


const Index = () => {
  return (
    <>
      <main>
        <Menu />
        <Hero />
        <section>
          <p><FaTools /> This site is currently under construction. Come back later for great content. <FaTools /></p>
        </section>
        <section>
          <div id="instafeed"></div>
        </section>
      </main>
      <style jsx global>{`
      body {
        margin: 0px !important;
      }
      p {
        text-align: center;
      }
      
    `}</style>
    </>
  );
}

export default Index;
