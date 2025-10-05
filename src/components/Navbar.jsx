import {NavLink} from 'react-router-dom';
import AlvaradoGas from '../assets/AlvaradoGas.png';
import social from '../assets/social.png';

function Navbar() {
const getLinkStyle = ({ isActive }) => ({
textDecoration: 'none',
color: '#eaf0ffff',
fontWeight: isActive ? 'bold' : 'normal',
padding: '8px 15px',
borderRadius: isActive ? '5px' : '0',
border: isActive ? '2px solid #fff3f0ff' : '2px solid transparent',
backgroundColor: isActive ? '#fa5e25ff' : 'transparent',
});


return (
<nav style={{ 
    padding: '0.5rem', 
    backgroundColor: '#fa5e25ff', 
    borderBottom: '1px solid #ccc',
    display: 'flex',  
    alignItems: 'center', 
    gap: '10px' }}>

<img src={AlvaradoGas} alt="logo" style={{ width: '150px', verticalAlign: 'middle'}}/>

<NavLink to="/" style={getLinkStyle}>
Inicio
</NavLink>
<NavLink to="/acerca-de" style={getLinkStyle}>
Acerca de
</NavLink>
<NavLink to="/Servicios" style={getLinkStyle}>
Servicios
</NavLink>

<NavLink to="/Portafolio" style={getLinkStyle}>
Portafolio
</NavLink>

<NavLink to="/Carrito" style={getLinkStyle}>
Carrito
</NavLink>


<a href="">
<img src={social} alt="whatsapp" style={{ width: '60px', verticalAlign: 'middle', paddingLeft: '2rem'}}/>
</a>
</nav>
);
}
export default Navbar;