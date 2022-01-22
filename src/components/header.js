import Image from "next/image";

export default function Header() {
	return (
		<header className="container fixed top-0 w-full text-white text-xl font-medium">
			<div className="container flex justify-between items-center h-16 md:h-32 mx-auto px-12">
				<a href="#" aria-label="Back to homepage" className="flex items-center w-52">
					<Image src={"/logo_NeuralAI_copy.png"} width={"900px"} height={"300px"} />
				</a>
				<ul className="items-stretch hidden h-min space-x-3 lg:flex">
					<li className="flex">
						<a href="#" className="flex items-center px-4">
							About
						</a>
					</li>
					<li className="flex">
						<a href="#" className="flex items-center px-4">
							Projects
						</a>
					</li>
					<li className="flex">
						<a href="#" className="flex items-center px-4">
							Community
						</a>
					</li>
					<li className="flex">
						<a href="#" className="flex items-center px-4">
							Team
						</a>
					</li>
					<li className="flex">
						<a href="#" className="flex items-center px-6 py-2 border-4">
							Contact us
						</a>
					</li>
				</ul>
				<button className="flex justify-end p-4 lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>
		</header>
	);
}
