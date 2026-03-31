let counter = 0;

function incrementCount() {
    counter++;
    const doc = document.getElementById('count');
    if (doc) {
        doc.textContent = counter.toString();
    }
}

function resetCount() {
    counter = 0;
    const doc = document?.getElementById('count');
    if (doc) {
        doc.textContent = counter.toString();
    }
}

function reverseText() {
    const input = document.getElementById('textInput')
    if (input) {
        const inputValue = input.value.toString();
        const reversed = inputValue.split('').reverse().join('');
        const resultDiv = document.getElementById('result');
        if (resultDiv) {
            resultDiv.textContent = 'Reversed: ' + reversed;
            resultDiv.style.display = 'block';
        }
    }
}