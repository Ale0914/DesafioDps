"use client";
import React, { useState } from 'react';
import { Modal } from 'bootstrap';
import { FormGroup, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function App() {
  const [movimientos, setMovimientos] = useState([]);
  const [tipoMovimiento, setTipoMovimiento] = useState('gasto');
  const [categoria, setCategoria] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleRegistro = () => {
    const nuevoMovimiento = {
      id: Date.now(), 
      tipo: tipoMovimiento,
      categoria: categoria,
      monto: monto,
      fecha: fecha,
      descripcion: descripcion
    };
    setMovimientos([...movimientos, nuevoMovimiento]);
    limpiarCampos();
  };

  const limpiarCampos = () => {
    setCategoria('');
    setMonto('');
    setFecha('');
    setDescripcion('');
  };

  const eliminarMovimiento = (id) => {
    const nuevosMovimientos = movimientos.filter((movimiento) => movimiento.id !== id);
    setMovimientos(nuevosMovimientos);
  };

  return (
    <div className="form-container">
     <div className='forma'>
  <h1>Registro de Movimientos</h1>
  <div className="input-container">
    <label className="label">
      Tipo de Movimiento:
      <select value={tipoMovimiento} onChange={(e) => setTipoMovimiento(e.target.value)}>
        <option value="gasto">Gasto</option>
        <option value="ingreso">Ingreso</option>
      </select>
    </label>
    <label className="label">
      Categoria:
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        {tipoMovimiento === 'gasto' ? (
          <optgroup label="Gasto">
            <option value="pago-youtube">Pago de YouTube</option>
            <option value="gasolina">Gasolina</option>
            <option value="comida">Comida</option>
            <option value="facturas">Facturas</option>
            <option value="netflix">Netflix</option>
          </optgroup>
        ) : (
          <optgroup label="Ingreso">
            <option value="efectivo">Efectivo</option>
            <option value="deposito">Depósito</option>
            <option value="caja-fuerte">Caja Fuerte</option>
            <option value="otros">Otros</option>
          </optgroup>
        )}
      </select>
    </label>
    <label className="label">
      Monto:
      <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
    </label>
    <label className="label">
      Fecha:
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
    </label>
    <label className="label">
      Descripción:
      <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
    </label>
    <button className="btn btn-primary boton" onClick={handleRegistro}>Registrar</button>
  </div>
</div>

      <h2>Movimientos</h2>
      <div className="movimientos-container">
        <div className="movimientos-gastos">
          <h3>Gastos</h3>
          <ul>
            {movimientos.map((movimiento) => {
              if (movimiento.tipo === 'gasto') {
                return (
                  <li key={movimiento.id}>
                    {movimiento.categoria} - ${movimiento.monto} - {movimiento.fecha} - {movimiento.descripcion}
                    <button className="btn btn-danger" onClick={() => eliminarMovimiento(movimiento.id)}>Eliminar</button>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
        <div className="movimientos-ingresos">
          <h3>Ingresos</h3>
          <ul>
            {movimientos.map((movimiento) => {
              if (movimiento.tipo === 'ingreso') {
                return (
                  <li key={movimiento.id}>
                    {movimiento.categoria} - ${movimiento.monto} - {movimiento.fecha} - {movimiento.descripcion}
                    <button className="btn btn-danger" onClick={() => eliminarMovimiento(movimiento.id)}>Eliminar</button>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;
