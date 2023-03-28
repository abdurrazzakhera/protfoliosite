import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          beatae error provident saepe dolores esse, inventore quis expedita,
          labore magnam incidunt vero dolorum sequi aliquam possimus, eligendi
          harum nulla dicta maiores quia numquam! Magnam, ratione consectetur
          esse nemo quasi omnis enim quaerat aut deserunt ducimus at vero,
          dolorem nobis alias.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quod
          rerum, explicabo repellendus ipsa autem quae odit sit tempore ea
          itaque eius! Obcaecati cum dolorem fuga dicta deserunt reiciendis
          alias illo dolor porro incidunt, numquam asperiores tempora iusto sunt
          expedita pariatur fugit quas veritatis praesentium. Cumque veritatis
          laboriosam veniam cupiditate!
        </p>
      </div>
    </div>
  );
};

export default About;
