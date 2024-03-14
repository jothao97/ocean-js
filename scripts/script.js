// task 1: implement a function that calculates total fish caught
let fishCaught = [50, 75, 25];

function calculateFishCaught (totalFish){ 
    let total = 0;
    totalFish.forEach(fishQuantity => {
        total += fishQuantity; 
        // 0 += 50 <- new total
        // 50 += 75 <- 125 is new total
        // 125 += 25 <- 150 is new total
    })

    return total;
};

let weekendFishCaught = [50, 75, 25];
let totalWeekendFishCaught = calculateFishCaught(weekendFishCaught);
console.log("weekend fish caught:", totalWeekendFishCaught);

// can use the same function for different arrays ^^ weekend fish caught, since it is a base function that can be reused

// task 2: implement a function to filer out endangered species from a list of fish options

function filterEndangeredFish(fishOptions){
    return fishOptions.filter(option => !option.endangered); // ! means not true. filter to only return NOT endangered fishes

}

let fishOptions = [
    {name: "salmon", endangered: false},
    {name: "blue fin tuna", endangered: true}, // when running code, blue fin tuna would be filtered out because it is endangered and we are looking for NOT endangered fishes
    {name: "cod", endangered: false},
]

// task 3: define a class for research institutes
class ResearchInstitutes{
    constructor (name, location, specialty, size){
        this.name= name;
        this.location= location;
       this.specialty= specialty;
        this.size= size;
    }
}   

// task 4: extend class research institutes for marine research institutes
class MarineResearchInstitutes extends ResearchInstitutes {
    constructor(name, location, specialty, size, waterLocation, climate){
        super (name, location, specialty, size)
        this.waterLocation= waterLocation;
        this.climate= climate
    }
}

// task 5: implement class with default paramteres for oceanic dive gear
class oceanicDiveGear{
    constructor (depth= "15 feet", type= "Scube gear"){
        this.depth= "15 feet";
        this.type= "Scuba gear";
    }
}

let diveGear = new oceanicDiveGear();
// this would create an object like so

// {
//   depth: "15 feet",
//   type: "scuba gear"
// }