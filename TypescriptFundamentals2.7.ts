enum TripType {
    OneWay = "OneWay",
    RoundTrip = "RoundTrip"
}

function selectTripType(tripType: TripType) : string{
    return tripType;
}

console.log("TripType selected as: "+selectTripType(TripType.OneWay));
console.log("TripType selected as: "+selectTripType(TripType.RoundTrip));