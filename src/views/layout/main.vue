<template>
	<div id="main-content">
		<mainTop></mainTop>
		<section>
			<transition mode="out-in">
				<router-view></router-view>
			</transition>
		</section>
	</div>
</template>

<script>
import mainTop from './top.vue'
export default {
  components: {mainTop}
}
</script>

<style></style>
