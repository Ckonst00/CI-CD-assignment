let counter = 0;

export function incrementCount() {
    counter++;
    const doc = document.getElementById('count');
    if (doc) {
        doc.textContent = counter.toString();
    }
}

export function resetCount() {
    counter = 0;
    const doc = document?.getElementById('count');
    if (doc) {
        doc.textContent = counter.toString();
    }
}

export function reverseText() {
    const input = document.getElementById('textInput') as HTMLInputElement | null
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