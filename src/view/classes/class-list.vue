<template>
  <div>
    <!-- 导出部分 -->
    <div>
      <Row>
        <Button icon="md-download" :loading="exportLoading" @click="exportExcel">下载数据</Button>
      </Row>
    </div>

    <Table :columns="columns" :data="tabledata">
      <template slot-scope="{ row, index }" slot="name">
        <Input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="count">
        <Input type="text" v-model="editCount" v-if="editIndex === index" />
        <span v-else>{{ row.count }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="teacher">
        <Input type="text" v-model="editTeacher" v-if="editIndex === index" />
        <span v-else>{{ row.teacher }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="director">
        <Input type="text" v-model="editDirector" v-if="editIndex === index" />
        <span v-else>{{ row.director }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="action">
        <div v-if="editIndex === index">
          <Button @click="handleSave(index)">保存</Button>
          <Button @click="editIndex = -1">取消</Button>
        </div>
        <div v-else>
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="handleEdit(row,index)"
          >编辑</Button>
          <Button type="error" size="small" @click="remove(index)">删除</Button>
        </div>
      </template>
    </Table>
  </div>
</template>
<script>
import excel from '@/libs/excel' ;
// columns 表头
export default {
  data () {
    return {
      columns: [
        {
          title: '班级名',
          slot: 'name'
        },
        {
          title: '人数',
          slot: 'count'
        },
        {
          title: '任课老师',
          slot: 'teacher'
        },
        {
          title: '班主任',
          slot: 'director'
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      tabledata: [
        // 表格对应的数据
        {
          name: '1808b',
          count: 18,
          teacher: '阮野',
          director: '崔艳秋'
        },
        {
          name: '1709a',
          count: 25,
          teacher: '阮野',
          director: '崔艳秋'
        },
        {
          name: '1902b',
          count: 30,
          teacher: '阮野',
          director: '崔艳秋'
        },
        {
          name: '1902a',
          count: 26,
          teacher: '阮野',
          director: '崔艳秋'
        }
      ],
      editIndex: -1, // 当前聚焦的输入框的行数
      editName: '', // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editCount: '', // 第二列输入框
      editTeacher: '', // 第三列输入框
      editDirector: '', // 第四列输入框
      exportLoading: false // 当前下载数据状态
    }
  },
  methods: {
    handleEdit (row, index) {
      this.editName = row.name
      this.editCount = row.age
      this.editDirector = row.director
      this.editTeacher = row.teacher
      this.editIndex = index
    },
    handleSave (index) {
      this.tabledata[index].name = this.editName
      this.tabledata[index].count = this.editCount
      this.tabledata[index].teacher = this.editTeacher
      this.tabledata[index].director = this.editDirector
      this.editIndex = -1
    },
    remove (index) {
      this.tabledata.splice(index, 1)
    },
    exportExcel () {
      //  下载数据
      console.log(123)
      if (this.tabledata.length) {
        this.exportLoading = true
        const params = {
          title: ['班级名', '人数', '任课老师', '班主任', '操作'],
          key: ['name', 'count', 'teacher', 'director', 'action'],
          data: this.tabledata,
          autoWidth: true,
          filename: '分类列表'
        }
        excel.export_array_to_excel(params)
        this.exportLoading = false
      } else {
        this.$Message.info('表格数据不能为空！')
      }
    }
  },
  created () {
    // console.log(this.$route.query.new_data); //路由跳转的数据
    // 如果路由携带数据跳转过来 则将数据添加到原有数据上
    if (typeof this.$route.query.new_data === 'object') {
      // 判断是否是多个添加多个班级
      if (this.$route.query.new_data instanceof Array) {
        // 当获取的数据是一个数组时 代表添加多个
        this.tabledata = [...this.tabledata, ...this.$route.query.new_data]
      } else {
        // 当获取的数据是一个对象时
        this.tabledata.push(this.$route.query.new_data)
      }
    }
  }
}
</script>
