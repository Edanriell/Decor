<script lang="ts" setup></script>

<template>
	<div class="desktop:max-w-122 desktop:w-full">
		<div>
			<h1
				class="font-[Urbanist] font-semibold text-[1.25rem] leading-[1.4] uppercase text-(--colors-texts-text---high-emphasis) desktop:text-[2.25rem] desktop:leading-[1.2] desktop:text-pretty"
			>
				Forgot Password
			</h1>
			<p class="font-[Urbanist] font-normal text-xs leading-[1.8] text-(--colors-texts-text---low-emphasis) mt-1">
				No worries, we will send you reset instructions.
			</p>
		</div>
		<form action="#" class="mt-6 flex flex-col gap-3 tablet:mt-8 desktop:mt-12">
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
			<button
				class="rounded-lg py-3 px-6 bg-(--colors-button-button---primary) w-full font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] uppercase text-(--colors-button-button-text-light) cursor-pointer"
				type="submit"
			>
				Reset password
			</button>
		</form>
		<p
			class="block text-center mt-3 font-[Urbanist] font-normal text-[0.75rem] leading-[1.6] capitalize text-(--colors-texts-text---high-emphasis) desktop:mt-5"
		>
			Back to login?
			<NuxtLink
				class="font-[Urbanist] font-normal text-[0.75rem] leading-[1.6] capitalize text-(--colors-texts-text---high-emphasis) border-b border-(--colors-border-border---theme)"
				to="/sign-in"
			>
				Login
			</NuxtLink>
		</p>
	</div>
</template>
