const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertbutton = document.querySelector('.convertbutton');
const resetbutton = document.querySelector('.resetbutton');
const switchbutton = document.querySelector('.switchbutton');
const C = document.querySelector('.C');
const F = document.querySelector('.F');

const swap = () => {
    if (C.innerHTML === '°C') {
        C.innerHTML = '°F';
        F.innerHTML = '°C';
        converter.placeholder = "Temperature in °F";
    }else {
        F.innerHTML = '°F';
        C.innerHTML = '°C';
        converter.placeholder = "Temperature in °C";
    };
};

const reset = () => {
    converter.value = '';
    result.innerHTML = '';
}

const convert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)){
        result.style.color = "white"
        if (C.innerHTML === '°C') {
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = `${converter.value}°C is ${value.toFixed(2)} in °F`;
        } else {
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = `${converter.value}°F is ${value.toFixed(2)} in °C`;
        }
    } else if (converter.value == '') {
        result.style.color = "white"
        result.innerHTML = 'Enter some number';
    } else {
        result.style.color = "white"
        result.innerHTML = 'Enter only numbers!!!';
    }
    }

    switchbutton.addEventListener('click', swap);
    resetbutton.addEventListener('click', reset);
    convertbutton.addEventListener('click', convert);
