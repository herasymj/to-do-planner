<template>
  <q-page class="q-pa-md">
    <q-card class="q-mt-md">
      <q-card-section class="text-h5">
        <div class="row">
          <div class="col">
            To Do List
          </div>
          <div class="col text-right">
            <q-btn
              color="primary"
              label="new item"
              class="text-right"
              @click="newTask"
            />
          </div>
        </div>
        <q-separator class="q-mt-lg bg-accent" size="3px"/>
      </q-card-section>
      <q-card-section>
        <div v-for="item in todoItems">
          <task-item
            :item="item"
            @delete-task="deleteSelectedTask(item.id)"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, Ref, ref } from 'vue';
import TaskItem from 'components/TaskItem.vue';
import { useQuasar } from 'quasar';
import { createTaskService, deleteTaskService, getTasksService, Task } from 'src/components/listService';
import { AxiosInstance } from 'axios';

export default defineComponent({
  name: 'IndexPage',
  components: { TaskItem },
  setup() {
    const $q = useQuasar();
    const axios: AxiosInstance = inject('axios') as AxiosInstance;
    let todoItems: Ref<Task[]> = ref([]);

    onMounted(async () => {
      await getTasksService(axios).then(res => {
        if (res !== undefined) {
          todoItems.value = res;
        }
      });
    })

    async function newTask () {
      $q.dialog({
        title: 'Add New Task',
        message: 'Task Name:',
        prompt: {
          model: '',
          type: 'text'
        },
        cancel: true,
        persistent: true
      }).onOk(async data => {
        await createTaskService(axios, data).then((item: Task) => {
          if (item) {
            todoItems.value.push(item);
          }
        })
      })
    }

    function deleteSelectedTask(taskId: number) {
      deleteTaskService(axios, taskId);
      todoItems.value = todoItems.value.filter(item => item.id !== taskId);
    }

    return {
      todoItems,
      newTask,
      deleteSelectedTask
    }
  }
});
</script>
