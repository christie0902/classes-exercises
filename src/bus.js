class Bus {
  constructor(direction, stations, seats, passengers, lastStation) {
    this.direction = direction;
    this.stations = stations;
    this.seats = seats;
    this.passengers = passengers;
    this.lastStation = lastStation;
  }
  current() {
    return this.stations;
  }
  next() {
    return this.lastStation;
  }
  board(count) {
    const availableSeat = this.seats - this.passengers;
    let updatedPassengers;

    if (count <= availableSeat) {
      updatedPassengers = this.passengers + count;
    } else {
      updatedPassengers = this.passengers + availableSeat;
    }

    return updatedPassengers;
  }

  deboard(count) {
    let remainingPassenger = this.passengers;

    if (count >= remainingPassenger) {
      remainingPassenger = 0;
    } else {
      remainingPassenger -= count;
    }

    return remainingPassenger;
  }
}

// const board = (count) => {
//     const availableSeat = seats - passengers;
//     let updatedPassengers;

//     if (count <= availableSeat) {
//       updatedPassengers = passengers + count;
//     } else {
//       updatedPassengers = passengers + availableSeat;
//     }

//     console.log(updatedPassengers);
// }

// const deboard = (count) => {
//     let remainingPassenger = passengers;

//     if (count >= remainingPassenger) {
//       remainingPassenger = 0;
//     } else {
//       remainingPassenger -= count;
//     }

//     return remainingPassenger;
//   }
