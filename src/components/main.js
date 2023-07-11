const mainBase = document.querySelector('.mainBase');

const heading = document.createElement('h1');
heading.textContent = 'Escolha o tipo de produto para personalizar:';
mainBase.appendChild(heading);

const selectContainer = document.createElement('div');
selectContainer.classList.add('selectContainer');

const selectLabel = document.createElement('label');
selectLabel.textContent = 'Selecione o produto:';
selectContainer.appendChild(selectLabel);

const select = document.createElement('select');
select.name = 'productType';
select.id = 'productType';

const productOptions = ['Camisetas', 'Windbanners', 'Canecas'];

productOptions.forEach((optionText) => {
  const option = document.createElement('option');
  option.value = optionText.toLowerCase();
  option.textContent = optionText;
  select.appendChild(option);
});

selectContainer.appendChild(select);
mainBase.appendChild(selectContainer);
