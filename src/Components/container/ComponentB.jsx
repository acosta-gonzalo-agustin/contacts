import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Contact} from "../../models/Contact"



const ComponentB = (Contact) => {


    const [estado,changeState] =  useState(1);

    const state = () => {

        changeState(estado * (-1))
       
    }
    

    return (
        <div>
            <p>{Contact.name}</p>
            <p>{Contact.last_name}</p>
            <p>{Contact.email}</p>
            <button onClick={state}>CAMBIAR ESTADO</button>
            <p>{estado === 1 ? "contacto en linea" : "Contacto no disponible"}</p>
        </div>
    );
};


ComponentB.propTypes = {
    Contact:PropTypes.instanceOf(Contact)

};



export default ComponentB;


