//navigation
function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
};


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

        //Volter
        document.getElementById("open-box-btn-volter").addEventListener("click", function () {
          document.getElementById("read-more-box-volter").style.display = "block";
      });

      document.getElementById("close-box-btn-volter").addEventListener("click", function () {
          document.getElementById("read-more-box-volter").style.display = "none";
      });

      //VolterDB
      document.getElementById("open-box-btn-volterdb").addEventListener("click", function () {
          document.getElementById("read-more-box-volterdb").style.display = "block";
      });

      document.getElementById("close-box-btn-volterdb").addEventListener("click", function () {
          document.getElementById("read-more-box-volterdb").style.display = "none";
      });

      //Extentions
      document.getElementById("open-box-btn-extentions").addEventListener("click", function () {
          document.getElementById("read-more-box-extentions").style.display = "block";
      });

      document.getElementById("close-box-btn-extentions").addEventListener("click", function () {
          document.getElementById("read-more-box-extentions").style.display = "none";
      });

      //Customers

      document.getElementById("open-box-btn-customers").addEventListener("click", function () {
          document.getElementById("read-more-box-customers").style.display = "block";
      });

      document.getElementById("close-box-btn-customers").addEventListener("click", function () {
          document.getElementById("read-more-box-customers").style.display = "none";
      });

      //Season Islands

      document.getElementById("open-box-btn-season").addEventListener("click", function () {
          document.getElementById("read-more-box-season").style.display = "block";
      });

      document.getElementById("close-box-btn-season").addEventListener("click", function () {
          document.getElementById("read-more-box-season").style.display = "none";
      });

      //Van Capo tot Ceo

      document.getElementById("open-box-btn-vctc").addEventListener("click", function () {
          document.getElementById("read-more-box-vctc").style.display = "block";
      });

      document.getElementById("close-box-btn-vctc").addEventListener("click", function () {
          document.getElementById("read-more-box-vctc").style.display = "none";
      });

      document.getElementById("open-box-btn-school").addEventListener("click", function () {
          document.getElementById("read-more-box-school").style.display = "block";
      });

      document.getElementById("close-box-btn-school").addEventListener("click", function () {
          document.getElementById("read-more-box-school").style.display = "none";
      });