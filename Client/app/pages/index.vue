<script lang="ts" setup>
	definePageMeta({
		layout: "default"
	});

	const productCategories = [
		{
			name: "Sofa",
			route: "/"
		},
		{
			name: "Chair",
			route: "/"
		},
		{
			name: "Table",
			route: "/"
		},
		{
			name: "Storage",
			route: "/"
		},
		{
			name: "Lighting",
			route: "/"
		},
		{
			name: "Home decor",
			route: "/"
		},
		{
			name: "Kids furniture",
			route: "/"
		},
		{
			name: "Office furniture",
			route: "/"
		},
		{
			name: "Beds",
			route: "/"
		},
		{
			name: "Outdoor furniture",
			route: "/"
		}
	];

	const freshArrival = [
		{
			image: "/images/products/awesome-sponge-armchair.png",
			name: "Awesome Sponge Armchair ",
			price: "12.76",
			route: "/"
		},
		{
			image: "/images/products/black-night-lamp.png",
			name: "Black Night Lamp",
			price: "12.76",
			route: "/"
		},
		{
			image: "/images/products/wooden-box-with-stand.png",
			name: "Wooden Box with Stand",
			price: "12.76",
			route: "/"
		},
		{
			image: "/images/products/blue-wooden-armchair.png",
			name: "Blue Wooden Armchair",
			price: "12.76",
			route: "/"
		}
	];
</script>

