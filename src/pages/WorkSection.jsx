import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const WorkSection = () => {
  const listWorks = [
    {
      id: 1,
      title: "Blog Website",
      src: "images/Blog.webp",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 2,
      title: "Recipe Website",
      src: "images/Recipe-Website.jpg",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 3,
      title: "Appointment Booking Website",
      src: "images/Appointment.jpg",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      src: "images/port.jpeg",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 5,
      title: "Portfolio Design for Client",
      src: "images/port.jpeg",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 6,
      title: "Photography Design",
      src: "images/photo.jpg",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 7,
      title: "Author Website",
      src: "images/book.jpg",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
    {
      id: 8,
      title: "Karthikaiselvan",
      src: "images/port.jpeg",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      link: "#",
    },
  ];

  return (
    <div>
      <div className=" flex flex-col items-center justify-center gap-5">
        <h1 className=" md:text-6xl text-5xl">My works</h1>
        <p className="text-lg">List of works </p>
      </div>
      <div className=" flex flex-wrap items-center gap-5 justify-around">
        {listWorks.map((work) => (
          <div
            key={work.id}
            className="h-[600px] rounded-3xl w-[400px] md:w-[500px] flex flex-col justify-between shadow-lg p-4 mx-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300"
          >
            <img
              className="h-[300px] w-full object-fill transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 rounded-t-3xl  "
              src={work.src}
              alt="Project Image"
            />
            <div className=" flex flex-col gap-3">
              <h3 className=" text-4xl">{work.title}</h3>
              <p className=" text-[15px]">{work.description}</p>
            </div>
            <div className=" flex gap-5">
              <a href={work.link}>
                <LanguageIcon />
              </a>
              <a href="#">
                <CodeIcon />
              </a>
              <a href="#">
                <GitHubIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
