
const searchButton = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');

    const inputValue = parseInt(input.value);
    if (isNaN(inputValue) || inputValue == '') {
        error.innerText = 'Give a number';
        input.value = '';
        main.innerHTML = '';
    }
    else if (inputValue <= 0) {
        error.innerText = 'put positive value';
        input.value = '';
        main.innerHTML = '';

    }
    else if (inputValue >= 52) {
        error.innerText = 'outside of list';
        input.value = '';
    }
    else {
        main.innerHTML = '';
        fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => displayCard(data.cards))
        input.value = '';
    }
}
const displayCard = (cards) => {
    console.log(cards)
    for (const card of cards) {
        const main = document.getElementById('main');
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('mb-5')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
             <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${card.suit}</h5>
            <p class="card-text">${card.code}</p>
            <button class="btn btn-primary">see details</button>
  </div>
</div>
        `
        main.appendChild(div)

    }
}
