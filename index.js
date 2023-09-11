function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  height = height/100

  let BMI = (weight / height^2);

  // Challenge 1

  alert(` Your BMI is : ${BMI}`);

  // Challenge 2

  if( BMI <= 18.5)
  {
    alert(` Your BMI is : ${BMI}
  You are Underweight `);

  } else if(BMI > 18.5 && BMI <= 24.9)
  {
    alert(` Your BMI is : ${BMI}
  You are Healthy Weight`);

  } else if(BMI > 25.0 && BMI <= 29.9)
  {
    alert(` Your BMI is : ${BMI} 
  You are Overweight`);

  }
  else if(BMI >= 30.0)
  {
    alert(` Your BMI is : ${BMI}
  You are Obesity`);

  }

  // Challenge 3

  if( age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24 )
  {
    alert(` Your BMI is : ${BMI}
  You are Healthy`);

  } else if( age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25)
  {
    alert(` Your BMI is : ${BMI}
  You are Healthy`);

  } else if( age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26)
  {
    alert(` Your BMI is : ${BMI} 
  You are Healthy`);

  }
  else if(age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27)
  {
    alert(` Your BMI is : ${BMI}
  You are Healthy`);

  } else if(age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28)
  {
    alert(` Your BMI is : ${BMI}
  You are Healthy`);

  }
  else if(age >= 65 && BMI >= 24 && BMI <= 29)
  {
    alert(` Your BMI is : ${BMI}
  You are Healthy`);

  } else 
  {
    alert(` Your BMI is : ${BMI}
    You are Not Healthy`);

  }

}

