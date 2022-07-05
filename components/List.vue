<template>
  <div>
    <div class="list-group">
      <div v-if="hasItems">
        <div v-for="item in items" :key="item.name">
          <Item :item="item" @onToggle="toggle(item)" @onChange="update" @onRemove="remove"></Item>
        </div>
      </div>
      <div v-else>
        <p>No items in todo list</p>
      </div>
      <AddItem @onAddItem="onAddItem"></AddItem>
    </div>
  </div>
</template>

<script>
import Item from './list/Item.vue';
import AddItem from './list/AddItem.vue';
import { mapMutations } from 'vuex';
export default {
  fetchOnServer: false,
  data() {
    return {
      hasItems: true,
      loading: true
    };
  },

  computed: {
    items() {
      return this.$store.state.todo.list;
    },
  },

  async fetch() {
    if (this.items.length > 1) {
      this.$set(this, 'hasItems', true);
    }

    this.$set(this, 'loading', false);
  },
  methods: {
    onAddItem(itemName) {
      this.$store.commit('todo/add', itemName);
    },
    ...mapMutations({
      toggle: 'todo/toggle',
      update: 'todo/update',
      remove: 'todo/remove',
    })
  },
  components: { Item, AddItem },
}
</script>
