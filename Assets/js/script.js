const myAPIKey = '0fa7fdcd-3f05-4482-9f9a-66865a6cb624';
const commentURL = 'https://project-1-api.herokuapp.com/comments?api_key=0fa7fdcd-3f05-4482-9f9a-66865a6cb624';
const showURL = 'https://project-1-api.herokuapp.com/showdates?api_key=0fa7fdcd-3f05-4482-9f9a-66865a6cb624'




//get request using axios 
window.onload = function () {
  axios.get(commentURL)
    .then(function (response) {
      const users = response.data;
      console.log(response)

      const ul = document.querySelector('#comments');
      users.map(user => {
        const date = new Date(user.timestamp)
       const year = date.getFullYear()
       const month = date.getMonth() + 1
       const day = date.getDate()
       const formatDate = `${month}/${day}/${year}`
  console.log(formatDate)

        const newComments = document.createElement('div');
        newComments.className = "static_comment"
        newComments.innerHTML = '<div class="singer_icon">' + '<img class="icons">' + '</img>' + '</div>' + '<div class="comment_content">' + '<h4 class="comment_name">' + user.name + '</h4>' + '<span class="comment_date">' + formatDate + '</span>' + '<p class="para">' + user.comment + '</p>' + '</div>'
        return newComments;

      }).forEach(newComments => {
        ul.appendChild(newComments)
      })
    }
    )
}

//post request axios 

const clickMe = document.getElementById("comment_button");
clickMe.addEventListener("click", function (event) {
  event.preventDefault();
 
  const name = document.querySelector('#name').value;
  const comment = document.querySelector('#comment').value;
  const element = document.createElement('div');
  element.className = "static_comment";
  element.innerHTML = '';

 
  axios.post('https://project-1-api.herokuapp.com/comments?api_key=0fa7fdcd-3f05-4482-9f9a-66865a6cb624', 
  {name:name,
    comment:comment
  })
 .then(function (response) {
      
      console.log(response)
      location.reload()
    })
    .catch(function (error) {
      console.log('error');
    })
document.querySelector('#name').value = ''
document.querySelector('#comment').value = ''

});




// window.onload= function() {
//   axios.get(commentURL)
//   .then(function(response) {
//     const users = response.data;
//   console.log(users);

//   const ul= document.querySelector('#comments');
//   users.map(user => {
//   const newUserComments = document.createElement('div');
//   newUserComments.innerHTML = response.data;
//   return newUserComments;
//   }).forEach(div => {
//     const newUserComments = document.createElement('div');
//   newUserComments.innerHTML = response.data[0].name;
//     ul.appendChild(newUserComments);
//   })

//   })
//   }
// const user = {
//   userId: 11,
//   title:'My Article',
//   body: 'this is the main article content'
// }
// axios.post(postsUrl, user)
// .then(response => {
//   console.log(response)
// })

// const userId = 1
// axios.get(`postsUrl?userId=${userId}`)
// .then(response => {
//   console.log(response.data)
// })
// const arrData = response.data;
// const nameData = response.data[0].name
// console.log(nameData)
// console.log(arrData);


// $('.comment_icon').click((event) => {
  // const nameData = response.data[0].name
//   event.preventDefault()
//   axios
//     .get(commentURL)
//     .then(response => {
//       const nameData = response.name;
//       const commentData = response.comment;
//       const dateData = response.timestamp;
//       $('.static_comments').append(`
//         <h4 class "comment_name">${response.name}</h4>
//       `)      
//     })
//     .catch(error => {
//       console.log(error)
//     })
// });




// var userComments = {
//   sampleComment1: {
//     "name": 'Micheal Lyons',
//    "date":'02/01/2019',
//     "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."},
//   sampleComment2:{
//     "name": 'Gary Wong',
//     "date":'01/31/2018',
//     "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"},
//   sampleComment3: {
//     "name": 'Theodore Duncan',
//     "date":'01/24/2018',
//     "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"}
// }


// // Excuse my thought process here! LOL
// //activate button by selecting ID

//   const element = document.createElement('div');
//   // styled the comments. The class is static_comment
//   element.className = "static_comment";
//   // created div and img class for icons, added static icon.
//   const icon = document.createElement('div');
//   icon.className = "singer_icon";
//   const icon_pic = document.createElement('img');
// icon_pic.src ="Assets/Images/doge.jpg";
//   icon_pic.className = "icons";
//   // styled the comment content
//   const content = document.createElement('div');
//   content.className = "comment_content";

//   // Each comment content div also has two things within it
//   // a comment_name of type h4 and a para of type p
//   const comment_name = document.createElement('h4');
//   comment_name.className = "comment_name";
//   comment_name.innerHTML = name;


//   //created a static date.
//   const date = document.createElement('span');
//   date.className = "comment_date";
//   date.innerHTML = "02/02/2019";
//   // added the paragraph
//   const paragraph = document.createElement('p');
//   paragraph.className = "para";
//   paragraph.innerHTML = comment;

//   // Added the paragraph and the comment name to the content div
//   content.appendChild(comment_name);
//   content.appendChild(date);
//   content.appendChild(paragraph);

//   // the comment is complete (except the date)

//   // add everything to the parent div
//   element.appendChild(icon);
//   element.appendChild(content);
// //push icon to div 
// icon.appendChild(icon_pic);
// // add icon to real time comment
//   return element;
//   return icon;
// }

// function appendComments(name, comment) {
//   const newComments = document.querySelector('#comments');

//   newComments.appendChild(createComment(name, comment));
// }

// // separated the event handler from the function that
// // makes the actual comments (appendComments)
// function commentEventHandler(event) {
//   event.preventDefault();
//   const name = document.querySelector('#name').value;
//   const comment = document.querySelector('#comment').value;

//   appendComments(name, comment);
// }

// for (var commentName in userComments) {
// 	commentObj = userComments[commentName];
// 	console.log(commentObj);

// 	appendComments(commentObj.name, commentObj.comment);
// 