<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <a
    class="black-button"
    :href="link"
    rel="noopener noreferrer"
    target="_blank"
  >
    <p>{{ props.text }}</p>
  </a>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/_breakpoint.scss' as *;

.black-button {
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  color: #FFFFFF;
  background-color: rgba(0, 0, 0, 0.6);;
  padding: 0;
  box-sizing: border-box;
}

p {
    margin: 0;                 
    padding: 10px 20px;  
    line-height: 1;            
}
</style>