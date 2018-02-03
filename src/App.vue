<template>
    <div id="app">
        <Calendar :aimpicker="date" :events="events"/>
    </div>
</template>

<script>
  import Calendar from './components/Calendar.vue'
  import moment from 'moment';

  export default {
    name: 'App',
    data() {
      return {
        date: moment('2018-02-2'),
        events: {
          0: {
            date: '2018-02-02',
            title: 'Hello',
            description: 'new'
          },
          1: {
            date: '2018-02-02',
            title: 'Hello',
            description: 'new'
          },
          3: {
            date: '2018-02-02',
            title: 'Hello',
            description: 'new'
          },
          4: {
            date: '2018-02-10',
            title: 'Hello',
            description: 'new'
          },
          5: {
            date: '2018-02-13',
            title: 'test',
            description: 'New'
          }
        }
      }
    },
    created() {
      moment.locale('sl')
    },
    components: {
      Calendar
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
