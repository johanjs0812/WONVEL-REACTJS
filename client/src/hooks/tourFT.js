import { useState } from 'react';

const useChildManagement = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [clickedComponent, setClickedComponent] = useState(null);

  const handleChildClick = (value, componentName) => {
    setSelectedValue(value);
    setClickedComponent(componentName);
  };

  return {
    selectedValue,
    clickedComponent,
    handleChildClick
  };
};

export default useChildManagement;
