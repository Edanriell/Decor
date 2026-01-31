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
	<section class="relative pt-8 pb-8 pl-4 pr-4">
		<header>
			<div class="flex flex-col mb-5">
				<h2
					class="mb-1 font-[Urbanist] font-semibold text-[1.25rem] leading-[1.4] uppercase text-(--colors-texts-text---high-emphasis)"
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
				class="absolute bottom-0 left-[50%] translate-x-[-50%] inline-flex flex-row items-center rounded-lg gap-2 px-6 py-3 bg-(--colors-surface-surface---medium) cursor-pointer"
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
		<ol class="grid grid-cols-2 gap-x-4 gap-y-6 pb-15.5">
			<li v-for="item in freshArrival" :key="item.name">
				<article class="flex flex-col gap-4">
					<div class="relative rounded-lg bg-(--colors-surface-surface---light) w-full h-58.5">
						<NuxtPicture
							:img-attrs="{ class: 'w-full h-full object-cover' }"
							:src="item.image"
							alt="Modern interior"
							class="absolute inset-0 w-full h-full z-[1]"
							densities="x1 x2"
							placeholder="[60, 40, 70, 15]"
							quality="100"
						/>
					</div>
					<footer class="pl-1 pr-1">
						<NuxtLink :to="item.route" class="flex flex-row items-center justify-between">
							<div class="flex flex-col gap-1">
								<h3
									class="font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] text-(--colors-texts-text---high-emphasis)"
								>
									{{ item.name }}
								</h3>
								<small
									class="font-[Urbanist] font-medium text-[0.75rem] leading-[1.2] capitalize text-(--colors-texts-text---low-emphasis)"
									>$ {{ item.price }}</small
								>
							</div>
							<svg
								class="w-2.25 h-2.25 basis-8 shrink-0 grow-0"
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
</template>
