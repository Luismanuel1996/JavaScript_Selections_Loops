
for(let i= 1 ; i <= 100 ; i+=2) { 
    console.log(i) ;
}


for ( let i = 1; i < 100 ; i++ ){
    if ( i % 3 == 0 && i % 5 == 0)
    console.log("Fizzbuzz");
    else if ( i % 3 == 0) 
    console.log("Fizz") ;
    else if ( i % 5 == 0 )
    console.log("buzz") ;    
 } 

while ( i <= 100 )
{
    console.log(i) ;
    i += 2;
 }

do ( i += 2 ) ;
    while ( i <= 100) ;
console.log(i) ; 


while ( i <=100 ) {
if (i % 3 == 0 && i % 5 == 0) 
console.log("Fizzbuzz");
else if ( i % 3 == 0) 
console.log("Fizz") ;
else if ( i % 5 == 0 )
console.log("buzz") ;
i++;
}

do(i++) ;
while (i <= 100)  {
    if (i % 3 == 0 && i % 5 == 0) 
    console.log("Fizzbuzz");
    else if ( i % 3 == 0) 
    console.log("Fizz") ;
    else if ( i % 5 == 0 )
    console.log("buzz") 
}


let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for ( let i = 1 ; n <= 100 ; i++ ) {
    if ( i == value )
console.log("Found value!") ; } 
if ( i == n ) {
    console.log("could not find value!, sorry")

}

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for ( let a = start ; a <= end ; a++ ) {
console.log(a) ; 
}


for ( let i = "start" ; a < 100 ; i++ )
{
    if ( i % 3 == 0 && i % 5 == 0)
    console.log("Fizzbuzz");
    else if ( i % 3 == 0) 
    console.log("fizzDivisor") ;
    else if ( i % 5 == 0 )
    console.log("buzzDivisor") ;    
 } 
