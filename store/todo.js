export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, name) {
    state.list.push({
      name,
      done: false
    });

    mutations.sort(state);
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
    mutations.sort(state)
  },
  toggle(state, todo) {
    todo.done = !todo.done
    mutations.sort(state);
  },
  update(state, { item: todo, name: name }) {
    todo.name = name;
    todo.done = false;
    mutations.sort(state);
  },

  sort(state) {
    state.list.sort((a, b) => Number(a.done) - Number(b.done));
  }
}
