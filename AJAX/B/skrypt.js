$(document).ready(function () {
    const apiUrl = "https://dog.ceo/api";
    let dostepneRasy = [];

    function zaladujRasy() {
        $.get(`${apiUrl}/breeds/list/all`, function (dane) {
            dostepneRasy = Object.keys(dane.message);
            const select = $('#rasy-select');
            dostepneRasy.forEach(rasa => {
                select.append(`<option value="${rasa}">${rasa}</option>`);
            });
        });
    }

    function zaladujPsy(rasa) {
        $.get(`${apiUrl}/breed/${rasa}/images`, function (dane) {
            const kontenerPsow = $('#dog-list-container');
            kontenerPsow.empty();
            dane.message.forEach(urlObrazu => {
                const elementPsa = $(`<div class="dog-item"><img src="${urlObrazu}" alt="Pies"></div>`);
                elementPsa.on('click', function () {
                    pokazLightbox(urlObrazu);
                });
                kontenerPsow.append(elementPsa);
            });
        });
    }

    function pokazLightbox(urlObrazu) {
        const lightbox = $('#lightbox');
        if (lightbox.length === 0) {
            $('body').append('<div id="lightbox"><img src=""><span id="close-lightbox">&times;</span></div>');
        }
        $('#lightbox img').attr('src', urlObrazu);
        $('#lightbox').fadeIn();
        $('#close-lightbox').on('click', function () {
            $('#lightbox').fadeOut();
        });
    }

    $('#dodaj-zdjecie-form').submit(function (event) {
        event.preventDefault();
        const albumId = $('#album-select').val();
        const urlObrazu = $('#url-input').val();
        if (albumId && urlObrazu) {
            const kontenerPsow = $('#dog-list-container');
            const nowyElementPsa = $(`<div class="dog-item"><img src="${urlObrazu}" alt="Pies"></div>`);
            nowyElementPsa.on('click', function () {
                pokazLightbox(urlObrazu);
            });
            kontenerPsow.append(nowyElementPsa);

            $('#url-input').val('');
            alert('Zdjecie zostalo dodane!');
        }
    });

    $.get(`${apiUrl}/breeds/list/all`, function (dane) {
        const albumSelect = $('#album-select');
        const rasy = Object.keys(dane.message);
        rasy.forEach(rasa => {
            albumSelect.append(`<option value="${rasa}">${rasa}</option>`);
        });
    });

    $('#rasy-select').change(function () {
        const rasa = $(this).val();
        if (rasa) {
            zaladujPsy(rasa);
        }
    });

    zaladujRasy();
});
