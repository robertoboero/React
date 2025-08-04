import logo from "../assets/logo.png";
/* import classes from "./Header.module.css"; */

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8  mb-8 md:mb-16">
      <img src={logo} alt="A canvas" className="mb-8 w-44 object-contain" />
      <h1 className="md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title text-xl">
        ReactArt
      </h1>
      <p className="text-stone-500" /* className={classes.paragraph} */>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
