import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import Header from "./components/Header";
import background from "./assets/green-background.png";
import chessImage from "./assets/chess-image.png";
import productIcon from "./assets/productIcon.png";
import profileImage from "./assets/profile-image.png";

const App = () => {
	const data = [
		{
			title: "SEO",
			detail: "It is a long established fact that a render will be distracted by the",
		},
		{
			title: "BRANDING",
			detail: "It is a long established fact that a render will be distracted by the",
		},
		{
			title: "LOGO",
			detail: "It is a long established fact that a render will be distracted by the",
		},
	];
	return (
		<div className='container'>
			<Header />

			<div
				style={{
					backgroundImage: `url(${background})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
				className='business'
			>
				<h1>WE HELP YOUR BUSINESS</h1>
				<p>
					It is a long established fact that a render will be distracted by <br /> the readable
					content of a page when looking at its layout
				</p>
				<button onClick={() => {}} className='btn'>
					LEARN MORE
				</button>
			</div>

			<div className='product'>
				<h1>OUR PRODUCTS</h1>
				<div className='productWrapper'>
					{data.map((product) => {
						return (
							<div className='productItem'>
								<img src={productIcon} alt={product.title} />
								<h2>{product.title}</h2>
								<p>{product.detail}</p>
							</div>
						);
					})}
				</div>
			</div>

			<div className='aboutUs'>
				<div>
					<h2>ABOUT US</h2>
					<p>
						It is a long established fact that a render will be distracted by <br /> the readable
						content of a page when looking at its layout
					</p>
				</div>
				<img src={chessImage} alt='aboutUsImage' />
			</div>

			<div className='review'>
				<BsChevronLeft size={30} style={{ marginRight: "50px" }} />
				<img src={profileImage} alt='profileImage' />
				<div>
					<h2>JOHN DOE</h2>
					<p>
						It is a long established fact that a render will be distracted by <br /> the readable
						content of a page when looking at its layout
					</p>
				</div>
				<BsChevronRight size={30} style={{ marginLeft: "50px" }} />
			</div>

			<div className='email'>
				<input type='text' onChange={() => {}} placeholder='Email ID' className='emailInput' />
				<input type='submit' onSubmit={() => {}} placeholder='' className='submit-btn'></input>
			</div>

			<div className='info'>
				<div>
					<h2>About Company</h2>
					<p>
						It is a long established fact that a render will be distracted by <br /> the readable
						content of a page when looking at its layout
					</p>
				</div>
				<div>
					<h2>Quick Link</h2>
					<ul>
						<li>Home</li> <li>Product</li> <li>Pricing</li> <li>Contact</li>
					</ul>
				</div>
				<div>
					<h2>Contact US</h2>
					<ul>
						<li>info@company.com</li>
						<li>+91 079 000000000</li>
					</ul>
				</div>
			</div>

			<div className='footer'>Copyright© 2022 Dictionary.com, LLC</div>
		</div>
	);
};

export default App;
