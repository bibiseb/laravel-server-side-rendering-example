<template>
    <main>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/photos">Photos</router-link></li>
                <li><router-link to="/todos">Todos</router-link></li>
                <li><router-link to="/comments">Comments</router-link></li>
                <li><router-link to="/meta">Meta</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </main>
</template>

<script>
export default {

}
</script>
