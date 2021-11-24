import Button from 'carbon-components-react/lib/components/Button';
import Slider from 'carbon-components-react/lib/components/Slider';
import Toggle from 'carbon-components-react/lib/components/Toggle';

import React, { useState } from 'react';

interface Props {}
const ChildHappiness: React.FC<Props> = () => {
  const [val, setVal] = useState(5);
  return (
    <>
      <h3>Child Happiness meter</h3>
      <Button type="button" onClick={() => setVal(Math.round(Math.random() * 10))}>
        Change Age to make the Child Happy
      </Button>
      <Slider max={12} min={0} value={val} onChange={({ value }) => setVal(value)} />
      <h4>{val}</h4>
      <Toggle
        labelText="Is Child Happy?"
        size="md"
        labelA="No"
        labelB="Yes"
        defaultToggled
        className="some-class"
        id="toggle-1"
      />
    </>
  );
};
export default ChildHappiness;
