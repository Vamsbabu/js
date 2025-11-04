  
   /*===================================task1===============================*/
let age =  parseInt(prompt("enter you age:"));

 {
   if (age>=18){
            console.log( "your are eligible for voting")
   }
   else{
        console.log("not eligible for voting")

   }

    }



let purchaseamount = parseInt(prompt("enter purchase amount:"));
let discount=0;
{
   if (purchaseamount<1000){
      discount =purchaseamount *0;
      console.log("no discount is avalable");

   }
   else if(purchaseamount>=1000 && purchaseamount<2000 ){
      discount = purchaseamount * 0.10;


   }
   else if(purchaseamount>=2000 && purchaseamount<5000 ){
      discount = purchaseamount * 0.20;

   }
   else if(purchaseamount==5000){
      discount = purchaseamount *0.30;

   }
   let finalamount = (purchaseamount-discount);
   console.log("final amount after discount is:",finalamount);

}
/*=====================task2==================*/
  let  ticketprice = 250;
  let age =parseInt(prompt("enter your age:"));
  let discount=0;
  {
   if(age<=12){
      discount = ticketprice *100/100;
      console.log("no ticket price");
   }
   else if (age>12 && age<=16)
   {
      discount = ticketprice *0;

   }
   else if (age>=60)
   {
      discount = ticketprice *0.30;

   }
   let finalticketprice = ticketprice -discount;
   console.log("final ticket price is", finalticketprice);

  }
/*==============================task3=======================*/
 let marks = parseInt(prompt("enter your marks"));

//  let grade = marks;
 {
   if (marks >=90 && marks<=100)
   {
      console.log( "excullent = A");

   }
   else if ( marks>=80 && marks<90 )
   {
      console.log("very good = B");

   }


   }



/*==========================================task4===============================*/
let weather = parseInt(prompt("enter the tempature:"));
{
   if (weather<10)
   {
      console.log("its feezing outside, wear jacket");
   }
   else if(weather>=10 && weather<25)
   {
      console.log("cool weather perfect for outside activites");

   }
   else if(weather>=25 && weather<35)
   {
      console.log("warm day ,stay hydrated");
   }
   else if(weather>=35)
      console.log("its too hot outside, stay hydrated");
}


/*=======================================task5==============================================*/


let income = parseInt(prompt("enter your income:"));
{
   if (income<=20000)
   {
      console.log("not eligible for loan")
   }
   else if (income>20000 && income<50000)
   {
      console.log("eligible for a personal loan");
   } else if (income>=50000)
   {
      console.log("eligible for both personal and home loan");
   }
}
/*==================================task6========================================*/

let orderValue = parseFloat(prompt("Enter the order value:"));

let isPremium = prompt("Are you a premium member? (yes/no)").toLowerCase();

if (isPremium === "yes") {
   console.log("Delivery is free (Premium member).");
} else {
   // Nested if-else structure for delivery conditions
   if (orderValue < 200) {
      console.log("Delivery not available.");
   }
 else {
      if (orderValue >= 200 && orderValue <= 500) 
      {
         deliveryfee=50;
         console.log("Delivery fee: 50");
      }
    else {
         if (orderValue >= 500 && orderValue < 1000) {
            deliveryfee=25;
            console.log("Delivery fee: 25");
      } else {
      if (orderValue <= 1000) {
         console.log("Delivery fee: 0");
      } else {
         console.log("Delivery is free.");
      }
   }
}
 }
 let finalamount = orderValue + deliveryfee;
 console.log("final amount to be paid:",finalamount);
}



/*======================================task7===========================================*/
let issue = prompt(" enter issue") .toLowerCase();
let age =parseInt(prompt("enter your age:" )); 
{
   if (issue ==="emergency"){
      console.log("sent to emergency room");
   }
   else if  (age<=10){
      console.log("sent to pediatric section");

   }
   else if (age>10 && age<=60){
      console.log("general section");

   }
   else{
      console.log("senior citizen section");
   }

}

