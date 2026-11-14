import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="fade d1">One Platform. Every Approval. Smarter Compliance.</h1>
        <p className="fade d2">
          Tell VERINEX what you want to build. It tells you which approvals you need and what to do next.
        </p>
        <Link to="/analyzer" className="btn fade d3">Check my approvals</Link>
      </div>
    </section>
  )
}

export default Hero