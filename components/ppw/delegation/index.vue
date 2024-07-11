<script setup lang="ts">
  import type { FormError, FormSubmitEvent } from '#ui/types'
  import { useQRCode } from '@vueuse/integrations/useQRCode'

  var isOpen = ref(false);
  const isMobile = ref(false);
  

  const updateIsMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };
  
  onMounted(() => {
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateIsMobile);
  });
  
  const documents = [
    {
      id: "Document 1",
      label: "Document 1",
      icon: "i-heroicons-pencil-square",
    },
    {
      id: "Document 2",
      label: "Document 2",
      icon: "i-heroicons-pencil-square",
    },
    {
      id: "Document 3",
      label: "Document 3",
      icon: "i-heroicons-pencil-square",
    },
    {
      id: "Document 4",
      label: "Document 4",
      icon: "i-heroicons-pencil-square",
    },
  ];
  
  const radio = [
    {
      value: "user",
      label: "User",
      selectMenuUser: true,
    },
    {
      value: "anonymous",
      label: "Anonymous",
    },
  ];
  
  const users = [
  {
    id: "benjamincanac",
    label: "benjamincanac",
    name: "Benjamin",
    href: "https://github.com/benjamincanac",
    target: "_blank",
    avatar: { src: "https://avatars.githubusercontent.com/u/739984?v=4" },
  },
  {
    id: "Atinux",
    label: "Atinux",
    name: "Anthony",
    href: "https://github.com/Atinux",
    target: "_blank",
    avatar: { src: "https://avatars.githubusercontent.com/u/904724?v=4" },
  },
  {
    id: "smarroufin",
    label: "smarroufin",
    name: "Sylvain",
    href: "https://github.com/smarroufin",
    target: "_blank",
    avatar: { src: "https://avatars.githubusercontent.com/u/7547335?v=4" },
  },
];

 

  const initialState = {
  document: documents[0],
  source: "",
  name: "",
  radio: "",
  user: users[0],
};

const state = reactive({ ...initialState });

const qrcode = useQRCode("anonymous", {
    errorCorrectionLevel: 'L',
    margin: 3,
})

const validate = (state: any): FormError[] => {
  const errors: FormError[] = []
  if (!state.document) errors.push({ path: 'document', message: 'Required' })
  if (!state.source) errors.push({ path: 'source', message: 'Required' })
  if (!state.name) errors.push({ path: 'name', message: 'Required' })
  if (!state.radio) errors.push({ path: 'radio', message: 'Required' })
  if (!state.user) errors.push({ path: 'user', message: 'Required' })
  return errors
}

const resetForm = () => {
  Object.assign(state, initialState);
};


async function onSubmit (event: FormSubmitEvent<any>) {
  const formData = { ...event.data }; 
  if(formData.radio === 'anonymous') {
        formData.user = null;
    }
  console.log(formData)
  resetForm();
  
}
</script>

<template>
    <div>
      <UButton icon="i-heroicons-forward" label="Delegate" color="blue" @click="isOpen = true" />
  
      <UModal 
      v-model="isOpen" 
      :fullscreen="isMobile"
      content-slot
      >
      <UForm :validate="validate" :state="state" @submit="onSubmit">
        <UCard
          :ui="{
            base:'h-full',  
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          }"
        >
        
          <template #header>
            <div class="flex flex-col">
              <div class="flex flex-row items-center gap-x-2">
                  <i class="i-heroicons-forward md:block hidden"/>
                  <h1 class="font-bold">DELEGATION</h1>
              </div>
              <p class="text-xs md:block hidden">Delegate the creation of a document to someone else</p>
            </div>
          </template>

          <div class="md:grid md:grid-cols-2 md:gap-x-12">
            <div class="flex flex-col gap-y-4">
              <i class="i-heroicons-document-text w-12 h-12" />
          
                <UFormGroup label="Document" required>
                <USelectMenu v-model="state.document" :options="documents">
                  <template #leading>
                    <UIcon
                      v-if="state.document.icon"
                      :name="(state.document.icon as string)"
                      class="w-5 h-5"
                    />
                  </template>
                </USelectMenu>
              </UFormGroup>
           
              <UFormGroup label="Source" required>
                <UInput
                  icon="i-heroicons-document-text"
                  size="sm"
                  color="white"
                  :trailing="false"
                  placeholder="Source..."
                  v-model="state.source"
                />
              </UFormGroup>
              
              <UFormGroup label="Name" required>
                <UInput
                  icon="i-heroicons-document-text"
                  size="sm"
                  color="white"
                  :trailing="false"
                  placeholder="Name..."
                  v-model="state.name"
                />
              </UFormGroup>
            </div>
  
            <div class="flex flex-col gap-y-4">
              <i class="i-heroicons-users w-12 h-12 md:mt-0 mt-6" />
              <UFormGroup label="Choose a user or anonymous" required>
              <URadioGroup
                color="blue"
                v-model="state.radio"
                :options="radio"
              >
              <template #label="{ option }">
                  <div v-if="option.selectMenuUser"> 
                    <UFormGroup>
                    <USelectMenu 
                      class="mb-3" 
                      v-model="state.user" 
                      :options="users"
                      option-attribute="name"
                      searchable
                    >
                      <template #leading>
                        <UAvatar
                          v-if="state.user.avatar"
                          v-bind="state.user.avatar"
                          size="2xs"
                        />
                      </template>
                    </USelectMenu>
                  </UFormGroup>
                  </div>
                  <div v-else>
                      {{ option.label }}
                  </div>
                </template>
          </URadioGroup>
        </UFormGroup>
      
              <div v-if="state.radio === 'anonymous'">
                <div class="flex gap-x-2 flex-row">
                  <img :src="qrcode" class="w-20 h-20" alt="QR Code" />
                  <div class="flex items-center">
                    <UButton label="Options" color="gray" disabled />
                  </div>
                </div>
              </div>
  
            </div>
          </div>
          
          <template #footer>
            <div class="flex gap-x-4">
              <UButton label="Cancel" color="red" @click="isOpen = false" />
              <UButton label="Submit" type="submit" color="blue" variant="outline" @submit="isOpen = false"/>
            </div>
          </template>
         
        </UCard>
      </UForm>
      </UModal>
    </div>
  </template>
