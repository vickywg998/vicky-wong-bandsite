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

comment_wrapper.appendChild(new_comment_div);
new_comment_div.appendChild(iconPush);
comment_contentPush.appendChild(node);
new_comment_div.appendChild(comment_contentPush);

comment_contentPush.appendChild(comment_namePush);
comment_contentPush.appendChild(comment_datePush);

