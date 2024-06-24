<script setup lang="ts">
const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']

const selected = ref([])
</script>

<template>
    <USelectMenu v-model="selected" :options="people" multiple searchable>
        <template #label>
          <span v-if="selected.length" class="truncate">{{ selected.join(', ') }}</span>
          <span v-else>Select people</span>
        </template>
        <template #option-empty="{ query }">
            <q>{{ query }}</q> not found
          </template>
      </USelectMenu>
</template>