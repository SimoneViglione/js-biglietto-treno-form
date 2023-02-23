const genera = document.querySelector('#genera');

genera.addEventListener('click', 
    function () {
        const nome = document.getElementById("nome").value;
			const distanza = parseFloat(document.getElementById("distanza").value);
			const fasciaEta = document.querySelector('input[name="fasciaEta"]:checked').value;

            let codiceBiglietto = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

            let numeroCarrozza = Math.floor(Math.random() * 9) + 1;

            const prezzoBase = 0.21;
            const prezzo = distanza * prezzoBase;

            let prezzoBiglietto = prezzo.toFixed(2);

			
			
			if (fasciaEta == "minorenne") {
				prezzoBiglietto = prezzo - prezzo * 20 / 100;
			} else if (fasciaEta == "maggiorenne") {
				prezzoBiglietto = prezzo;
			} else if (fasciaEta == "over65") {
				prezzoBiglietto = prezzo - prezzo * 40 / 100;
			}

			
			let biglietto = "Nome: " + nome + "<br>";
			biglietto += "Distanza da percorrere: " + distanza + " km<br>";
			biglietto += "Fascia d'età: " + fasciaEta + "<br>";
            biglietto += "Codice del biglietto: " + codiceBiglietto + "<br>";
			biglietto += "Numero della carrozza: " + numeroCarrozza + "<br>";
			biglietto += "Prezzo del biglietto: " + prezzoBiglietto.toFixed(2) + " euro";

			
			document.getElementById("biglietto").innerHTML = biglietto;
    }
)
