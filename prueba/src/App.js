import React from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

function App() {
  return (
    <div> 
      <div style={{fontSize: '2rem'}}>
        INAISO
      </div>
      
      <div>
        <table className="table table-bordered table-striped table-hover w-75 ms-5 mt-2">
          <thead className="thead thead-dark">
            <tr>
              <th>Número</th>
              <th>Usuario</th>
              <th>Reserva</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id='body'>
              <tr>
                <td>1</td>
                <td>lala</td>
                <td>nana</td>
                <td>
                  <button className="btn btn-warning me-2">Editar</button>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
