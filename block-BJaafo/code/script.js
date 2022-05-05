

function add(firstName,lastName){
        let fullName = firstName + lastName;
        return fullName;
}

let result = add("Arya","stark");
let excepted = "Arya stark";
 if(result !=="Arya stark"){
      throw new error (`${result}is not equal to ${excepted}`)
 }


 function totalAmount(amount,taxRate){
      let total = amount + (amount * taxRate);
      return total;
 }

 