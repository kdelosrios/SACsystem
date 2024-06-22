import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConditionForm = ()=> {
    return (
        <div className="section sectioncon">
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
                <option value="1">Equipos sin guardas</option>
                <option value="2">Áreas peligrosas sin restricción</option>
                <option value="3">Iluminación deficiente</option>
                <option value="3">Ventilación inadecuada</option>
                <option value="3">Pisos resbaladizos o en mal estado</option>
                <option value="3">Falta de señalización de peligro</option>
                <option value="3">Almacenamiento inadecuado de sustancias o materiales</option>
                <option value="3">Falta de mantenimiento de equipos</option>
                <option value="3">Ruido Excesivo</option>
                <option value="3">Amacenamiento inadecuado/obsataculización</option>
              </select>
    
              <select name="area" className="form-select mb-3" aria-label="Default select area">
                <option selected>Seleccione la area</option>
                <option value="1">Producción</option>
                <option value="2">Mantenimiento</option>
                <option value="3">CEDI</option>
                <option value="4">Materias primas</option>
                <option value="5">Gestión Humana</option>
              </select>

              <select name="encargado" class="form-select mb-3" aria-label="Default select area">
                <option selected>Encargado del cierre</option>
                <option value="1"> nombre1</option>
                <option value="2"> nombre2</option>
                <option value="3" >nombre3</option>
               </select> 
    
 
    
              <button type="submit" className="btn btn-primary" id="btn-enviarA">Enviar</button>
            </form>
          </div>
        </div>
      );
    };
    
    export default ConditionForm;
