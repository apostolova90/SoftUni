function rounding(num, precision){

    if (precision > 15){
        precision = 15;
    }

    num = num.toFixed(precision);
    console.log(parseFloat(num))
}
rounding(3.1415926535897932384626433832795,2)
rounding(10.5,3)


 // друго решение (създавам друга променлива)
/* function rounding (n,m){

    if (m > 15){
        m = 15;
    }

    let roundedNumber = n.toFixed(m) 
    console.log (parseFloat(roundedNumber));

}
rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3); */