/*====================================task8==========================================*/
   let units = parseInt(prompt("enter number of units consumed:"));
   let amount =0;
   let penalty=0;
   {
      if (units<=100){
         console.log("Minimum charge only"); 
      }
      else if (units>100 && units<=300){
         penalty=400;
         penalty = units + penalty;
         console.log("applying rate based on units consumed",+penalty); 
      }
      else if (units>300 && units<=500){
         penalty=600;
         penalty =units + penalty;
          console.log("applying rate based on units consumed",+ penalty);
      }
      else if (units>500){
         penalty=1000;
         penalty = units +penalty;
         

         console.log("High consumption alert!", +penalty);
      }
      let finalbill = units+ penalty;
      console.log("final bill to be paid:", finalbill)
   }


   /*====================================task9================================*/
   let usage = parseInt(prompt("Enter your usage:"));
let userPlan = prompt("Enter your current plan (Basic Plan / Standard Plan / Premium Plan / Unlimited Plan):");
let suggestedPlan = "";

{
   if (usage < 5) {
      suggestedPlan = "Basic Plan";
      console.log("Suggested Plan:", suggestedPlan);
   }
   else if (usage >= 5 && usage < 20) {
      suggestedPlan = "Standard Plan";
      console.log("Suggested Plan:", suggestedPlan);
   }
   else if (usage >= 20 && usage < 50) {
      suggestedPlan = "Premium Plan";
      console.log("Suggested Plan:", suggestedPlan);
   }
   else if (usage >= 50) {
      suggestedPlan = "Unlimited Plan";
      console.log("Suggested Plan:", suggestedPlan);
   }

   if (userPlan !== suggestedPlan) {
      alert("Your current plan is " + userPlan + ". Based on your usage, we recommend switching to the " + suggestedPlan + ".");
   } 
   else {
      console.log("Your plan matches your usage. No changes needed.");
   }
}

 /*===============================================task10==================================*/
let sub1 = parseInt(prompt("Enter marks for Subject 1:"));
let sub2 = parseInt(prompt("Enter marks for Subject 2:"));
let sub3 = parseInt(prompt("Enter marks for Subject 3:"));


let marks = [sub1, sub2, sub3];
let failedSubjects = 0;
let total = 0;
let average = 0;
let result = "";
let remark = "";

{
   
   for (let i = 0; i < marks.length; i++) {
      if (marks[i] < 35) {
         failedSubjects++;
      }
      total += marks[i];
   }

 
   average = total / marks.length;


   if (failedSubjects === 0) {
      result = "Passed";
   } 
   else if (failedSubjects === 1) {
      result = "Supplementary";
   } 
   else {
      result = "Failed";
   }

   if (result === "Passed") {
      if (average >= 80) {
         remark = "Excellent performance!";
      } 
      else if (average >= 60) {
         remark = "Good performance!";
      } 
      else if (average >= 40) {
         remark = "Satisfactory performance.";
      } 
      else {
         remark = "Needs improvement.";
      }
   } 
   else if (result === "Supplementary") {
      remark = "You need to improve in one subject.";
   } 
   else {
      remark = "You need to work harder next time.";
   }

   console.log("Result:", result);
   console.log("Average Marks:", average.toFixed(2));
   console.log("Performance Remark:", remark);
}
/*============================================task11======================================*/
let distance = parseFloat(prompt("Enter distance travelled (in km):"));
let time = parseInt(prompt("Enter ride start time (24-hour format):"));
let hasPromo = prompt("Do you have a promo code? (yes/no):").toLowerCase();

let fare = 0;
let nightCharge = 0;
let discount = 0;
let finalFare = 0;

{
  
   if (distance < 5) {
      fare = 100;
      console.log("Applying minimum fare:", fare);
   }
   else if (distance >= 5 && distance <= 15) {
      fare = distance * 20; 
      console.log("Applying mid-tier fare:", fare);
   }
   else if (distance > 15) {
      fare = distance * 15; 
      console.log("Applying long-distance fare:", fare);
   }

   
   if (time >= 22 || time < 5) {
      nightCharge = fare * 0.20;
      fare += nightCharge;
      console.log("Night time detected. 20% night charge applied:", nightCharge);
   }

   
   if (hasPromo === "yes") {
      discount = fare * 0.10; 
      fare -= discount;
      console.log("Promo code applied. Discount:", discount);
   }

   finalFare = fare;
   console.log("Final fare to be paid:", finalFare.toFixed(2));
}

