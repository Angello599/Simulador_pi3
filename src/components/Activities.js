import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Formulario_uwu from './Formulario_uwu';
import Popup from './Popup';


function Activities() {
    const [tittle, setTittle] = useState("");
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    let [idd, setIdd] = useState(0);

    const [openPopup, setOpenPopup] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const sbmt = () => {
        setOpenPopup(false);
        setIdd(idd+1);
    }




    return (
        <>
            <>
                <Popup
                    tittle = "Form"
                    openPopup = {openPopup}
                    setOpenPopup = {setOpenPopup}
                >
                    <Formulario_uwu 
                    tittle={tittle}
                    id={idd}
                    sbmt={sbmt}
                    />
                </Popup>
            </>
            <div className="col-md-2">
                <h4 className="mt-3 mb-5 fw-bold text-center">
                    Simulador
                </h4>
                
                <ButtonGroup className="mb-2 w-100">
                <ToggleButton
                    
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked}
                    value="1"
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                    aria-controls="cursos"
                    data-target="#cursos"
                    aria-expanded="false"
                    onClick={() => setVisible(!visible)}
                >
                    Cursos
                </ToggleButton>
                </ButtonGroup>
                <Collapse in={visible}>
                    <div id="cursos">
                        <button type="button" class="btn btn-outline-primary w-100" onClick={() =>{ setOpenPopup(true); setTittle("Ciencias")}}>
                            Ciencias
                        </button>
                        <button type="button" class="btn btn-outline-primary w-100" onClick={() =>{ setOpenPopup(true); setTittle("Humanidades")}}>
                            Humanidades
                        </button>
                        <button type="button" class="btn btn-outline-primary w-100" onClick={() =>{ setOpenPopup(true); setTittle("Interdisciplinario")}}>
                            Interdisciplinario
                        </button>
                        <button type="button" class="btn btn-outline-primary w-100" onClick={() =>{ setOpenPopup(true); setTittle("Carrera")}}>
                            Carrera
                        </button>
                    </div>
                </Collapse>
                
                <br></br>

                <ButtonGroup className="mb-2 w-100">
                <ToggleButton
                    
                    id="toggle-check2"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked2}
                    value="2"
                    onChange={(e) => setChecked2(e.currentTarget.checked)}
                    aria-controls="vida"
                    data-target="#vida"
                    aria-expanded="false"
                    onClick={() => setVisible2(!visible2)}
                >
                    Vida
                </ToggleButton>
                </ButtonGroup>
                

                <Collapse in={visible2}>
                    <div id="vida">
                        <button type="button" class="btn btn-outline-primary w-100" onClick={() =>{ setOpenPopup(true); setTittle("Familia")}}>
                            Familia
                        </button>
                        <button type="button" class="btn btn-outline-primary w-100" onClick={() =>{ setOpenPopup(true); setTittle("Sueño")}}>
                            Sueño
                        </button>
                        <button type="button" class="btn btn-outline-primary w-100" onClick={() =>{ setOpenPopup(true); setTittle("Comida")}}>
                            Comida
                        </button>
                        <button type="button" class="btn btn-outline-primary w-100" onClick={() =>{ setOpenPopup(true); setTittle("Ocio")}}>
                            Ocio
                        </button>
                    </div>
                </Collapse>
            </div>
        </>
    );
}

export default Activities;