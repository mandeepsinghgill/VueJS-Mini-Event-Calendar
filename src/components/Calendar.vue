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
                <div v-for="day in days" :key="day">
                    <span :class="isSelected(day) ? 'active__text' : ''">{{ day }}</span>
                    <span :class="isSelected(day) ? 'active' : ''"></span>
                    <span class="dots" v-for="(event, index) in events" :key="index" v-if="convertDay(event.date) === day"></span>
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
      groupEvents() {
        return _.groupBy(this.events, 'date')
      }
    },
    mounted() {
      this.weekDays = moment.weekdaysShort()
      this.days = this.Calendar.days()
    },
    methods: {
      isSelected(day) {
        return this.aimpicker.format('DD') === day
      },
      convertDay(day) {
        return moment(day).format('DD')
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
                height: 100%;
                float: left;
                div {
                    display: inline-block;
                    float: left;
                    width: $day__width / 7;
                    height: 100%;
                    line-height: $day__height;
                    position: relative;
                    .active__text {
                        color: white;
                    }
                    .active {
                        background: #0074D9;
                        border-radius: $day__height;
                        display: block;
                        position: relative;
                        height: $day__height;
                        top: -$day__height;
                        width: $day__height;
                        margin: 0 auto;
                        z-index: -1;
                    }
                    .dots {
                        display: block;
                        width: 5px;
                        height: 5px;
                        background: #000066;
                        border-radius: 10px;
                        position: absolute;
                        margin: 4px auto;
                        top: 40px;
                        left: 50%;
                    }
                }
            }
        }
    }

</style>
