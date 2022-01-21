import Image from "next/image";

export default function Temp() {
	return (
		<section className="text-white body-font container">
			<div className="container px-5 py-24 mx-auto">
				<h1 className="text-3xl font-bold py-4">Dummy Section</h1>
				<div className="flex flex-col">
					<div className="h-1 bg-gray-200 rounded overflow-hidden">
						<div className="w-24 h-full bg-blue-500"></div>
					</div>
					<div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
						<h1 className="sm:w-2/5 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
						<p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
							Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.
						</p>
					</div>
				</div>
				<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
					<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
						<div className="rounded-lg h-64 overflow-hidden">
							<Image alt="content" className="object-cover object-center h-full w-full" height="503" width="1203" src="https://dummyimage.com/1203x503" />
						</div>
						<h2 className="text-xl font-medium title-font   mt-5">Shooting Stars</h2>
						<p className="text-base leading-relaxed mt-2">
							Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.
						</p>
						<a className="text-blue-500 inline-flex items-center mt-3">Learn More</a>
					</div>
					<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
						<div className="rounded-lg h-64 overflow-hidden">
							<Image alt="content" className="object-cover object-center h-full w-full" height="503" width="1203" src="https://dummyimage.com/1204x504" />
						</div>
						<h2 className="text-xl font-medium title-font   mt-5">The Catalyzer</h2>
						<p className="text-base leading-relaxed mt-2">
							Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.
						</p>
						<a className="text-blue-500 inline-flex items-center mt-3">Learn More</a>
					</div>
					<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
						<div className="rounded-lg h-64 overflow-hidden">
							<Image alt="content" className="object-cover object-center h-full w-full" height="503" width="1203" src="https://dummyimage.com/1205x505" />
						</div>
						<h2 className="text-xl font-medium title-font   mt-5">The 400 Blows</h2>
						<p className="text-base leading-relaxed mt-2">
							Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.
						</p>
						<a className="text-blue-500 inline-flex items-center mt-3">Learn More</a>
					</div>
				</div>
			</div>
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  ">Master Cleanse Reliac Heirloom</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing
						selfies heirloom.
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" layout="fill" src="https://dummyimage.com/600x360" />
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
								<h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
								<h1 className="title-font text-lg font-medium   mb-3">Shooting Stars</h1>
								<p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" layout="fill" src="https://dummyimage.com/601x361" />
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
								<h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
								<h1 className="title-font text-lg font-medium   mb-3">The Catalyzer</h1>
								<p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" layout="fill" src="https://dummyimage.com/603x363" />
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
								<h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
								<h1 className="title-font text-lg font-medium   mb-3">The 400 Blows</h1>
								<p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" layout="fill" src="https://dummyimage.com/602x362" />
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
								<h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
								<h1 className="title-font text-lg font-medium   mb-3">Neptune</h1>
								<p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" layout="fill" src="https://dummyimage.com/605x365" />
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
								<h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
								<h1 className="title-font text-lg font-medium   mb-3">Holden Caulfield</h1>
								<p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 sm:w-1/2 p-4">
						<div className="flex relative">
							<Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" layout="fill" src="https://dummyimage.com/606x366" />
							<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
								<h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
								<h1 className="title-font text-lg font-medium   mb-3">Alper Kamu</h1>
								<p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
