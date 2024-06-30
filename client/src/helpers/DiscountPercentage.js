const calculateDiscountPercentage = (oldPrice, newPrice) => {
    if (oldPrice === null || newPrice === null) {
        return;
    }

    const discountPercentage = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.floor(discountPercentage) + "%";
}

export default calculateDiscountPercentage
  
  