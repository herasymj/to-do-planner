<template>
  <q-card class="q-mb-md">
    <div class="row q-pa-md">
      <div class="col text-primary text-h6">
        {{task.taskTitle}}
      </div>
      <div class="col text-right">
        <q-checkbox :model-value="task.isComplete" @click="updateTask"/>
      </div>
      <div class="col text-right">
        <q-btn color="negative" icon="delete" label="Delete" @click="$emit('deleteTask')"/>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, inject, PropType, reactive } from 'vue';
import { Task, updateTaskService } from 'components/listService';
import { AxiosInstance } from 'axios';
export default defineComponent({
  name: 'TaskItem',
  emits: ['deleteTask'],
  props: {
    item: {
      type: Object as PropType<Task>,
      required: true
    }
  },
  setup(props) {
    let task = reactive(props.item);
    const axios: AxiosInstance = inject('axios') as AxiosInstance;

    async function updateTask() {
      task.isComplete = !task.isComplete;
      await updateTaskService(axios, task);
    }

    return {
      task,
      updateTask
    }
  }
})
</script>
