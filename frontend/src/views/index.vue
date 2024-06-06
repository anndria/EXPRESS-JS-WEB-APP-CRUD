<template>
    <div>
      <ClothingLists />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ClothingLists from '@/components/ClothingLists.vue'
  
  export default {
    name: 'Index',
    components: {
      ClothingLists
    }
  }
  </script>
  