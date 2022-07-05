<template>
  <div>
    <li class="list-group-item" :class="item.done ? 'item-done' : ''">
      <b-input-group>
        <b-input-group-prepend is-text>
          <b-form-checkbox :inline="true" :checked="this.item.done" @change="onToggle" type="checkbox">
          </b-form-checkbox>
        </b-input-group-prepend>
        <b-form-input style="" :inline="true" v-model="name" @change="onChange"></b-form-input>
        <b-input-group-append>
          <b-button :inline="true" variant="outline-danger" @click="onRemove"><i class="bi bi-trash"></i></b-button>
        </b-input-group-append>
      </b-input-group>
    </li>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data: {
    changeEvent: null,
    name: '',
  },
  fetch() {
    this.name = this.item.name;
  },
  methods: {
    onToggle() {
      this.$emit('onToggle', this.item);
    },
    onChange() {
      if (this.changeEvent !== null) {
        clearInterval(this.changeEvent);
      }
      this.changeEvent = setInterval(() => { this.$emit('onChange', { item: this.item, name: this.name }) }, 200);
    },
    onRemove() {
      this.$emit('onRemove', this.item);
    }
  }
}
</script>
