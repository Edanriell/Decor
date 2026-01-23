<script lang="ts" setup>
	import { ResetPassword } from "@features/reset-password";

	definePageMeta({
		layout: "auth"
	});
</script>

<template>
	<section
		class="h-full pt-6 pl-6 pr-6 pb-15 tablet:pt-12 tablet:pl-30 tablet:pr-30 tablet:pb-18.25 desktop:pt-[unset] desktop:pl-12 desktop:pr-28 desktop:pb-[unset] desktop:flex desktop:flex-col desktop:justify-center desktop:items-center"
	>
		<ResetPassword />
	</section>
</template>
