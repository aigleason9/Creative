document.getElementById("colorSubmit").addEventListener("click", function(event) {
    event.preventDefault();

    let value = document.getElementById("colorInput").value;

    if (value === "") {
      value="#DE6E4B";
    }
    console.log(value);

    document.body.style.backgroundColor = value;
});

document.getElementById("poemSubmit").addEventListener("click", function(event) {
    event.preventDefault();


    let url = "https://poetrydb.org/";

    let value = document.getElementById("poemInput").value;
    if (value != "") {
        url += "linecount,random/" + value + ";1";
    }
    else {
        url += "random/1";
    }
    url += "/author,title,lines"
    fetch(url)

    .then(function(response) {
      return response.json();

    }).then(function(json) {
        console.log(json);

        let result = "<div class=\"container\">";

        result += "<div class=\"title\">";
        result += "<h3>" + json[0].title + "</h3> </div>";

        result += "<div class=\"author\">";
        result += "<h5>" + json[0].author + "</h5> </div>";

        result += "<div class=\"poem\">";
        const lines =  json[0].lines;
        for (let i = 0; i < lines.length; i++) {
            result += "<p><em>" + lines[i] + "</em></p>";
        }

        result += "</div></div>";
        document.getElementById("poemResult").innerHTML = result;
        document.getElementById("poemResult").style.display = "block";
    });
});