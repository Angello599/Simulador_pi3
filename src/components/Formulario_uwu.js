import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import DateTimeField from 'react-bootstrap-datetimepicker';
import Popup from './Popup';
import Datetime from 'react-datetime';
import { appointments } from './appointments';


class Formulario_uwu extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            startDate: "",
            endDate: "",
            tittle: "",
        };

        const { sbmt } = this.props;

        

    }
    
    //const [openPopup, setOpenPopup] = useState(false);

    //const [date, setDate] = useState(new Date());
    //var DateTimeField = require('react-bootstrap-datetimepicker');

    
    /*
    changeStartDate = (event) => {
        console.log(event.format("DD/MM/YYYY HH:mm"));
        this.setState({...this.state, startDate: event.format("DD/MM/YYYY HH:mm")});
    }

    changeEndDate = (event) => {
        console.log(event.format("DD/MM/YYYY HH:mm"));
        this.setState({...this.state, endDate: event.format("DD/MM/YYYY HH:mm")});
    }*/

    changeStartDate = (event) => {
        console.log(event._d);
        console.log(event.format("DD/MM/YYYY HH:mm"));
        console.log(event.format("YYYY-MM-DDTHH:mm:ss.sssZ"));
        this.setState({startDate: event});
        this.setState({tittle: this.props.tittle})
    }

    changeEndDate = (event) => {
        //console.log(event.format("DD/MM/YYYY HH:mm"));
        console.log(event._d);
        this.setState({endDate: event});
    }
/*
    setTitle = () => {
        this.setState({tittle: this.props.tittle})
    }

    handleSubmit(newObj) {
        console.log(newObj);
        this.setState((state) => ({
            appointments: [...state.appointments, newObj]
        }));
    }
*/
    hSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.tittle);
        //console.log(this.props.startDate);
        console.log(this.state.startDate.format("YYYY-MM-DDTHH:mm:ss.sssZ"));
        //console.log(this.props.endDate);
        console.log(this.state.endDate.format("YYYY-MM-DDTHH:mm:ss.sssZ"));
        appointments.push({
            title: this.state.tittle,
            startDate: new Date(this.state.startDate.format("YYYY-MM-DDTHH:mm:ss.sssZ")),
            endDate: new Date(this.state.endDate.format("YYYY-MM-DDTHH:mm:ss.sssZ")),
            id: 1,
            location: "",
        })

        this.props.sbmt();
    }



    // onSubmit={() => {this.handleSubmit({tittle: this.props.tittle, startDate: this.state.startDate, endDate: this.state.endDate, id: 0, location: ''}); this.setState({openPopup: false})}}
    render() {
        return (
            <form onSubmit={this.hSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label for="inputTitulo">Título</Form.Label>
                    <Form.Control type="text" class="form-control" id="inputTitulo" value={this.props.tittle}  disabled/>
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
                <Datetime   id="inputFechaInicio"
                            value={this.state.startDate}
                            onChange={this.changeStartDate}/>
                <div>
                    Fecha de fin
                </div>
                <Datetime   id="inputFechaFin"
                            dateFormat="DD/MM/YYYY"
                            value={this.state.endDate}
                            onChange={this.changeEndDate}/>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        )
    }
    
};

export default Formulario_uwu;