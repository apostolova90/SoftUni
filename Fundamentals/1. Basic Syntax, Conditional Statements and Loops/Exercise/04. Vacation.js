function vacation(number, type, day) {
 
    let totalPrice = 0;
 
    if (type === 'Students'){
 
        switch (day) {
            case 'Friday':  totalPrice = number * 8.45; 
                break;
            case 'Saturday': totalPrice = number * 9.80;
                break;
            case 'Sunday': totalPrice = number * 10.46;               
                break;      
        }

        if (number >= 30){
            totalPrice *= 0.85    
        }

    } else if (type === 'Business'){
 
        if (number >= 100){
            switch (day) {
                case 'Friday':  totalPrice = (number - 10) * 10.90;                    
                    break;
                case 'Saturday': totalPrice = (number - 10) * 15.60;                    
                    break;
                case 'Sunday': totalPrice = (number - 10) * 16;                    
                    break;
                } 
        
        } else {
            switch (day) {
                case 'Friday':  totalPrice = number * 10.90;        
                    break;
                case 'Saturday': totalPrice = number * 15.60;
                    break;
                case 'Sunday': totalPrice = number * 16;                        
                    break;
            }

        }
 
    } else if (type === 'Regular'){
        
        switch (day) {
            case 'Friday':  totalPrice = number * 15;
                
                break;
            case 'Saturday': totalPrice = number * 20;
                
                break;
            case 'Sunday': totalPrice = number * 22.50;
                
                break;
    
        }
 
        if (number >= 10 && number <= 20) {
            totalPrice *= 0.95
        }
    }
 
    console.log (`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");

/* function vacaition(peopleCount, groupType, dayOfWeek){

    let studentsFridayPrice = 8.45;
    let businessFridayPrice = 10.9;
    let regularFridayPrice = 15;
    let studentsSaturdayPrice = 9.8;
    let businessSaturdayPrice = 15.6;
    let regularSaturdayPrice = 20;
    let studentsSundayPrice = 10.46;
    let businessSundayPrice = 16;
    let regularSundayPrice = 22.5;

    let studentsDiscountPercentege = 15;
    let businesDiscountPeople = 10;
    let regularDiscountPercentege = 5;

    let totalPrice = 0;

    if (groupType === "Business" && peopleCount >= 100){
        peopleCount -= businesDiscountPeople;
    } 

    if (groupType === "Students" && dayOfWeek === "Friday"){
        totalPrice += peopleCount * studentsFridayPrice;
    } else if (groupType === "Students" && dayOfWeek === "Saturday"){
        totalPrice += peopleCount * studentsSaturdayPrice;
    } else if (groupType === "Students" && dayOfWeek === "Sunday"){
        totalPrice += peopleCount * studentsSundayPrice;
    } else if (groupType === "Business" && dayOfWeek === "Friday"){
        totalPrice += peopleCount * businessFridayPrice;
    } else if (groupType === "Business" && dayOfWeek === "Saturday"){
        totalPrice += peopleCount * businessSaturdayPrice;
    } else if (groupType === "Business" && dayOfWeek === "Sunday"){
        totalPrice += peopleCount * businessSundayPrice;
    } else if (groupType === "Regular" && dayOfWeek === "Friday"){
        totalPrice += peopleCount * regularFridayPrice;
    } else if (groupType === "Regular" && dayOfWeek === "Saturday"){
        totalPrice += peopleCount * regularSaturdayPrice;
    } else if (groupType === "Regular" && dayOfWeek === "Sunday"){
        totalPrice += peopleCount * regularSundayPrice;
    } 

    if (groupType === "Students" && peopleCount >= 30){
        totalPrice -= (studentsDiscountPercentege / 100) * totalPrice;
    } else if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20){
        totalPrice -= (regularDiscountPercentege / 100) * totalPrice;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacaition(30,"Students","Sunday");
vacaition(40,"Regular","Saturday"); */