<template>
    <div class="datepicker">
        <ul class="week__days">
            <li v-for="(day, index) in weekDays" :key="index">{{ day }}</li>
        </ul>
        <ul class="days" style="display: none">
            <li :style="{width: Calendar.firstDay * 41 + 'px'}">{{ Calendar.firstDay }}</li>
        </ul>
        <div class="days">
            <div class="dayInner" v-for="(days, index) in chunkDays" :key="index">
                <div v-for="day in days" :key="day.day">
                    <span :class="isSelected(day) ? 'active' : ''">{{ day.day }}</span>
                    <span class="dots" v-for="(event, index) in arangeWithEndFirst"
                          :key="index" v-if="convertDay(event.date) === day.day
                          || convertDay(event.end) === day.day
                          || Calendar.isBetween(day, {
                            start: event.date,
                            end: event.end
                          })
                            " :style="{background: `rgb(${event.color})`, width: event.end ? 100 + '%' : ''}">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import moment from 'moment'
  import DatePicker from '../modules/DatePicker'

  export default {
    props: ['aimpicker', 'events'],
    data() {
      return {
        Calendar: new DatePicker(this.aimpicker.year(), this.aimpicker.month()),
        weekDays: null,
        days: null
      }
    },
    computed: {
      chunkDays() {
        return _.chunk(this.days, 7)
      },
      arangeWithEndFirst() {
        return _.orderBy(this.events, 'id')
      }
    },
    mounted() {
      this.weekDays = moment.weekdaysShort()
      this.days = this.Calendar.days
    },
    methods: {
      isSelected(day) {
        return this.aimpicker.format('DD') === day
      },
      convertDay(day) {
        if (day) {
          return moment(day).format('DD')
        }
      },
      diff(value) {
        console.log(value)
      }
    }
  }

</script>
<style lang="scss">

    .datepicker {
        $day__width: 100%;
        $day__height: 41px;
        $combinedWidth: $day__width * 100 / $day__width;
        .week__days {
            width: 100%;
            margin: 0;
            padding: 0;
            li {
                display: inline-block;
                float: left;
                width: $day__width / 7;
                height: $day__height;
                line-height: $day__height;
            }
        }
        .days {
            width: $day__width;
            height: $day__height;
            margin: 0;
            padding: 0;
            .dayInner {
                width: 100%;
                height: auto;
                float: left;
                div {
                    display: inline-block;
                    float: left;
                    width: $day__width / 7;
                    height: auto;
                    line-height: $day__height;
                    position: relative;
                    .active {
                        background: #0074D9;
                        padding: 10px;
                        border-radius: 10px;
                        font-weight: bold;
                        color: white;
                    }
                    .dots {
                        display: block;
                        width: 5px;
                        height: 5px;
                        background: #000066;
                        border-radius: 10px;
                        position: relative;
                        margin: 4px auto;
                    }
                }
            }
        }
    }

</style>
