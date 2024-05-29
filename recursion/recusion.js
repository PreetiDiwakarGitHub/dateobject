// question 1   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function sum1(num) {
//     if(num == 0) {
//         return 0;
//     }
    
//     return num + sum1(num - 1);
// }

// console.log(sum1(5));


// question 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function fact(num){
//     if(num<1){
//         return 1;
//     }
//     return num*fact(num-1);
// }
// console.log(fact(5));

// question 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// question  4  \\\\\\\\\\\\\\\\\\\\\\\\\\\\


// let arr = [1, 2, 3];
// function product(i = 0) {
//     if (arr.length <= i) {
//         return 1;
//     }
//     return arr[i] * product(i + 1);
// }
// console.log(product());






// ATM

function enter(insertcard){
    setTimeout(()=>{
        console.log("Inter");
        insertcard()
    });

}

function InsertCard(processing){
    setTimeout(()=>{
        console.log("InsertCard");
        processing()
    }, 5000)

}

function Processing(enterPin){
    setTimeout(()=>{
        console.log("Processing");
        enterPin()
    }, 10000)
}

function EnterPin(withdrawMoney){
    setTimeout(()=>{
        console.log("EnterPin");
        withdrawMoney()
    }, 1000)
}

function withdrawMoney(collect){
    setTimeout(()=>{
        console.log("with");
        collect()
    })
    
}
function collect(leaveATM){
    setTimeout(()=>{
        console.log("collect");
        leaveATM()
    })
    
}
function leaveATM(){
    console.log("Leave ");
}


function visitingATM(){
    console.log("Entering the ATM");
    enter(()=>{
        InsertCard(()=>{
            Processing(()=>{
                EnterPin(()=>{
                    withdrawMoney(()=>{
                        collect(()=>{
                            leaveATM(()=>{

                            })
                        })
                    })
                })
            })
        })
    })

    

    
}

visitingATM();









