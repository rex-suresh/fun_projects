class Player {
  #maxPoints; #position; #points;
  constructor(maxPoints) {
    this.#maxPoints = maxPoints;
    this.#position = 0;
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

  isPlayerAt(otherPosition) {
    return this.#position === otherPosition;
  }

  isPlayerWon() {
    return this.#points >= this.#maxPoints;
  }
}

exports.Player = Player;
