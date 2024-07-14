import { useState } from 'react';

const useGuestCounts = () => {
  const [guestCounts, setGuestCounts] = useState({
    adult: 1,
    child: 0,
    youngChild: 0,
    baby: 0,
  });

  const increment = (type) => {
    setGuestCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const decrement = (type) => {
    if (type === 'adult' && guestCounts.adult === 1) {
      return;
    }
  
    if (guestCounts[type] > 0) {
      setGuestCounts((prevCounts) => ({
        ...prevCounts,
        [type]: prevCounts[type] - 1,
      }));
    }
  };

  return {
    guestCounts,
    increment,
    decrement,
  };
};

export default useGuestCounts;
