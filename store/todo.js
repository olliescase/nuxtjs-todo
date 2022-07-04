export const state = () => ({
  list: []
})

export const mutations = {
  add(state, name) {
    state.list.push({
      name,
      done: false
    });
    state.list.sort((a, b) => Number(a.done) - Number(b.done));
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
    state.list.sort((a, b) => Number(a.done) - Number(b.done));
  },
  toggle(state, todo) {
    todo.done = !todo.done
    state.list.sort((a, b) => Number(a.done) - Number(b.done));
  },
  update(state, { item: todo, name: name }) {
    todo.name = name;
    todo.done = false;
    state.list.sort((a, b) => Number(a.done) - Number(b.done));
  },
}
