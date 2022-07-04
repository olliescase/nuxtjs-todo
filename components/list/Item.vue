<template>
  <div>
    <li class="list-group-item" :class="item.done ? 'strike-through' : ''">
      <b-input-group :disabled="item.done">
        <b-input-group-prepend is-text>
          <b-form-checkbox :inline="true" :checked="this.item.done" @change="onToggle" type="checkbox">
          </b-form-checkbox>
        </b-input-group-prepend>
        <b-form-input :inline="true" v-model="name" @change="onChange"></b-form-input>
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
    }
  }
}
</script>
