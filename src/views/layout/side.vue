<template>
<div id="side">
	<div style="margin-bottom: 10px;text-align: center;">
		<span style="font-size: 100px;line-height: 100px;" class="iconfont">&#xe60d;</span>
	</div>
	<el-row class="tac">
		<el-col>
			<el-menu
				class="el-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
				router
				:default-active="$route.path"
				>
					<el-menu-item index="/home">
						<i class="iconfont">&#xe61c;</i>
						<span>首页</span>
					</el-menu-item>
					<el-submenu index="1">
						<template slot="title">
							<i class="iconfont">&#xeb67;</i>
							<span>权限管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">
							<i class="iconfont">&#xeb8d;</i>
							<span>设置</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item index="4">
						<i class="el-icon-location"></i>
						<span>导航三</span>
					</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
</div>
</template>

<script>
export default {
  methods: {
    handleOpen () {},
    handleClose () {}
  }
}
</script>

<style></style>
