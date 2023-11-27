<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input v-model="username" type="text" name="username">
            <label for="password">Password</label>
            <input v-model='pasword' type="text" name="password">
            <button class="btn">Login</button>
        </form>

    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            // Auth user against API. 

            window.user = this.username
            const redirectPath = this.$route.query.redirect || '/protected'
            this.$router.push(redirectPath)
        }
    }
}
</script>