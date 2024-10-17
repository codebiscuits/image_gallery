function addImage() {
    const imgURL = document.getElementById("text-input").value

    if (imgURL === "") {
        alert("Please enter a URL in the input field.");
        return;
    }

    // create the div for the gallery item
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");
    const gallery = document.getElementById("image-gallery");
    gallery.appendChild(galleryItem);

    // create the image element
    const newImg = document.createElement("img");
    newImg.src = imgURL;

    // create the button to remove the image
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Image";
    removeButton.classList.add("remove-button");
    removeButton.onclick = () => gallery.removeChild(galleryItem);

    // add image and button to gallery item
    galleryItem.appendChild(newImg);
    galleryItem.appendChild(removeButton);

    // clear input field
    document.getElementById("text-input").value = "";

}

document.getElementById("image-button").addEventListener('click', addImage);