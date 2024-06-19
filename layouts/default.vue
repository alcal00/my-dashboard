<template>
  <div class="flex flex-col h-screen">
    <Topbar/>
    <div class="flex flex-grow md:mt-6 mt-0 p-7">
      <div class="w-64 md:block hidden">
        <Sidebar/>
      </div>
      <div class="flex-grow md:ml-12 overflow-auto">
        <slot/>
      </div>
    </div>
    <div >
      <Bottombar class="md:hidden"/>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>