<template>
  <UDashboardPanel collapsible>
   

    <UDashboardSidebar>
      <template #header>
        <UDashboardSearchButton />
      </template>

      <UDashboardSidebarLinks :links="links" />

    </UDashboardSidebar>

  </UDashboardPanel>



  </template>


<script setup lang="ts">
const open = ref(true)

// This is a hack to keep the slideover open
watch(open, (value) => {
  if (!value) {
    setTimeout(() => open.value = true, 1000)
  }
})
const links = [{
  label: 'My Dash',
  icon: 'i-heroicons-home',
  tooltip: {
    text: 'My Dash',
    shortcuts: ['G', 'H']
  },
  to: '/'
}, {
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
  icon: 'i-heroicons-beaker',
  tooltip: {
    text: 'Wizard',
    shortcuts: ['G', 'W']
  },
  to: '/wizard'
}, {
  label: 'Settings',
  icon: 'i-heroicons-cog-8-tooth',
  defaultOpen: false,
  children: [{
    label: 'General'
  },
  {
    label: 'Notifications'
  }],
  tooltip: {
    text: 'Settings',
    shortcuts: ['G', 'S']
  }
}
]

</script>

<style scoped>
a {
    color: #333;
}

a:hover {
    color: #666;
}
.router-link-exact-active {
    text-decoration: underline;
    text-decoration-color: #fff;
  }
</style>