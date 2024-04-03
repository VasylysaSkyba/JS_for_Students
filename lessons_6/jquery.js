$(document).ready(function(){
    $(".btn-slide").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });
});

$(document).ready(function(){
    $(".run").click(function(){
        $("#box").animate({opacity: 0.1, left: "+=400"}, 1200)
                .animate({opacity: 0.4, left: "+=160", height: 20, width: 20}, "slow")
                .animate({opacity: 1, left: 0, height: 100, width: 100}, "slow")
                .animate({ top: 0}, "fast")
                .slideUp()
                .slideDown("slow");
        return false;
    });
});

$( "p" ).on( "click", function() {
    $( this ).slideUp();
});
  

// $( "p" ):                           Цей рядок використовує jQuery для вибору всіх елементів <p> на сторінці. jQuery використовує CSS-подібний синтаксис для вибору елементів, тому "p" означає всі елементи <p> на сторінці.
// .on( "click", function() { ... } ): Цей рядок встановлює обробник подій для всіх вибраних елементів, який відбувається при кліку на них. У цьому випадку, коли клікають на елементи <p>, буде викликана функція.
// $( this ):                          Цей рядок створює jQuery-об'єкт з поточного елемента, на якому відбулася подія (у цьому випадку, це елемент <p>, на який клікнули).
// .slideUp():                         Цей рядок викликає анімацію згортання елементу вгору. У цьому випадку, елемент <p>, на який клікнули, буде згорнутий вгору і зникне з виду після кліку.
