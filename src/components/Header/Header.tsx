import logo from './../../assets/logo.svg';
import style from './Header.module.css'


export function Header(){
    return(
        <header className={style.headerLogo}>
            <img src={logo} alt="" />
        </header>
    )
}