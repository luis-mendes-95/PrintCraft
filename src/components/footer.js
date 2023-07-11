// footer.js

const footerBase = document.querySelector('.footerBase');

const footerText = document.createElement('p');
footerText.classList.add('footerText');
footerText.textContent = 'PrintCraft - Todos os direitos reservados';
footerBase.appendChild(footerText);

const termsButton = document.createElement('a');
termsButton.classList.add('footerButton');
termsButton.href = '#';
termsButton.textContent = 'Termos de Uso';
footerBase.appendChild(termsButton);

const privacyButton = document.createElement('a');
privacyButton.classList.add('footerButton');
privacyButton.href = '#';
privacyButton.textContent = 'Política de Privacidade';
footerBase.appendChild(privacyButton);
