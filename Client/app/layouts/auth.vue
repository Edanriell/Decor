<script lang="ts" setup>
	const layoutImageSrc = "/images/modern-interior.jpg";
</script>

<template>
	<div
		class="w-full min-h-screen relative grid grid-cols-1 grid-rows-[minmax(0,15.625rem)_minmax(0,1fr)] tablet:grid-rows-[minmax(0,24.063rem)_minmax(0,1fr)] desktop:grid-rows-1 desktop:grid-cols-[minmax(0,0.49375fr)_minmax(0,0.50625fr)]"
	>
		<div class="relative bg-(--colors-surface-surface-white) overflow-hidden">
			<svg
				class="block absolute -top-6.5 -right-16 z-20 mix-blend-soft-light tablet:hidden"
				fill="none"
				height="299"
				viewBox="0 0 335 299"
				width="335"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g style="mix-blend-mode: soft-light">
					<path
						d="M125.487 170.506L26.9947 0H185.423C268.032 0 335 66.9334 335 149.5C335 232.067 268.032 299 185.423 299H73.9036L0 170.731L75.6732 170.729L93.6811 201.676L112.086 233.538H185.423C231.86 233.538 269.505 195.913 269.505 149.5C269.505 103.087 231.86 65.4615 185.423 65.4615H140.268L199.584 170.506H125.487Z"
						fill="white"
					/>
				</g>
			</svg>
			<svg
				class="hidden absolute -top-6.5 -right-10 mix-blend-soft-light z-20 tablet:block desktop:hidden"
				fill="none"
				height="452"
				viewBox="0 0 508 452"
				width="508"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g style="mix-blend-mode: soft-light">
					<path
						d="M190.291 257.754L40.9353 0H281.178C406.449 0 508 101.184 508 226C508 350.816 406.449 452 281.178 452H112.069L0 258.095L114.752 258.092L142.06 304.875L169.97 353.041H281.178C351.596 353.041 408.682 296.163 408.682 226C408.682 155.837 351.596 98.9586 281.178 98.9586H212.705L302.653 257.754H190.291Z"
						fill="white"
					/>
				</g>
			</svg>
			<svg
				class="hidden absolute -bottom-37.5 left-[50%] translate-x-[-50%] z-20 mix-blend-soft-light desktop:block"
				fill="none"
				height="564"
				viewBox="0 0 632 564"
				width="632"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g style="mix-blend-mode: soft-light">
					<path
						d="M236.74 321.623L50.9273 0H349.812C505.66 0 632 126.256 632 282C632 437.744 505.66 564 349.812 564H139.424L0 322.047L142.763 322.044L176.736 380.42L211.458 440.521H349.812C437.419 440.521 508.439 369.549 508.439 282C508.439 194.451 437.419 123.479 349.812 123.479H264.625L376.528 321.623H236.74Z"
						fill="white"
					/>
				</g>
			</svg>
			<NuxtPicture
				:img-attrs="{ class: 'w-full h-full object-cover' }"
				:src="layoutImageSrc"
				alt="Modern interior"
				class="absolute inset-0 w-full h-full"
				densities="x1 x2"
				placeholder="[60, 40, 70, 15]"
				quality="100"
			/>
		</div>
		<main class="bg-(--colors-surface-surface-white)">
			<slot />
		</main>
	</div>
</template>
