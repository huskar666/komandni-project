document.addEventListener('DOMContentLoaded', (event) => {
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    const modal3 = document.getElementById('modal3')
    const openModal1Btn = document.getElementById('openModal1');
    const openModal2Btn = document.getElementById('openModal2');
    const openModal3 = document.getElementById('openModal3');
    const closeModal1Btn = document.getElementById('closeModal1');
    const closeModal2Btn = document.getElementById('closeModal2');
    const closeModal3Btn = document.getElementById('closeModal3');
    const formFields = document.querySelectorAll('#modal2 input');
    const submitModal3 = document.querySelector(".submitModal3")

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    openModal1Btn.addEventListener('click', () => {
        openModal(modal1);
    });

    openModal2Btn.addEventListener('click', () => {
        closeModal(modal1);
        openModal(modal2);

        console.log("leoplwofwolfow")
    });

    closeModal1Btn.addEventListener('click', () => {
        closeModal(modal1);
    });

    closeModal2Btn.addEventListener('click', () => {
        closeModal(modal2);
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal1) {
            closeModal(modal1);
        }
        if (event.target === modal2) {
            closeModal(modal2);
        }
    });


    const submitButton = document.getElementById('openModal2');

    openModal3.addEventListener("click", () => {
        modal3.style.display = "block"
    })

    closeModal3Btn.addEventListener("click", () => {
        modal3.style.display = "none"
    })

    submitModal3.addEventListener("click", () => {
        modal3.style.display = "none";
        modal2.style.display = "block"
    })


    submitButton.addEventListener('click', (event) => {
        let isValid = true;

        formFields.forEach(field => {
            if (field.value.trim() === '') {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });

        if (!isValid) {
            event.preventDefault();
        }
    });

    formFields.forEach(field => {
        field.addEventListener('input', () => {
            if (field.value.trim() !== '') {
                field.classList.remove('error');
            }
        });
    });
});

document.getElementById('burger-menu').addEventListener('click', function () {
    document.getElementById('nav-menu').style.width = '50%';
});

document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('nav-menu').style.width = '0';
});
