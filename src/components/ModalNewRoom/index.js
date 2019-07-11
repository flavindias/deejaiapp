import React, { Component } from 'react';
export default class ModalNewRoom extends Component {
  render () {
    return (
      <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Título do modal</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Texto do corpo do modal, é aqui.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-primary">Salvar mudanças</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
