


document.getElementById("userForm").addEventListener('submit', function(event){
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;

    const userData = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        gender: gender
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    users.push(userData);
    
    localStorage.setItem('users', JSON.stringify(users));
    
    displayUserTable();
    
    document.getElementById("userForm").reset();
    
})

function displayUserTable(){

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    let tableHTML = '<table border="1" cellpadding="5"><tr><th>First Name</th><th>Last Name</th><th>Phone Number</th><th>Email</th><th>Gender</th></tr>';

    users.forEach(function (user) {
        tableHTML += `<tr>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
        </tr>
        `
    });
    
    tableHTML += '</table>';

    document.getElementById("userTable").innerHTML = tableHTML;

}

window.onload = displayUserTable;