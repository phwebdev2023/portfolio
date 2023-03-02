import './tailwindStyles.css';
import './TestComponent.css';
import styles from './TestComponent.module.css';

console.log(styles);

const TestComponent = () => {
  return (
    <div className={`${styles['bold-font-color']} border-style bg-red-700`}>
      Test Component
    </div>
  );
};

export default TestComponent;
