import { NavLink } from "react-router-dom";
import navcss from "../styles/navbar.module.css";
import logo from '../assets/images/logo.svg'
import { MdExpandMore, MdPerson } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <nav className={navcss.navbar}>

				<div className={navcss.logoContainer}>
					<img src={logo} alt="logo" className={navcss.logo} />
					<MdExpandMore className={navcss.chevron}/>
				</div>

				<div className={navcss.titleContainer}>
					Editor de imágenes
				</div>
				<div className={navcss.userLogoContainer}>
					<MdPerson />
				</div>
			</nav>
    </>
  );
}

/*
	<NavLink to='/'>Home </NavLink>
	<NavLink to='/canvas'>Editor </NavLink>
	<NavLink to='/creando'>Creando</NavLink>
*/
