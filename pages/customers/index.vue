<template>
    <div>
        <h1 class="text-4xl my-7">Customers</h1>
        <p class="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nesciunt placeat esse aliquam repudiandae excepturi ipsum ad iure enim. Consequatur eius molestiae reprehenderit nobis! Id dolore aliquid et possimus assumenda.</p>
        <div class="max-w-sm">

            <ppw-dropdown />
            <UButton label="Show toast" class="mt-2" @click="toast.add({ id: 'hello', title: 'Hello world!' })" />
        </div>

    </div>
</template>

<script setup lang="ts"> 
const toast = useToast()
</script>

<style scoped>

</style>