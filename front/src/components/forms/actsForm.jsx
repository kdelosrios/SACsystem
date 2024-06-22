import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ActsForm = ()=> {
    return (
        <div className="section sectionac">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <form action="/aregistered" method="post" className="mt-5 form-container">
              <div className="mb-3">
                <label htmlFor="exampleDate" className="form-label">Fecha</label>
                <input type="date" className="form-control" id="exampleDate" name="fecha" />
              </div>
    
              <div className="mb-3">
                <label htmlFor="exampleDescription" className="form-label" name="descripcion">Descripción</label>
                <textarea className="form-control" id="exampleFormDescription1" rows="1" name="descripcion"></textarea>
              </div>
    
              <select name="riesgos" className="form-select mb-3" aria-label="Default select riesgo">
                <option selected>Riesgo</option>
                <option value="1">Físico</option>
                <option value="2">Químico</option>
                <option value="4">Biologico</option>
                <option value="5">Psicosocial</option>
                <option value="6">Condiciones de Seguridad</option>
                <option value="7">Eléctrico</option>
                <option value="8">Mecánico</option>
              </select>
    
              <select name="caracteristicas" className="form-select mb-3" aria-label="Default select caracteristisca condicion">
                <option selected>Caracteristicas</option>
                <option value="1">No uso de EPP</option>
                <option value="2">Ingreso a zonas restringidas</option>
                <option value="4">Manipulación incorrecta de equipos</option>
                <option value="4">Ignorar procedimientos de seguridad</option>
                <option value="5">Postura y movimientos incorrectos</option>
                <option value="6">Falta de atención o concentración</option>
                <option value="7">Uso inadecuado de herramienta</option>
                <option value="8">Uso inseguro de sustancias o materiales</option>
              </select>
    
              <select name="area" className="form-select mb-3" aria-label="Default select area">
                <option selected>Seleccione la area</option>
                <option value="1">Producción</option>
                <option value="2">Mantenimiento</option>
                <option value="3">CEDI</option>
                <option value="4">Materias primas</option>
                <option value="5">Gestión Humana</option>
              </select>
    
            <div className="mb-3 form-check">
                <label className="form-check-label mr-3" htmlFor="preguntaSi">¿Realizó intervención?</label>
                <input type="radio" className="form-check-input" id="preguntaSi" name="intervencion" value="si" />
                <label className="form-check-label mr-3" htmlFor="preguntaSi">Sí</label>
                
                <input type="radio" className="form-check-input" id="preguntaNo" name="intervencion" value="no" />
                <label className="form-check-label" htmlFor="preguntaNo">No</label>
            </div>
            
              <button type="submit" className="btn btn-primary" id="btn-enviarA">Enviar</button>
            </form>
          </div>
        </div>
      );
    };
    
    export default ActsForm;

