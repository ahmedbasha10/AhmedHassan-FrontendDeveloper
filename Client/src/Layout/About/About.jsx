import React from "react";

const About = () => {
  const persons = [1, 2, 3]; // put persons data
  return (
    <section className="mt-10" id="About">
      <article className="lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto sm:p-0 xxs:p-5 text-white text-center">
        <h2 className="md:text-5xl xxs:text-4xl text-center font-bold mb-6">
          About <span className="text-cyan-400">Us</span>
        </h2>
        <p className="font-bold text-neutral-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolores
          commodi accusantium eum, unde iusto soluta iure atque? Voluptatibus
          sed vel, eius nesciunt accusamus quibusdam! Nostrum quia cupiditate
          autem veritatis.
        </p>
      </article>
      <div className="container flex justify-evenly gap-5 mt-20 flex-wrap">
        {persons.map((p, idx) => (
          <div key={idx} className="text-center lg:w-1/4 md:w-1/2 sm:w-full mt-5">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/person_img.png`}
                alt="person"
                className="w-20 rounded-full mx-auto"
              />
            </div>
            <div className="text-white font-bold text-2xl mt-3">
              <h3>Ahmed Hassan</h3>
            </div>
            <div>
              <p className="font-bold text-neutral-300 mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                rerum quibusdam assumenda velit dolorem ducimus itaque
                consectetur.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
