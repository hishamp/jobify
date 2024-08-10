import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I&apos;m baby photo booth PBR&B iceland umami cardigan meh, mixtape
            etsy selfies air plant cliche cronut vinyl same. 8-bit portland blog
            pickled, readymade sartorial activated charcoal typewriter. Tumblr
            man braid freegan put a bird on it praxis migas jean shorts fashion
            axe tumeric cliche kogi. Synth health goth cupping, cloud bread
            fingerstache bushwick roof party.
          </p>
          <Link className="btn register-link" to={"/register"}>
            Register
          </Link>
          <Link className="btn" to={"/login"}>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="jpb hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
