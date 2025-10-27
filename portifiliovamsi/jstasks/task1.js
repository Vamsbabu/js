  
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




