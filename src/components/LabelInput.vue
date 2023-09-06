<template>
	<div>
		<label>
			{{ label }}
			<!-- v-model="username" -->
			<input type="text" v-model="value" />
			<!-- :value="modelValue"
      @input="event => $emit('update:modelValue', event.target.value)" -->
		</label>
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'], // modelValue라는 props로 값을 입력 받아
	emits: ['update:modelValue'], // updateModelValue로 이벤트를 발생시킬 수 있음
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