/*================================================task12=====================================================*/
let amount = parseFloat(prompt("Enter total bill amount:"));
let membership = prompt("Enter membership type (Silver/Gold/Platinum):").toLowerCase();
let hasCoupon = prompt("Do you have a coupon? (yes/no):").toLowerCase();

let discount = 0;
let finalAmount = 0;

{
   if (membership === "silver") {
      discount = amount * 0.05;
   }
   else if (membership === "gold") {
      discount = amount * 0.10;
   }
   else if (membership === "platinum") {
      discount = amount * 0.15;
   }

   if (hasCoupon === "yes") {
      discount += amount * 0.05;
   }

   finalAmount = amount - discount;
   console.log("Final payable amount:", finalAmount.toFixed(2));
}

/*===================================================task13===================================*/
let roomType = prompt("Enter room type (Standard/Deluxe/Suite):").toLowerCase();
let nights = parseInt(prompt("Enter number of nights:"));
let rating = parseFloat(prompt("Enter customer rating (1-5):"));

let baseCost = 0;
let totalCost = 0;
let serviceCharge = 0;
// let discount = 0;
// let finalAmount = 0;

{
   if (roomType === "standard") {
      baseCost = 1000;
   }
   else if (roomType === "deluxe") {
      baseCost = 2000;
   }
   else if (roomType === "suite") {
      baseCost = 3000;
   }

   totalCost = baseCost * nights;

   if (rating < 4) {
      serviceCharge = totalCost * 0.10;
      totalCost += serviceCharge;
      console.log("Service charge of 10% applied due to low rating:", serviceCharge);
   }

   if (nights > 5) {
      discount = totalCost * 0.05;
      totalCost -= discount;
      console.log("Discount of 5% applied for long stay:", discount);
   }

   finalAmount = totalCost;
   console.log("Room Type:", roomType);
   console.log("Number of Nights:", nights);
   console.log("Customer Rating:", rating);
   console.log("Total Payable Amount:", finalAmount.toFixed(2));
}


/*=================================================task14====================================*/
let rating = prompt("Enter employee rating (Excellent/Good/Average):").toLowerCase();
let experience = parseInt(prompt("Enter years of experience:"));
let department = prompt("Enter department:").toLowerCase();

let bonusPercent = 0;
let remark = "";

{
   if (rating === "excellent" && experience > 5) {
      bonusPercent = 20;
      remark = "Outstanding";
   }
   else if (rating === "good" && experience > 3) {
      bonusPercent = 10;
      remark = "Good";
   }
   else if (rating === "average") {
      bonusPercent = 5;
      remark = "Needs Improvement";
   }

   if (department === "sales") {
      bonusPercent += 2;
   }

   console.log("Department:", department);
   console.log("Experience:", experience + " years");
   console.log("Rating:", rating);
   console.log("Bonus Percentage:", bonusPercent + "%");
   console.log("Remarks:", remark);
}
/*==================================================task15======================================================*/

let vehicleType = prompt("Enter vehicle type (Car/Bike/Truck/Bus):").toLowerCase();
let speed = parseFloat(prompt("Enter vehicle speed (in km/h):"));
let roadType = prompt("Enter road type (Highway/City):").toLowerCase();

let fine = 0;

