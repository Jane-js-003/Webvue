<template>
  <div class="main-inner">
    <el-button type="primary"><i class="iconfont">&#xe624;</i>添加用户</el-button>
    <div class="main-table">
      <table style="width: 100%;">
        <tr class="main-table-tittle">
          <th class="frist-redius"><p>用户名称</p></th>
          <th><p>联系电话</p></th>
          <th><p>联系地址</p></th>
          <th><p>邮箱</p></th>
          <th><p>状态</p></th>
          <th><p>添加时间</p></th>
          <th class="last-redius"><p>操作</p></th>
        </tr>
        <tr class="main-table-content" v-for="(item, index) in 3" :key="index">
          <td class="frist-redius"><p>管理员3</p></td>
          <td><p>12345678901</p></td>
          <td><p>北京</p></td>
          <td><p>baidu@qq.com</p></td>
          <td><p>正常使用</p></td>
          <td><p>2019.04.12</p></td>
          <td class="last-redius" style="min-width: 120px;"><p>
            <el-button type="success" plain>编辑</el-button>
            <el-button type="success" plain>权限</el-button>
          </p></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script></script>

<style></style>
