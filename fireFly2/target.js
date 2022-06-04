class Target {
  #position;
  constructor(position) {
    this.#position = position;
  }

  currentPosition() {
    return this.#position;
  }

  changePosition(newPosition) {
    this.#position = newPosition;
  }

}

exports.Target = Target;
