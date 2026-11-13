
function Approach() {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      description:
        'Identify the AI agent’s purpose, intended users and training requirements.'
    },
    {
      number: '02',
      title: 'Prepare',
      description:
        'Organise relevant information and develop suitable training examples.'
    },
    {
      number: '03',
      title: 'Instruct',
      description:
        'Establish clear instructions and guidance for the agent’s intended tasks.'
    },
    {
      number: '04',
      title: 'Evaluate',
      description:
        'Review responses against the intended requirements and expectations.'
    },
    {
      number: '05',
      title: 'Refine',
      description:
        'Identify areas for improvement and refine training materials where needed.'
    }
  ]

  return (
    <main className="page-section">
      <p className="eyebrow">OUR APPROACH</p>
      <h1>A structured approach to AI agent training.</h1>

      <p>
        We believe effective AI agent training requires a
        considered process. Our approach focuses on understanding
        requirements, preparing information, providing instructions
        and evaluating results.
      </p>

      <div className="service-grid">
        {steps.map((step) => (
          <article className="service-card" key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Approach
