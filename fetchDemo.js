fetch('https://jsonplaceholder.typicode.com/users/1') // Sender en HTTP GET-anmodning til serveren for at hente data om brugeren med id 1.
    .then(res => {                                 // Håndterer det løste promise, når fetch-anmodningen er færdig.
        if (!res.ok) {                                         // Tjekker om svaret fra serveren er "ok" (dvs. statuskode 200-299).
            throw new Error(`Error ${res.status} ${res.statusText}`); // Hvis svaret ikke er "ok", kastes en fejl med statuskode og -tekst.
        } else {
            return res.json();                                  // Hvis svaret er "ok", konverteres svaret fra JSON-format til et JavaScript-objekt.
        }
    })
    .then(data => console.log(data))                // Logger de modtagne JSON-data til konsollen.
    .catch(err => {                                             // Håndterer fejl, der kan opstå under datahentningen eller JSON-konverteringen.
        console.error(err.message);                             // Logger fejlbeskeden til konsollen.
    });

async function asynAwaitDemo() {                // Definerer en asynkron funktion ved brug af `async` nøgleordet.
    try {                                                       // Starter en try-catch blok for at håndtere fejl.
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2'); // Await venter på at fetch-anmodningen er færdig og gemmer svaret i 'response'.
        if (!response.ok) {                                     // Tjekker om svaret fra serveren er "ok".
            throw new Error(`Error ${response.status} ${response.statusText}`); // Hvis svaret ikke er "ok", kastes en fejl med statuskode og -tekst.
        } else {
            const data = await response.json();                 // Await venter på at svaret konverteres til JSON.
            console.log(data);                                  // Logger de modtagne JSON-data til konsollen.
        }
        // Opdater siden med brugerdata
        document.getElementById('userData').innerHTML = `
            <h3>Brugerdetaljer</h3>
            <p><strong>Navn:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Telefon:</strong> ${data.phone}</p>
            <p><strong>Website:</strong> ${data.website}</p>
            <p><strong>Firma:</strong> ${data.company.name}</p>
            <p><strong>Adresse:</strong> ${data.address.street}, ${data.address.city}</p>
        `;
    } catch (error) {
        // Håndter fejl og vis dem på siden
        document.getElementById('userData').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}

asynAwaitDemo();                                                // Kalder den asynkrone funktion for at demonstrere brugen af async/await.


