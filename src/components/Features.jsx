import { Search, FileCheck, Activity, Workflow, Gauge, Bell } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Approval Finder',
    text: 'Describe your project once and see every licence, NOC and registration that applies, with the reason for each.',
    live: true,
  },
  {
    icon: Workflow,
    title: 'Parallel Processing',
    text: 'Independent approvals are grouped into phases so they run together, and you see how many days it saves.',
    live: true,
  },
  {
    icon: Gauge,
    title: 'Readiness Score',
    text: 'A clear score shows how close your project is to being fully approved and where to focus next.',
    live: true,
  },
  {
    icon: Activity,
    title: 'Live Tracking',
    text: 'Follow every application from documents ready to approved, all from one dashboard.',
    live: true,
  },
  {
    icon: FileCheck,
    title: 'Document Check',
    text: 'Find missing, expired or mismatched documents before you submit your application.',
    live: false,
  },
  {
    icon: Bell,
    title: 'Renewal Alerts',
    text: 'Get reminders before licences expire so compliance never lapses.',
    live: false,
  },
]

function Features() {
  return (
    <section id="features">
      <p className="eyebrow">Features</p>
      <h2>What VERINEX does</h2>
      <p className="section-sub">
        Everything an entrepreneur needs to go from idea to approved, in one place.
      </p>

      <div className="cards">
        {features.map((item) => {
          const Icon = item.icon
          return (
            <div className="card" key={item.title}>
              <div className="card-top">
                <div className="icon-wrap">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <span className={item.live ? 'tag live' : 'tag soon'}>
                  {item.live ? 'Live' : 'Coming soon'}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features