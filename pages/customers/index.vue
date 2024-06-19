<template>
    <div>
        <h1 class="text-4xl my-7">Customers</h1>
        <p class="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nesciunt placeat esse aliquam repudiandae excepturi ipsum ad iure enim. Consequatur eius molestiae reprehenderit nobis! Id dolore aliquid et possimus assumenda.</p>
        <p>{{ data }}</p>
    </div>
</template>

<script setup lang="ts"> 
const { data } =  await useAsyncData('customers',() => $fetch('/api/customers'))
console.log(data.value)
</script>

<style scoped>

</style>