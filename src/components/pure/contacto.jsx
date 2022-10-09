import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const Contactos = ({contacto}) => {
    return (
        <div>
            <h2>Nombre: {contacto.nombre} </h2>
            <h2>Apellido: {contacto.apellido}</h2>
            <h3>email: {contacto.email}</h3>
            <h4>Este contacto esta conectado: {contacto.conectado ? 'En linea':'No disponibke'}</h4>
        </div>
    );
};


Contactos.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),

};


export default Contactos;
