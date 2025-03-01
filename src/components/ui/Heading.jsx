export default function Heading({ level, children, ...props }) {
  if (level === 1) {
    return (
      <h1 className="heading-1" {...props}>
        {children}
      </h1>
    );
  }

  if (level === 2) {
    return (
      <h2 className="heading-2" {...props}>
        {children}
      </h2>
    );
  }

  if (level === 3) {
    return (
      <h3 className="heading-3" {...props}>
        {children}
      </h3>
    );
  }

  if (level === 4) {
    return (
      <h4 className="heading-4" {...props}>
        {children}
      </h4>
    );
  }

  if (level === 5) {
    return (
      <h5 className="heading-5" {...props}>
        {children}
      </h5>
    );
  }

  if (level === 6) {
    return (
      <h6 className="heading-6" {...props}>
        {children}
      </h6>
    );
  }
}
