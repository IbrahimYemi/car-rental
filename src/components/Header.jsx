import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<Link href="/">Ritz Car Hire</Link>
				<nav className={styles.header__navigation}>
					<Link href="/">Home</Link>
					<Link href="/">Catalogue</Link>
					<Link href="/">Hire</Link>
					<Link href="/">Contact Us</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
