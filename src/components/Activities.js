import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import Formulario from './Formulario';
import Popup from './Popup';


function Activities() {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);

    const [openPopup, setOpenPopup] = useState(false);

    return (
        <>
            <>
                <Popup
                    tittle = "C1 Form"
                    openPopup = {openPopup}
                    setOpenPopup = {setOpenPopup}
                >
                    <Formulario />
                </Popup>
            </>
            <div className="col-md-2">
                <h4 className="mt-3 mb-5 fw-bold text-center">
                    Simulador
                </h4>
                    {/*
                        <button name="button" className="btn btn-primary btn-lg" onClick={() => setVisible(!visible)}>
                            Cursos 
                        </button>

                        {visible &&
                            <>
                                <div>
                                    c1
                                </div>
                                <div>
                                    c2
                                </div>
                                <div>
                                    c3
                                </div>
                                <div>
                                    c4
                                </div>
                            </>
                        }
                    */}
                


                <button
                    onClick={() => setVisible(!visible)}
                    class="btn btn-secondary w-100" 
                    aria-controls="cursos"
                    data-target="#cursos"
                    aria-expanded="false"
                >
                    Cursos
                </button>

                <Collapse in={visible}>
                    <div id="cursos">
                        <button type="button" class="btn btn-outline-secondary w-100" onClick={() => setOpenPopup(true)}>
                            c1
                        </button>
                        <button type="button" class="btn btn-outline-secondary w-100">
                            c2
                        </button>
                        <button type="button" class="btn btn-outline-secondary w-100">
                            c3
                        </button>
                        <button type="button" class="btn btn-outline-secondary w-100">
                            c4
                        </button>
                    </div>
                </Collapse>


                <button
                    onClick={() => setVisible2(!visible2)}
                    class="btn btn-secondary w-100" 
                    aria-controls="vida"
                    data-target="#vida"
                    aria-expanded="false"
                >
                    Vida
                </button>

                <Collapse in={visible2}>
                    <div id="vida">
                        <button type="button" class="btn btn-outline-secondary w-100">
                            Familia
                        </button>
                        <button type="button" class="btn btn-outline-secondary w-100">
                            Sueño
                        </button>
                        <button type="button" class="btn btn-outline-secondary w-100">
                            Comida
                        </button>
                        <button type="button" class="btn btn-outline-secondary w-100">
                            Ocio
                        </button>
                    </div>
                </Collapse>
            </div>
        </>
    );
}

export default Activities;