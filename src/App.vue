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
        date: moment('2018-02-13'),
        events: {
          0: {
            id: 1,
            date: '2018-02-02',
            end: '2018-02-10',
            title: 'Hello',
            description: 'new',
            color: '130, 73, 73'
          },
          1: {
            id: 2,
            date: '2018-02-02',
            end: '2018-02-03',
            title: 'Hello',
            description: 'new',
            color: '44, 149, 183'
          },
          3: {
            id: 3,
            date: '2018-02-02',
            end: '2018-02-07',
            title: 'Hello',
            description: 'new',
            color: '46, 44, 183'
          },
          4: {
            id: 4,
            date: '2018-02-10',
            title: 'Hello',
            description: 'new',
            color: '164, 44, 183'
          },
          5: {
            id: 5,
            date: '2018-02-13',
            end: '2018-02-15',
            title: 'test',
            description: 'New',
            color: '61, 220, 216'
          },
          6: {
            id: 6,
            date: '2018-02-13',
            end: '2018-02-15',
            title: 'test2',
            description: 'New x',
            color: '220, 144, 61'
          },
          7: {
            id: 7,
            date: '2018-02-13',
            title: 'test2',
            description: 'New x',
            color: '92, 220, 61'
          },
          8: {
            id: 8,
            date: '2018-02-15',
            end: '2018-02-28',
            title: 'test2',
            description: 'New x',
            color: '0, 0, 0'
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
