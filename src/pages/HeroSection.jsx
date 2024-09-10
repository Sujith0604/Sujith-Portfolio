import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const HeroSection = () => {
  return (
    <div className="flex flex-row w-[100%] h-[800px] md:h-screen items-center justify-center ">
      <div className=" flex flex-col md:w-[65%]  justify-center items-center md:items-start lg:gap-5 gap-11 px-11">
        <h1 className=" md:text-9xl font-light text-6xl tracking-wide  ">
          Hi there,
        </h1>
        <p className="text-center md:text-start text-xl  font-light ">
          My name is Sujith Karthikaiselvan, a fullstack developer based in
          Coimbatore, Tamil Nadu, India. I have worked on a wide range of
          fullstack projects, from Blog applications to appointment booking
          platforms, with a focus on creating clean, well-crafted interfaces
          that not only look great but also provide a seamless user experience.
        </p>
        <div className=" flex gap-5">
          <a
            href="mailto:sujithkarthikaiselvan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>

          <a
            href="whatsapp://send?abid=+918838295978&text=Hello there!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/sujith-karthikaiselvan-182450208/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Sujith0604"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a href="tel:+918838295978" target="_blank" rel="noopener noreferrer">
            <CallIcon />
          </a>
          <a
            href="images/Sujith-CV-2024.pdf"
            download="download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileDownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