{
   if (roadType === "highway" && speed > 100) {
      fine = 1000;
      console.log("Fine of one thousand for speeding on highway.");
   }
   else if (roadType === "city" && speed > 60) {
      fine = 2000;
      console.log("Fine doubled for speeding in city area.");
   }

   if ((vehicleType === "truck" || vehicleType === "bus") && fine > 0) {
      fine += fine * 0.5;
      console.log("Heavy vehicle detected. Fine increased by 50%.");
   }

   if (fine === 0) {
      console.log("Safe Driving – No Fine.");
   } 
   else {
      console.log("Vehicle Type:", vehicleType);
      console.log("Road Type:", roadType);
      console.log("Speed:", speed + " km/h");
      console.log("Total Fine to be paid:", fine.toFixed(2));
   }
}
/*================================================================================================*/



// 1
let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
let ul1 = document.createElement("ul");
products.forEach(p => ul1.innerHTML += `<li>${p}</li>`);
document.body.appendChild(ul1);

// 2
let prices = [1000, 2000, 3000, 1500];
let table2 = "<table><tr><th>Original</th><th>Discounted</th></tr>";
for (let p of prices) table2 += `<tr><td>${p}</td><td>${p * 0.9}</td></tr>`;
document.body.innerHTML += table2 + "</table>";

// 3
let items3 = [
  { name: "Shirt", price: 500, category: "Clothing" },
  { name: "Watch", price: 1200, category: "Accessories" }
];
items3.forEach(i => document.body.innerHTML += `<div><h3>${i.name}</h3><p>${i.price}</p><p>${i.category}</p></div>`);

// 4
let order = [
  { name: "Pen", quantity: 2, price: 10 },
  { name: "Book", quantity: 3, price: 50 }
];
let table4 = "<table><tr><th>S.No</th><th>Product</th><th>Qty</th><th>Price</th><th>Total</th></tr>";
order.forEach((o,i)=> table4+=`<tr><td>${i+1}</td><td>${o.name}</td><td>${o.quantity}</td><td>${o.price}</td><td>${o.quantity*o.price}</td></tr>`);
document.body.innerHTML += table4 + "</table>";

// 5
let stockProducts = [
  { name: "Keyboard", stock: 3 },
  { name: "Mouse", stock: 0 },
  { name: "Charger", stock: 2 }
];
stockProducts.forEach(p => { if (p.stock > 0) document.body.innerHTML += `<p>${p.name}</p>`; });

// 6
let div6 = document.createElement("div");
let c = 10;
while (c >= 1) { div6.innerHTML += c + "<br>"; c--; }
document.body.appendChild(div6);

// 7
let findItem = ["Laptop", "Mobile", "Camera", "TV"];
for (let i of findItem) { document.body.innerHTML += i + "<br>"; if (i === "Camera") break; }

// 8
let cart = [499, 299, 1299, 999];
let i8 = 0, total = 0;
while (i8 < cart.length) { total += cart[i8]; i8++; }
document.body.innerHTML += "<p>Total: " + total + "</p>";

// 9
let stockList = [
  { name: "Bag", stock: 2 },
  { name: "Shoes", stock: 1 },
  { name: "Cap", stock: 0 }
];
let i9 = 0;
while (i9 < stockList.length && stockList[i9].stock > 0) {
  document.body.innerHTML += `<p>${stockList[i9].name}</p>`;
  i9++;
}

// 10
let prod10 = ["A", "B", "C", "D", "E"];
let ul10 = document.createElement("ul");
for (let i = 0; i < 3; i++) ul10.innerHTML += `<li>${prod10[i]}</li>`;
document.body.appendChild(ul10);

// 11
let cart11 = [];
while (cart11.length < 5) {
  let item = prompt("Enter item");
  if (item) cart11.push(item);
}
document.body.innerHTML += "<p>" + cart11.join(", ") + "</p>";

// 12
let cart12 = [];
do { document.body.innerHTML += cart12.length ? "Cart has items" : "Cart is empty"; } while (false);

// 13
let prices13 = [1000, 2000, 3000];
let i13 = 0;
do { document.body.innerHTML += `<p>${prices13[i13]*0.8}</p>`; i13++; } while (i13 < prices13.length);

// 14
let wishlist = ["Watch", "Shoes", "Bag"];
let i14 = 0;
do { document.body.innerHTML += `<p>${wishlist[i14]}</p>`; i14++; } while (i14 < wishlist.length);

