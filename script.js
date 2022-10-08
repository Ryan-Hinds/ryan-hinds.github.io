"use strict"

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBTN = document.querySelector(".close-modal");
const showModalBTN = document.querySelectorAll(".show-modal");

for (let i = 0; i < showModalBTN.length; i++)
{
    console.log(showModalBTN[i].addEventListener("click", function()
    {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }));
}

closeModalBTN.addEventListener("click", function()
{
    closeModal();
});

document.addEventListener("keydown", function(e)
{
    if (e.key === "Escape")
    {
        closeModal();
    }
})

function closeModal()
{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}