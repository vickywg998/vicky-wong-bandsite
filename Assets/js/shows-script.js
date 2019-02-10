const showURL = 'https://project-1-api.herokuapp.com/showdates?api_key=0fa7fdcd-3f05-4482-9f9a-66865a6cb624'

window.onload = function () {
  axios.get(showURL)
    .then(function (response) {
      const shows = response.data;
      console.log(response)

      const tableContainer = document.querySelector('#table');
      shows.map(show => {

        const trr = document.createElement('tr');
        trr.innerHTML =   '<td data-label="DATES" id="dates">' + show.date + '</td>' + '<td data-label="VENUE" id="venue">' + show.place + '</td>' + '<td data-label="LOCATION" id="location">' + show.location + '</td>' + '<input type="submit" value="BUY TICKETS" class="button button_size button_position" id="show_button">' + '</td>'
        return trr;

      }).forEach(trr => {
        tableContainer.appendChild(trr)
      })
    }
    )




}