// 15
let stock15 = 3, added = 0;
do { stock15--; added++; } while (stock15 > 0);
document.body.innerHTML += `<p>Added ${added} times</p>`;

// 16
let categories = [
  { name: "Mobiles", items: ["iPhone", "OnePlus", "Samsung"] },
  { name: "Laptops", items: ["HP", "Dell", "Asus"] }
];
for (let c of categories) {
  document.body.innerHTML += `<h3>${c.name}</h3>`;
  for (let i of c.items) document.body.innerHTML += `<p>${i}</p>`;
}

// 17
let inv = [
  { name: "Pen", price: 10, qty: 5 },
  { name: "Book", price: 50, qty: 2 }
];
let table17 = "<table><tr><th>Name</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
let totalVal = 0;
for (let p of inv) { 
  let val = p.price * p.qty; 
  totalVal += val; 
  table17 += `<tr><td>${p.name}</td><td>${p.price}</td><td>${p.qty}</td><td>${val}</td></tr>`;
}
table17 += `<tr><td colspan='3'>Total Value</td><td>${totalVal}</td></tr></table>`;
document.body.innerHTML += table17;

// 18
let cart18 = [1000, 2000, 1500];
let budget = 5000;
let sum18 = 0;
for (let i of cart18) sum18 += i;
document.body.innerHTML += sum18 <= budget ? "Within Budget" : "Budget Exceeded";

// 19
let products19 = [
  { name: "Shirt", type: "Clothing" },
  { name: "Phone", type: "Electronics" },
  { name: "Watch", type: "Accessories" }
];
products19.forEach(p => {
  document.body.innerHTML += `<div><h4>${p.type}</h4><p>${p.name}</p></div>`;
});

// 20
let pro20 = [
  { name: "Item1", price: 1000 },
  { name: "Item2", price: 2000 }
];
let table20 = "<table><tr><th>Product</th><th>Price</th><th>GST</th><th>Final</th></tr>";
for (let p of pro20) {
  let gst = p.price * 0.18;
  table20 += `<tr><td>${p.name}</td><td>${p.price}</td><td>${gst}</td><td>${p.price+gst}</td></tr>`;
}
document.body.innerHTML += table20 + "</table>";

// 21
let arr21 = ["A", "B", "C", "D"];
for (let i = arr21.length - 1; i >= 0; i--) document.body.innerHTML += `<p>${arr21[i]}</p>`;

// 22
let pro22 = [
  { name: "A", price: 100 },
  { name: "B", price: 300 },
  { name: "C", price: 200 }
];
let maxP = pro22[0];
for (let p of pro22) if (p.price > maxP.price) maxP = p;
document.body.innerHTML += `<p>${maxP.name}</p>`;

// 23
let arr23 = [100, 200, 300];
let sum23 = 0;
for (let n of arr23) sum23 += n;
document.body.innerHTML += `<p>Avg: ${sum23/arr23.length}</p>`;

// 24
let cart24 = [
  { price: 1000, qty: 2 },
  { price: 2000, qty: 1 }
];
let totalQty = 0, totalAmt = 0;
cart24.forEach(c => { totalQty += c.qty; totalAmt += c.price * c.qty; });
document.body.innerHTML += `<p>Total Qty: ${totalQty}</p><p>Cart Value: ${totalAmt}</p>`;
if (totalAmt > 5000) document.body.innerHTML += "Free delivery";

// 25
let pro25 = [
  { name: "Phone", category: "Electronics", price: 1000 },
  { name: "Shirt", category: "Clothing", price: 500 }
];
let table25 = "<table><tr><th>Name</th><th>Category</th><th>Final Price</th></tr>";
for (let p of pro25) {
  let disc = p.category === "Electronics" ? 0.1 : p.category === "Clothing" ? 0.05 : 0;
  table25 += `<tr><td>${p.name}</td><td>${p.category}</td><td>${p.price*(1-disc)}</td></tr>`;
}
document.body.innerHTML += table25 + "</table>";


