<template>
  <!-- studentadd 表单
    姓名* 性别 专业* 学号（后端自动生成） 班级* 入学日期* 学制* 爱好 籍贯 联系电话 -->
  <!-- 学生信息添加页面 -->
  <div class="addMessage-wrap">
    <i-form :model="formItem"
            :label-width="80">
      <div class="addMessage-wrap-important">
        <Form-item label="姓名">
          <i-input :value.sync="formItem.name"
                   placeholder="请输入姓名"
                   v-model="formItem.name"></i-input>
        </Form-item>

        <Form-item label="年龄">
          <i-input :value.sync="formItem.age"
                   placeholder="请输入年龄"
                   v-model="formItem.age"></i-input>
        </Form-item>

        <Form-item label="学制">
          <i-input :value.sync="formItem.num"
                   placeholder="请输入学制"
                   v-model="formItem.num"></i-input>
        </Form-item>

        <Form-item label="专业">
          <i-input :value.sync="formItem.subject"
                   placeholder="请输入专业"
                   v-model="formItem.subject"></i-input>
        </Form-item>

        <Form-item label="班级">
          <i-input :value.sync="formItem.className"
                   placeholder="请输入班级"
                   v-model="formItem.className"></i-input>
        </Form-item>

        <Form-item label="籍贯">
          <i-input :value.sync="formItem.nativePlace"
                   placeholder="请输入籍贯"
                   v-model="formItem.nativePlace"></i-input>
        </Form-item>
      </div>

      <Form-item label="入学日期">
        <Row>
          <i-col span="11">
            <Date-picker type="date"
                         placeholder="选择日期"
                         :value.sync="formItem.date"
                         v-model='formItem.date'></Date-picker>
          </i-col>
          <i-col span="2"
                 style="text-align: center">-</i-col>
          <i-col span="11">
            <Time-picker type="time"
                         placeholder="选择时间"
                         :value.sync="formItem.time"
                         v-model="formItem.time"></Time-picker>
          </i-col>
        </Row>
      </Form-item>

      <FormItem label="性别"
                prop="gender">
        <RadioGroup v-model="formItem.sex">
          <Radio label="男">男</Radio>
          <Radio label="女">女</Radio>
        </RadioGroup>
      </FormItem>

      <Form-item label="爱好">
        <CheckboxGroup v-model="formItem.hobby">
          <Checkbox label="看书"></Checkbox>
          <Checkbox label="打篮球"></Checkbox>
          <Checkbox label="跑步"></Checkbox>
          <Checkbox label="看电影"></Checkbox>
        </CheckboxGroup>
      </Form-item>

      <Form-item label="学生描述">
        <i-input :value.sync="formItem.textarea"
                 type="textarea"
                 :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="请输入..."
                 v-model="formItem.textarea"></i-input>
      </Form-item>

      <Form-item>
        <i-button type="primary"
                  @click="add_student">提交</i-button>
        <i-button>取消</i-button>

      </Form-item>
    </i-form>
  </div>

</template>
<script>
import "./style/addMessage.less"; // 引入样式
export default {
  data() {
    return {
      formItem: {
        name: "", // 学生姓名
        sex: "男", // 性别
        hobby: [], // 爱好
        date: "", // 日期
        time: "", // 时间
        textarea: "", // 评价框
        age: "", // 年龄
        nativePlace: "", // 籍贯
        num: "", // 学制
        subject: "", // 专业
        className: "" // 班级
      }
    };
  },
  computed: {},
  methods: {
    add_student() {
      console.log(this.formItem);
    }
  }
};
</script>
<style lang="less">
.wrap {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
