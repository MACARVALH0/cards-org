import enterDeck from './enter_deck.js'

/**
 * Configura o conteiner de cards da página inicial.
 * @param {Array} decks Lista de decks recebida do banco de dados.
 */
export default function setupTable(decks = [])
{
    if(typeof decks != 'object'){ throw new Error("É necessário que `decks` seja um array de decks."); }

    const DECK_TABLE = document.querySelector("#deck-table");

    const deck_elements = new Set();
    
    // Cria o elemento HTML da carta de criação de decks e o adiciona-o `deck_elements`.
    deck_elements.add(createDeckElement(0, "Novo Deck"));

    // Cria os elementos HTML dos demais decks e adiciona-os a `deck_elements`.
    decks.forEach(deck => deck_elements.add( createDeckElement(deck.ID, deck.title) ) );

    // Anexa à "mesa" os elementos de deck criados.
    DECK_TABLE.append(...deck_elements);
}

/**
 * 
 * @param {*} id Informação de ID nominal do deck.
 * @param {*} title Informação de título nominal do deck.
 * @returns Elemento HTML do deck.
 */
function createDeckElement(id, title)
{
    const deck_div = document.createElement("div");
    deck_div.classList.add("deck-div");
    deck_div.setAttribute('data-ID', id);

    const deck_title = document.createElement("p");
    deck_title.innerHTML = title;

    deck_div.appendChild(deck_title);

    // Adiciona o listener de evento de click ao elemento.
    deck_div.addEventListener("click", event =>
    {
        event.stopPropagation();
        enterDeck(id);
    });

    return deck_div;
}