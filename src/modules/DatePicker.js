import Moment from 'moment';
import {extendMoment} from 'moment-range'

const moment = extendMoment(Moment)

export default class DatePicker {

  constructor(year, month) {
    this.start = moment([year, month]);
    this.end = this.start.clone().endOf('month')
    this.month = month;
    this.year = year;
  }

  get firstDay() {
    return this.start.weekday(0)
  }

  get days() {
    let range = moment.range(this.start, this.end)
    let arrayOfRange = Array.from(range.by('days'))
    let dates = []
    arrayOfRange.map(m => {
      dates.push({
        day: m.format('DD'),
        date: m.format('LL')
      })
    })
    return dates
  }

  isBetween(day, dates) {
    if (dates.start && dates.end) {
      let start = moment(dates.start)
      let end = moment(dates.end)
      let range = moment.range(start, end)
      if(range.contains(moment(day.date))) {
        return true
      } else {
        console.info('no')
      }
    }
  }

  get _month() {
    return this.start.week
  }
}