import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded absolute bottom-0 w-full">
      <div className="grid grid-flow-col gap-4">
        <Link className="link link-hover" to="/">Home</Link>
        <Link className="link link-hover" to="/completed-tasks">Completed Tasks</Link>
        <Link className="link link-hover" to="/todo">To-Do</Link>
        <Link className="link link-hover" to="/calendar">Calendar</Link>
        <a href="https://masharzy.netlify.app" rel="noreferrer" target="_blank" className="link link-hover">Portfolio</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/masharzy" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="text-xl" icon={faFacebook}/>
          </a>
          <a href="https://www.linkedin.com/in/mahdy-abrar-sharzy-764165241/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="text-xl" icon={faLinkedin}/>
          </a>
          <a href="https://github.com/masharzy" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="text-xl" icon={faGithub}/>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Mahdy Abrar Sharzy</p>
      </div>
    </footer>
  );
};

export default Footer;
