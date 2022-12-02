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
        let ciencias = appointments.find(ciencias => ciencias.title === "Ciencias");
        let h_ci = ((ciencias) ? ciencias.endDate.getHours()-ciencias.startDate.getHours() : 0)
        
        if (ciencias) {
            console.log(ciencias.title)
            console.log(h_ci);
            
        } else {
            console.log(':(')
        }
    
        if (h_ci > 8) {
            setCienciasStar(5);
        } else if (h_ci > 6) {
            setCienciasStar(4);
        } else if (h_ci > 4) {
            setCienciasStar(3);
        } else if (h_ci > 2) {
            setCienciasStar(2);
        } else if (h_ci > 1) {
            setCienciasStar(1);
        } else {
            setCienciasStar(0);
        }
        console.log(cienciasStar)
    
        // Humanidades
        let humanidades = appointments.find(humanidades => humanidades.title === "Humanidades");
        let h_hu = ((humanidades) ? humanidades.endDate.getHours()-humanidades.startDate.getHours() : 0)
        /*
        if (humanidades) { 
            console.log(humanidades.title)
            console.log(h_hu);
        } else {
            console.log(':(')
        }*/
    
        if (h_hu > 8) {
            setHumanidadesStar(5)
        } else if (h_hu > 6) {
            setHumanidadesStar(4)
        } else if (h_hu > 4) {
            setHumanidadesStar(3)
        } else if (h_hu > 2) {
            setHumanidadesStar(2)
        } else if (h_hu > 1) {
            setHumanidadesStar(1)
        } else {
            setHumanidadesStar(0)
        }
    
    
        // Interdisciplinario
        let interdisciplinario = appointments.find(interdisciplinario => interdisciplinario.title === "Interdisciplinario");
        let h_in = ((interdisciplinario) ? interdisciplinario.endDate.getHours()-interdisciplinario.startDate.getHours() : 0)
        /*
        if (interdisciplinario) {
            console.log(interdisciplinario.title)
            console.log(h_in);
        } else {
            console.log(':(')
        }*/
    
        if (h_in > 8) {
            setInterdisciplinarioStar(5)
        } else if (h_in > 6) {
            setInterdisciplinarioStar(4)
        } else if (h_in > 4) {
            setInterdisciplinarioStar(3)
        } else if (h_in > 2) {
            setInterdisciplinarioStar(2)
        } else if (h_in > 1) {
            setInterdisciplinarioStar(1)
        } else {
            setInterdisciplinarioStar(0)
        }
    
    
        // Carrera
        let carrera = appointments.find(carrera => carrera.title === "Carrera");
        let h_ca = ((carrera) ? carrera.endDate.getHours()-carrera.startDate.getHours() : 0)
        /*
        if (carrera) {
            console.log(carrera.title)
            console.log(h_ca);
        } else {
            console.log(':(')
        }*/
    
        if (h_ca > 8) {
            setCarreraStar(5)
        } else if (h_ca > 6) {
            setCarreraStar(4)
        } else if (h_ca > 4) {
            setCarreraStar(3)
        } else if (h_ca > 2) {
            setCarreraStar(2)
        } else if (h_ca > 1) {
            setCarreraStar(1)
        } else {
            setCarreraStar(0)
        }
        
    
        // Familia
        let familia = appointments.find(familia => familia.title === "Familia");
        let h_fa = ((familia) ? familia.endDate.getHours()-familia.startDate.getHours() : 0)
        /*
        if (familia) {
            console.log(familia.title)
            console.log(h_fa);
        } else {
            console.log(':(')
        }*/
    
        if (h_fa > 8) {
            setFamiliaStar(5)
        } else if (h_fa > 6) {
            setFamiliaStar(4)
        } else if (h_fa > 4) {
            setFamiliaStar(3)
        } else if (h_fa > 2) {
            setFamiliaStar(2)
        } else if (h_fa > 1) {
            setFamiliaStar(1)
        } else {
            setFamiliaStar(0)
        }
    
    
        // Sueño
        let sueño = appointments.find(sueño => sueño.title === "Sueño");
        let h_su = ((sueño) ? sueño.endDate.getHours()-sueño.startDate.getHours() : 0)
        /*
        if (sueño) {
            console.log(sueño.title)
            console.log(h_su);
        } else {
            console.log(':(')
        }*/
    
        if (h_su > 8) {
            setSueñoStar(5)
        } else if (h_su > 6) {
            setSueñoStar(4)
        } else if (h_su > 4) {
            setSueñoStar(3)
        } else if (h_su > 2) {
            setSueñoStar(2)
        } else if (h_su > 1) {
            setSueñoStar(1)
        } else {
            setSueñoStar(0)
        }
    
    
        // Comida
        let comida = appointments.find(comida => comida.title === "Comida");
        let h_co = ((comida) ? comida.endDate.getHours()-comida.startDate.getHours() : 0)
        /*
        if (comida) {
            console.log(comida.title)
            console.log(h_co);
        } else {
            console.log(':(')
        }*/
    
        if (h_co > 8) {
            setComidaStar(5)
        } else if (h_co > 6) {
            setComidaStar(4)
        } else if (h_co > 4) {
            setComidaStar(3)
        } else if (h_co > 2) {
            setComidaStar(2)
        } else if (h_co > 1) {
            setComidaStar(1)
        } else {
            setComidaStar(0)
        }
    
    
        // Ocio
        let ocio = appointments.find(ocio => ocio.title === "Ocio");
        let h_oc = ((ocio) ? ocio.endDate.getHours()-ocio.startDate.getHours() : 0)
        /*
        if (ocio) {
            console.log(ocio.title)
            console.log(h_oc);
        } else {
            console.log(':(')
        }*/
    
        if (h_oc > 8) {
            setOcioStar(5)
        } else if (h_oc > 6) {
            setOcioStar(4)
        } else if (h_oc > 4) {
            setOcioStar(3)
        } else if (h_oc > 2) {
            setOcioStar(2)
        } else if (h_oc > 1) {
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