<script lang="ts">
	import vendingOffice from '$lib/assets/images/vendingOffice.jpg';
	import isoOffice from '$lib/assets/images/isoOffice.png';
	import sweet from '$lib/assets/images/sweet.jpg';
	import salty from '$lib/assets/images/salty.jpg';
	import nutsAndSeeds from '$lib/assets/images/nutsAndSeeds.jpg';
	import roastedChickpeas from '$lib/assets/images/roastedChickpeas.jpg';
	import riceCrackers from '$lib/assets/images/riceCrackers.jpg';
	import mochi from '$lib/assets/images/mochi.jpg';
	import popCans from '$lib/assets/images/popCans.jpg';
	import Services from './Services.svelte';
	import services from '$lib/data/services.json';
	let servicesLeft = services.slice(0, 2);
	let servicesRight = services.slice(2, 4);
</script>

<main class="w-full flex flex-col justify-center">
	<!-- Hero -->
	<div id="hero" class="w-full flex justify-center">
		<div class="w-full max-w-7xl my-8 flex gap-8 justify-center">
			<img src={isoOffice} alt="Isometric view of an office with vending machines" class="w-[600px] order-2 hidden md:block" />
			<div
				id="heroTextContainer"
				class="card w-5/6 md:w-96 p-4 flex flex-col justify-center rounded-lg mx-2 variant-soft order-1 !bg-transparent"
			>
				<h1 class="h1">Welcome to SnakMaster</h1>
				<p class="text-lg pt-4">
					At SnakMaster, we're dedicated to providing convenient, reliable, and satisfying vending
					solutions for businesses, schools, hospitals, and other institutions throughout the
					greater Toledo area. With our extensive range of vending machines and unparalleled
					customer service, we make snak time a breeze.
				</p>
			</div>
		</div>
	</div>

	<!-- services -->
	<div class="w-full flex justify-center">
		<section id="ourServices" class="w-full max-w-7xl flex flex-col items-center mx-4">
			<h2 class="h2">Our Services</h2>
			<!-- services container -->
			<div class="flex justify-between flex-col md:flex-row gap-4 my-4">
				<div class="w-full">
					{#each servicesLeft as service (service.service)}
						<Services
							icon={service.icon}
							service={service.service}
							desc={service.desc}
							leftOrRight="left"
						/>
					{/each}
				</div>
				<div class="w-full md:mt-8">
					{#each servicesRight as service (service.service)}
						<Services
							icon={service.icon}
							service={service.service}
							desc={service.desc}
							leftOrRight="right"
						/>
					{/each}
				</div>
			</div>
		</section>
	</div>

	<!-- Why choose us -->
	<div class="wavy flex justify-center w-full h-full">
		<div class="w-full max-w-7xl flex flex-col justify-center my-4">
			<h2 class="h2 mb-4 text-center">Why Choose SnakMaster Vending Solutions?</h2>
			<section class="mx-4 relative">
				<div>
					<img
						src={vendingOffice}
						alt="Vending machine in an office"
						class="rounded-lg w-4/5 mx-auto"
					/>
				</div>
				<!-- text -->
				<div class="card md:variant-filled-primary md:bg-primary-300 chooseTextContainer topLeft">
					<h3 class="h3">Reliability</h3>
					<p>
						With SnakMaster, you can count on dependable vending services that are always there
						when you need them.
					</p>
				</div>
				<div class="card md:variant-filled-primary md:bg-primary-300 chooseTextContainer center">
					<h3 class="h3">Variety</h3>
					<p>
						We offer an extensive selection of snaks and beverages to please every palate and
						dietary need.
					</p>
				</div>
				<div
					class="card md:variant-filled-primary md:bg-primary-300 chooseTextContainer bottomLeft"
				>
					<h3 class="h3">Convenience</h3>
					<p>
						Our hassle-free placement, maintenance, and restocking services make vending easy and
						stress-free for you.
					</p>
				</div>
				<div
					class="card md:variant-filled-primary md:bg-primary-300 chooseTextContainer bottomRight"
				>
					<h3 class="h3">Exceptional Customer Service</h3>
					<p>
						We pride ourselves on delivering superior customer service and building lasting
						relationships with our clients.
					</p>
				</div>
			</section>
		</div>
	</div>

	<!-- Our Products -->
	<div class="w-full flex justify-center mb-8">
		<section
			class="w-full max-w-7xl flex flex-col items-center justify-between mx-4 h-[100vh] md:h-[500px]"
		>
			<h2 class="h2 mt-2">Our products</h2>
			<p class="text-center">
				By offering a diverse selection that inclueds healthy options, salty snaks, and sweet
				treats, we can ensure our vending machines are stocked with a wide variety of items that
				will cater to the tastes and preferences of your employees or customers.
			</p>

			<!-- carousel -->
			<div class="wrapper">
				<div class="carousel">
					<!-- sweet -->
					<div class="carousel__item">
						<div class="carousel__item-head">
							<img src={sweet} alt="Sweet candies" class="roundedImg" />
						</div>
						<div class="carousel__item-body">
							<p class="title">Sweet</p>
							<p>Candies, chocolate bars, cookies, gummies</p>
						</div>
					</div>
					<!-- salty -->
					<div class="carousel__item">
						<div class="carousel__item-head">
							<img src={salty} alt="chips" class="roundedImg" />
						</div>
						<div class="carousel__item-body">
							<p class="title">Salty</p>
							<p>Chips, pretzels, popcorn, crackers, jerky</p>
						</div>
					</div>
					<!-- healthy -->
					<div class="carousel__item">
						<div class="carousel__item-head">
							<img src={nutsAndSeeds} alt="nuts and seeds" class="roundedImg" />
						</div>
						<div class="carousel__item-body">
							<p class="title">Healthy</p>
							<p>Nuts & seeds, granola, dried fruits, yogurt</p>
						</div>
					</div>
					<!-- Savory -->
					<div class="carousel__item">
						<div class="carousel__item-head">
							<img src={roastedChickpeas} alt="roasted chickpeas" class="roundedImg" />
						</div>
						<div class="carousel__item-body">
							<p class="title">Savory</p>
							<p>Roasted chickpeas, peanut butter crackers, protein rich snaks</p>
						</div>
					</div>
					<!-- Gluten-Free -->
					<div class="carousel__item">
						<div class="carousel__item-head">
							<img src={riceCrackers} alt="rice crackers" class="roundedImg" />
						</div>
						<div class="carousel__item-body">
							<p class="title">Gluten-Free</p>
							<p>Rice or Corn based crackers and chips, nuts & seed bars, gluten-free cookies</p>
						</div>
					</div>
					<!-- International -->
					<div class="carousel__item">
						<div class="carousel__item-head">
							<img src={mochi} alt="mochi" class="roundedImg" />
						</div>
						<div class="carousel__item-body">
							<p class="title">International</p>
							<p>Rice crackers, nori, spiced nuts, mochi</p>
						</div>
					</div>
					<!-- Drinks -->
					<div class="carousel__item">
						<div class="carousel__item-head">
							<img src={popCans} alt="pop cans" class="roundedImg" />
						</div>
						<div class="carousel__item-body">
							<p class="title">Drinks</p>
							<p>Pepsi, Coke, bottled waters, energy drinks, teas, juices, iced coffees</p>
						</div>
					</div>
				</div>
			</div>

			<p>
				Our stock is always expanding to meet the needs and preferences of our customers, for a more
				comprehensive list please contact us <a
					href="mailto:snakmaster@gmail.com"
					class="underline">here</a
				>.
			</p>
		</section>
	</div>
</main>

<style lang="scss">
	.roundedImg {
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}

	.chooseTextContainer {
		border-radius: 0.5rem;
		margin: 8px 4px;
		padding: 8px;

		@media (min-width: 768px) {
			box-shadow: 5px 5px 2px rgb(var(--color-tertiary-400));
		}

		&.topLeft {
			@media (min-width: 768px) {
				width: 25%;
				position: absolute;
				top: 10%;
				left: 7%;
			}
		}
		&.bottomLeft {
			@media (min-width: 768px) {
				width: 25%;
				position: absolute;
				bottom: 10%;
				left: 3%;
			}
		}
		&.bottomRight {
			@media (min-width: 768px) {
				width: 25%;
				position: absolute;
				bottom: 10%;
				right: 5%;
			}
		}
		&.center {
			@media (min-width: 768px) {
				width: 25%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}

	// #hero {
	// 	width: full;
	// 	position: relative;

	// 	// img {
	// 	// 	width: 400px;
	// 	// }
	// }

	$animation-timing: 28s;
	$carousel-items: 7;
	$animation-delay-fraction: calc($animation-timing / $carousel-items);
	$animation-steps-fraction: calc(100 / $carousel-items);
	$slide-change-timing: 3; // percentage of total animation cycle

	.wrapper {
		height: 50%;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.carousel {
		position: relative;
		width: 100%;
		max-width: 500px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.carousel__item {
		display: flex;
		align-items: center;
		position: absolute;
		width: 100%;
		padding: 0 12px;
		opacity: 0;
		filter: drop-shadow(0 2px 2px #555);
		will-change: transform, opacity;
		animation: carousel-animate-vertical $animation-timing linear infinite;
	}

	@for $i from 1 through ($carousel-items - 1) {
		.carousel__item:nth-child(#{$i}) {
			animation-delay: calc(#{$animation-delay-fraction} * #{$i - 2});
		}
	}

	.carousel__item:last-child {
		animation-delay: calc(-#{$animation-delay-fraction} * 2);
	}

	.carousel__item-head {
		border-radius: 50%;
		@apply bg-primary-300;
		width: 90px;
		height: 90px;
		padding: 14px;
		position: relative;
		margin-right: -45px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 50px;
	}

	.carousel__item-body {
		width: 100%;
		@apply bg-secondary-300;
		border-radius: 8px;
		padding: 16px 20px 16px 70px;
	}

	.title {
		text-transform: uppercase;
		font-size: 20px;
		margin-top: 10px;
	}

	@keyframes carousel-animate-vertical {
		0% {
			transform: translateY(100%) scale(0.5);
			opacity: 0;
			visibility: hidden;
		}
		#{$slide-change-timing}%,
		#{$animation-steps-fraction}% {
			transform: translateY(100%) scale(0.7);
			opacity: 0.4;
			visibility: visible;
		}
		#{$animation-steps-fraction + $slide-change-timing}%,
		#{$animation-steps-fraction * 2}% {
			transform: translateY(0) scale(1);
			opacity: 1;
			visibility: visible;
		}
		#{($animation-steps-fraction * 2) + $slide-change-timing}%,
		#{$animation-steps-fraction * 3}% {
			transform: translateY(-100%) scale(0.7);
			opacity: 0.4;
			visibility: visible;
		}
		#{($animation-steps-fraction * 3) + $slide-change-timing}% {
			transform: translateY(-100%) scale(0.5);
			opacity: 0;
			visibility: visible;
		}
		100% {
			transform: translateY(-100%) scale(0.5);
			opacity: 0;
			visibility: hidden;
		}
	}
</style>
