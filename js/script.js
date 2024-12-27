"use strict";

const oldContent = document.querySelectorAll(".content");
const newContent = Array.from(oldContent);

newContent.forEach((oneContent) => {
	const contentHeading = oneContent.querySelector(".content__heading");

	contentHeading.addEventListener("click", () => {
		for (let i = 0; i < newContent.length; i++) {
			if (newContent[i] != oneContent) {
				newContent[i].classList.remove("active");
			} else {
				oneContent.classList.toggle("active");
			}
		}
	});
});
