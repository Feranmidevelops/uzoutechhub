import { useInView } from '../../hooks/useInView';

// Fades and lifts its children in the first time they scroll into view.
// `delay` (ms) staggers neighbours; `as` picks the wrapper element.
const Reveal = ({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) => {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
