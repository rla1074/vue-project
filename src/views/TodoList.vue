<template>
  <div>
      <h3>할일리스트</h3>
      <input type="text" v-model="newTodo">
      <button class= "btn btn-primary" type="button" @click="addlist()">추가</button>
        <hr>
        <ul>
            <li v-for="(one,index) in listsum" :key="index">
                {{index+1}}. {{one}}
                <button class="btn btn-danger" type="button" @click="dellist(index)">삭제</button>
            </li>
        </ul>
  </div>
</template>

<script>
export default{
    data() {
        return{
            listsum : ["vue 공부하기","Sb공부하기","게임하기"],
            newTodo : "",
        }
    },
    methods: {
        addlist() {
            this.listsum.push(this.newTodo);
            this.newTodo = "";
        },
        dellist(index) {
            this.listsum.splice(index,1);
        }
    }
}
</script>
