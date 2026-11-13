import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav>
        <h2><Link to="/">VERINEX</Link></h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/analyzer">Approval Analyzer</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar