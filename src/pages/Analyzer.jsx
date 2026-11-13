import { useState } from 'react'
import { Link } from 'react-router-dom'
import { rules, phaseById, phaseNames } from '../data/rules'

function Analyzer() {
  const [form, setForm] = useState({
    industry: 'food',
    district: 'Pune',
    investment: 2,
    employees: 40,
    powerKw: 50,
    usesWater: false,
    hazardous: false,
  })
  const [result, setResult] = useState(null)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const matched = rules.filter((r) => r.applies(form))
    setResult(matched)
    localStorage.setItem(
      'verinex_project',
      JSON.stringify({ form, ids: matched.map((r) => r.id) })
    )
    localStorage.removeItem('verinex_status')
  }

  const phases = [1, 2, 3]
  const phaseOf = (r) => phaseById[r.id] || 2
  const sequentialDays = result ? result.reduce((sum, r) => sum + r.days, 0) : 0
  const parallelDays = result
    ? phases.reduce((sum, p) => {
        const days = result.filter((r) => phaseOf(r) === p).map((r) => r.days)
        return sum + (days.length ? Math.max(...days) : 0)
      }, 0)
    : 0

  return (
    <main>
      <section>
        <h2>Approval Analyzer</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Industry
            <select name="industry" value={form.industry} onChange={handleChange}>
              <option value="food">Food processing</option>
              <option value="chemicals">Chemicals</option>
              <option value="garments">Garments</option>
              <option value="engineering">Engineering</option>
            </select>
          </label>

          <label>
            District
            <input name="district" value={form.district} onChange={handleChange} />
          </label>

          <label>
            Investment (₹ crore)
            <input type="number" name="investment" value={form.investment} onChange={handleChange} />
          </label>

          <label>
            Employees
            <input type="number" name="employees" value={form.employees} onChange={handleChange} />
          </label>

          <label>
            Power load (kW)
            <input type="number" name="powerKw" value={form.powerKw} onChange={handleChange} />
          </label>

          <label className="check">
            <input type="checkbox" name="usesWater" checked={form.usesWater} onChange={handleChange} />
            Uses water in processing or releases effluent
          </label>

          <label className="check">
            <input type="checkbox" name="hazardous" checked={form.hazardous} onChange={handleChange} />
            Stores or handles hazardous materials
          </label>

          <button type="submit" className="btn">Generate checklist</button>
        </form>

        {result && (
          <div className="result">
            <h3>{result.length} approvals apply to your project</h3>

            <div className="timebox">
              <div>
                <span>One by one</span>
                <strong>{sequentialDays} days</strong>
              </div>
              <div>
                <span>With VERINEX (in parallel)</span>
                <strong>{parallelDays} days</strong>
              </div>
              <div>
                <span>Time saved</span>
                <strong>{sequentialDays - parallelDays} days</strong>
              </div>
            </div>

            <Link to="/dashboard" className="btn">Track these approvals</Link>

            {phases.map((p) => {
              const items = result.filter((r) => phaseOf(r) === p)
              if (items.length === 0) return null
              return (
                <div key={p}>
                  <h4 className="phase">{phaseNames[p]}</h4>
                  <ul className="checklist">
                    {items.map((r) => (
                      <li key={r.id}>
                        <strong>{r.name}</strong>
                        <span>{r.department} · about {r.days} days</span>
                        <p>{r.why}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}

            <p className="note">Indicative checklist. Final requirements are confirmed by the departments.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Analyzer