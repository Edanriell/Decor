<script lang="ts" setup>
	definePageMeta({
		layout: "default"
	});
</script>

<template>
	<section class="relative">
		<div class="pt-29 pl-5 pr-5 pb-111">
			<h1
				class="relative z-[2] font-[Urbanist] font-semibold text-[3rem] leading-[1.2] text-center text-(--colors-primary-white) uppercase text-pretty"
			>
				Masterpieces crafted from solid wood
			</h1>
			<p
				class="relative z-[2] mt-2 mb-6 font-[Urbanist] font-normal text-[0.875rem] leading-[1.3] text-center text-(--colors-primary-white)"
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
</template>
