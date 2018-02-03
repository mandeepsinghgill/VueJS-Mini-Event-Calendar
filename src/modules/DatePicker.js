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

  days() {
    let range = moment.range(this.start, this.end)
    let arrayOfRange = Array.from(range.by('days'))
    return arrayOfRange.map(m => m.format('DD'))
  }

  get _month() {
    return this.start.week
  }
}