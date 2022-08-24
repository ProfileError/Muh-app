let form = document.querySelector("form")
form.onsubmit = submit

function submit(e) {
    e.preventDefault();
    let input = document.querySelector("input")
    if (input.value === "George") {
        alert("hi fred");
    } else {
        alert("ugh!")
    }
    if (input.value === "George") {
        alert("me");
    } else {
        alert("Go away")
    }
}