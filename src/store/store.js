import { createStore } from "vuex" 

const store = createStore({
   state:{
    list:[
        {
            item:"work at 6Pm",
            completed:false,
        },
        {
            item:"work at 9Pm",
            completed:false,
        }
    ]
   },
   getters:{
    completedTask(state){
        return state.list.filter(task=>task.completed===true).length;
    },
    pendingTask(state){
        return state.list.filter(task=>task.completed===false).length;
    }
   },
   mutations:{
    newTask(state,item){
        state.list.push({
            item:item,
            completed:false
        });
    },
    DELETE_ITEM(state,task){
        let index = state.list.findIndex(val=>val.item===task);
        if(index>=0){
            state.list.splice(index,1);
        }
    },
    TOGGLE(state,task){
     var jsoObj=  state.list.find(v=>v.item===task.item);
     jsoObj.completed=!jsoObj.completed
    }
   },
   actions:{
    addItem({commit},item){
        commit('newTask',item)
    },
    deleteTasks({commit},task){
        commit('DELETE_ITEM',task)
    },
    toofleTask({commit},task){
        commit('TOGGLE',task)
    }
   }
})

export default store;