export function isPlaceholder(text) {
  return typeof text === 'string' && text.includes('[') && text.includes(']');
}

export function Text({ children, className = '' }) {
  if (typeof children !== 'string') return children;
  const placeholder = isPlaceholder(children);
  return (
    <span className={placeholder ? `placeholder-text ${className}` : className}>
      {children}
    </span>
  );
}
