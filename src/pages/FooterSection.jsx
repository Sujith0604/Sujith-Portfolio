import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";

const FooterSection = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-10 md:gap-0 items-center md:justify-between justify-center h-[300px] px-4 text-black">
      <h1 className=" text-4xl ">Sujith Karthikaiselvan</h1>
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
      </div>
    </div>
  );
};

export default FooterSection;
