
import { useState } from 'react';
import { Icons } from '../../assets/Svgs/index';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	return (
		<div className=" relative ">
			<nav className="container px-10 max-md:pt-8 max-md:pb-4 md:py-12 flex items-center justify-between">
				<Link to={"/"} className="text-white text-4xl font-bold font-playfair">
					SB.
				</Link>

				{/* Navigation Links */}
				<div className="flex space-x-6 items-center font-bold text-base text-white font-alexandria">
					<div className="hidden md:flex space-x-6 items-center font-bold text-base text-white font-alexandria">
						<Link to={"/"} className="hover:text-cyan-400 transition uppercase">Home</Link>
						<Link to={"/"} className="hover:text-cyan-400 transition uppercase">About Me</Link>
						<Link to={"/"} className="hover:text-cyan-400 transition uppercase">Portfolio</Link>
						<Link to={"/"} className="hover:text-cyan-400 transition uppercase">Blog</Link>
							<Icons.Search />
						<div className="flex flex-col max-w-48 text-start relative font-alexandria text-base text-white font-bold group">
							<button className="min-w-[165px] text-center bg-blue2 shadow-button-shadow rounded-full shadow-lg py-3 md:px-[20px]">
								<span>CONTACT</span>
							</button>
							<figure className="bg-white absolute -right-4 rounded-md self-start mt-6 w-10 h-[2px] transition-all duration-300 ease-in-out group-hover:w-8"></figure>
							</div>
					</div>
						<div className='md:hidden'>
							<Icons.Search />
						</div>
						<button
							className="block md:hidden text-white text-2xl "
							onClick={handleMenuToggle}
						>
							<svg className="fill-white text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
								<title>menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
							</svg>
						</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div className={`transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'} absolute top-full left-0 w-full bg-background text-left px-14 py-3 z-40 overflow-hidden`}>
				<Link to={"/"} className="block text-white py-2 hover:text-cyan-400 uppercase">Home</Link>
				<Link to={"/"} className="block text-white py-2 hover:text-cyan-400 uppercase">About Me</Link>
				<Link to={"/"} className="block text-white py-2 hover:text-cyan-400 uppercase">Portfolio</Link>
				<Link to={"/"} className="block text-white py-2 hover:text-cyan-400 uppercase">Blog</Link>
			</div>
		</div>

	)
}

export default Navbar
