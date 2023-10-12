// *** *** *** Variables *** *** ***
const d = document, c = console;
let regExp = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
// *** DOM ***
const $messageError = d.getElementById("msg-error"),
    $input = d.getElementById("email-input"),
    $button = d.getElementById("submit-button"),
    $modalSucess = d.getElementById("modal-sucess"),
    $email = d.getElementById("email-span"),
    $dismissButton = d.getElementById("dismiss-button");

// *** *** *** Funciones *** *** ***
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const addStateClass = (element, className) => element.classList.add(element.classList[0] + "--" + className);
const removeStateClass = (element, className) => element.classList.remove(element.classList[0] + "--" + className);

// *** *** *** Ejecución *** *** ***
d.addEventListener("keyup", evt => {
    if(evt.target === $input) {
        if(regExp.test($input.value)) {
            addClass($messageError, "none");
            addStateClass($button, "active");
            removeStateClass($input, "error");
        } else {
            removeClass($messageError, "none");
            removeStateClass($button, "active");
            addStateClass($input, "error");
        };
    };
});

d.addEventListener("click", evt => {
    if(evt.target === $button && regExp.test($input.value)) {
        $email.textContent = $input.value;
        removeClass($modalSucess, "none");
    };
    if(evt.target === $dismissButton) {
        addClass($modalSucess, "none");
    };
});
