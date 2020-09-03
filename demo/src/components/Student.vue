<template>
    <div>
        <h1>Student</h1>
        <table border="1">
            <tr>
                <td>学生ID</td>
                <td>学生名</td>
                <td>学生年龄</td>
                <td>操作</td>
            </tr>
            <tr v-for="student in students">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.age }}</td>
                <td><a href="#">删除</a> <a href="">修改</a></td>
            </tr>
            <tr>
                <td colspan="4"><a href="">添加</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data(){
        return {
            students: [
                { id: 1, name:'Nick', age:13 },
                { id: 2, name:'Mick', age:14 }
            ]
        }
    }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>