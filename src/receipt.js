//const data = require('../src/hipstercoffee.json');
const fs = require('fs');
class Receipt{
   JSON = './petsData.json';
   constructor(){
       // this.date = this. getDate();
       // this.cafeDetails = this.getCafeDetails();
 
       // this.orders = this.getOrders();
   }
   getDate(){
       var currentdate = new Date();
       var datetime = "" + currentdate.getFullYear() + "."
                       + currentdate.getMonth()+1  + "."
                       + currentdate.getDate() + " "
                       + currentdate.getHours() + ":" 
                       + currentdate.getMinutes() + ":"
                       + currentdate.getSeconds();
   }
 
   getJson(){
       const jsonString = fs.readFileSync('./src/hipstercoffee.json')
       const details = JSON.parse(jsonString)
       return details;
   }
   getShopName(){
       let info = this.getJson();
       var shopName = info[0].shopName;
       return shopName;
   }
   getAddress(){
       let info = this.getJson();
       var address = info[0].address;
       return address;
   }
   getPhoneNo(){
       let info = this.getJson();
       var phoneNo = info[0].phone;
       return phoneNo;
   }
   getItemsPrice(item){
       let info = this.getJson();
       let price = info[0].prices[0][item]
       return price
       //console.log(info[0].prices[0]['Cafe Latte'])
   }

   calculateItemTotal(item, quantity){
    let price = this.getItemsPrice(item)
    let total = price * quantity
    return total
   }

   calculateTax(total, tax){
       let afterTax = (total*tax)/100 + total;
       let tot = afterTax.toFixed(2)
       return tot
   }
}
 
module.exports = Receipt

const receipt = new Receipt;
const item = 'Cafe Latte';
const quantity = 2;
let totalPrice = receipt.calculateItemTotal(item, quantity); 
let tax = 8.64;
let totalAfterTax = receipt.calculateTax(totalPrice,tax);
console.log(totalAfterTax)
const item2 = 'Blueberry Muffin';
const quantity2 = 1;
let totalPrice2 = receipt.calculateItemTotal(item2, quantity2); 
let totalAfterTax2 = receipt.calculateTax(totalPrice2,tax);
console.log(totalAfterTax2)
const item3 = 'Choc Mudcake';
const quantity3 = 1;
let totalPrice3 = receipt.calculateItemTotal(item3, quantity3); 
let totalAfterTax3 = receipt.calculateTax(totalPrice3,tax);
console.log(totalAfterTax3)
let totalAmount =0; 
totalAmount = totalAfterTax + totalAfterTax2 + totalAfterTax3
console.log(totalAfterTax + totalAfterTax2 + totalAfterTax3);
