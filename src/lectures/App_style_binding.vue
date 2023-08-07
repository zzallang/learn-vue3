<template>
	<div :style="styleObject">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, modi
		odit expedita omnis asperiores enim dolor numquam aspernatur voluptatibus in
		architecto, ab, laudantium tenetur alias facere eaque voluptates cum
		deserunt?
	</div>
	<button v-on:click="fontSize++">+</button>
	<button v-on:click="fontSize--">-</button>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });

		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});

		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
