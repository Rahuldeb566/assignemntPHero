// https://github.com/Rahuldeb566/assignemntPHero
//1Kilometer-Meter

function kilometerToMeter(kilometer){
    
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(5);
console.log("Converted number of meter are: ", result,"meter");


//2Budget Calculator

function budgetCalculator(ghori, phone, laptop){

    var totalPriceGhori = ghori * 50;
    var totalPricePhone = phone * 100;
    var totalPriceLaptop = laptop * 500;
    var result = totalPriceGhori + totalPricePhone + totalPriceLaptop;

    return result;
}

var finalCalculation = budgetCalculator(2, 5, 3);
console.log("Total amount you need: ", finalCalculation);


//3Hotel Cost

function hotelCost(days){

    var prompt = 0;

    if ( days <= 0)
    {
        console.log("Invalid input!");
    }

    else if( days > 0 && days <= 10 )
    {
        var result = days * 100;
    }

    else if ( days <= 20 )
    {
        prompt = days - 10;
        var moreDays = prompt * 80;
        var previousDays = 10 * 100;
        var result = moreDays + previousDays;
    }

    else
    {
        prompt = days - 20;
        var moreDays = prompt * 50;
        var previousDays1 = 10 * 80;
        var previousDays2 = 10 * 100;
        var result = moreDays + previousDays1 + previousDays2;

    } 

    return result;
}

var dayNumber = hotelCost(0);

console.log("Your total hotel bill is: ", dayNumber);


//4 Mega Friend

function megaFriend(array) {

    var bigName = array[0];

    for(var i = 0; i < array.length; i++){
        var currentName = array[i];

        if(currentName > bigName)
        {
            bigName = currentName;
        }
    }

    return bigName;
}

var frndsName = ['Antu', 'Komola', 'Hirak'];
var finalResult = megaFriend(frndsName);

console.log("My MegaFriend Name is: ", finalResult);