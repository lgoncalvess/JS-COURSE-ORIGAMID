export default async function fetchBitcoin(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btc => {
        document.querySelector('.btc-preco')
        .innerHTML = (100 / btc.BRL.buy).toFixed(4);
    })
    .catch(erro => {
        console.log(erro)
    })
}