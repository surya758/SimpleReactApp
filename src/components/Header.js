import Logo from "../assets/logo.png";
import classes from "./Header.module.css";
const Header = () => {
	return (
		<header className={classes.header}>
			<img src={Logo} className={classes.logo} alt='appLogo' />
			<nav>
				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/'>Product</a>
					</li>
					<li>
						<a href='/'>Pricing</a>
					</li>
					<li>
						<a href='/'>Contact Us</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
