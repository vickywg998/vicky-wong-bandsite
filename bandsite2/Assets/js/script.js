var userComments = {
  sampleComment1: {
    "name": 'Micheal Lyons',
   "date":'02/01/2019',
    "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."},
  sampleComment2:{
    "name": 'Gary Wong',
    "date":'01/31/2018',
    "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"},
  sampleComment3: {
    "name": 'Theodore Duncan',
    "date":'01/24/2018',
    "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"}
}


// Excuse my thought process here! LOL
//activate button by selecting ID
var clickMe = document.getElementById("comment_button");
// Created a comment event handler to handle the click in the form submission
clickMe.addEventListener("click", commentEventHandler);

function createComment(name, comment) {
  const element = document.createElement('div');
  // styled the comments. The class is static_comment
  element.className = "static_comment";
  // created div and img class for icons, added static icon.
  const icon = document.createElement('div');
  icon.className = "singer_icon";
  const icon_pic = document.createElement('img');
icon_pic.src ="Assets/Images/doge.jpg";
  icon_pic.className = "icons";
  // styled the comment content
  const content = document.createElement('div');
  content.className = "comment_content";

  // Each comment content div also has two things within it
  // a comment_name of type h4 and a para of type p
  const comment_name = document.createElement('h4');
  comment_name.className = "comment_name";
  comment_name.innerHTML = name;


  //created a static date.
  const date = document.createElement('span');
  date.className = "comment_date";
  date.innerHTML = "02/02/2019";
  // added the paragraph
  const paragraph = document.createElement('p');
  paragraph.className = "para";
  paragraph.innerHTML = comment;

  // Added the paragraph and the comment name to the content div
  content.appendChild(comment_name);
  content.appendChild(date);
  content.appendChild(paragraph);

  // the comment is complete (except the date)

  // add everything to the parent div
  element.appendChild(icon);
  element.appendChild(content);
//push icon to div 
icon.appendChild(icon_pic);
// add icon to real time comment
  return element;
  return icon;
}

function appendComments(name, comment) {
  const newComments = document.querySelector('#comments');
  
  newComments.appendChild(createComment(name, comment));
}

// separated the event handler from the function that
// makes the actual comments (appendComments)
function commentEventHandler(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const comment = document.querySelector('#comment').value;
  
  appendComments(name, comment);
}

for (var commentName in userComments) {
	commentObj = userComments[commentName];
	console.log(commentObj);
	
	appendComments(commentObj.name, commentObj.comment);
}