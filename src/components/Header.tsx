import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header className="bg-gray-700 h-52 grid place-items-center">
      <img src={logo} alt="Logotipo Todo"/>
    </header>
  )
}
