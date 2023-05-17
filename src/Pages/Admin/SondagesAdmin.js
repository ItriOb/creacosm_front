import React from 'react';
import NavBar from '../../Components/NavBar';
import {FaSearch} from 'react-icons/fa';
import Footer from '../../Components/Footer';
import CardAdmin from '../../Components/Admin/CardAdmin';

const SondagesAdmin = () => {
    return(
        <div className="container">
            <div className='separate '>
                <h1>Mes Sondages</h1>
            </div>
            <CardAdmin titre="Sondage 1"/>
            <CardAdmin titre="Sondage 2"/>
        </div>)
};

export default SondagesAdmin;