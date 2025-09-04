import getDecks from './get_decks.js'
import setupTable from './setup_table.js'

window.addEventListener("load", async () =>
{
    // Solicita ao servidor o deck de cards no banco de dados.
    const decks = await getDecks(); console.log(decks); // DEBUG

    setupTable(decks);
});