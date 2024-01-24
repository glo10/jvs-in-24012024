export default class MyDate extends Date {
  constructor (dt = 'now') {
    super(dt)
  }

  getMoment () { // Algo 4
    const hour = this.getHours()
    if (hour > 6 && hour < 12) {
      return 'Matin'
    } else if (hour >= 12 && hour < 18) {
      return 'Après-midi'
    } else if (hour >= 18) {
      return 'Soirée'
    }
    return 'Nuit'
  }
}
