import { defineStore } from 'pinia'
import {ref, computed} from 'vue'
export const useFactionStore = defineStore('factionStore', {
  // State of the faction object
  state: () => ({
    faction: []
  }),
  // Functions that update the faction state
  actions: {
    // All the actions needed to manage a factions units and resource totals
  }
})
