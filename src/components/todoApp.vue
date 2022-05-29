<template>
    <div class="container">
        <h3>Todo List</h3>
        <div class="todo-list">
            <div>
                <li :class="{'completed':todo.completed}" v-for="todo in todos" :key="todo" @click="toogleOnCompleted(todo)">{{todo.item}} <span class="btn" @click="deleteTask(todo.item)">Delete</span></li>
            </div>
            
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
    name:"Todo",
    computed:{
       ...mapState({
           todos:"list"
       })
    },
    methods:{
        ...mapActions({
            deleteTask:"deleteTasks",
            toogleOnCompleted:"toofleTask"
        })
       
    }
}
</script>
<style scoped>
h3{
    padding: 5px;
}
.container{
   display: flex;
    align-items: center;
    justify-content: center;
}
.todo-list{
    width: 30%;
   
    border: .0625rem solid;
    padding: 0.5rem;
    background: lightgray;
}
.btn{
    background:seagreen;
    padding: .5rem;
    border: .0625rem solid;
    border-radius: .25rem;
}
li{
     display: flex;
    justify-content: space-between;
    align-content: center;  
     border: .0625rem solid;
   list-style-type: none;
   padding: 1rem;
   background: cornflowerblue;
    font:bold;
}
.completed{
    text-decoration: line-through;
}
</style>