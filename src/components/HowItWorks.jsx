import { ClipboardList, ListChecks, FileUp, Activity } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Describe your project',
    text: 'Enter your industry, location, investment and workforce once.',
    color: 'c1',
  },
  {
    icon: ListChecks,
    title: 'Get your checklist',
    text: 'See every approval that applies, why it applies, and the order to follow.',
    color: 'c2',
  },
  {
    icon: FileUp,
    title: 'Prepare documents',
    text: 'Know what to submit and catch missing or expired papers early.',
    color: 'c3',
  },
  {
    icon: Activity,
    title: 'Track to approval',
    text: 'Follow every application and your readiness score from one dashboard.',
    color: 'c4',
  },
]

function HowItWorks() {
  return (
    <section id="how" className="how">
      <div className="how-inner">
        <p className="eyebrow">Process</p>
        <h2>How it works</h2>
        <p className="section-sub">From a project idea to a fully approved unit in four simple steps.</p>

        <div className="steps">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div className="step" key={s.title}>
                <div className={'step-icon ' + s.color}>
                  <Icon size={28} strokeWidth={1.8} />
                  <span className="step-num">{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks