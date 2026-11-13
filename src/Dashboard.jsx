import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { rules } from '../data/rules'

const STATUSES = ['Not started', 'Documents ready', 'Submitted', 'Approved']
const WEIGHT = { 'Not started': 0, 'Documents ready': 0.33, 'Submitted': 0.66, 'Approved': 1 }

function Dashboard() {
  const saved = JSON.parse(localStorage.getItem('verinex_project') || 'null')
  const [statuses, setStatuses] = useState(() =>
    JSON.parse(localStorage.getItem('verinex_status') || '{}')
  )

  useEffect(() => {
    localStorage.setItem('verinex_status', JSON.stringify(statuses))
  }, [statuses])

  if (!saved) {
    return (
      <main>
        <section>
          <h2>Dashboard</h2>
          <p>No project yet. Generate a checklist first.</p>
          <Link to="/analyzer" className="btn">Go to Approval Analyzer</Link>
        </section>
      </main>
    )
  }

  const items = rules.filter((r) => saved.ids.includes(r.id))
  const statusOf = (r) => statuses[r.id] || 'Not started'
  const score = Math.round(
    (items.reduce((sum, r) => sum + WEIGHT[statusOf(r)], 0) / items.length) * 100
  )
  const count = (s) => items.filter((r) => statusOf(r) === s).length
  const level = score >= 70 ? 'Healthy' : score >= 35 ? 'In progress' : 'Just started'

  return (
    <main>
      <section>
        <h2>Project Dashboard</h2>
        <p className="note">
          {saved.form.industry} · {saved.form.district} · {saved.form.employees} employees · ₹{saved.form.investment} crore
        </p>

        <div className="score">
          <div>
            <span>Readiness score</span>
            <strong>{score}%</strong>
            <em>{level}</em>
          </div>
          <div className="bar">
            <div className="fill" style={{ width: score + '%' }}></div>
          </div>
        </div>

        <div className="timebox">
          <div><span>Documents ready</span><strong>{count('Documents ready')}</strong></div>
          <div><span>Submitted</span><strong>{count('Submitted')}</strong></div>
          <div><span>Approved</span><strong>{count('Approved')}</strong></div>
        </div>

        <ul className="checklist">
          {items.map((r) => (
            <li key={r.id} className="row">
              <div>
                <strong>{r.name}</strong>
                <span>{r.department} · about {r.days} days</span>
              </div>
              <select
                value={statusOf(r)}
                onChange={(e) => setStatuses({ ...statuses, [r.id]: e.target.value })}
              >
                {STATUSES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Dashboard