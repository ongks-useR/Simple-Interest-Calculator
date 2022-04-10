function updateRate() {

    /* Update interest rate value whenever user input interest rate via slider */
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerHTML = `${rateval}%`;

}

function compute() {

    /* Get user input for principal amount, interest rate, and year. */
    var principal = document.getElementById("principal");
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;

    /* Calculate total interest based on principal, interest rate and number of years provided by user */
    var interest = +principal.value * +years * +rate / 100;

    var year = new Date().getFullYear() + parseInt(years)

    if (principal.value == '') {
        alert('Enter a value');
    }
    else if (principal.value <= 0) {
        alert('Enter a positive number');
        principal.focus();
    }
    else {
        document.getElementById('result').innerHTML = `
        <p>
            If you deposit <span class="highlight">$${principal.value}</span>
            at an interest rate of <span class="highlight">${rate}%</span>, <br />
            You will receive an amount of <span class="highlight">$${interest}</span>
            in the year <span class="highlight">${year}</span>.
        </p>
        `;
    }
}