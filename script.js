const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generatebtn');
const downloadBtn = document.getElementById('downloadbtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
e.preventDefault();
isempty();
geneateQRCode();
});

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isempty();
    geneateQRCode();
});

downloadBtn.addEventListener('click', (e) => {
   let img = document.querySelector('.qr-body img');
   if(img !== null) {
      downloadBtn.setAttribute('href', imgAttr);
   } 

   else{
    downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`);
   }
});

function isempty() {
    if(qrText.value === '') {
        alert('Please enter the text to generate QR Code');
        return;
    }
}

function geneateQRCode() {
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
        text: qrText.value,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
}