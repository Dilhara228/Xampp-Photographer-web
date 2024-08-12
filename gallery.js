// gallery.js

document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(image => {
        image.addEventListener('click', function () {
            // Create a modal overlay
            const modal = document.createElement('div');
            modal.classList.add('fixed', 'inset-0', 'z-50', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-75');

            // Create the image container inside the modal
            const modalContent = document.createElement('div');
            modalContent.classList.add('max-w-screen-md', 'mx-auto');
            const img = document.createElement('img');
            img.classList.add('max-w-full', 'max-h-screen');
            img.src = image.src;
            img.alt = image.alt;
            modalContent.appendChild(img);

            // Append modal content to modal overlay
            modal.appendChild(modalContent);

            // Close modal when clicking outside of the image
            modal.addEventListener('click', function (event) {
                if (event.target === modal) {
                    modal.remove();
                }
            });

            // Append modal overlay to body
            document.body.appendChild(modal);
        });
    });
});
