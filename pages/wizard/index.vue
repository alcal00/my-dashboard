<template>
    <div class="mt-1 max-w-2xl max-h-28 p-2 mx-auto">
      <UProgress color="blue" :value="currentStepIndex" indicator :max="steps.length - 1" class="mb-4" />
      <div class="flex justify-around mb-4">
        <UButton 
          color="blue"
          :variant="index === currentStepIndex ? 'solid' : 'outline'"
          v-for="(step, index) in steps"
          @click="setCurrentStep(step.key, index)"
        >
          <span class="md:block hidden">{{ step.label }}</span>
          <span class="md:hidden block">{{ step.number }}</span>
        </UButton>
      </div>
      
      <div v-if="currentStep === 'Drop'">
        <ppw-dropzone-main />
      </div>
      <div v-if="currentStep === 'Form'">
        <ppw-jsonschema-form />
      </div>
      <div v-if="currentStep === 'Preview'">
        <ppw-pdf-preview />
      </div>
    </div>

    <div class=" mt-12 fixed md:bottom-4 md:right-14 bottom-7 flex gap-x-2">
      <UButton
        @click="setCurrentStep(steps[currentStepIndex - 1].key, currentStepIndex - 1)"
        :disabled="currentStepIndex === 0"
        color="blue"
      >
      <span class="i-heroicons-arrow-left"></span>
      </UButton>
      <UButton
        @click="setCurrentStep(steps[currentStepIndex + 1].key, currentStepIndex + 1)"
        :disabled="currentStepIndex === steps.length - 1"
        color="blue"
      >
      <span class="i-heroicons-arrow-right"></span>
      </UButton>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';

  useHead({
    title: 'My Dash | Wizard',
    meta: [
        {
            name: 'description',
            content: 'A wizard to guide you through the process.'
        }
    ]
})
  
  const steps = [
    {
      key: 'Drop',
      label: 'Dropzone',
      number: 1,
    },
    {
      key: 'Form',
      label: 'Form',
      number: 2,
    },
    {
      key: 'Preview',
      label: 'Preview',
      number: 3,
    },
  ];
  
  const currentStep = ref('Drop');
  const currentStepIndex = ref(0);
  
  const setCurrentStep = (key: string, index: number) => {
    currentStep.value = key;
    currentStepIndex.value = index;
  };
  </script>
  
  <style scoped>
 
  </style>