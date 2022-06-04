class Player {
  #maxPoints; #position; #points;
  constructor(maxPoints, position) {
    this.#maxPoints = maxPoints;
    this.#position = position;
    this.#points = 0;
  }

  moveRight() {
    this.#position++;
    return { position: this.#position };
  }

  moveLeft() {
    this.#position--;
    return { position: this.#position };
  }

  addPoint() {
    this.#points++;
  }

  currentPosition() {
    return this.#position;
  }

  isPlayerAt(otherPosition) {
    return this.#position === otherPosition;
  }

  isPlayerWon() {
    return this.#points >= this.#maxPoints;
  }
}

exports.Player = Player;
