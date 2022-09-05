export class GuessingGame {
    getNumber(number) {
        this.number = number
    }
    setRange(min, max) {
        this.min = min
        this.max = max
    }
    guess() {
        if(this.min + 1 === this.number) {
            return this.min + 1
        } else if(this.max - 1 === this.number) {
            return this.max - 1
        } else {
        return Math.round((this.max - this.min) / 2 + this.min)
        }
    }
    lower() {
        if(this.guess() > this.number) {
            this.max = this.guess()
        }
    }
    greater() {
        if(this.guess() < this.number) {
            this.min = this.guess()
        }
    }
}