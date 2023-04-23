import React, { useState } from "react";
import styles from "../styles/Catalogue.module.scss";

import cars from "@/assets/data/cars";

import CarCard from "@/components/CarCard";
const Catalogue = () => {
	let [limit, setLimit] = useState(9);
	function loadMoreCars() {
		setLimit((prev) => prev + 3);
	}
	return (
		<main className={styles.catalogue}>
			<aside id={styles.filters}>
				<h3>FILTERS</h3>
			</aside>
			<section id={styles.content}>
				<h3 className={styles.content__title}>CATALOGUE</h3>
				<p className={styles.content__desc}>Showing {limit} of 20 cars</p>

				<article className={styles.content__catalogue}>
					{cars.map((car, index) => {
						if (index + 1 <= limit) {
							return <CarCard {...car} />;
						}
					})}
				</article>

				{limit <= 20 && (
					<button className="loadMore" onClick={() => loadMoreCars()}>
						See More
					</button>
				)}
			</section>
		</main>
	);
};

export default Catalogue;
