let open = document.querySelector('[open-modal2]');
let attrValue;
for (let i = 0; i < open.attributes.length; i++) {
    if (open.attributes[i].name == "open-modal2") {
        attrValue = open.attributes[i].value
    }
};
document.querySelector('[open-modal2="' + attrValue + '"]').addEventListener('click', testing)

function testing() {
    let modal = document.querySelector('[modal2="' + attrValue + '"]');
    if (modal != null) {
        modal.classList.add("showPopup");

        function closeModal() {
            modal.classList.remove('showPopup');
        }

        function closePopup() {
            modal.classList.remove("showPopup");
            modal.classList.remove("removePopup");
        }

        function closePopupScreen() {
            modal.classList.add("removePopup");
            setTimeout(closePopup, 200);
        }

        let close = document.querySelectorAll('[close-modal2]');
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                closePopupScreen()
            }
        }
        modal.addEventListener('click', function(event) {
            const isOutside = !event.target.closest('.popup-content');
            if (isOutside) {
                closePopupScreen()
            }
        })
        window.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                closePopupScreen()
            }
        });
    } else {
        console.log("No se ha encontrado una modal definida en el botón");
    }
}