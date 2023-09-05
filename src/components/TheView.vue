<template>
	<main>
		<div class="container py-4">
			<div class="container text-center">
				<div class="row g-3">
					<div v-for="post in posts" :key="post.id" class="col col-4">
						<AppCard :title="post.title" :contents="post.contents"></AppCard>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import { reactive } from 'vue';
export default {
	components: {
		AppCard,
	},
	setup() {
		const post = reactive({
			title: '제목2',
			contents: '내용2',
		});

		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1' },
			{ id: 2, title: '제목2', contents: '내용2' },
			{ id: 3, title: '제목3', contents: '내용3' },
			{ id: 4, title: '제목4', contents: '내용4' },
			{ id: 5, title: '제목5', contents: '내용5' },
		]);
		return { post, posts };
	},
};
</script>

<style lang="scss" scoped></style>
