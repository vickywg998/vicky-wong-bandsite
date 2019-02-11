const myAPIKey = '5b10d91d-8b71-4eb8-a134-45bb655c2869';
const commentURL = 'https://project-1-api.herokuapp.com/comments?api_key=5b10d91d-8b71-4eb8-a134-45bb655c2869';
const showURL = 'https://project-1-api.herokuapp.com/showdates?api_key=5b10d91d-8b71-4eb8-a134-45bb655c2869'

//get request using axios 
window.onload = function () {
  axios.get(commentURL)
    .then(function (response) {
      const users = response.data;
      console.log(response);
     

      const ul = document.querySelector('#comments');
      users.map(user => {
        const date = new Date(user.timestamp)
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const formatDate = `${month}/${day}/${year}`;
        console.log(formatDate);

        const newComments = document.createElement('div');
        newComments.className = "static_comment";
        newComments.innerHTML = '<div class="comment_icon">' + '<img class="icons">' + '</img>' + '</div>' + '<div class="comment_content">' + '<h4 class="comment_name">' + user.name + '</h4>' + '<span class="comment_date">' + formatDate + '</span>' + '<p class="para">' + user.comment + '</p>' + '<input type="button" id="delete_button" value="Delete">' + '</button>' + '</div>'
        return newComments;
      }).forEach(newComments => {
        ul.appendChild(newComments);
      })
    })
    
  //post request axios 

  const clickMe = document.getElementById("comment_button");
  clickMe.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const comment = document.querySelector('#comment').value;
    const element = document.createElement('div');
    element.className = "static_comment";
    element.innerHTML = '';

    axios.post('https://project-1-api.herokuapp.com/comments?api_key=5b10d91d-8b71-4eb8-a134-45bb655c2869',
      {
        name: name,
        comment: comment
      })
      .then(function (response) {

        console.log(response)
        location.reload()
      })
      .catch(function (error) {
        console.log('error');
      })
    document.querySelector('#name').value = '';
    document.querySelector('#comment').value = '';
  });
};

    /* PLEASE IGNORE: FAILED DELETE BUTTON. WILL TRY AGAIN 
    
    delete request */
      // const deleteComment = document.getElementById("delete_button");
      // deleteComment.addEventListener("click", (event) => {
      //   event.preventDefault();
      //   const deleteDiv = document.querySelector('.static_comment');
       
      //   axios.delete('https://project-1-api.herokuapp.com/comments?api_key=0fa7fdcd-3f05-4482-9f9a-66865a6cb624/' + id)
      //     .then(function (response) {
      //       deleteDiv.splice(index,1)
      //       console.log(response)
      //     })
      // });