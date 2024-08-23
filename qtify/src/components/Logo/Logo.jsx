import React from "react";
import LogoImage from "../../assets/logo.png";

export default function Logo({onClick}) {
  return <img onClick={onClick} src={LogoImage} alt="logo" width={67} />;
}