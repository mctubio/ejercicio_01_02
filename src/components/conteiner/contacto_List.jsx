import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import Contactos from '../pure/contacto'

const ContactoListComponent = () => {

    const contactoPrueba = new Contacto('María', 'Gomez', 'mgomez@prueba.com', true)
    return (
        <div>
            <h1>Tus contactos</h1>
            <Contactos contacto={contactoPrueba}></Contactos>
        </div>
    );
};


ContactoListComponent.propTypes = {

};


export default ContactoListComponent;
