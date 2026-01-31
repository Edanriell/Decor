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
	<section class="relative pt-8 pl-4 pr-4 pb-8 md:pt-18 md:pl-8 md:pr-8 md:pb-18">
		<h2 class="sr-only">Product Categories</h2>
		<ol class="flex flex-row flex-wrap gap-4 md:-ml-2 md:min-w-192.5 md:justify-center">
			<li
				v-for="(category, index) in productCategories"
				:key="category.route"
				:class="[
					'md:w-41',
					index === 1 && 'md:w-46',
					index === 2 && 'md:w-44',
					index === 3 && 'md:w-49.5',
					index === 4 && 'md:w-56',
					index === 5 && 'md:w-63',
					index === 6 && 'md:w-65.5',
					index === 7 && 'md:w-69',
					index === 8 && 'md:w-45',
					index === 9 && 'md:w-70.5'
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
	<section class="relative">
		<header>
			<div>
				<h2>Fresh arrival</h2>
				<p>Fresh styles, new beginnings: discover our latest arrivals!</p>
			</div>
			<NuxtLink>
				<span>View all</span>
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
		<ol>
			<li>
				<article>
					<div>
						<NuxtPicture
							:img-attrs="{ class: 'w-full h-full object-cover' }"
							alt="Modern interior"
							class="absolute inset-0 w-full h-full z-[1]"
							densities="x1 x2"
							placeholder="[60, 40, 70, 15]"
							quality="100"
							src="/images/modern-interior-2.jpg"
						/>
					</div>
					<footer>
						<div>
							<h3>Awesome Sponge Armchair</h3>
							<small>$ 12.76</small>
						</div>
						<svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
							<path
								clip-rule="evenodd"
								d="M1.28995 0H11.6899L11.6899 10.4H10.2899L10.2899 2.38995L0.989949 11.6899L0 10.7L9.3 1.4H1.28995V0Z"
								fill="#181513"
								fill-rule="evenodd"
							/>
						</svg>
					</footer>
				</article>
			</li>
		</ol>
	</section>
</template>
