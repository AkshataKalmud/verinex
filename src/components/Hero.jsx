import { Link } from 'react-router-dom'
function Hero() {
  return (
    <section className="hero">
      <h1>One Platform. Every Approval. Smarter Compliance.</h1>
      <p>Tell VERINEX what you want to build. It tells you which approvals you need and what to do next.</p>
      <Link to="/analyzer" className="btn">Check my approvals</Link>
    </section>
  )
}

export default Hero