/* global Vue, axios */
var App = {
  data: function() {
    return {
      message: "Hello Vue!",
      todos: [
      ],
      todoTitle: ""
    };
  },
  created: function() {
    console.log('called automatically');
    axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
      console.log(response.data);
      this.todos = response.data;
    });
  },
  methods: {
    getData: function() {
      axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
        console.log(response.data);
        this.todos = response.data;
      });
        
      console.log('getting data');
    },
    createTodo: function() {
      console.log('creating todo...');
      console.log(this.todoTitle);
      axios.post("https://jsonplaceholder.typicode.com/todos", {
        userId: 3,
        title: this.todoTitle,
        completed: false
      }).then(response => {
        console.log(response.data);
        this.todos.push(response.data);
        this.todoTitle = "";
      })
    }
  }
};

Vue.createApp(App).mount('#app');






// var App = {
//   data: function() {
//     return {
//       message: "Hello Vue!",
//       todos: [
//       ]
//     };
//   },
//   methods: {
//     // ...
//     loadTodos: function() { 
//       axios
//         .get("https://jsonplaceholder.typicode.com/todos")
//         .then(response => {
//           console.log(response.data);
//           this.todos = response.data;
//         });
//       console.log("loading todos...")
//     }
//   }
// };

// Vue.createApp(App).mount('#app');