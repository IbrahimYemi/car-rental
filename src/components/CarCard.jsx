import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

import AirConditioned from "../assets/images/air-conditioned.png";
import DriveType from "../assets/images/type.png";
import PeopleImage from "../assets/images/people.png";
const CarCard = ({ image, seats, doors, type, name, priority }) => {
	return (
		<div className={styles.car__card}>
			<div className={styles.card__image}>
				<Image src={image} alt={name} priority={priority} />
			</div>
			<div className={styles.card__text}>
				<h3>{name}</h3>
				<div className={styles.car__pros}>
					<div>
						<Image src={PeopleImage} alt="Seats illustration" priority={priority} />
						<p>{seats} seats</p>
					</div>
					<div>
						<Image src={AirConditioned} alt="Air conditioner illustration" priority={priority} />
						<p> Air-Conditioned</p>
					</div>
					<div>
						<Image src={PeopleImage} alt="People illustration" priority={priority} />
						<p> {doors} Doors</p>
					</div>
					<div>
						<Image src={DriveType} alt="Drive type illustration" priority={priority} />
						<p> {type}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarCard;
