$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("nav").addClass("fixed-top");
            $("nav").addClass("black-background");
        } else {
            $("nav").removeClass("fixed-top");
            $("nav").removeClass("black-background");
        }
    });



    let question = document.querySelectorAll(".question");

    question.forEach(question => {
      question.addEventListener("click", event => {
        const active = document.querySelector(".question.active");
        if(active && active !== question ) {
          active.classList.toggle("active");
          active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if(question.classList.contains("active")){
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = 0;
        }
      })
    })
});