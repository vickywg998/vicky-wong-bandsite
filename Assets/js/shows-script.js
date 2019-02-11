const showURL = 'https://project-1-api.herokuapp.com/showdates?api_key=5b10d91d-8b71-4eb8-a134-45bb655c2869'

window.onload = function () {
  axios.get(showURL)
    .then(function (response) {
      const shows = response.data;
      console.log(response)

      const tableContainer = document.querySelector('#table');
      shows.map(show => {

        const trr = document.createElement('tr');
        trr.innerHTML =   '<td data-label="DATES" id="dates">' + show.date + '</td>' + '<td data-label="VENUE" id="venue">' + show.place + '</td>' + '<td data-label="LOCATION" id="location">' + show.location + '</td>'  +'<td>'+'<input type="submit" value="BUY TICKETS" class="button button_size button_position" id="show_button">' + '</td>'
        return trr;

      }).forEach(trr => {
        tableContainer.appendChild(trr)
      })
    }
    )




}
