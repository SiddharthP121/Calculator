// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
  let btn = document.getElementById("btn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
};

// Scroll to top when the button is clicked
document.getElementById("btn").addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});
