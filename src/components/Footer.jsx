import React from 'react';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import tiktok from '../assets/tiktok.png'; 

function Footer() {
    const footerStyle = {
        backgroundColor : '#fa5e25ff',
        color: '#eaf0ffff',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    }

    const columna = {
        flex: 1,
        minWidth: '200px',
        padding: '0 1rem',
    }

    return (
    <footer style={footerStyle}>
        <div style={columna}>
            <h3>Áreas de servicio</h3>
            <p>Salta Capital</p>
            <p>San lorenzo</p>
            <p>Cachi</p>
            <p>Cerrillos</p>
        </div>

        <div style={columna}>
            <h3>Teléfono</h3>
            <p>0387-152200011</p>
        </div>

        <div style={columna}>
            <h3>E-mail</h3>
            <p>gmail@gmail.com</p>
        </div>

        <div style={columna}>
            
            <h3>Síguenos</h3>
            <div style={{
            display: 'flex',
            gap: '20px',
            }}>
            <a href="">
            <img src={facebook} alt="facebook" style={{width: '50px'}}/>
            </a>

            <a href="">
            <img src={instagram} alt="instagram" style={{width: '50px'}}/>
            </a>

            <a href="">
            <img src={tiktok} alt="tiktok" style={{width: '50px'}}/>
            </a>
            </div>
        </div>
    </footer>
    );
}

export default Footer;