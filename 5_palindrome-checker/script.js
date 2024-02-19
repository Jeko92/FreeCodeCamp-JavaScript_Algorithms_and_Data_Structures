const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkPalindrome = input => {
    const originalInput = input; // Store for later output
    if (input === '') {
        alert('Please provide a word');
        return;
    }

    // Remove previous result
    resultDiv.replaceChildren();

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMsg = `<strong>${originalInput}</strong> ${
        lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
    } a palindrome.`;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;
    resultDiv.appendChild(pTag);

    // Show the result.
    resultDiv.classList.remove('hidden');
}

checkPalindromeBtn.addEventListener('click', ()=>{
    checkPalindrome(userInput.value);
    userInput.value = '';
})

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter'){
        checkPalindrome(userInput.value);
        userInput.value = '';
    }
})