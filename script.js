function changeColor(color) {
    document.body.style.backgroundColor = color;
}
let currentColor = 'white'; 
function changeColor(color) {
    if (document.body.style.backgroundColor === color) {
        document.body.style.backgroundColor = 'white';
        currentColor = 'white';
    } else {
        document.body.style.backgroundColor = color;
        currentColor = color;
    }
}
function applyColor() {
    const userColor = document.getElementById('colorInput').value;
    if (document.body.style.backgroundColor === userColor) {
        document.body.style.backgroundColor = 'white';
        currentColor = 'white';
    } else {
        document.body.style.backgroundColor = userColor;
        currentColor = userColor;
    }
}
function applyColor() {
    const username = document.getElementById('usernameInput').value;
    const userColor = document.getElementById('colorInput').value;
    if (username && userColor) {
        document.body.style.backgroundColor = userColor;
        let savedData = JSON.parse(localStorage.getItem('usersData')) || [];
        savedData.push({ username: username, color: userColor });
        localStorage.setItem('usersData', JSON.stringify(savedData));
        displaySavedInfo();
    } else {
        alert('Please enter both username and favorite color.');
    }
}
function displaySavedInfo() {
    const savedData = JSON.parse(localStorage.getItem('usersData')) || [];
    const savedInfoList = document.getElementById('savedInfoList');
    savedInfoList.innerHTML = '';
    savedData.forEach(function (entry) {
        const listItem = document.createElement('li');
        listItem.textContent = `Username: ${entry.username}, Favorite Color: ${entry.color}`;
        savedInfoList.appendChild(listItem);
    });
}
function deleteLastEntry() {
    let savedData = JSON.parse(localStorage.getItem('usersData')) || [];
    if (savedData.length > 0) {
        savedData.pop();
        localStorage.setItem('usersData', JSON.stringify(savedData));
        displaySavedInfo();
    } else {
        alert('No entries to delete.');
    }
}
function deleteAllEntries() {
    localStorage.removeItem('usersData');
    displaySavedInfo();
}
window.onload = function () {
    const savedData = JSON.parse(localStorage.getItem('usersData')) || [];
    if (savedData.length > 0) {
        displaySavedInfo();
    }
}
