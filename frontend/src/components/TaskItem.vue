<template>
  <q-card>
    {{item}}
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Task } from 'components/listService';
export default defineComponent({
  name: 'TaskItem',
  props: {
    item: {
      type: Object as PropType<Task>
    }
  }
})
</script>
