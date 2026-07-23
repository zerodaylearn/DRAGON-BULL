function openModal() {
    document.getElementById('accountModal').classList.add('active');
}

function closeModal() {
    document.getElementById('accountModal').classList.remove('active');
}

function closeModalOnOutside(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal();
    }
}
