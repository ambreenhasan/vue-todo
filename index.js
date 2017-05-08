import vue from 'vue';

// This registers the component
Vue.component('todo-header', {
  props: ['header'],
  template: '<h1> {{ header }} </h1>'
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

// This defines the component's interface with data
var headerComponent = new Vue({
  el: '#app-header',
  name: 'todo-header',
  data: {
    header: 'This is what I need to do today: ' + new Date()
  }
})

var todoComponent = new Vue({
  el: '#app',
  name: 'todo-item',
  data: {
    programmingLanguages: [
      { text: 'Ruby' },
      { text: 'JavaScript' },
      { text: 'Swift' },
      { text: 'Go' }
    ]
  }
})
