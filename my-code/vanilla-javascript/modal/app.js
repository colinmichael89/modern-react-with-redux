const button = document.querySelector('button');

let modal;
let backdrop;

button.addEventListener('click', showModalHandler);

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement('div');
  modal.className = 'modal';

  const modalText = document.createElement('p');
  modalText.content = 'Are you sure?';

  const modalCancelAction = document.createElement('button');
  modalCancelAction.textContent = 'Cancel';
  modalCancelAction.className = 'btn btn--alt';
  modalCancelAction.addEventListener('click', closeModalHandeler);

  const modalConfirmAction = document.createElement('button');
  modalConfirmAction.textContent = 'Confirm';
  modalConfirmAction.className = 'btn';
  modalConfirmAction.addEventListener('click', closeModalHandeler);

  modal.append(modalText);
  modal.append(modalCancelAction);
  modal.append(modalConfirmAction);

  document.body.append(modal);
}

function closeModalHandeler() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}
