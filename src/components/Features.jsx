const features = [
  { title: "Approval Finder", text: "Describe your project once and see every approval you need." },
  { title: "Document Check", text: "Find missing or expired documents before you submit." },
  { title: "Live Tracking", text: "See every application, deadline and renewal in one place." },
]

function Features() {
  return (
    <section id="features">
      <h2>What VERINEX does</h2>
      <div className="cards">
        {features.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features