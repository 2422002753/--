<template>
  <!-- 添加班级信息的input框 -->
  <div class="main">
    <div class="add_Input">
      <label for="class_name">班级名称：</label>
      <Input
        type="text"
        placeholder="班级名称"
        style="width: auto"
        id="class_name"
        v-model="message.name"
      />
      <div class="warn_message" v-show="message.isShow==0">长度不能超过5位且不能为空</div>
    </div>
    <div class="add_Input">
      <label for="class_count">班级人数：</label>
      <Input placeholder="班级人数" style="width: auto" id="class_count" v-model="message.count" />
      <div class="warn_message" v-show="message.isShow==1">长度不能超过3位且不能为空</div>
    </div>
    <div class="add_Input">
      <label for="teacher">任课老师：</label>
      <Input placeholder="任课老师" style="width: auto " id="class_teacher" v-model="message.teacher" />
      <div class="warn_message" v-show="message.isShow==2">长度不能超过5位且不能为空</div>
    </div>
    <div class="add_Input">
      <label for="class_director">班 主 任：</label>
      <Input placeholder="班主任" style="width: auto " id="class_director" v-model="message.director" />
      <div class="warn_message" v-show="message.isShow==3">长度不能超过5位且不能为空</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    // 测试传参是否成功
    // console.log(this.message);
  }
};
</script>

<style lang='less' scoped>
.main {
  border: 1px solid #ccc;
}
// 警告框
.warn_message {
  font-size: 12px;
  color: red !important;
}
</style>

