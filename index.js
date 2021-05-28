class Circle {
  constructor(rad) {
    this.radius = rad
  }

  get diameter() {
    return 2 * this.radius
  }

  get circumference() {
    return Math.PI * this.diameter
  }

  get area() {
    return Math.PI * this.radius ** 2
  }

  set diameter(di) {
    this.radius = di / 2
  }

  set circumference(ci) {
    this.radius = ci / (2 * Math.PI)
  }

  set area(ar) {
    this.radius = Math.sqrt(ar) / Math.PI
  }
}