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
       let afterTax = (total*tax)/100
       return afterTax + total
   }
}
 
module.exports = Receipt
// const r = new Receipt;
// r.print();
