const btn = document.getElementById("submit");
const modal = new bootstrap.Modal(document.getElementById("exampleModal"));

btn.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    if (name == 'Nghiêm Minh Châu' && date == '16/09/2004') {
        window.location.href = 'card.html';
    } else {
        modal.show()
    }
})