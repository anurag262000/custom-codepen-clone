

const html_code = document.querySelector('.html-code textarea');
const css_code = document.querySelector('.css-code textarea');
const js_code = document.querySelector('.js-code textarea');
const result = document.querySelector('#result');

function run() {
    // Storing data in Local Storage
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('css_code', css_code.value);
    localStorage.setItem('js_code', js_code.value);

    // Executing HTML, CSS & JS code
    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
}

// Checking if user is typing anything in input field
html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();

// Accessing data stored in Local Storage. To make it more advanced you could check if there is any data stored in Local Storage.
html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;
js_code.value = localStorage.js_code;




// // Select all buttons with the "hiden" class
// const buttons = document.querySelectorAll('.hiden');

// // Function to handle the media query change
// function handleMediaQuery(mq) {
//     if (mq.matches) {
//         // Screen width is less than or equal to 800px
//         buttons.forEach(button => {
//             button.classList.remove('hiden');
//         });
//     } else {
//         // Screen width is greater than 800px
//         buttons.forEach(button => {
//             button.classList.add('hiden');
//         });
//     }
// }

// // Create a media query instance
// const mediaQuery = window.matchMedia('(max-width: 800px)');

// // Call the function once to ensure proper initial state
// handleMediaQuery(mediaQuery);

// // Attach a listener for changes in the media query
// mediaQuery.addListener(handleMediaQuery);

