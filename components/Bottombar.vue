<template>
    <footer class="border-t-2 border-gray-700">
        <UFooterLinks :links="links" class="flex flex-row" />
      </footer>
</template>

<script setup lang="ts">
const links = [{
  label: 'Customers',
  icon: 'i-heroicons-user-group',
  tooltip: {
    text: 'Customers',
    shortcuts: ['G', 'I']
  },
  to: '/customers'
}, {
  label: 'Orders',
  icon: 'i-heroicons-shopping-cart',
  tooltip: {
    text: 'Orders',
    shortcuts: ['G', 'U']
  },
  to: '/orders'
}, {
  label: 'Products',
  icon: 'i-heroicons-cube',
  tooltip: {
    text: 'Products',
    shortcuts: ['G', 'P']
  },
  to: '/products'
}, {
  label: 'Wizard',
  icon: 'i-heroicons-magic-wand',
  tooltip: {
    text: 'Wizard',
    shortcuts: ['G', 'W']
  },
  to: '/wizard'
}]

</script>

<style scoped>

</style>