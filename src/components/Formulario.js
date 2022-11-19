import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import DateTimeField from 'react-bootstrap-datetimepicker';
import Popup from './Popup';
import Datetime from 'react-datetime';
//import { appointments } from './components/appointments';


function Formulario(props) {
    /*
        constructor(props) {
            super(props);
        
            this.state = {
            appointmentChanges: {},
            };
        
            this.getAppointmentData = () => {
            const { appointmentData } = this.props;
            return appointmentData;
            };
            this.getAppointmentChanges = () => {
            const { appointmentChanges } = this.state;
            return appointmentChanges;
            };
        
            this.changeAppointment = this.changeAppointment.bind(this);
            this.commitAppointment = this.commitAppointment.bind(this);
            
            
        }
    */
    /*
        var t = document.getElementById("inputTitulo");
        var sd = document.getElementById("inputFechaInicio");
        var ed = document.getElementById("inputFechaFin");

        console.log(t.value);
        console.log(sd);
        console.log(ed);
    */
    
        
    const { tittle } = props;

    const [date, setDate] = useState(new Date());
    //var DateTimeField = require('react-bootstrap-datetimepicker');

    const [openPopup, setOpenPopup] = useState(false);
/*
    const [formData, setFormData] = useState({
        title: "",
        startDate: "",
        endDate: "",
        id: null,
        location: "",
    })

    const addAppointment = () => {
        setFormData(document.getElementById("inputTitulo").value, document.getElementById("inputFechaInicio"), document.getElementById("inputFechaFin"), null, "");
        console.log(document.getElementById("inputTitulo").value);
        console.log(document.getElementById("inputFechaInicio"));
        console.log(document.getElementById("inputFechaFin"));
    }

    let changeDate = (event) => {
        console.log(event.format("HH-mm-ss a")) //02-00-00 am
        this.setState({...this.state, time: event.format("HH-mm-ss a")})
    }
*/
    return (
        <form>
            <Form.Group className="mb-3">
                <Form.Label for="inputTitulo">Título</Form.Label>
                <Form.Control type="text" class="form-control" id="inputTitulo" value={tittle} disabled/>
            </Form.Group>
            {/*
                <div className="mb-3">
                    <label for="inputHoras">Horas</label>
                    <input type="number" class="form-control" id="inputHoras" placeholder="Cantidad de horas"/>
                </div>*/
            }
            
            {/*
                <Form.Group controlId="duedate">
                    <Form.Control
                    type="date"
                    name="duedate"
                    placeholder="Due date"
                    data-date-format="yyyy-mm-dd hh:ii"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>*/
            }
            <div>
                Fecha de inicio
            </div>
            <Datetime id="inputFechaInicio"/>
            <div>
                Fecha de fin
            </div>
            <Datetime id="inputFechaFin"/>
            <br/>
            {/*
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
                <br/>*/
            }
            <Form.Group className="mb-3" controlId="ControlDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <br/>
            <Button variant="primary"  onClick={() => {setOpenPopup(false)}}>
                Submit
            </Button>
        </form>
    )
};

export default Formulario;