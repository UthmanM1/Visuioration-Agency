type FlowStep = {
  num: string;
  title: string;
  detail: string;
};

export default function CommerceArchitecture({
  steps,
  onDark = false,
  compact = false,
}: {
  steps: FlowStep[];
  onDark?: boolean;
  compact?: boolean;
}) {
  const classes = ["commerce-flow", onDark && "on-dark", compact && "compact"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {steps.map((step, i) => (
        <div key={step.num}>
          <div className="flow-step">
            <span className="flow-num">{step.num}</span>
            <div>
              <h5>{step.title}</h5>
              <p>{step.detail}</p>
            </div>
          </div>
          {i < steps.length - 1 && <div className="flow-connector" aria-hidden="true"></div>}
        </div>
      ))}
    </div>
  );
}
