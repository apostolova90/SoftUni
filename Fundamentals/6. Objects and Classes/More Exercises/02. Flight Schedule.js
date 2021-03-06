// решение с масивите

function flightSchedule(input) {
    const flights = input.shift(); // Array for all the flights on a specific sector - ['WN269 Delaware', 'FL2269 Oregon'...........].
    const newStatuses = input.shift(); // Array with the newly changed statuses - ['DL2120 Cancelled', 'WN612 Cancelled'............]
    const statusToCheck = input.shift().toString(); // Single string - ['Cancelled']
   
    const allFlights = []; // This array will hold object elements
   
    // Pushing all the initial flights to the array
    for (const elem of flights) {
      let [plane, destination] = elem.split(' '); // сплитваме всеки отделен полет - 'WN269 Delaware'
      let flight = { // създаваме нов обект, в който записваме всичко
        plane,
        destination,
      };
      allFlights.push(flight); // пушваме обекта в масива
    }
   
    // Changing the statuses of the existing flights
    for (const elem of newStatuses) { //минаваме през елемтите във втория масив 
      let [plane, status] = elem.split(' '); // и пак ги сплитваме
      allFlights.forEach(flight => {
        if (flight.plane === plane) { // проверяваме дали полетът е един и същ 
          flight.status = status; // и ако е, сменяме статуса му
        }
      });
    }
   
    // Prints all the flights, that its statuses were not changed
    if (statusToCheck === 'Ready to fly') { //ако последният стринг е 'Ready to fly'
      allFlights.forEach(flight => { // минаваме през всички полети
        if (!flight.status) { // ако обекта няма статус, му добавя такъв с текст "Ready to fly"
          flight.status = 'Ready to fly'; 
          console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);// принтираме полети, чийто статус не е бил променян
        }
      });
    } else {
      // Prints all the flights, that it`s statuses were changed
      // ако полета има статус, принтираме всички полети със статус
      allFlights.forEach(flight => {
        if (flight.status) {
          console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
        }
      });
    }
  }
   

   
  flightSchedule([
    ['WN269 Delaware',
      'FL2269 Oregon',
      'WN498 Las Vegas',
      'WN3145 Ohio',
      'WN612 Alabama',
      'WN4010 New York',
      'WN1173 California',
      'DL2120 Texas',
      'KL5744 Illinois',
      'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
      'WN612 Cancelled',
      'WN1173 Cancelled',
      'SK430 Cancelled'],

    ['Cancelled']]);
   

   
  flightSchedule([
    ['WN269 Delaware',
      'FL2269 Oregon',
      'WN498 Las Vegas',
      'WN3145 Ohio',
      'WN612 Alabama',
      'WN4010 New York',
      'WN1173 California',
      'DL2120 Texas',
      'KL5744 Illinois',
      'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
      'WN612 Cancelled',
      'WN1173 Cancelled',
      'SK330 Cancelled'],

    ['Ready to fly']]);




    // решение с клaс - от упражнение с Тошко

    /* function flightSchedule(data) {
      class Flight {
          constructor(flyNumber, destination){
              this.flyNumber = flyNumber;
              this.destination = destination;
              this.status = 'Ready to fly';
          }
      }
   
      let result = [];
   
      for(let flightInfo of data[0]){
          let token = flightInfo.split(" ");
          let flightNumber = token.shift();
          let destination = token.join(" ")
   
         let myFlight = new Flight(flightNumber, destination);
         result.push(myFlight)
      }
     
      for(let token of data[1]) {
          let tokens = token.split(" ")
         let findFlight = result.filter(obj => obj.flyNumber === tokens[0])[0];
         if (findFlight){
              findFlight.status = 'Cancelled'
         }
      }
      let command = data[2][0];
   
      switch(command){
          case 'Cancelled':
              let canceledFly = result.filter(obj => obj.status === "Cancelled");
              canceledFly.forEach(x=> console.log(`{ Destination: '${x.destination}', Status: '${x.status}' }`))
              break;
          case 'Ready to fly':
              let readyToFly = result.filter(obj => obj.status === "Ready to fly")
              readyToFly.forEach(x => console.log(`{ Destination: '${x.destination}', Status: '${x.status}' }`))
              break;
      }
   
  }
  flightSchedule([
    ['WN269 Delaware',
      'FL2269 Oregon',
      'WN498 Las Vegas',
      'WN3145 Ohio',
      'WN612 Alabama',
      'WN4010 New York',
      'WN1173 California',
      'DL2120 Texas',
      'KL5744 Illinois',
      'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
      'WN612 Cancelled',
      'WN1173 Cancelled',
      'SK430 Cancelled'],

    ['Cancelled']]);
   

   
  flightSchedule([
    ['WN269 Delaware',
      'FL2269 Oregon',
      'WN498 Las Vegas',
      'WN3145 Ohio',
      'WN612 Alabama',
      'WN4010 New York',
      'WN1173 California',
      'DL2120 Texas',
      'KL5744 Illinois',
      'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
      'WN612 Cancelled',
      'WN1173 Cancelled',
      'SK330 Cancelled'],

    ['Ready to fly']]); */