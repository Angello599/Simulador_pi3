import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popup from './Popup';



function Formulario() {

    const [openPopup, setOpenPopup] = useState(false);

    return(
        <form>
            <Form.Group className="mb-3">
                <Form.Label for="inputHoras">Horas</Form.Label>
                <Form.Control type="number" class="form-control" id="inputHoras" placeholder="Cantidad de horas"/>
            </Form.Group>
            <div>
                Dias
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkLunes"/>
                <label class="form-check-label" for="checkLunes">Lunes</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkMartes"/>
                <label class="form-check-label" for="checkMartes">Martes</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkMiercoles"/>
                <label class="form-check-label" for="checkMiercoles">Miercoles</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkJueves"/>
                <label class="form-check-label" for="checkJueves">Jueves</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkSabado"/>
                <label class="form-check-label" for="checkSabado">Sabado</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkDomingo"/>
                <label class="form-check-label" for="checkDomingo">Domingo</label>
            </div>
            <br/>
            <Button variant="primary" type="submit" onClick={() => setOpenPopup(false)}>
                Submit
            </Button>
        </form>
    );
}

export default Formulario;