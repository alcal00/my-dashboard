<template>
    <div>
        <h1 class="text-4xl my-7">Products</h1>
        <p class="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nesciunt placeat esse aliquam repudiandae excepturi ipsum ad iure enim. Consequatur eius molestiae reprehenderit nobis! Id dolore aliquid et possimus assumenda.</p>
        <div class="flex gap-x-2">
            <UButton @click="setLocale('en')">en</UButton>
            <UButton @click="setLocale('fr')">fr</UButton>
            <p>{{ $t('welcome') }}</p>
          </div>
    </div>
</template>

<script setup>
const { locale, setLocale } = useI18n()
</script>

<style scoped>

</style>