let a='0'
console.log(Boolean('0'))   //TRUE Tırnak içinde herhangi bir değerin olması yani dolu olması onu doğru  yapıyor

let b=0
console.log(Boolean(b))     //FALSE Number olan 0 false
console.log(a == b)         //TRUE Burda tırnak içindeki 0 Number'a çevrilir. 0==0 gibi olur o da true olur.

/*  -----------------------  */

console.log('' == false)  //True  Tipini değiştirir.  
console.log(0 == false)   //True  

/* YUkarıdaki eşitlikte tipler dönüştürülür. */

/* Aşağıdaki gibi sıkı eşitlikte ise veriler olduğu gibi bırakılır. Değiştirilmez  */
console.log('' === 0) //FALSE 

console.log(null==undefined)
console.log(null===undefined)

console.log("GÖREVLER")


console.log('2' > '12')   
console.log('2' > 12)   

