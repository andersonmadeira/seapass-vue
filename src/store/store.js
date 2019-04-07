import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const exampleData = {
  categories: [
    {
      id: 1,
      name: "CategoryOne",
      entries: [
        {
          id: 1,
          catId: 1,
          name: "EntryOne",
          data: {
            user: "user",
            pass: "pass",
            host: "host"
          },
          extra: []
        },
        {
          id: 2,
          catId: 1,
          name: "EntryTwo",
          data: {
            user: "user",
            pass: "pass",
            host: "host"
          },
          extra: []
        },
        {
          id: 3,
          catId: 1,
          name: "EntryThree",
          data: {
            user: "user",
            pass: "pass",
            host: "host"
          },
          extra: []
        }
      ]
    },
    {
      id: 2,
      name: "CategoryTwo",
      entries: [
        {
          id: 4,
          catId: 2,
          name: "EntryFour",
          data: {
            user: "user",
            pass: "pass",
            host: "host"
          },
          extra: []
        },
        {
          id: 5,
          catId: 2,
          name: "EntryFive",
          data: {
            user: "user",
            pass: "pass",
            host: "host"
          },
          extra: []
        },
        {
          id: 6,
          catId: 2,
          name: "EntrySix",
          data: {
            user: "user",
            pass: "pass",
            host: "host"
          },
          extra: []
        }
      ]
    },
    {
      id: 3,
      name: "CategoryThree",
      entries: [
        {
          id: 7,
          catId: 3,
          name: "EntrySeven",
          data: {
            user: "user",
            pass: "pass",
            host: "host"
          },
          extra: []
        },
        {
          id: 8,
          catId: 3,
          name: "EntryEight",
          data: {
            user: "user",
            pass: "pass",
            host: "host"
          },
          extra: []
        },
        {
          id: 9,
          catId: 3,
          name: "EntryNine",
          data: {
            user: "user",
            pass: "pass",
            host: "host"
          },
          extra: []
        }
      ]
    }
  ]
};

const store = new Vuex.Store({
  state: {
    menu: exampleData,
    activeMenuItem: 0
  },
  mutations: {
    addMenuItem(state, item) {
      state.menu.push(item);
    },
    setActiveMenuItem(state, menuItemId) {
      state.activeMenuItem = menuItemId;
    }
  },
  getters: {
    menu: state => state.menu,
    activeMenuItem: state => state.activeMenuItem
  }
});

export default store;
