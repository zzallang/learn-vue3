<template>
	<div>
<<<<<<< HEAD
		<p>{{ message }}</p>
=======
		<p>{{ message.value }}</p>
>>>>>>> main
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
<<<<<<< HEAD
		console.log('message ', message.value);
=======
		console.log('message ', message);
>>>>>>> main
		console.log('message typeof ', typeof message);
		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
