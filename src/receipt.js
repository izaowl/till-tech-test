//const data = require('../src/hipstercoffee.json');
const fs = require('fs')

class Receipt{
  //jsonData = requestAnimationFrame('./hipstercoffee.json');
  constructor(){
    
  }

  allData = []
  print(){
    try {
        const jsonString = fs.readFileSync('./src/hipstercoffee.json')
        const info = JSON.parse(jsonString)
        var currentdate = new Date(); 
var datetime = "" + currentdate.getFullYear() + "."
                + (currentdate.getMonth()+1)  + "." 
                + currentdate.getDate() + " "
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        console.log(datetime)
        console.log(info[0].shopName);
        console.log(info[0].address);
        console.log("             ")
        console.log(" + "+ info[0].phone);
        console.log(info[0].prices[0]['Cafe Latte'])
    //     for (var i=0; i<info.length; i++){
    //     for (var shopDetails in info[i]) {
    //         console.log(info[0].prices[0]['Cafe Latte']);
            
    //         console.log(info[0].shopName);
    //         console.log(info[0][shopDetails]);
    //     }
    // }
        // for(var i = 0; i < info.length; ++i){
        //     //do something with obj[i]
        //     for(var ind in info[i]) {
        //          console.log(ind);
        //          for(var vals in info[i][ind]){
        //              console.log(vals, info[i][ind][vals]);
        //          }
        //     }
        //  }

      } catch(err) {
        console.log(err)
        return
      }
  }
}
module.exports = Receipt
const r = new Receipt;
r.print();

