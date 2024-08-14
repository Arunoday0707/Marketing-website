function changeImage(){
    var img = document.getElementById('image');
      img.src = 'image1.jpg'
}


// document.getElementById('form').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     const like = document.getElementById('like').checked;

//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Message:', message);
//     console.log('Liked:', like);

//     alert("Form submitted successfully!");
// });
var form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
    var name = document.getElementById('name').value
    console.log(name)
    var email = document.getElementById('email').value
    console.log(email)
    var message = document.getElementById('message').value
    console.log(message)
})
})