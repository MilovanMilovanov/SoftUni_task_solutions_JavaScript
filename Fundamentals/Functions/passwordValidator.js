function passwordValidator(password) {
    let hasOnlyDigitsAndLetters = true;
    let isLengthValid = true;
    let digitCounter = 0;
    let output = '';

    if (password.length < 6 || password.length > 10) {
        isLengthValid = false;
    }
    for (let char of password) {
        if (!isNaN(char)) {
            digitCounter++;
        }
        else if (char === ' ' || char.toLowerCase() === char.toUpperCase()) {
            hasOnlyDigitsAndLetters = false;
        }
    }
    if (!isLengthValid) output += 'Password must be between 6 and 10 characters\n';
    if (!hasOnlyDigitsAndLetters) output += 'Password must consist only of letters and digits\n';
    if (digitCounter < 2) output += 'Password must have at least 2 digits\n';
    if (isLengthValid && hasOnlyDigitsAndLetters && digitCounter >= 2) output = 'Password is valid';
    console.log(output);
}
passwordValidator(
    // 'logIn'
    'MyPass123'
)


/*
Write a function that checks if a given password is valid. Password validations are:
The length should be 6 - 10 characters (inclusive)
It should consists only of letters and digits
It should have at least 2 digits 
If a password is valid print "Password is valid".
If it is NOT valid, for every unfulfilled rule print a message:
"Password must be between 6 and 10 characters"
"Password must consist only of letters and digits"
"Password must have at least 2 digits"
*/