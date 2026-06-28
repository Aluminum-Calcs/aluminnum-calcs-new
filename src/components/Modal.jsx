import React from 'react'

function Modal() {
  return (
    <template id="modal-popup">
    <div class="modal-popup">
      <div class="overlay"></div>
      <div class="modal">
        <div class="modal__header">
          <h2 class="h2">Heading</h2>
          <button class="close-modal"><i class="fa fa-close"></i></button>
        </div>
        <div class="modal__body">
          <p class="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nihil.</p>
          <div class="modal__body__input">
            <div class="field">
              <label for="modal-input">name</label>
              <input type="text" placeholder="Cart 1" class="modal-input-elem"/>
            </div>
            <div class="error-msg">We will use the default name if its empty</div>
          </div>
        </div>
        <div class="modal__footer">
          <button>Yes</button>
          <button>No</button>
          <button>maybe</button>
        </div>
      </div>
    </div>
  </template>
  )
}

export default Modal