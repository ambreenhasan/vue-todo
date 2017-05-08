<template>
  <div class="todo-item">
    <ol>
      <li v-for='option in options'>
        {{ option }}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        opened: false // data needs to return something, so we are returning a thing.
      }
    },
    props: {
      value: {
        required: true
      },
      options: {
        type: Array,
        required: true
      },
    }
  }
</script
