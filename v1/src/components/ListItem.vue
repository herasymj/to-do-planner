<template>
 {{item}}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ListItem } from './listService';
export default defineComponent({
  name: 'ListItem',
  props: {
    item: {
      type: Object as PropType<ListItem>
    }
  }
})
</script>
