$(document).ready(function() {
    let poprzednieDane = {};

    function pobierzDane() {
        $.ajax({
            url: 'http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php',
            method: 'GET',
            dataType: 'json',
            success: function(dane) {
                console.log('Odpowiedź z API:', dane); 

                if (dane.stock) {
                    aktualizujTabeleAkcji(dane.stock);
                }
                if (dane.news) {
                    aktualizujNewsRotator(dane.news);
                }
            },
            error: function(error) {
                console.log("Błąd wczytywania danych:", error);
            }
        });
    }

    function aktualizujTabeleAkcji(akcje) {
        const tabelaCialo = $('#stock-table tbody');
        tabelaCialo.empty();

        if (akcje && Object.keys(akcje).length > 0) {
            for (let firma in akcje) {
                let cena = akcje[firma];
                let klasaZmiany = '';
                
   
                if (poprzednieDane[firma]) {
                    const poprzedniaCena = poprzednieDane[firma];
                    if (cena > poprzedniaCena) {
                        klasaZmiany = 'wzrosla';
                    } else if (cena < poprzedniaCena) {
                        klasaZmiany = 'spadla';
                    } else {
                        klasaZmiany = 'brak-zmiany';
                    }
                }

                tabelaCialo.append(`
                    <tr>
                        <td>${firma}</td>
                        <td>${cena} PLN</td>
                        <td class="${klasaZmiany}">${getTekstZmiany(klasaZmiany)}</td>
                    </tr>
                `);

                // Zapisz nową cenę dla tej firmy
                poprzednieDane[firma] = cena;
            }
        } else {
            tabelaCialo.append('<tr><td colspan="3">Brak danych do wyświetlenia</td></tr>');
        }
    }

    function getTekstZmiany(klasaZmiany) {
        if (klasaZmiany === 'wzrosla') {
            return 'Wzrosła ↑';
        } else if (klasaZmiany === 'spadla') {
            return 'Spadła ↓';
        } else {
            return 'Bez zmiany';
        }
    }

    function aktualizujNewsRotator(news) {
        const kontenerNews = $('#news');
        if (news) {
            kontenerNews.html(`<p>${news}</p>`);
        } else {
            kontenerNews.html('<p>Brak dostępnych newsów.</p>');
        }
    }

    setInterval(pobierzDane, 10000);

    pobierzDane();
});
