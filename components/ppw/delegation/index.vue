<template>
  <div>
    <UButton label="Open" color="blue" @click="isOpen = true" />

    <UModal v-model="isOpen" :fullscreen="isMobile">
      <UCard
        :ui="{
          base:'h-full',  
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <Placeholder class="h-8" />
          <div class="flex flex-col">
            <div class="flex flex-row items-center gap-x-2">
                <i class="i-heroicons-forward md:block hidden"/>
                <h1 class="font-bold">DELEGATION</h1>
            </div>
            <p class="text-xs md:block hidden">Delegate the creation of a document to someone else</p>
          </div>
        </template>

        <Placeholder class="h-32" />
        <div class="md:grid md:grid-cols-2 md:gap-x-12">
          <div class="flex flex-col gap-y-4">
            <i class="i-heroicons-document-text w-12 h-12" />
            <div>
              <p class="mb-1 text-sm">
                Document<span class="text-red-500">*</span>
              </p>
              <USelectMenu v-model="selectedDoc" :options="documents">
                <template #leading>
                  <UIcon
                    v-if="selectedDoc.icon"
                    :name="(selectedDoc.icon as string)"
                    class="w-5 h-5"
                  />
                </template>
              </USelectMenu>
            </div>
            <div>
              <p class="mb-1 text-sm">
                Source<span class="text-red-500">*</span>
              </p>
              <UInput
                icon="i-heroicons-document-text"
                size="sm"
                color="white"
                :trailing="false"
                placeholder="Source..."
              />
            </div>
            <div>
              <p class="mb-1 text-sm">
                Name<span class="text-red-500">*</span>
              </p>
              <UInput
                icon="i-heroicons-document-text"
                size="sm"
                color="white"
                :trailing="false"
                placeholder="Name..."
              />
            </div>
          </div>

          <div class="flex flex-col gap-y-4">
            <i class="i-heroicons-users w-12 h-12 md:mt-0 mt-6" />
            
            <URadioGroup
              color="blue"
              v-model="selectedRadio"
              legend="Choose a user or anonymous"
              :options="radioUsers"
             
            >
            <template #label="{ option }">
                <div v-if="option.selectMenuUser">
                  <USelectMenu class="mb-3" v-model="selectedUser" :options="people">
                    <template #leading>
                      <UAvatar
                        v-if="selectedUser.avatar"
                        v-bind="selectedUser.avatar"
                        size="2xs"
                      />
                    </template>
                  </USelectMenu>
                </div>
                <div v-else>
                    {{ option.label }}
                </div>
              </template>
        </URadioGroup>
            
            <div v-if="selectedRadio === 'anonymous'">
              <div class="flex gap-x-2 flex-row">
                <img src="/public/Qrcode.png" class="w-20 h-20" alt="qrcode" />
                <div class="flex items-center">
                  <UButton label="Options" color="gray" disabled />
                </div>
              </div>
            </div>

          </div>
        </div>

        <template #footer>
          <Placeholder class="h-8" />
          <div class="flex gap-x-4">
            <UButton label="Cancel" color="red" @click="isOpen = false" />
            <UButton label="OK" color="blue" variant="outline" />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);

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
const selectedDoc = ref(documents[0]);

const radioUsers = [
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

const selectedRadio = ref("user");

const people = [
  {
    id: "benjamincanac",
    label: "benjamincanac",
    href: "https://github.com/benjamincanac",
    target: "_blank",
    avatar: { src: "https://avatars.githubusercontent.com/u/739984?v=4" },
  },
  {
    id: "Atinux",
    label: "Atinux",
    href: "https://github.com/Atinux",
    target: "_blank",
    avatar: { src: "https://avatars.githubusercontent.com/u/904724?v=4" },
  },
  {
    id: "smarroufin",
    label: "smarroufin",
    href: "https://github.com/smarroufin",
    target: "_blank",
    avatar: { src: "https://avatars.githubusercontent.com/u/7547335?v=4" },
  },
];
const selectedUser = ref(people[0]);

const isMobile = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768; // Tailwind `md` breakpoint is 768px
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});
</script>

<style scoped></style>
