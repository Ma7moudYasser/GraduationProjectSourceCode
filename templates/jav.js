function previewPhoto() {
    var previewContainer = document.getElementById("preview-container");
    var previewImage = document.createElement("img");
    var selectedFile = document.getElementById("photo").files[0];
    var reader = new FileReader();
    reader.onload = function() {
        previewImage.src = reader.result;
    }
    if (selectedFile) {
        reader.readAsDataURL(selectedFile);
        previewContainer.innerHTML = "";
        previewContainer.appendChild(previewImage);
    }
}