const WhatIdo = () => {
  return (
    <div className=" px-4">
      <div className=" flex flex-col md:h-[600px] justify-around gap-5 shadow-2xl rounded-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300 ">
        <div className=" flex flex-col gap-5">
          <h1 className="md:text-6xl text-5xl font-light text-center">
            What I Do
          </h1>
          <p className="text-lg text-center">
            I am a passionate fullstack developer. I specialize in building
            front-end applications and also backend applications.
          </p>
          <p className="text-lg text-center">
            Stacks I use to develop fullstack applications.
          </p>
        </div>
        <div className=" flex items-center justify-around flex-wrap gap-5">
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 shadow-2xl">
            <img
              className="rounded-lg "
              src="images/react.js.png"
              alt="image description"
            />
          </figure>
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 shadow-2xl">
            <img
              className="rounded-lg"
              src="images/nodejs.jpg"
              alt="image description"
            />
          </figure>
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 shadow-2xl">
            <img
              className="rounded-lg"
              src="images/Mongodb.png"
              alt="image description"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default WhatIdo;
