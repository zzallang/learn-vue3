<template>
	<div>
		<p>{{ message.value }}</p>
		<button v-on:click="addMessage">add click</button>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		let message = reactive({
			value: 'Hello Vue!',
		});
		const addMessage = () => {
			message.value = message.value + '!';
		};
		console.log('message ', message);
		console.log('message typeof ', typeof message);
		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
