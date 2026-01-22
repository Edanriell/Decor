<script lang="ts" setup>
import { usePasswordResetStore } from "./model";

type Step = "email" | "otp" | "new-password";

	const currentStep = ref<Step>("otp");
	const email = ref("");
	const otp = ref("");

	const store = usePasswordResetStore();

	// Or use a watcher with interval
	// const checkOtpExpiration = setInterval(() => {
	// 	if (store.isOtpExpired && store.currentStep === "otp") {
	// 		// Optionally show a toast: "OTP expired, please try again"
	// 		store.$reset();
	// 	}
	// }, 1000);

	async function handleEmailSubmit() {
		await $fetch("api/auth/send-otp", { method: "POST", body: { email: email.value } });
		currentStep.value = "otp";
	}

	async function handleOtpSubmit() {
		// Verify OTP
		await $fetch("/api/auth/verify-otp", { method: "POST", body: { email: email.value, otp: otp.value } });
		currentStep.value = "new-password";
	}

	async function handlePasswordReset(newPassword: string) {
		// Reset password
		await $fetch("/api/auth/reset-password", {
			method: "POST",
			body: { email: email.value, otp: otp.value, password: newPassword }
		});
		navigateTo("/sign-in");
	}

	// Reset when user leaves the page
	// onBeforeRouteLeave(() => {
	// 	store.$reset();
	// });

	// Check otp on mount if returning to page
	onMounted(() => {
		// if (store.currentStep === "otp" && store.isOtpExpired) {
		// 	store.$reset();
		// }
	});

	// Also reset on component unmount (e.g., closing tab and coming back)
	onUnmounted(() => {
		// store.$reset();
	});

	// onUnmounted(() => clearInterval(checkOtpExpiration));
</script>

<template>
	<div v-if="store.currentStep === 'email'" class="desktop:max-w-122 desktop:w-full">
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
				class="rounded-lg py-3 px-6 bg-(--colors-button-button---primary) w-full font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] uppercase text-(--colors-button-button-text-light) cursor-pointer desktop:mt-3"
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
	<div v-else-if="store.currentStep === 'otp'" class="desktop:max-w-122 desktop:w-full">
		<div>
			<h1
				class="font-[Urbanist] font-semibold text-[1.25rem] leading-[1.4] uppercase text-(--colors-texts-text---high-emphasis) desktop:text-[2.25rem] desktop:leading-[1.2] desktop:text-pretty"
			>
				Password Reset
			</h1>
			<p class="font-[Urbanist] font-normal text-xs leading-[1.8] text-(--colors-texts-text---low-emphasis) mt-1">
				We sent code to {{ store.email }}
			</p>
		</div>
		<form action="#" class="mt-6 flex flex-col gap-3 tablet:mt-8 desktop:mt-12">
			<fieldset class="flex flex-row gap-4">
				<legend class="sr-only">OTP code</legend>
				<input
					id="otp-1"
					aria-label="Digit 1"
					class="border border-(--colors-border-border---light2) rounded-lg px-4 py-7.25 text-center font-[Urbanist] text-[2.25rem] font-medium leading-[1.2] uppercase text-(--colors-texts-text---mid-emphasis) w-full h-20.5 placeholder:text-(--colors-texts-text---placeholder)"
					inputmode="numeric"
					maxlength="1"
					pattern="[0-9]"
					placeholder="—"
					type="text"
				/>
				<input
					id="otp-2"
					aria-label="Digit 2"
					class="border border-(--colors-border-border---light2) rounded-lg px-4 py-7.25 text-center font-[Urbanist] text-[2.25rem] font-medium leading-[1.2] uppercase text-(--colors-texts-text---mid-emphasis) w-full h-20.5 placeholder:text-(--colors-texts-text---placeholder)"
					inputmode="numeric"
					maxlength="1"
					pattern="[0-9]"
					placeholder="—"
					type="text"
				/>
				<input
					id="otp-3"
					aria-label="Digit 3"
					class="border border-(--colors-border-border---light2) rounded-lg px-4 py-7.25 text-center font-[Urbanist] text-[2.25rem] font-medium leading-[1.2] uppercase text-(--colors-texts-text---mid-emphasis) w-full h-20.5 placeholder:text-(--colors-texts-text---placeholder)"
					inputmode="numeric"
					maxlength="1"
					pattern="[0-9]"
					placeholder="—"
					type="text"
				/>
				<input
					id="otp-4"
					aria-label="Digit 4"
					class="border border-(--colors-border-border---light2) rounded-lg px-4 py-7.25 text-center font-[Urbanist] text-[2.25rem] font-medium leading-[1.2] uppercase text-(--colors-texts-text---mid-emphasis) w-full h-20.5 placeholder:text-(--colors-texts-text---placeholder)"
					inputmode="numeric"
					maxlength="1"
					pattern="[0-9]"
					placeholder="—"
					type="text"
				/>
			</fieldset>
			<button
				class="rounded-lg py-3 px-6 bg-(--colors-button-button---primary) w-full font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] uppercase text-(--colors-button-button-text-light) cursor-pointer mt-3"
				type="submit"
			>
				Continue
			</button>
			<button
				class="rounded-lg py-3 px-6 bg-(--colors-button-button---primary) w-full font-[Urbanist] font-semibold text-[0.875rem] leading-[1.3] uppercase text-(--colors-button-button-text-light) cursor-pointer desktop:mt-3"
				type="button"
				@click="store.$reset()"
			>
				Cancel
			</button>
		</form>
		<p
			class="block text-center mt-3 font-[Urbanist] font-normal text-[0.75rem] leading-[1.6] capitalize text-(--colors-texts-text---high-emphasis) desktop:mt-3"
		>
			Didn’t receive the mail?
			<NuxtLink
				class="font-[Urbanist] font-normal text-[0.75rem] leading-[1.6] capitalize text-(--colors-texts-text---high-emphasis) border-b border-(--colors-border-border---theme)"
				to="/sign-in"
			>
				Resend
			</NuxtLink>
		</p>
	</div>
</template>

<!--&lt;!&ndash; Step 1: Email &ndash;&gt;-->
<!--<form v-if="currentStep === 'email'" @submit.prevent="handleEmailSubmit">-->
<!--<input v-model="email" type="email" placeholder="Enter your email" />-->
<!--<button type="submit">Send OTP</button>-->
<!--</form>-->

<!--&lt;!&ndash; Step 2: OTP Verification &ndash;&gt;-->
<!--<form v-if="currentStep === 'otp'" @submit.prevent="handleOtpSubmit">-->
<!--<input v-model="otp" type="text" placeholder="Enter OTP code" />-->
<!--<button type="submit">Verify</button>-->
<!--</form>-->

<!--&lt;!&ndash; Step 3: New Password &ndash;&gt;-->
<!--<NewPasswordForm v-if="currentStep === 'new-password'" @submit="handlePasswordReset" />-->
