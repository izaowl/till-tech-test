const Receipt = require('../src/receipt');
const Order = require('../src/order');
describe("Receipt",() =>{
    it("Has correct cafe details",() =>{
    const receipt = new Receipt;
    getShopName = receipt.getShopName();
    address = receipt.getAddress();
    phoneNo = receipt.getPhoneNo();
    expect(getShopName).toBe('The Coffee Connection');
    expect(address).toBe('123 Lakeside Way');
    expect(phoneNo).toBe('16503600708');
    });
    
    it("has correct price of item",()=>{
    const receipt = new Receipt;
    const item = 'Cafe Latte';
    const price = receipt.getItemsPrice(item);
    expect(price).toBe(4.75);
    });

    it("calculates line of receipt",()=>{
      const receipt = new Receipt;
      const item = 'Cafe Latte';
      const quantity = 2;
      const totalPrice = receipt.calculateItemTotal(item, quantity);
      expect(totalPrice).toBe(9.5);
    });

    it("calculates tax",() =>{
      const receipt = new Receipt;
      const item = 'Cafe Latte';
      const quantity = 1;
      const totalPrice = receipt.calculateItemTotal(item, quantity); 
      const tax = 8.64;
      const totalAfterTax = receipt.calculateTax(totalPrice,tax);
      expect(totalAfterTax).toBe("5.16")
    });

    it("Calculates total amount",()=>{
      const receipt = new Receipt;
      const item = 'Cafe Latte';
      const quantity = 2;
      const totalPrice = receipt.calculateItemTotal(item, quantity); 
      const tax = 8.64;
      const totalAfterTax = receipt.calculateTax(totalPrice,tax);

      const item2 = 'Blueberry Muffin';
      const quantity2 = 1;
      const totalPrice2 = receipt.calculateItemTotal(item2, quantity2); 
      const totalAfterTax2 = receipt.calculateTax(totalPrice2,tax);

      const item3 = 'Choc Mudcake';
      const quantity3 = 1;
      const totalPrice3 = receipt.calculateItemTotal(item3, quantity3); 
      const totalAfterTax3 = receipt.calculateTax(totalPrice3,tax);

      const totalAmount = totalAfterTax + totalAfterTax2 + totalAfterTax3
      expect(totalAmount).toBe(21.67)
    })
});



// describe('Date mock to check printable format of Date attribute', () => {
//     const receipt = new Receipt();
//     it('Can output expected format of a date', () => {
//       jest
//       .useFakeTimers()
//       .setSystemTime(new Date('2012-10-10'));
//       const receipt = new Receipt();
//       date = receipt.getDate();
//       expect(date).toContain('10/10/2012');
//       expect(transaction.date).toBe('10/10/2012');
//     });
//   })