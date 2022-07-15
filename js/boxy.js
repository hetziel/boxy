// Toggle para los sides
function sideToggle(h) {
    if (h != null) {
        let ob = document.getElementById("side-" + h);
        ob.classList.toggle("contracted");
    } else {
        console.log("No has definido un valor al toggle")
    }
}
// Toggle para los nav-menu
var acc = document.getElementsByClassName("h-nav-header");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        if (this.nextElementSibling.classList.contains("h-nav-content")) {
            var panel = this.nextElementSibling;
            panel.classList.toggle("opened");
        } else {
            console.log("No has definido el h-nav-content despues del h-nav-header")
        }

    });
}
// H-MODAL --------------------------------
// open-modal: id | Para iniciar la modal  !
// modal: id | Para abrir la modal         !
// close-modal: Para cerrar la modal       !
// -----------------------------------------
let open = document.querySelector('[open-modal]');
let attrValue;
for (let i = 0; i < open.attributes.length; i++) {
    if (open.attributes[i].name == "open-modal") {
        attrValue = open.attributes[i].value
    }
};
if (attrValue != null && attrValue != "") {
    document.querySelector('[open-modal="' + attrValue + '"]').addEventListener('click', testing)

    function testing() {
        let modal = document.querySelector('[modal="' + attrValue + '"]');
        if (modal != null) {
            modal.classList.add("opened");

            function closeModal() {
                modal.classList.remove('opened');
            }

            function closePopup() {
                modal.classList.remove("opened");
                modal.classList.remove("closed");
            }

            function closePopupScreen() {
                modal.classList.add("closed");
                setTimeout(closePopup, 400);
            }
            let close = document.querySelectorAll('[close-modal]');
            for (let i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                    closePopupScreen()
                }
            }
            modal.addEventListener('click', function(event) {
                const isOutside = !event.target.closest('.h-modal-content');
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
            alert("No se ha encontrado una modal definida con el atributo " + 'modal="' + attrValue + '"');
        }
    }
} else {
    alert('No puedes inicializar ua modal sin declararla como valor del atributo open-modal');

}