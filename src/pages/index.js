import Head from "next/head";
import Header from "../components/header";
import HeroVideo from "../components/herovideo";

import Image from "next/image";
import Temp from "../components/temp";

export default function Home() {
	return (
		<div className="absolute items-center w-full h-auto bg-[#191919] text-white">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="absolute z-20 top-0 flex justify-around items-center w-full">
				<Header />
			</header>

			<main className="relativeflex flex-col relative items-center justify-center w-full">
				<HeroVideo />
				<Temp />
			</main>
		</div>
	);
}
