//loading doc
document.addEventListener("DOMContentLoaded", function() {
    // garther the link form html and display the window
    var popupLink = document.getElementById("popupLink");
    var popup = document.getElementById("popup");
    var closeButton = document.getElementById("closeButton");
  
    // actionlistener which is like java actionlistener
    popupLink.addEventListener("click", function(event) {
      // prevent widow jump
      event.preventDefault();
    
      // display window
      popup.style.display = "block";
    });
  
    // actionlistener again
    closeButton.addEventListener("click", function() {
      // hide window
      popup.style.display = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.querySelector(".card-container");
  
    const cardImages = [
      "images/gods1.jpg",
      "images/gods2.jpg",
      "images/gods3.jpg",
      "images/gods4.jpg",
      "images/gods5.jpg",
      "images/man.jpg",
      "images/man1.jpg",

      // Add more image URLs as needed
    ];
  
    // Create a card for each image
    cardImages.forEach(imageUrl => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const img = document.createElement("img");
      img.src = imageUrl;
  
      card.appendChild(img);
      cardContainer.appendChild(card);
    });
  });