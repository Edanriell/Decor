<script lang="ts" setup>
	import { CreateAccount } from "@features/create-account";

	definePageMeta({
		layout: "auth"
	});
</script>

<template>
	<section class="h-full pt-6 pl-6 pr-6 pb-15">
		<CreateAccount />
	</section>
</template>
