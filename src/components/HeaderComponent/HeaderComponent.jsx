import { AiOutlineMenu } from 'react-icons/ai';

import './header.css';

const HeaderComponent = () => {
  return (
    <header>
      <h3 className='logo'>Our Recipe</h3>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>

      <AiOutlineMenu className='menuBar' />
    </header>
  );
};

export default HeaderComponent;
