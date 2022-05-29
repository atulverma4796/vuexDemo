
<template>
<div>
      <div class="abc">
            <span><b>Completed:</b> {{$store.getters.completedTask}}</span>
            <span><b>Pending:</b> {{$store.getters.pendingTask}}</span>
        </div>
    <div class="todo-form">
        
        <input type="text" name="" class="input-field" v-model="todoWork" id="">
        <button @click="addTask()">Submit</button>
        
        </div>
</div>
</template>

<script>


export default{
    name:'TodoForm',
components:{

    
},
data(){
    return{
        todoWork:""
    }
},
methods:{
    addTask(){
        this.$store.dispatch('addItem',this.todoWork);
        this.todoWork=""
    }
}
};
</script>
<style scoped>
.abc{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.todo-form{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;
}
.input-field{
    width: 20%;
    height: 30px;
}
</style>