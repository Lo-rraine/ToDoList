import { defineStore } from 'pinia';
export const useGame = defineStore(
    'game',
    {
        state: () => ({ count: 0 }),
        actions: {
            increase() {
                this.count++
            }
        }
    })