<template>
	<section class="relative">
		<div
			class="pt-29 pl-5 pr-5 pb-111 md:pt-70.25 md:pr-12 md:pl-12 md:pb-162.75 lg:pt-33 lg:pl-67.75 lg:pr-67.75 lg:pb-89"
		>
			<h1
				class="relative z-[2] font-[Urbanist] font-semibold text-[3rem] leading-[1.2] text-center text-(--colors-primary-white) uppercase text-pretty md:font-bold md:text-[3.75rem]"
			>
				Masterpieces crafted from solid wood
			</h1>
			<p
				class="relative z-[2] mt-2 mb-6 font-[Urbanist] font-normal text-[0.875rem] leading-[1.3] text-center text-(--colors-primary-white) md:mt-4 md:font-medium md:mr-23.75 md:ml-23.75"
			>
				Our company is happy to take up production of custom-made wooden furniture according to individual
				sizes.
			</p>
			<div class="flex flex-row justify-center">
				<NuxtLink
					class="relative z-[2] rounded-lg bg-(--colors-primary-white) pt-[0.75rem] pb-[0.75rem] pl-[1.5rem] pr-[1.5rem] font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] uppercase text-(--colors-button-button---dark) flex flex-row items-center justify-center gap-2"
					to="/catalog"
				>
					Explore
					<svg fill="none" height="8" viewBox="0 0 8 8" width="8" xmlns="http://www.w3.org/2000/svg">
						<path
							clip-rule="evenodd"
							d="M0.859967 0H7.7933L7.7933 6.93333H6.85997L6.85997 1.5933L0.659966 7.7933L0 7.13333L6.2 0.933333H0.859967V0Z"
							fill="#181513"
							fill-rule="evenodd"
						/>
					</svg>
				</NuxtLink>
			</div>
		</div>
		<NuxtPicture
			:img-attrs="{ class: 'w-full h-full object-cover' }"
			alt="Modern interior"
			class="absolute inset-0 w-full h-full z-[1]"
			densities="x1 x2"
			placeholder="[60, 40, 70, 15]"
			quality="100"
			src="/images/modern-interior-2.jpg"
		/>
	</section>
	<section class="relative pt-8 pl-4 pr-4 pb-8 md:pt-18 md:pl-8 md:pr-8 md:pb-18 lg:pt-24 lg:pl-20 lg:pr-20 lg:pb-24">
		<h2 class="sr-only">Product Categories</h2>
		<ol class="flex flex-row flex-wrap gap-4 md:-ml-2 md:min-w-192.5 md:justify-center lg:min-w-282.75 lg:-ml-2">
			<li
				v-for="(category, index) in productCategories"
				:key="category.route"
				:class="[
					'md:w-41 lg:w-40.75',
					index === 1 && 'md:w-46 lg:w-46',
					index === 2 && 'md:w-44 lg:w-59',
					index === 3 && 'md:w-49.5 lg:w-59',
					index === 4 && 'md:w-56 lg:w-59',
					index === 5 && 'md:w-63 lg:w-68.75',
					index === 6 && 'md:w-65.5 lg:w-38',
					index === 7 && 'md:w-69 lg:w-44.25',
					index === 8 && 'md:w-45 lg:w-42.5',
					index === 9 && 'md:w-70.5 lg:w-67.5'
				]"
			>
				<NuxtLink
					:to="category.route"
					class="block font-[Urbanist] border border-(--colors-border-border---light1) rounded-lg px-4 py-3 font-semibold text-[0.875rem] leading-[1.3] text-(--colors-texts-text---high-emphasis) text-center"
					>{{ category.name }}</NuxtLink
				>
			</li>
		</ol>
	</section>
	<section class="relative pt-8 pb-8 pl-4 pr-4 md:pt-18 md:pl-8 md:pr-8 md:pb-18 lg:pt-24 lg:pl-20 lg:pr-20 lg:pb-24">
		<header class="md:flex md:flex-row md:items-center md:justify-between">
			<div class="flex flex-col mb-5 md:mb-12">
				<h2
					class="mb-1 font-[Urbanist] font-semibold text-[1.25rem] leading-[1.4] uppercase text-(--colors-texts-text---high-emphasis) md:text-[1.5rem] lg:text-[2rem] lg:leading-[1.3]"
				>
					Fresh arrival
				</h2>
				<p
					class="font-[Urbanist] font-normal text-[0.875rem] leading-[1.3] text-(--colors-texts-text---mid-emphasis)"
				>
					Fresh styles, new beginnings: discover our latest arrivals!
				</p>
			</div>
			<NuxtLink
				class="absolute bottom-0 left-[50%] translate-x-[-50%] inline-flex flex-row items-center rounded-lg gap-2 px-6 py-3 bg-(--colors-surface-surface---medium) cursor-pointer md:relative md:translate-x-[unset] md:left-[unset] md:bottom-[unset]"
				to="/"
			>
				<span
					class="font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] uppercase text-(--colors-texts-text---high-emphasis)"
					>View all</span
				>
				<svg fill="none" height="8" viewBox="0 0 8 8" width="8" xmlns="http://www.w3.org/2000/svg">
					<path
						clip-rule="evenodd"
						d="M0.859967 0H7.7933L7.7933 6.93333H6.85997L6.85997 1.5933L0.659966 7.7933L0 7.13333L6.2 0.933333H0.859967V0Z"
						fill="#181513"
						fill-rule="evenodd"
					/>
				</svg>
			</NuxtLink>
		</header>
		<ol
			class="grid grid-cols-2 gap-x-4 gap-y-6 pb-15.5 md:grid-cols-3 md:gap-x-5 md:gap-y-[unset] md:pb-[unset] lg:grid-cols-4 lg:gap-x-6"
		>
			<li v-for="(item, index) in freshArrival" :key="item.name">
				<article :class="['flex flex-col gap-4', index >= 3 && 'md:hidden lg:flex']">
					<div
						class="relative rounded-lg bg-(--colors-surface-surface---light) w-full h-58.5 md:h-85 lg:h-92"
					>
						<NuxtPicture
							:img-attrs="{ class: ['w-full h-full object-cover'] }"
							:src="item.image"
							alt="Modern interior"
							class="absolute inset-0 w-full h-full z-[1]"
							densities="x1 x2"
							placeholder="[60, 40, 70, 15]"
							quality="100"
						/>
					</div>
					<footer class="pl-1 pr-1 md:pl-2 md:pr-2">
						<NuxtLink :to="item.route" class="flex flex-row items-center justify-between">
							<div class="flex flex-col gap-1">
								<h3
									class="font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] text-(--colors-texts-text---high-emphasis) max-w-30 truncate md:text-[1rem] md:leading-[1.28] md:max-w-47.5 lg:max-w-51"
								>
									{{ item.name }}
								</h3>
								<small
									class="font-[Urbanist] font-medium text-[0.75rem] leading-[1.2] capitalize text-(--colors-texts-text---low-emphasis) md:text-[0.875rem] md:leading-[1.3]"
									>$ {{ item.price }}</small
								>
							</div>
							<svg
								class="w-2.25 h-2.25 basis-8 shrink-0 grow-0 lg:w-3 lg:h-3 lg:basis-10"
								fill="none"
								height="12"
								viewBox="0 0 12 12"
								width="12"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clip-rule="evenodd"
									d="M1.28995 0H11.6899L11.6899 10.4H10.2899L10.2899 2.38995L0.989949 11.6899L0 10.7L9.3 1.4H1.28995V0Z"
									fill="#181513"
									fill-rule="evenodd"
								/>
							</svg>
						</NuxtLink>
					</footer>
				</article>
			</li>
		</ol>
	</section>
	<section class="pt-12 pb-12 md:pt-18 md:pb-18 lg:pt-24 lg:pb-[unset]">
		<header class="pl-5 pr-5 pb-6 flex flex-col gap-4 md:pl-16 md:pr-16 md:pb-12 lg:pl-44 lg:pr-44 lg:pb-20">
			<h2
				class="font-[Urbanist] font-semibold text-[1.25rem] leading-[1.4] uppercase text-center text-(--colors-texts-text---high-emphasis) md:text-[1.5rem] lg:text-[2rem] lg:leading-[1.3]"
			>
				we are passionate about creating furniture that enriches lives and transforms spaces.
			</h2>
			<p
				class="font-[Urbanist] font-normal text-[0.875rem] leading-[1.8] text-center text-(--colors-texts-text---low-emphasis)"
			>
				We are passionate about creating furniture that enriches lives and transforms spaces. With a deep
				appreciation for craftsmanship and a commitment to exceptional quality, we strive to offer furniture
				pieces that combine timeless elegance with modern functionality.
			</p>
		</header>
		<div class="relative">
			<div
				class="block mb-[-63px] relative h-38 ml-13.25 mr-13.25 rounded-xs overflow-hidden md:h-77 md:ml-32.5 md:mr-32.5 md:rounded-lg md:-mb-38.5 lg:h-124 lg:ml-43.75 lg:mr-43.75 lg:-mb-51"
			>
				<NuxtPicture
					:img-attrs="{ class: ['w-full h-full object-cover'] }"
					alt="Modern interior"
					class="w-full h-full z-[1]"
					densities="x1 x2"
					placeholder="[60, 40, 70, 15]"
					quality="100"
					src="images/drawing.jpg"
				/>
			</div>
			<dl
				class="pt-22.75 pb-8 flex flex-row pl-4 pr-4 justify-between bg-(--colors-surface-surface---medium) md:pt-50 md:pb-12 md:pl-16 md:pr-16 lg:pt-75 lg:pb-28.25 lg:pl-51.75 lg:pr-51.75"
			>
				<div
					class="flex flex-col-reverse gap-1 items-center basis-26.5 md:basis-[unset] md:flex-row-reverse md:gap-4"
				>
					<dt
						class="font-[Urbanist] font-normal text-[0.625rem] leading-[1.3] capitalize text-center text-(--colors-texts-text---low-emphasis) md:text-[0.875rem] md:max-w-17 md:text-left"
					>
						Total Products
					</dt>
					<dd
						class="font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] text-center text-(--colors-texts-text---high-emphasis) md:text-[2rem] lg:text-[2.25rem] lg:leading-[1.2]"
					>
						2465
					</dd>
				</div>
				<div
					class="flex flex-col-reverse gap-1 items-center basis-26.5 md:basis-[unset] md:flex-row-reverse md:gap-4"
				>
					<dt
						class="font-[Urbanist] font-normal text-[0.625rem] leading-[1.3] capitalize text-center text-(--colors-texts-text---low-emphasis) md:text-[0.875rem] md:max-w-17 md:text-left"
					>
						Happy Customers
					</dt>
					<dd
						class="font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] text-center text-(--colors-texts-text---high-emphasis) md:text-[2rem] lg:text-[2.25rem] lg:leading-[1.2]"
					>
						14782 +
					</dd>
				</div>
				<div
					class="flex flex-col-reverse gap-1 items-center basis-26.5 md:basis-[unset] md:flex-row-reverse md:gap-4"
				>
					<dt
						class="font-[Urbanist] font-normal text-[0.625rem] leading-[1.3] capitalize text-center text-(--colors-texts-text---low-emphasis) md:text-[0.875rem] md:max-w-17 md:text-left"
					>
						Across the country
					</dt>
					<dd
						class="font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] text-center text-(--colors-texts-text---high-emphasis) md:text-[2rem] lg:text-[2.25rem] lg:leading-[1.2]"
					>
						20 +
					</dd>
				</div>
			</dl>
		</div>
	</section>
	<section>
		<header>
			<h2>Making Home A Happy Place</h2>
			<p>Get more, pay less: Your ticket to furniture bliss!</p>
		</header>
		<ol>
			<li>
				<h3>Seasonal Sales</h3>
				<p>Upgrade your space without breaking the bank!</p>
				<NuxtLink>
					<span>Explore</span>
					<svg fill="none" height="8" viewBox="0 0 8 8" width="8" xmlns="http://www.w3.org/2000/svg">
						<path
							clip-rule="evenodd"
							d="M0.859967 0H7.7933L7.7933 6.93333H6.85997L6.85997 1.5933L0.659966 7.7933L0 7.13333L6.2 0.933333H0.859967V0Z"
							fill="#181513"
							fill-rule="evenodd"
						/>
					</svg>
				</NuxtLink>
			</li>
			<li>
				<h3>Time is Ticking</h3>
				<p>Shop Now for Exclusive Limited-Time Discounts!</p>
				<NuxtLink>
					<span>Explore</span>
					<svg fill="none" height="8" viewBox="0 0 8 8" width="8" xmlns="http://www.w3.org/2000/svg">
						<path
							clip-rule="evenodd"
							d="M0.859967 0H7.7933L7.7933 6.93333H6.85997L6.85997 1.5933L0.659966 7.7933L0 7.13333L6.2 0.933333H0.859967V0Z"
							fill="#181513"
							fill-rule="evenodd"
						/>
					</svg>
				</NuxtLink>
			</li>
			<li>
				<article>
					<h3>How we craft comfort</h3>
					<figure class="relative">
						<div class="relative w-full aspect-video bg-(--colors-surface-surface---light) rounded-lg overflow-hidden">
							<button
								type="button"
								class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 p-2 rounded-lg bg-(--colors-primary-white) flex items-center justify-center"
								aria-label="Play video"
							>
								<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.376 7.98172L0.77735 15.0475C0.54759 15.2007 0.23715 15.1386 0.0839701 14.9088C0.0292201 14.8267 0 14.7302 0 14.6315V0.5C0 0.22386 0.22386 0 0.5 0C0.59871 0 0.69522 0.0292201 0.77735 0.0839801L11.376 7.14972C11.6057 7.30292 11.6678 7.61332 11.5146 7.84312C11.478 7.89802 11.4309 7.94512 11.376 7.98172Z" fill="#181513"/>
								</svg>
							</button>
						</div>
						<figcaption class="sr-only">How we craft comfort</figcaption>
					</figure>
				</article>
			</li>
		</ol>
	</section>
</template>
