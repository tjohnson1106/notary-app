function loadBook(filename, displayName) {
  let currentBook = "";
  let url = "books/" + filename;

  //   reset UI

  document.getElementById("filename").innerHTML = displayName;
  document.getElementById("searchstat").innerHTML = "";
  document.getElementById("keyword").value = "";

  // create a server request
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      currentBook = xhr.responseText;

      document.getElementById("fileContent").innerHTML = currentBook;

      var elmnt = document.getElementById("fileContent");
      elmnt.scrollTop = 0;
    }
  };
}
