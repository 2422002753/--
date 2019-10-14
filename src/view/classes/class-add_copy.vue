<template>
  <div class="warp">
    <!-- input框部分 和按钮部分 -->
    <div class="main">
      <!-- 添加一个班级时候的input框 -->
      <AddClass :message="message" v-if="message.btn_current" />
      <!-- 添加多个班级时的input框 -->
      <div class="input_part" v-for="(item,index) in listData" :key="index" v-else>
        <h4>{{index+1}}</h4>
        <AddClass :message="item" v-if="index+1" />
        <span class="span_delete" @click="delete_current(index)">x</span>
      </div>
      <!-- 当删除了页面所有input框时 -->
      <div v-show="empty_showText" class="empty_showText">请添加一个班级 ! ~</div>

      <!-- 按钮部分 -->
      <div class="btn">
        <div class="btn_div">
          <Button type="primary" @click="add_class" v-show="message.btn_current">添加班级</Button>
          <Button type="info" v-show="message.btn_current" @click="hide_current">添加多个</Button>
          <Button type="info" v-show="!message.btn_current" @click="add_class_data">增加班级</Button>
          <Button type="primary" v-show="!message.btn_current" @click="add_classList">添加所有</Button>
        </div>
      </div>
    </div>
    <!-- 添加多个时展示的信息部分 -->
    <div class="add_many">
      <div class="class_box"></div>
    </div>
  </div>
</template>
<script>
import AddClass from "../components/class-part/add-class"; //导入添加班级组件
export default {
  components: {
    AddClass //添加班级组件
  },

  data() {
    return {
      message: {
        name: "", //班级名称
        count: "", //班级人数
        teacher: "", //任课老师
        director: "", //班主任
        isShow: "ok", //显示的几个不符合要求的输入框
        btn_current: true //添加页最初的两个按钮状态
      },
      // 添加多个时的数据
      listData: [
        {
          id: 0,
          name: "", //班级名称
          count: "", //班级人数
          teacher: "", //任课老师
          director: "", //班主任
          isShow: "ok" //显示的几个不符合要求的输入框
        }
      ]
    };
  },
  computed: {
    empty_showText() {
      //当没有页面没有input框时显示文本
      return !this.listData.length;
    }
  },
  methods: {
    // 添加单个班级时的操作
    add_class() {
      //  班级名称 长度超过五时则终止跳转
      if (
        !trim(this.message.name).length ||
        trim(this.message.name).length > 5
      ) {
        this.message.isShow = 0;
        return;
      }
      // 班级人数 长度超过五时则终止跳转
      if (
        !trim(this.message.count).length ||
        trim(this.message.count).length > 3
      ) {
        this.message.isShow = 1;
        return;
      }
      // 任课老师 长度超过五时则终止跳转
      if (
        !trim(this.message.teacher).length ||
        trim(this.message.teacher).length > 5
      ) {
        this.message.isShow = 2;
        return;
      }
      // 班主任 长度超过五时则终止跳转
      if (
        !trim(this.message.director).length ||
        trim(this.message.director).length > 5
      ) {
        this.message.isShow = 3;
        return;
      }
      this.message.isShow = "ok";
      let class_data = {
        //添加单个班级时 页面的数据
        name: this.message.name,
        count: this.message.count,
        teacher: this.message.teacher,
        director: this.message.director
      };

      this.$router.push({
        path: "/classes/classlist",
        query: {
          //将参数传入   参数为一个对象
          new_data: class_data
        }
      });
    },
    // 按钮切换添加多个班级的操作
    hide_current() {
      this.message.btn_current = false;
    },
    // 添加班级组件信息
    add_class_data() {
      let obj = {
        id: this.listData.length - 1,
        name: "", //班级名称
        count: "", //班级人数
        teacher: "", //任课老师
        director: "", //班主任
        isShow: "ok" //显示的几个不符合要求的输入框
      };
      this.listData.push(obj);
      // console.log(this.listData[this.listData.length - 1].id);
    },
    // 删除当前input框组件
    delete_current(index) {
      console.log(index);
      this.listData.splice(index, 1);
    },
    // 添加多个班级跳转
    add_classList() {
      this.$router.push({
        path: "/classes/classlist",
        query: {
          //将参数传入  参数为一个数组
          new_data: this.listData
        }
      });
    }
  }
};

//去左空格;
function ltrim(s) {
  return s.replace(/^\s*/, "");
}
//去右空格;
function rtrim(s) {
  return s.replace(/\s*$/, "");
}
//左右空格; // 在前两个函数存在情况下
function trim(s) {
  return rtrim(ltrim(s));
}
</script>
<style  lang='less' scoped>
/*input框和按钮部分*/
.main {
  margin: 0 auto;
  width: 618px;
  height: 185px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  // input框部分 包含input框组件、删除按钮、序号
  .input_part {
    margin-top: 20px;
    border: 1px solid #ccc;
    position: relative;

    .main {
      border: 0;
    }
    h4 {
      text-align: center;
    }
    .span_delete {
      // 删除按钮
      position: absolute;
      top: 5px;
      right: 9px;
      cursor: pointer;
    }
  }

  //  input框组件部分
  .add_Input {
    width: 40%;
    height: 50px;
    label {
      display: block;
    }
  }
  // 页面没有input框组件时的
  .empty_showText {
    width: 135px;
    margin-left: -64px;
    font-size: 16px;
    color: #999;
  }

  .btn {
    .btn_div {
      width: 40%;
      margin-left: -74px;
    }
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
      width: 50%;
    }
  }
}
</style>
