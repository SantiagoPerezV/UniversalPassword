import './Header.css'

const Header = () => {
  return (
      <nav>
        <ul>
          <li>
            <a className='home' href="#header">UNIVERSAL PASSWORD</a>
          </li>
          <li>
            <a className='i' href="#requisitos">REQUISITOS</a>
          </li>
          <li>
            <a className='i' href= "#contraseña">CONTRASEÑA</a>
          </li>
          <li>
            <a className='i' href="#footer">CONTACTO</a>
          </li>
        </ul>
      </nav>
  );
};

  export default Header