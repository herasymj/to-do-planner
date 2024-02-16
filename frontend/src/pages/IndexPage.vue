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
        <q-separator class="q-my-lg bg-accent" size="3px"/>
      </q-card-section>
      <q-card-section>
        <div v-for="item in todoItems">
          <task-item :item="item"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import TaskItem from 'components/TaskItem.vue';
import { useQuasar } from 'quasar';
import { createTask, Task } from 'src/components/listService';

export default defineComponent({
  name: 'IndexPage',
  components: {TaskItem},
  setup() {
    const $q = useQuasar();
    const todoItems = ref([]);

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
        await createTask(data).then((item: Task) => {
          if (item) {
            todoItems.value.push(item);
          }
        })
      })
    }

    return {
      todoItems,
      newTask
    }
  }
});
</script>
