import '../styles/LateralNav.scss';

function LateralNav () {
    return(
        <nav className='lateralNav'>
            <ul> 
                {/* Aqui sustituir luego todo por Links */}
                <li className='lateralNav__link news'>Noticias</li>
                <li className='lateralNav__link minutes'>Actas</li>
                <li className='lateralNav__link calendar'>Calendario</li>
                <li className='lateralNav__link archive'>Archivo </li>
                <li className='lateralNav__link archive'>Prueba ramas </li>
                {/* estos dos son dos desplegables */}
                <li className='lateralNav__colapsable channel'><i class="fa-solid fa-arrow-up"></i> Canales </li> 
                <i class="fa-solid fa-carrot"></i>
                <li className='lateralNav__colapsable dm'> <i class="fa-solid fa-arrow-down"></i> Mensajes Directos</li>
            </ul>
        </nav>
    )
}

export default LateralNav;