import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { FiArrowLeft } from "react-icons/fi";
import '../styles/components/sidebar.css';
import { useHistory } from 'react-router-dom';

export default function Sidebar() {

    const { goBack } = useHistory();

    return (
        <aside className="app-sidebar">
            <img src={mapMarkerImg} alt="Happy" />

            <footer>
            <button type="button" onClick={goBack}>
                <FiArrowLeft size={24} color="#FFF" />
            </button>
            </footer>
        </aside>
    );
}