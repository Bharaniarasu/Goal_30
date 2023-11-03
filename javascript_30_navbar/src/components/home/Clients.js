import "./clients.scss";
import React from "react";
import netflix_icon from "../../assets/Netflix Logo.svg";
import shopify_icon from "../../assets/Shopify Logo.svg";
import spotifyicon from "../../assets/Spotify Logo.svg";
import wallmart_icon from "../../assets/Walmart Logo.svg";

const Clients = () => {
  return (
    <section className="clients">
      <p>Trusted by 3+ million people at companies like </p>
      <div className="clients__container">
        <img src={netflix_icon} alt="" />
        <img src={shopify_icon} alt="" />
        <img src={spotifyicon} alt="" />
        <img src={wallmart_icon} alt="" />
      </div>
    </section>
  );
};

export default Clients;
