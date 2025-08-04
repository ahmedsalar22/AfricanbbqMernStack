/* eslint-disable react/prop-types */

import HeaderComp from "./components/HeaderComp";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/footerComp";

export default function Layout({ children }) {
  return (
    <>
      <HeaderComp />
      <NavbarComp />
      <main>{children}</main>
      <FooterComp />
    </>
  );
}
