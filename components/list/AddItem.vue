<template>
  <div>
    <div class="input-group p-4 w-25">
      <b-input-group>
        <b-form-input v-model="value" type="text" id="addItemInput" placeholder="Add item to do..."
          @keyup.enter="this.onAdd"></b-form-input>
        <b-input-group-append>
          <button class="btn btn-success" type="button" @click="this.onAdd">Add</button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onAdd() {
      this.$emit('onAddItem', this.value);
      this.$set(this, 'value', '');
    }
  }
}
</script>
