import { defineStore } from 'pinia'
import { collection, getDocs } from "firebase/firestore";
import { useCollection, useFirestore } from "vuefire";

const db = useFirestore()
export const useFactionStore = defineStore('factionStore', {
  // State of the faction object
  state: () => ({
    faction: []
  }),
  actions: {
    // All the actions needed to manage a factions units and resource totals
    async fetchFaction(){
      const snapshot = await getDocs(collection(db, 'faction'))
      this.faction = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    }
    async addUnit(){

    }
  }
})
