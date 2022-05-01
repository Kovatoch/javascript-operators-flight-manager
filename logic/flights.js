function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        let flights;

        if ((passengers < 0) || (!Number.isInteger(Number(passengers)))) {
            throw new Error("The number of passengers must be a positive integer value")
        }

        if ((capacity < 0) || (!Number.isInteger(Number(capacity)))) {
            throw new Error("The capacity of the flight must be a positive integer value")
        }

        if (passengers % capacity == 0) {
            flights = passengers/capacity;
        } else {
            flights = Math.floor(passengers/capacity) + 1;
        }
        return flights;
    }

    function checkAircraftRevision(distanceLimit, distancesArray) {
        let totalDistance =0; 
        
        //If the total distance is less or equal than half of the distance limit, you 
        //return a string "The revision needs to be done within the next 3 months".
        

        let distance;
        for(distance of distancesArray) {
            totalDistance += distance;
        }

        if (totalDistance>distanceLimit) {
            throw new Error("Flight maximum allowed distance (" + distanceLimit + ") exceeded. No flight is allowed any longer, you need to make the revision immediately.");

        }

        if (totalDistance <= distanceLimit/2) {
            return "The revision needs to be done within the next 3 months";
        }
        //If the total distance is more than half but less or equal than 3 quarters of the distance limit, 
        //you return a string "The revision needs to be done within the next 2 months".
        else if (totalDistance <= distanceLimit/4*3) {
            return "The revision needs to be done within the next 2 months";
        }
        else {
            return "The revision needs to be done within the next month";
        }
        console.log(totalDistance);
    }

    return {calculateNumberOfFlights, checkAircraftRevision};

}

module.exports = Flights();