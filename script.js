const form = document.getElementById('form');
const msg = document.getElementById('msg');
const inputBox = document.getElementById('input');
const postSection = document.getElementById('post');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("button clicked");
    checkIfInputBoxIsNotEmpty();
});

function checkIfInputBoxIsNotEmpty() {


    // Clear previous messages if any
    msg.innerHTML = "";

    if (inputBox.value === "") {
        const newPTag = document.createElement('p');
        newPTag.innerHTML = "text box is blank";
        msg.appendChild(newPTag);
    } else {
        console.log("written");
        msg.innerHTML = "";
        acceptedData();
    }

    inputBox.value = " ";
}


let data = {};
let acceptedData = () => {
    data["text"] = inputBox.value;
    console.log(data);
    createPost();
}

function createPost() {
    postSection.innerHTML += `
    <div>
                    <p>${data.text}</p>
                    <span id="option">
                        <i class="fa-regular fa-pen-to-square" onclick = "editPost(this)"></i>
                        <i class="fa-solid fa-trash" onclick = "deletePost(this)"></i>
                    </span>
                </div>
    `;

};


let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    inputBox.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};