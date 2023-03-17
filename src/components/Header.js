import '../styles/Header.scss'
import logo from '../images/logo-recortado.png'
import user from '../images/meme.png'

function Header() {
    return(
         <header className="header">
        <a href="j#" target="blank"> 
        {/* aqui no se a q pagina enlazarlo aun o si poner un desplegable */}
          <img src={logo} alt="" className="header__logo" />
        </a>
         {/* <p className="header__title">Bajo el Asfalto esta la huerta</p> */}
         <form className='header__form'>
            <input className="header__input" 
            autoComplete="off"
            type="search" 
            name="search"
            id="search"
            placeholder="Buscador..."
            // onInput={handleNewSearch}
            // value={search} 
            />
         </form>
         <div className='header__container'>
        {/* aqui no se a q pagina enlazarlo aun o si poner un desplegable */}
          <img src={user} alt="" className="header__user" />
        </div>
      </header>
    )
}
export default Header;