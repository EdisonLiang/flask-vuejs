<template>
	<div class="columns">
		<div class="column is-half is-offset-one-quarter">
			<span>Here the app</span>
			<my-title></my-title>
		</div>
	</div>
</template>


<script>
	import MyTitle from './MyTitle.vue'
	export default {
		components: {
			MyTitle
		}
	}
</script>