import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const components = () => {
    return (
      <ul className="flex flex-col items-start justify-center gap-5 px-5 py-5 font-semibold transition-all ease-in duration-500">
        <li className=" hover:text-blue-400 duration-500 hover:cursor-pointer">
          HOME
        </li>
        <li className=" hover:text-blue-400 duration-500 hover:cursor-pointer transition">
          CONTACT
        </li>
      </ul>
    );
  };

  return (
    <header className="z-10 fixed w-[100%]  bg-black text-white">
      <nav className=" flex h-[100px] items-center justify-between px-5">
        <section className=" font-bold text-xl">Karthikaiselvan</section>
        <section className="hidden md:flex">
          <ul className=" flex gap-5 font-semibold items-center justify-center ">
            <li className=" hover:text-blue-400 duration-500 hover:cursor-pointer transition">
              WORK
            </li>
            <li className=" hover:text-blue-400 duration-500 hover:cursor-pointer transition">
              CONTACT
            </li>
          </ul>
        </section>
        <section className="md:hidden transition">
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </button>
          )}
        </section>
      </nav>
      <section className=" md:hidden">{isOpen && components()}</section>
    </header>
  );
};

export default HeaderSection;
