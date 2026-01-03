// import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
            Modern Creative <br /> Digital Agency
          </h1>

          <p>Hum beautiful websites banate hain 😄</p>

          <div className="hero-buttons">
            <a className="btn btn-primary" href="/contact">
              Get Started <ArrowRight size={18}/>
            </a>
            <a className="btn btn-outline" href="/portfolio">
              View Work
            </a>
          </div>
        </div>

        <div className="placeholder" style={{aspectRatio:"4/5"}} />
      </div>
    </section>
  );
}
