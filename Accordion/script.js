const heads = document.querySelectorAll(".head");
const paras = document.querySelectorAll(".para");

let flags = Array.from({ length: heads.length }, () => true); 
console.log(flags)

heads.forEach((head, index) => {
    head.addEventListener("click", () => {
        console.log("clicked");
        if (flags[index]) {
            paras[index].style.display = "none";

        } else {
            paras[index].style.display = "block";

        }
        flags[index] = !flags[index]; 
    });
});

