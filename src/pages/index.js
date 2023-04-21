import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { BsChevronDown } from "react-icons/bs";

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
						<section className={styles.ctas}>
							<article>
								<div className={styles.cta}>
									<p className={styles.title}>Manufacturer</p>
									<div className={styles.option__container}>
										<p className={styles.option}>Toyota</p>
										<BsChevronDown style={{ fontSize: "12px" }} />
									</div>
								</div>
								<div className={styles.cta}>
									<p className={styles.title}>Type</p>
									<div className={styles.option__container}>
										<p className={styles.option}>SEDAN</p>
										<BsChevronDown style={{ fontSize: "12px" }} />
									</div>
								</div>
							</article>
							<button>Find car</button>
						</section>
					</div>
					<div className={styles.hero__container2}></div>
					<div className={styles.hero__image}></div>
				</section>

				<section className={styles.rent}>
					<div className={`${styles.circle} ${styles.circle1}`}></div>
					<div className={`${styles.circle} ${styles.circle2}`}></div>
					<div className={`${styles.circle} ${styles.circle3}`}></div>

					<h1 className={styles.rent__title}>Rent a car in 3 steps</h1>
					<div className={styles.rent__steps}>
						{[
							{ title: "Search", desc: "Find a car of your choice using the filter options" },
							{ title: "Confirm availability", desc: "Check if car is available at the moment or not" },
							{ title: "Place order", desc: "Place order on your choice of car" },
						].map((step, index) => (
							<div key={index} className={styles.step}>
								<div className={styles.step__number}>{index + 1}</div>
								<h3>{step.title}</h3>
								<p>{step.desc}</p>
							</div>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
