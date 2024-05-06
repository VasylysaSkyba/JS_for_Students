const emojis = ["😊", "😊", "😍", "😍", "😘", "😘", "👌", "👌", "😎", "😎", "😢", "😢", "😡", "😡", "🤩", "🤩"];
const shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
for (let i = 0; i < emojis.length; i++){
    let box = document.createElement("div")
    box.className = "item";
    box.innerHTML = shuf_emojis[i]       /*1 частина*/ 

    box.onclick = function() {
        this.classList.add("boxOpen") /*2 частина, потім стилізузумо boxOpen, знаходимо його на сайті в ф12 */
        setTimeout(function () {      /*3 частина сеттайм, потім if */
            if (document.querySelectorAll(".boxOpen").length > 1) {
                if (document.querySelectorAll(".boxOpen")[0].innerHTML == document.querySelectorAll(".boxOpen")[1].innerHTML) {
                    document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch")

                    document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch")

                    document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen")

                    document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen")

                    if (document.querySelectorAll(".boxMatch").length == emojis.length){
                    alert("Win")    
                    }
                } else {
                    document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen")

                    document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen") /*в сss стилізуємо .boxMatch */

                }
            }
        },500)
}

    document.querySelector(".game").appendChild(box); /*1 частина, повісити онклік на кнопку*/
    /*на сайті f12 знайти div і знайти новий клас item , переходимо в css і стилізуємо item*/ 

}

