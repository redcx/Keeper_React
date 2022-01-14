import React from "react";

const time = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {time} </p>
    </footer>
  );
}

export default Footer;
