import { Fragment } from 'react';
import { Outlet, Link } from  'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assests/crown.svg';

import './navigation.style.scss';

const Navigation = () => {
    return(
       <Fragment>
          <div className='navigation'>
             <Link className='logo-container' to='/home'>
             < CrwnLogo />
             </Link>
             <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/contact'>
                    CONTACT
                </Link>
                <Link className='nav-link' to='/auth'>
                    SIGN IN
                </Link>
                <Link className='nav-link' to='/cart'>
                    CART
                </Link>
             </div>
          </div>
         <Outlet />
       </Fragment>
    )
 }

 export default Navigation;

