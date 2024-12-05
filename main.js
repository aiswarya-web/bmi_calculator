function calculateBMI() {
    
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    const age = parseInt(document.getElementById("age").value);
    const male = document.getElementById("male").value;
    const female = document.getElementById("female").value;
    const other = document.getElementById("other").value;

    if (isNaN(weight) || isNaN(height) || isNaN(age) || (male.checked==false && female.checked==false && other.checked==false)) {
        alert("Please fill in all the fields.");
        return;
    }

    const bmi = weight / (height * height);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("bmiValue").innerText = `Your BMI: ${bmi.toFixed(2)}`;
    document.getElementById("bmiCategory").innerText = `Category: ${category}`;
    document.getElementById("bmiResult").style.display = "block";
}

function clearForm() {
   
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";

    const genderRadios = document.getElementsByName("gender");
    genderRadios.forEach(radio => radio.checked = false);
    

    document.getElementById("bmiResult").style.display = "none";
}