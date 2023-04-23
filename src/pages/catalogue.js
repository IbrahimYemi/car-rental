import React, { useState } from "react";
import styles from "../styles/Catalogue.module.scss";

import cars from "@/assets/data/cars";
import filters from "@/assets/data/filters";

import CarCard from "@/components/CarCard";
const Catalogue = () => {
	let [limit, setLimit] = useState(9);
	let [filter, setFilter] = useState(
		filters.map((e) => {
			return { [e.title.toLowerCase()]: [] };
		})
	);
	function loadMoreCars() {
		setLimit((prev) => prev + 3);
	}

	function filterCars(e) {
		e.preventDefault();
		console.log(filter);
	}

	function toggleFilterOption(type, value) {
		type = type.toLowerCase();
		setFilter((prev) => {
			return [
				...prev.map((e) => {
					return e[type] ? { ...e, [type]: e[type].includes(value) ? e[type].filter((option) => option !== value) : [...e[type], value] } : e;
				}),
			];
		});
	}
	return (
		<main className={styles.catalogue}>
			<aside id={styles.filters}>
				<h3 className={styles.catalogue__title}>FILTERS</h3>
				<form onSubmit={filterCars}>
					{filters.map((filter, index) => (
						<div key={index} className={styles.catalogue__filter}>
							<h3>{filter.title}</h3>
							{filter.options.map((option, index) => (
								<div className={styles.filter__option} key={index}>
									<input
										type="checkbox"
										id={option.toLowerCase()}
										name={filter.title.toLowerCase()}
										// value={option.toLowerCase()}
										onChange={() => toggleFilterOption(filter.title, option)}
									/>
									<label htmlFor={option.toLowerCase()}>{option}</label>
								</div>
							))}
						</div>
					))}
					<button>Filter</button>
				</form>
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
