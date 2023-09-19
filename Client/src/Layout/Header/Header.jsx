import React from "react";

const Header = () => {
  return (
    <header className="bg-hero-background bg-no-repeat bg-cover 2xl:bg-left lg:bg-center bg-fixed h-screen flex items-center lg:p-0 xxs:p-5 z-0">
      <article className="text-white 2xl:w-1/3 xl:w-5/12 lg:w-1/2 xxs:w-full text-center mb-auto mt-auto 2xl:mx-52 lg:mx-40 xxs:mx-0">
        <h1 className="md:text-5xl xxs:text-3xl font-bold mb-6">Discover Our <span className="text-cyan-400">Capsules</span></h1>
        <p className="md:text-base xxs:text-sm font-bold tracking-wide">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          nobis blanditiis commodi, deserunt natus laborum obcaecati
          necessitatibus quibusdam nulla, debitis sapiente saepe aut, iusto cum
          veniam maiores qui fugiat vitae.
        </p>
      </article>
    </header>
  );
};

export default Header;
