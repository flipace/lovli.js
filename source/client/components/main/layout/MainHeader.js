import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// styles
import styles from 'styles/main/Header.css';

const mapStateToProps = (state) => ({
  router: state.router
});
function MainHeader () {
  const navItems = [
    {'name': mf('navigation.register', mf('signup', 'Sign Up')), 'href': '/signup'},
    {'name': mf('navigation.login', mf('login', 'Login')), 'href': '/login'}
  ];

  return (
  	<header className={ styles.transparentHeader }>
      <ul className={ styles.headerItemRight }>
        {navItems.map((result, i) => {
          return (
            <li className={ styles.headerListItem } key={i}>
              <Link className={ styles.headerListLink } to={result.href}>
                {result.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

export default connect(mapStateToProps)(MainHeader);
