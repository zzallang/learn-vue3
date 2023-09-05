<template>
	<main>
		<div class="container py-4">
			<div class="container text-center">
				<div class="row g-2">
					<div class="col col-4">
						<!-- <AppCard></AppCard> -->
						<app-card></app-card>
					</div>
					<div class="col col-4">
						<AppCard></AppCard>
					</div>
					<div class="col col-4">
						<AppCard></AppCard>
					</div>
					<div class="col col-4">
						<AppCard></AppCard>
					</div>
					<div class="col col-4">
						<AppCard></AppCard>
					</div>
					<div class="col col-4">
						<AppCard></AppCard>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
export default {
	components: {
		AppCard,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
