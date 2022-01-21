// import heroVideo from "./herovideo.mp4";
import Image from "next/image";

export default function HeroVideo() {
	return (
		<div className="relative flex flex-col w-full h-screen items-center justify-center">
			<div className="absolute w-full h-full top-0">
				{/* <iframe
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/BoyQY4RA0z4?playlist=BoyQY4RA0z4&autoplay=1&controls=0&mute=1&loop=1&fs=1&modestbranding=1&showinfo=0&start=20&enablejsapi=1&&widgetid=3"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					frameborder="0"
				/> */}
				<video autoPlay muted loop className="object-cover h-full w-full">
					<source src="/bannervideo.mp4" type="video/mp4" />
				</video>
			</div>
			<div className="relative flex flex-col h-full w-full items-center justify-center">
				<Image src={"/logo_NeuralAI_copy.png"} width={"900px"} height={"300px"} />
				<h1 className="text-white text-4xl font-bold tracking-wider">DTU's First AI Society</h1>
			</div>
		</div>
	);
}
