import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components';
import { appointments } from './appointments';

const Asd = styled.div`
    display: flex;
` 

const Fs = styled.span`
    flex: 1;
` 



function Results() {
    let [corazon, setCorazon] = useState(5);
    const [cienciasStar, setCienciasStar] = useState(0);
    let [humanidadesStar, setHumanidadesStar] = useState(0);
    let [interdisciplinarioStar, setInterdisciplinarioStar] = useState(0);
    let [carreraStar, setCarreraStar] = useState(0);
    let [familiaStar, setFamiliaStar] = useState(0);
    let [sueñoStar, setSueñoStar] = useState(0);
    let [comidaStar, setComidaStar] = useState(0);
    let [ocioStar, setOcioStar] = useState(0);

    const simulate = () => {
        // Ciencias
        let ciencias_total = appointments.filter(c => c.title === "Ciencias");
        console.log(ciencias_total);
        console.log("veces por semana: ", ciencias_total.length);

        let horas_ciencias = 0;
        for (let i = 0; i < ciencias_total.length; i++) {
            horas_ciencias = horas_ciencias + (ciencias_total[i].endDate.getHours()-ciencias_total[i].startDate.getHours())
        }
    
        if (horas_ciencias > 8) {
            setCienciasStar(5);
        } else if (horas_ciencias > 6) {
            setCienciasStar(4);
        } else if (horas_ciencias > 4) {
            setCienciasStar(3);
        } else if (horas_ciencias > 2) {
            setCienciasStar(2);
        } else if (horas_ciencias > 1) {
            setCienciasStar(1);
        } else {
            setCienciasStar(0);
        }
        console.log("estrellas: ", cienciasStar)



        // Humanidades
        let humanidades_total = appointments.filter(c => c.title === "Humanidades");
        console.log(humanidades_total);
        console.log("veces por semana: ", humanidades_total.length);

        let horas_humanidades = 0;
        for (let i = 0; i < humanidades_total.length; i++) {
            horas_humanidades = horas_humanidades + (humanidades_total[i].endDate.getHours()-humanidades_total[i].startDate.getHours())
        }
    
        if (horas_humanidades > 8) {
            setHumanidadesStar(5);
        } else if (horas_humanidades > 6) {
            setHumanidadesStar(4);
        } else if (horas_humanidades > 4) {
            setHumanidadesStar(3);
        } else if (horas_humanidades > 2) {
            setHumanidadesStar(2);
        } else if (horas_humanidades > 1) {
            setHumanidadesStar(1);
        } else {
            setHumanidadesStar(0);
        }
    
    

        // Interdisciplinario
        let interdisciplinario_total = appointments.filter(c => c.title === "Interdisciplinario");
        console.log(interdisciplinario_total);
        console.log("veces por semana: ", interdisciplinario_total.length);

        let horas_interdisciplinario = 0;
        for (let i = 0; i < interdisciplinario_total.length; i++) {
            horas_interdisciplinario = horas_interdisciplinario + (interdisciplinario_total[i].endDate.getHours()-interdisciplinario_total[i].startDate.getHours())
        }
    
        if (horas_interdisciplinario > 8) {
            setInterdisciplinarioStar(5)
        } else if (horas_interdisciplinario > 6) {
            setInterdisciplinarioStar(4)
        } else if (horas_interdisciplinario > 4) {
            setInterdisciplinarioStar(3)
        } else if (horas_interdisciplinario > 2) {
            setInterdisciplinarioStar(2)
        } else if (horas_interdisciplinario > 1) {
            setInterdisciplinarioStar(1)
        } else {
            setInterdisciplinarioStar(0)
        }
    

    
        // Carrera
        let carrera_total = appointments.filter(c => c.title === "Carrera");
        console.log(carrera_total);
        console.log("veces por semana: ", carrera_total.length);

        let horas_carrera = 0;
        for (let i = 0; i < carrera_total.length; i++) {
            horas_carrera = horas_carrera + (carrera_total[i].endDate.getHours()-carrera_total[i].startDate.getHours())
        }
    
        if (horas_carrera > 8) {
            setCarreraStar(5)
        } else if (horas_carrera > 6) {
            setCarreraStar(4)
        } else if (horas_carrera > 4) {
            setCarreraStar(3)
        } else if (horas_carrera > 2) {
            setCarreraStar(2)
        } else if (horas_carrera > 1) {
            setCarreraStar(1)
        } else {
            setCarreraStar(0)
        }

        
    
        // Familia
        let familia_total = appointments.filter(c => c.title === "Familia");
        console.log(familia_total);
        console.log("veces por semana: ", familia_total.length);

        let horas_familia = 0;
        for (let i = 0; i < familia_total.length; i++) {
            horas_familia = horas_familia + (familia_total[i].endDate.getHours()-familia_total[i].startDate.getHours())
        }
    
        if (horas_familia > 8) {
            setFamiliaStar(0)
        } else if (horas_familia > 6) {
            setFamiliaStar(4)
        } else if (horas_familia > 4) {
            setFamiliaStar(3)
        } else if (horas_familia > 2) {
            setFamiliaStar(2)
        } else if (horas_familia > 1) {
            setFamiliaStar(1)
        } else {
            setFamiliaStar(0)
        }


        
    

    
        // Sueño
        let sueño_total = appointments.filter(c => c.title === "Sueño");
        console.log(sueño_total);
        console.log("veces por semana: ", sueño_total.length);

        let horas_sueño = 0;
        for (let i = 0; i < sueño_total.length; i++) {
            horas_sueño = horas_sueño + (sueño_total[i].endDate.getHours()-sueño_total[i].startDate.getHours())
        }
    
        if (horas_sueño > 8) {
            setSueñoStar(5)
        } else if (horas_sueño > 6) {
            setSueñoStar(4)
        } else if (horas_sueño > 4) {
            setSueñoStar(3)
        } else if (horas_sueño > 2) {
            setSueñoStar(2)
        } else if (horas_sueño > 1) {
            setSueñoStar(1)
        } else {
            setSueñoStar(0)
        }

    
    
        // Comida
        let comida_total = appointments.filter(c => c.title === "Comida");
        console.log(comida_total);
        console.log("veces por semana: ", comida_total.length);

        let horas_comida = 0;
        for (let i = 0; i < comida_total.length; i++) {
            horas_comida = horas_comida + (comida_total[i].endDate.getHours()-comida_total[i].startDate.getHours())
        }
    
        if (horas_comida > 8) {
            setComidaStar(5)
        } else if (horas_comida > 6) {
            setComidaStar(4)
        } else if (horas_comida > 4) {
            setComidaStar(3)
        } else if (horas_comida > 2) {
            setComidaStar(2)
        } else if (horas_comida > 1) {
            setComidaStar(1)
        } else {
            setComidaStar(0)
        }

    
    
        // Ocio
        let ocio_total = appointments.filter(c => c.title === "Ocio");
        console.log(ocio_total);
        console.log("veces por semana: ", ocio_total.length);

        let horas_ocio = 0;
        for (let i = 0; i < ocio_total.length; i++) {
            horas_ocio = horas_ocio + (ocio_total[i].endDate.getHours()-ocio_total[i].startDate.getHours())
        }
    
        if (horas_ocio > 8) {
            setOcioStar(5)
        } else if (horas_ocio > 6) {
            setOcioStar(4)
        } else if (horas_ocio > 4) {
            setOcioStar(3)
        } else if (horas_ocio > 2) {
            setOcioStar(2)
        } else if (horas_ocio > 1) {
            setOcioStar(1)
        } else {
            setOcioStar(0)
        }
    }
    

    return (
        <>
            <div className="col-md-2">
                <h4 className="mt-3 mb-5 fw-bold text-center">
                    Resultados:
                </h4>

                <Alert variant="primary">
                    <Alert.Heading>Barra de vida:</Alert.Heading>
                    <p>
                        {corazon} corazones;
                    </p>
                </Alert>

                <Asd>
                    <Fs>Ciencias:</Fs>
                    <span >{cienciasStar} estrellas</span>          
                </Asd>
                <hr />
                <Asd>
                    <Fs>Humanidades:</Fs>
                    <span>{humanidadesStar} estrellas</span>
                </Asd>
                <hr />
                <Asd>
                    <Fs>Interdisciplinario:</Fs>
                    <span>{interdisciplinarioStar} estrellas</span>
                </Asd>
                <hr />
                <Asd>
                    <Fs>Carrera:</Fs>
                    <span>{carreraStar} estrellas</span>
                </Asd>
                <hr />
                <Asd>
                    <Fs>Familia:</Fs>
                    <span>{familiaStar} estrellas</span>
                </Asd>
                <hr />
                <Asd>
                    <Fs>Sueño:</Fs>
                    <span>{sueñoStar} estrellas</span>
                </Asd>
                <hr />
                <Asd>
                    <Fs>Comida:</Fs>
                    <span>{comidaStar} estrellas</span>
                </Asd>
                <hr />
                <Asd>
                    <Fs>Ocio:</Fs>
                    <span>{ocioStar} estrellas</span>
                </Asd>
                
                <br/><br/>
                <button
                    onClick={() => {simulate()}}
                    class="btn btn-primary w-100" 
                >
                    Simular
                </button>
            </div>
        </>
    )
}

export default Results;