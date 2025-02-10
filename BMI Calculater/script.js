const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('.results');
    const msg = document.querySelector('.msg'); // Get the message div

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please Give a valid Height ${height}`;
        msg.innerHTML = ""; // Clear any previous messages
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please Give a valid weight ${weight}`;
        msg.innerHTML = ""; // Clear any previous messages
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${BMI}</span>`;

        // Add the message based on BMI value
        if (BMI < 18.6) {
            msg.innerHTML = "You are underweight";
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            msg.innerHTML = "You are normal";
        } else {
            msg.innerHTML = "You are overweighted";
        }
    }
});