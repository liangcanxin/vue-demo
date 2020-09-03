<template>
    <div>
        <h1>User</h1>
        <table border="1">
            <tr>
                <td>用户ID</td>
                <td>用户名</td>
                <td>用户年龄</td>
                <td>操作</td>
            </tr>
            <tr v-for="user in users">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td><a href="#">删除</a> <a href="">更新</a></td>
            </tr>
            <tr>
                <td colspan="4"><a href="">添加</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name:'User',
    data() {
        return {
            users: [
                { id: 1, name:'Tom', age:13 },
                { id: 2, name:'John', age:14 }
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