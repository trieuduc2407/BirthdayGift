const btn = document.getElementById("submit");
const modal = new bootstrap.Modal(document.getElementById("exampleModal"));

btn.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    if (name == 'Lê Dư Bảo Ngọc' && date == '04/08/2008') {
        window.location.href = 'card.html';
    } else {
        modal.show()
    }
})