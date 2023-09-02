import React from 'react';
import ChildComponent from './childprops';

function ParentComponent() {
  const greeting = 'Hello, React! from Parent to Child';

  return (
    <div>
      <ChildComponent message={greeting} />
    </div>
  );
}
export default ParentComponent;