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
        <tr class="main-table-content" v-for="(item, index) in items" :key="index">
          <td class="frist-redius"><p>{{item.name}}</p></td>
          <td><p>{{item.contact_num}}</p></td>
          <td><p>{{item.contact_address}}</p></td>
          <td><p>{{item.contact_email}}</p></td>
          <td><p>{{item.status}}</p></td>
          <td><p>{{item.add_time}}</p></td>
          <td class="last-redius" style="min-width: 120px;"><p>
            <el-button type="success" plain @click="Edituser(item)">编辑</el-button>
            <el-button type="success" plain @click="ControlTo(item)">权限</el-button>
          </p></td>
        </tr>
      </table>
    </div>
    <popOut :exchange-show="popshow">
      <div class="popout-inner" style="width: 500px;height: 500px;margin: -250px 0 0 -300px;">
        <div class="popout-title">
          <h3>编辑用户</h3>
        </div>
        <div class="form-div">
          <el-form label-position="left" label-width="80px" :model="frominner">
            <el-form-item label="用户名称">
              <el-input v-model="frominner.name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="frominner.contact_num"></el-input>
            </el-form-item>
            <el-form-item label="联系地址">
              <el-input v-model="frominner.contact_address"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="frominner.contact_email"></el-input>
            </el-form-item>
            <el-form-item label="状态">
              <el-input v-model="frominner.status"></el-input>
            </el-form-item>
            <el-form-item label="添加时间">
              <el-input v-model="frominner.add_time"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" style="margin-left: 20px;">编辑</el-button>
          <el-button @click="ChangePopshow">取消</el-button>
        </div>
        <span class="iconfont" @click="ChangePopshow">&#xe62c;</span>
      </div>
    </popOut>
  </div>
</template>

<script>
import popOut from '../../components/Popout/index.vue'
export default {
  components: {popOut},
  data () {
    return {
      popshow: false,
      items: [
        {
          name: '管理员3',
          contact_num: '12345678901',
          contact_address: '北京',
          contact_email: 'baidu@qq.com',
          status: '正常使用',
          add_time: '2019.04.12'
        }, {
          name: '管理员3',
          contact_num: '12345678901',
          contact_address: '北京',
          contact_email: 'baidu@qq.com',
          status: '正常使用',
          add_time: '2019.04.12'
        }
      ],
      frominner: {}
    }
  },
  methods: {
    ChangePopshow () {
      this.popshow = false
    },
    Edituser (info) {
      this.frominner = info
      this.popshow = true
    },
    ControlTo (info) {
    }
  }
}
</script>

<style></style>
