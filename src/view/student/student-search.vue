<template>
  <div class="search-wrap">
    <!-- 学生查询部分 -->
    <!-- 搜索框部分 -->
    <Form :model="search"
          label-position="left"
          :label-width="100"
          class='search-wrap-form'>
      <FormItem>
        <Input v-model="search.subject"
               placeholder='专业'></Input>
      </FormItem>
      <FormItem>
        <Input v-model="search.className"
               placeholder="班级"></Input>
      </FormItem>
      <FormItem>
        <Input v-model="search.name"
               placeholder="姓名"></Input>
      </FormItem>
      <Button type="primary"
              class="btn"
              @click="handleSearch">搜索</Button>
    </Form>
    <!-- 列表部分  -->
    <Table border
           :columns="columns5"
           :data="data5"></Table>

  </div>
</template>
<script>
import './style/studentSearch.less'; // 引入样式
import dataList from './search-list.json'; // 列表数据
console.log(dataList)
export default {
  data () {
    return {
      // 搜索框拿到的数据
      search: {
        subject: '', // 专业
        className: '', // 班级名
        name: '' // 姓名
      },
      // 列表数据
      columns5: [
        {
          title: '专业',
          key: 'date',
          sortable: true
        },
        {
          title: '班级',
          key: 'name'
        },
        {
          title: '姓名',
          key: 'age',
          sortable: true
        },
        {
          title: '学号',
          key: 'address'
        }
      ],
      data5: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    handleSearch () {
      // 获取搜索框数据
      console.log(this.search)
    }
  }
}
</script>
