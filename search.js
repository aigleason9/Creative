document.getElementById("bookSubmit").addEventListener("click", function(event) {
    event.preventDefault();

    const value = document.getElementById("bookInput").value;

    if (value === "") {
      return;
    }
    console.log(value);

    const url = "https://reststop.randomhouse.com/resources/titles?start=0&max=10&expandLevel=1&search=" + value;
    fetch(url, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
    }})

    .then(function(response) {
      return response.json();

    }).then(function(json) {
        console.log(json);
    });
});