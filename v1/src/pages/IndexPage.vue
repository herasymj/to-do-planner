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
            />
          </div>
        </div>
        <q-separator class="q-my-lg bg-accent" size="3px"/>
      </q-card-section>
      <q-card-section>
        <div v-for="item in todoItems">
          <ListItem item="item"/>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ListItem from 'components/ListItem.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {ListItem},
  setup() {
    const todoItems = ref([])

    return {
      todoItems
    }
  }
});
</script>
