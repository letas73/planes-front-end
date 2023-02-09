import React from 'react'
import Content from '../Content/Content'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Content className='header__content'>
        <h1 className="header__title">
          Путешествуйте с <br /> Комфортом
        </h1>
        <p className="header__descr">
          С нашей компанией вы забудете обо всем, кроме <br /> высокого уровня путешествий
        </p>
      </Content>
      <img src="img/wave.svg" alt="" className='header__img' />
    </header>
  )
}

export default Header