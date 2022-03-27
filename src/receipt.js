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
        for (var i=0; i<info.length; i++){
        for (var shopDetails in info[i]) {
            console.log(info[0].prices[0]['Cafe Latte']);
            console.log(info[0][shopDetails]);
        }
    }
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

