
function Services() {
  const services = [
    {
      number: '01',
      title: 'Training Data Preparation',
      description:
        'Organising and structuring relevant information to support the AI agent training process.'
    },
    {
      number: '02',
      title: 'Instruction Development',
      description:
        'Creating clear instructions and guidance to help AI agents understand their intended tasks.'
    },
    {
      number: '03',
      title: 'Example-Based Training',
      description:
        'Using relevant examples to demonstrate expected responses and behaviours.'
    },
    {
      number: '04',
      title: 'Response Evaluation',
      description:
        'Reviewing AI agent outputs for relevance, clarity, consistency and alignment with requirements.'
    }
  ]

  return (
    <main className="page-section">
      <p className="eyebrow">WHAT WE DO</p>
      <h1>AI Agent Training Services</h1>

      <p>
        We focus on the information, instructions and examples
        that help AI agents perform their intended tasks.
        Our services are relevant to AI companies and businesses
        developing or using AI agents.
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Services
