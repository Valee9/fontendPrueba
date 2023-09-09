import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const App = () => {
  const url = 'http://localhost:3001/api/users';
  const [users, setUsers] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [userSelect, setUserSelect] = useState({
    id: '',
    name: '',
    app: '',
    time: '',
    dataReserve: ''
  });

  useEffect(() => { getData() }, []);

  const getData = async () => {
    try{
    const res = await axios.get(url);
    setUsers(res.data)
    console.log('resultados: ',users);
    }
    catch(error){
      console.log(error.message)
    }
  }

  const option = (action) => {
    if (action === 'editar')
      setModalEditar(true)
    else
      setModalEliminar(true)
  }
  const abrirAgregar = () => {
    setUserSelect(null);
    setModalInsertar(true)
  }

  const closeModal = () => {
    setModalInsertar(false)
    setModalEliminar(false)
    setModalEditar(false)
  }

  return (
    <div> 
      <p style={{fontSize: '2rem'}}>INAISO</p>
    <div>
      <button className="btn btn-success ms-5" onClick={()=>abrirAgregar()}>Agregar</button>
    </div>
    
    <div>
      <table className="table table-bordered table-striped table-hover w-75 ms-5 mt-2">
        <thead className="thead thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Aplicación</th>
            <th>Duración</th>
            <th>Fecha de reserva</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id='body'>
            <tr>
              <td>1</td>
              <td>lala</td>
              <td>nana</td>
              <td>nana</td>
              <td>nana</td>
              <td>
                <button className="btn btn-warning me-2" onClick={()=>option('editar')}>Editar</button>
                <button className="btn btn-danger" onClick={()=>option('eliminar')}>Eliminar</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    <Modal isOpen={modalEditar}>
      <ModalHeader toggle={closeModal}>Editar usuario</ModalHeader>
      <ModalBody>

      </ModalBody>
      <ModalFooter>
        <button className="btn btn-success">Aceptar</button>
        <button className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={modalEliminar}>
      <ModalHeader toggle={closeModal}>Eliminar usuario</ModalHeader>
      <ModalBody>

      </ModalBody>
      <ModalFooter>
        <button className="btn btn-success">Aceptar</button>
        <button className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
      </ModalFooter>
    </Modal>

    <Modal isOpen={modalInsertar}>
      <ModalHeader toggle={closeModal}>Agregar usuario</ModalHeader>
      <ModalBody>

      </ModalBody>
      <ModalFooter>
        <button className="btn btn-success">Aceptar</button>
        <button className="btn btn-secondary" onClick={closeModal}>Cancelar</button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default App