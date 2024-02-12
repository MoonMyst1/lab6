var first, last, gender, country;

function display() {
    first = document.getElementById('firstName').value;
    last = document.getElementById('lastName').value;
    gender = document.querySelector('input[name="gender"]:checked').value;
    country = document.getElementById('country').value;

    alert(first + " " + last + " " + gender + " " + country)
}

/*  a) preventDefault() is a method that stops the normal, or Default, behavior of an browser based event. Ex: submit button
    does not submit

    b) add a variable that is updated every alert, rather than the having a once then forget alert function, such as:
    result = first + " " + last + " " + gender + " " + country;
*/