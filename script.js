let front = document.querySelector('.card-front');
let bankLogo = document.querySelector('.card-image');
let brandLogo = document.querySelector('.card-logo');
let cardNumber = document.querySelector('#card-number');

let numberHandler = cardNumber.oninput = () => {
    fetch(`https://api.cardinfo.online?input=${cardNumber.value.slice(0,6)}&apiKey=93e3b3d51bb5241e4d2411a8f65e8252`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        front.style.background = data.formBackgroundColor;
        front.style.color = data.formTextColor;
        front.style.borderColor = data.formBorderColor;
        bankLogo.style.display = data.formBankLogoBigSvg ? 'block' : 'none';
      bankLogo.src = data.formBankLogoBigSvg;
      brandLogo.style.display = data.formBrandLogoSvg || data.brandLogoOriginalSvg ? 'block' : 'none';
      brandLogo.src = data.formBrandLogoSvg || data.brandLogoOriginalSvg;

    }).catch(function(error) {
        console.error(error)
      })
}
