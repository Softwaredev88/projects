function bmiCalcu(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let output = document.getElementById('output').value;

    let b = weight / (height * height);
   //document.getElementById('output').innerHTML = Math.round(b * 100)/100;
   if(b <= 18.5){
       document.getElementById('output').innerHTML = Math.round(b * 100)/100 + " UNDERWEIGHT";
   }
   else if (b<=25){
    document.getElementById('output').innerHTML = Math.round(b * 100)/100 + " NORMAL";
   }
   else if (b <= 30){
    document.getElementById('output').innerHTML = Math.round(b * 100)/100 + " OVERWEIGHT";
   }
   else if (b <= 40 || b >=40 ){
    document.getElementById('output').innerHTML = Math.round(b * 100)/100  + " OBESE";
   }
 }   