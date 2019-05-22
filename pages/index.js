import Link from "next/link";
import Header from "../components/header";
import Menu from '../components/menu';
import Hero from '../components/hero';


function Index() {
  return (
    <>
      <main>
        <Menu />
        <Hero />
        <section>
          <p>This site is currently under construction. Come back later for great content.</p>
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
