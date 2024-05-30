
// let treat = new Promise(function(resolve, reject) {
//     let receivegift = false;
//     let party = true;
//     if (receivegift) {
//         if (party) {
//             resolve("party");
//         } else {
//             reject("no party");
//         }
//     } else {
//         reject("no party");
//     }
// });

// treat.then((party) => {
//     console.log(party);
// }).catch((error) => {
//     console.log(error);
// });


let Enter = new Promise(function(resolve, reject) {
    resolve("Enter the ATM");
});

let insert = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
        let Inserted = true;
        if (Inserted) {
            resolve("Insert the card");
        } else {
            reject("No card inserted");
        }
        },3000);
    });
}
let  Processing= function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
        let Processing = true;
        if (Processing) {
            resolve("Processing");
        } else {
            reject("not Processing");
        }
        },5000);
    });
}

let pin = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
        let PinEntered = true;
        if (PinEntered) {
            resolve("Enter the pin");
        } else {
            reject("Pin not entered");
        }
        },5000);
    });
}

let withdraw = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
        let Withdrawn = true;
        if (Withdrawn) {
            resolve("Withdraw the money");
        } else {
            reject("No money withdrawn");
        }
        },5000);
    });
}

let cash = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
        let Cash = true;
        if (Cash) {
            resolve("Collect the cash");
        } else {
            reject("No cash collected");
        }
        },3000);
    });
}

let leave = function() {
    return new Promise(function(resolve, reject) {
        let Leave = true;
        if (Leave) {
            resolve("Leave the ATM");
        } else {
            reject("Did not leave");
        }
    });
}

Enter
    .then((result) => {
        console.log(result);
        return insert();
    })
    .then((result) => {
        console.log(result);
        return Processing();
    })
    .then((result) => {
        console.log(result);
        return pin();
    })
    .then((result) => {
        console.log(result);
        return withdraw();
    })
    .then((result) => {
        console.log(result);
        return cash();
    })
    .then((result) => {
        console.log(result);
        return leave();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
