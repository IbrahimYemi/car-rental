import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

import HeroImage from "../assets/images/hero_image.png";

export default function Home() {
	return (
		<div className="App">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="App">
				<section className={styles.hero}>
					<div className={styles.hero__container1}>
						<h1>
							Rent a car, <br /> pull up in style{" "}
						</h1>
						<div className={styles.cta}>
							<div>
								<p className={styles.title}>Manufacturer</p>
								<p className={styles.option}>Toyota</p>
							</div>
							<div>
								<p className={styles.title}>Type</p>
								<p className={styles.option}>SEDAN</p>
							</div>
							<button>Find car</button>
						</div>
					</div>
					<div className={styles.hero__container2}></div>
					<div className={styles.hero__image}></div>
				</section>
			</main>
		</div>
	);
}
