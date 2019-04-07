import Vue from "vue";
import Vuex from "vuex";
import db from "../database";

Vue.use(Vuex);

function getMenuItemsFromDatabase() {
  return db.getCategories().map(cat => {
    return {
      ...cat,
      entries: db.getEntriesByCategoryId(cat.id)
    };
  });
}

const store = new Vuex.Store({
  state: {
    menuItems: getMenuItemsFromDatabase(),
    activeItemId: 0
  },
  mutations: {
    addMenuItem(state, item) {
      state.menu.push(item);
    },
    setActiveItemId(state, itemId) {
      state.activeItemId = itemId;
    }
  },
  getters: {
    menuItems: state => {
      return state.menuItems;
    },
    activeItem: state => db.getEntryById(state.activeItemId),
    activeCategory: state => {
      const item = db.getEntryById(state.activeItemId);
      return item !== undefined ? db.getCategoryById(item.catId) : undefined;
    }
  }
});

export default store;
