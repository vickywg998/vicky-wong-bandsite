var userComments = {
  sampleComment1: [{
    "name": 'Micheal Lyons',
   "date":'02/01/2019',
    "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."}],
  sampleComment2:[{
    "name": 'Gary Wong',
    "date":'01/31/2018',
    "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"}],
  sampleComment3: [{
    "name": 'Theodore Duncan',
    "date":'01/24/2018',
    "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"}]
}


var clickMe = document.getElementById("comment_button");
clickMe.addEventListener("click", appendComments);

function createComment(comment, value) {
  const element = document.createElement('div')
  element.innerText = value
  return element
}

function appendComments (event) {
  event.preventDefault()
  const name = document.querySelector('#name').value
  const comment = document.querySelector('#comment').value
  const newComments = document.querySelector('#newComment')
  
  newComments.appendChild(createComment('name', name))
  newComments.appendChild(createComment('comment', comment))
}
const commentList = document.querySelector('#comment_list p');

//create elements
const new_comment_div = document.createElement("div");
const iconPush = document.createElement('div');
const comment_contentPush = document.createElement('div');
const comment_namePush = document.createElement('h4');
const comment_datePush = document.createElement('span');
const paragraphPush = document.createElement('p');


//append to document 
comment_contentPush.appendChild(comment_namePush);
comment_contentPush.appendChild(comment_datePush);
comment_contentPush.appendChild(paragraphPush);
commentList.appendChild(comment_contentPush);

// push class name 
new_comment_div.className += "static_comment";
iconPush.className += "singer_icon";
comment_contentPush.className += "comment_content";
comment_namePush.className += "comment_name";
comment_datePush.className += "comment_date";
paragraphPush.className += "para";


// add content 
paragraphPush.textContent = value;


/*
user_comment.sample_comment1['name']
const comment_wrapper = document.getElementById('comments');
const new_comment_div = document.createElement("div");
var node = document.createTextNode("I really like this artist. He's great");

new_comment_div.className += "static_comment";

const iconPush = document.createElement('div');
iconPush.className += "singer_icon";

const comment_contentPush = document.createElement('div');
comment_contentPush.className += "comment_content";

const comment_namePush = document.createElement('h4');
comment_namePush.className += "comment_name";

const comment_datePush = document.createElement('span');
comment_datePush.className += "comment_date";

const paragraphPush = document.createElement('p');
paragraphPush.className += "para";

comment_wrapper.appendChild(new_comment_div);
new_comment_div.appendChild(iconPush);
paragraphPush.appendChild(node);
new_comment_div.appendChild(comment_contentPush);

comment_contentPush.appendChild(comment_namePush);
comment_contentPush.appendChild(comment_datePush);

comment_contentPush.appendChild(paragraphPush);

function displayComment() {

  var new_comment = document.createComment("I really like this artist. He's great");
  paragraphPush.appendChild(new_comment);
  
}

*/