import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Datetime from 'react-datetime';
import { appointments } from './appointments';


class Formulario_uwu extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            startDate: "",
            endDate: "",
            tittle: "",
            id: 0
        };

        const { sbmt } = this.props;
    }
    

    changeStartDate = (event) => {
        console.log(event._d);
        //console.log(event.format("DD/MM/YYYY HH:mm"));
        //console.log(event.format("YYYY-MM-DDTHH:mm:ss.sssZ"));
        this.setState({startDate: event});
        this.setState({tittle: this.props.tittle})
        this.setState({id: this.props.id})
    }

    changeEndDate = (event) => {
        //console.log(event.format("DD/MM/YYYY HH:mm"));
        console.log(event._d);
        this.setState({endDate: event});
    }


    hSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.tittle);
        //console.log(this.props.startDate);
        console.log(this.state.startDate.format("YYYY-MM-DDTHH:mm:ss.sssZ"));
        //console.log(this.props.endDate);
        console.log(this.state.endDate.format("YYYY-MM-DDTHH:mm:ss.sssZ"));
        console.log(this.state.id);
        appointments.push({
            title: this.state.tittle,
            startDate: new Date(this.state.startDate.format("YYYY-MM-DDTHH:mm:ss.sssZ")),
            endDate: new Date(this.state.endDate.format("YYYY-MM-DDTHH:mm:ss.sssZ")),
            id: this.state.id,
            location: "",
        })

        this.props.sbmt();
    }


    render() {
        return (
            <form onSubmit={this.hSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label for="inputTitulo">Título</Form.Label>
                    <Form.Control type="text" class="form-control" id="inputTitulo" value={this.props.tittle}  disabled/>
                </Form.Group>

                <div>
                    Fecha de inicio
                </div>
                <Datetime   id="inputFechaInicio"
                            dateFormat="DD/MM/YYYY"
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