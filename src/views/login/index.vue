<template>
	<div class="logindiv">
		<div class="login-centent">
			<div style="margin-bottom: 10px;"><span style="font-size: 100px;line-height: 100px;" class="iconfont">&#xe60d;</span></div>
			<div class="input-icon clearfloat">
				<span class="iconfont">&#xeb8a;</span><input type="text" placeholder="Username"/>
			</div>
			<div class="input-icon clearfloat">
				<span class="iconfont">&#xeb63;</span><input type="text" placeholder="Password">
			</div>
			<div class="input-icon clearfloat"><button type="submit" @click="Goinner">Login in</button></div>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    Goinner () {
      this.$router.push({path: '/home'})
    }
  }
}
</script>

<style  lang="scss" scoped="scoped">
	.logindiv {
		width: 100%;
		height: 100%;
		text-align: centent;
	}
	.login-centent {
		margin: 0 auto;
		margin-top: 100px;
		// width: 200px;
		// height: 200px;
		// border: 1px solid red;
		text-align: center;
		// background-color: red;
	}
	.input-icon {
		width: 300px;
		margin: 0 auto;
		margin-bottom: 20px;
	}
	.input-icon .iconfont {
		padding: 8px 15px;
		font-size: 14px;
		line-height: 1;
		color: #2D2D2D;
		text-align: center;
		background-color: #D9D9D9;
		border: 1px solid #D9D9D9;
		border-radius: 4px 0 0 4px;
		// vertical-align: middle;
		float: left;
	}
	.input-icon input {
		height: 30px;
		border: 1px solid #D9D9D9;
		padding-left: 15px;
		float: left;
		width: 78%;
	}
	.input-icon button {
		background-color: #5e9b24;
		color: #ffffff;
		width: 300px;
		height: 30px;
		line-height: 30px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	.input-icon button:hover {
		opacity: 0.7;
	}
</style>
