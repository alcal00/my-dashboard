<template>
  <div class="flex justify-center mt-1">
    <UAuthForm
      title="Login"
      description="Enter your credentials to access your account."
      align="bottom"
      icon="i-heroicons-user-circle"
      :fields="[
        {
          type: 'email',
          label: 'Email',
          placeholder: 'Enter your email',
          color: 'gray',
        },
        {
          type: 'password',
          label: 'Password',
          placeholder: 'Enter your password',
          color: 'gray',
        },
      ]"
      :providers="[
        { label: 'GitHub', icon: 'i-simple-icons-github', color: 'gray' },
      ]"
      :loading="false"
    />
  </div>
</template>

<script setup></script>

<style scoped></style>
