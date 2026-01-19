<script lang="ts" setup></script>

<template>
	<div class="desktop:max-w-122 desktop:w-full">
		<h1
			class="font-[Urbanist] font-semibold text-[1.25rem] leading-[1.4] uppercase text-(--colors-texts-text---high-emphasis) desktop:text-[2.25rem] desktop:leading-[1.2] desktop:text-pretty"
		>
			Create your <span class="desktop:hidden">free</span> account!
		</h1>
		<form action="#" class="mt-6 flex flex-col gap-3 tablet:mt-8 desktop:mt-12">
			<div class="flex flex-col gap-1">
				<label
					class="font-[Urbanist] font-medium text-[0.875rem] leading-[1.3] text-(--colors-texts-text---mid-emphasis)"
					for="fullName"
				>
					Full name*
				</label>
				<input
					id="fullName"
					class="border border-(--colors-border-border---light2) rounded-lg px-4 py-3 w-full h-12 font-[Urbanist] font-normal text-[1rem] leading-[1.28] placeholder:text-(--colors-texts-text---placeholder)"
					placeholder="Jane Cooper"
					type="text"
				/>
			</div>
			<div class="flex flex-col gap-1">
				<label
					class="font-[Urbanist] font-medium text-[0.875rem] leading-[1.3] text-(--colors-texts-text---mid-emphasis)"
					for="email"
				>
					Email*
				</label>
				<input
					id="email"
					class="border border-(--colors-border-border---light2) rounded-lg px-4 py-3 w-full h-12 font-[Urbanist] font-normal text-[1rem] leading-[1.28] placeholder:text-(--colors-texts-text---placeholder)"
					placeholder="abcd@gmail.com"
					type="email"
				/>
			</div>
			<div class="flex flex-col gap-1">
				<label
					class="font-[Urbanist] font-medium text-[0.875rem] leading-[1.3] text-(--colors-texts-text---mid-emphasis)"
					for="password"
				>
					Password*
				</label>
				<input
					id="password"
					class="border border-(--colors-border-border---light2) rounded-lg px-4 py-3 w-full h-12 font-[Urbanist] font-normal text-[1rem] leading-[1.28] placeholder:text-(--colors-texts-text---placeholder)"
					placeholder="********"
					type="password"
				/>
				<small
					class="mt-3 block font-[Urbanist] font-normal text-[0.75rem] leading-[1.6] capitalize text-(--colors-texts-text---low-emphasis)"
				>
					By signing up you are agree to our
					<a class="inline border-b border-(--colors-border-border---theme)" href="#"
						>Terms and Conditions.</a
					>
				</small>
			</div>
			<button
				class="rounded-lg py-3 px-6 bg-(--colors-button-button---primary) w-full font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] uppercase text-(--colors-button-button-text-light) cursor-pointer tablet:mt-3"
				type="submit"
			>
				Create an account
			</button>
		</form>
		<span
			class="block font-[Urbanist] font-normal text-[0.875rem] leading-[1.3] text-center text-(--colors-texts-text---low-emphasis) uppercase mt-3 mb-3 desktop:mt-6 desktop:mb-6"
		>
			Or
		</span>
		<div class="flex flex-row gap-3 items-center justify-center">
			<button
				class="rounded-full bg-(--colors-button-button---secondary) w-10.5 h-10.5 flex items-center justify-center cursor-pointer"
			>
				<svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M15.0017 8.15571C15.0017 7.58016 14.954 7.16016 14.8509 6.72461H8.14453V9.32236H12.081C12.0017 9.96793 11.5731 10.9402 10.6207 11.5935L10.6074 11.6804L12.7278 13.2902L12.8747 13.3046C14.2239 12.0835 15.0017 10.2868 15.0017 8.15571Z"
						fill="#4285F4"
					/>
					<path
						d="M8.14266 15.0004C10.0712 15.0004 11.6902 14.3781 12.8728 13.3048L10.6188 11.5936C10.0157 12.0059 9.20613 12.2936 8.14266 12.2936C6.25379 12.2936 4.65064 11.0726 4.07916 9.38477L3.99539 9.39174L1.79055 11.064L1.76172 11.1425C2.93631 13.4292 5.349 15.0004 8.14266 15.0004Z"
						fill="#34A853"
					/>
					<path
						d="M4.07933 9.38497C3.92854 8.94942 3.84127 8.48272 3.84127 8.00052C3.84127 7.51827 3.92854 7.05162 4.0714 6.61607L4.0674 6.52331L1.83493 4.82422L1.76189 4.85827C1.27778 5.80717 1 6.87274 1 8.00052C1 9.12829 1.27778 10.1938 1.76189 11.1427L4.07933 9.38497Z"
						fill="#FBBC05"
					/>
					<path
						d="M8.1427 3.70665C9.48395 3.70665 10.3887 4.27442 10.9046 4.7489L12.9205 2.82C11.6824 1.69223 10.0712 1 8.1427 1C5.34902 1 2.93631 2.5711 1.76172 4.85775L4.07124 6.61555C4.65066 4.92777 6.25382 3.70665 8.1427 3.70665Z"
						fill="#EB4335"
					/>
				</svg>
				<span class="sr-only">Login with Google</span>
			</button>
			<button
				class="rounded-full bg-(--colors-button-button---secondary) w-10.5 h-10.5 flex items-center justify-center cursor-pointer"
			>
				<svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14.0951 12.0958C13.8733 12.6082 13.6107 13.0799 13.3066 13.5135C12.8919 14.1047 12.5524 14.5139 12.2908 14.7412C11.8852 15.1141 11.4506 15.3052 10.9853 15.316C10.6512 15.316 10.2484 15.221 9.77942 15.0281C9.30892 14.8362 8.87654 14.7412 8.48119 14.7412C8.06655 14.7412 7.62186 14.8362 7.1462 15.0281C6.66982 15.221 6.28606 15.3215 5.99264 15.3314C5.54641 15.3504 5.10163 15.154 4.65766 14.7412C4.37429 14.494 4.01986 14.0703 3.59527 13.4701C3.13971 12.8291 2.76518 12.0858 2.47176 11.2385C2.15753 10.3232 2 9.43687 2 8.5788C2 7.5959 2.21239 6.74815 2.6378 6.03775C2.97213 5.46712 3.41692 5.017 3.9736 4.68655C4.53028 4.35611 5.13178 4.18772 5.77953 4.17695C6.13397 4.17695 6.59876 4.28658 7.17635 4.50205C7.75232 4.71824 8.12214 4.82787 8.28428 4.82787C8.40551 4.82787 8.81634 4.69968 9.5128 4.44411C10.1714 4.20709 10.7273 4.10896 11.1827 4.14762C12.4166 4.2472 13.3437 4.73363 13.9602 5.60998C12.8566 6.27865 12.3107 7.21521 12.3216 8.41666C12.3315 9.35249 12.671 10.1313 13.3382 10.7496C13.6406 11.0366 13.9783 11.2584 14.354 11.4159C14.2725 11.6522 14.1865 11.8785 14.0951 12.0958ZM11.2651 0.959432C11.2651 1.69293 10.9971 2.3778 10.4629 3.01171C9.81835 3.7653 9.03869 4.20076 8.19321 4.13204C8.18243 4.04405 8.17619 3.95143 8.17619 3.85411C8.17619 3.14995 8.48273 2.39636 9.0271 1.7802C9.29888 1.46822 9.64453 1.20882 10.0637 1.00189C10.4819 0.798049 10.8776 0.68532 11.2497 0.666016C11.2605 0.764073 11.2651 0.862137 11.2651 0.959423V0.959432Z"
						fill="black"
					/>
				</svg>
				<span class="sr-only">Login with Apple</span>
			</button>
		</div>
		<p
			class="block text-center mt-6 font-[Urbanist] font-normal text-[0.75rem] leading-[1.6] capitalize text-(--colors-texts-text---mid-emphasis) desktop:mt-12"
		>
			Already have an account?
			<NuxtLink
				class="font-[Urbanist] font-normal text-[0.75rem] leading-[1.6] capitalize text-(--colors-texts-text---high-emphasis) border-b border-(--colors-border-border---theme)"
				to="/sign-in"
			>
				Log in now
			</NuxtLink>
		</p>
	</div>
</template>
