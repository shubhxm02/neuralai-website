// import heroVideo from "./herovideo.mp4";
import Image from "next/image";
import { useState } from "react";

export default function HeroVideo() {
	const [videoId, setVideoId] = useState(0);
	const styles = {
		active: "border-b-2 border-white",
	};
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
				{videoId === 0 && (
					<video autoPlay muted loop playsInline className="object-cover h-full w-full">
						<source src="/bannervideo.mp4" type="video/mp4" />
					</video>
				)}
				{videoId === 1 && (
					<video autoPlay muted loop playsInline className="object-cover h-full w-full">
						<source src="/bannervideo-comp.mp4" type="video/mp4" />
					</video>
				)}
				{videoId === 2 && (
					<video autoPlay muted loop playsInline className="object-cover h-full w-full">
						<source src="/bannervideo-comp-2.mp4" type="video/mp4" />
					</video>
				)}
				{videoId === 3 && (
					<video autoPlay muted loop playsInline className="object-cover h-full w-full">
						<source src="/bannervideo-comp-3.mp4" type="video/mp4" />
					</video>
				)}
			</div>
			<div className="relative flex flex-col h-full w-full items-center justify-center">
				<Image priority src={"/logo_NeuralAI_copy.png"} width={"900px"} height={"300px"} />
				<h1 className="text-white text-4xl font-bold tracking-wider">DTU's First AI Society</h1>
				<ul className="flex flex-row space-x-4 text-white text-2xl py-4">
					<button className={videoId === 0 && styles.active} onClick={() => setVideoId(0)}>
						Original
					</button>
					<button className={videoId === 1 && styles.active} onClick={() => setVideoId(1)}>
						Compressed-1
					</button>
					<button className={videoId === 2 && styles.active} onClick={() => setVideoId(2)}>
						Compressed-2
					</button>
					<button className={videoId === 3 && styles.active} onClick={() => setVideoId(3)}>
						Compressed-3
					</button>
				</ul>
			</div>
		</div>
	);
}
