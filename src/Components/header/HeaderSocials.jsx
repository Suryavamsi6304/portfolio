import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillDribbbleCircle } from "react-icons/ai";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/suryavamsi-marrapu/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Suryavamsi6304/" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <AiFillDribbbleCircle />
      </a>
    </div>
  );
};

export default HeaderSocials;
