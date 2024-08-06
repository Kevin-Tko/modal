"use strict";

//----------------Getting HTML element----------------------//
const showModalBtns = document.querySelectorAll(".btn");
const closeBtn = document.querySelector(".icon");
const overLay = document.querySelector(".overlay");
const modalBox = document.querySelector(".container-modal");
const buttonContainer = document.querySelector(".container-btn");

//----------------Modal control functions----------------------//
const showModalHandler = () => {
    overLay.classList.remove("hidden");
    modalBox.classList.remove("hidden");
};

const closeModalHandler = () => {
    overLay.classList.add("hidden");
    modalBox.classList.add("hidden");
};

//----------------Adding Event listeners----------------------//
showModalBtns.forEach((showModalBtn) => {
    showModalBtn.addEventListener("click", showModalHandler);
});

closeBtn.addEventListener("click", closeModalHandler);

overLay.addEventListener("click", closeModalHandler);

document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        if (
            modalBox.classList.contains("hidden") &&
            overLay.classList.contains("hidden")
        ) {
            return;
        }
        closeModalHandler();
    }
});
