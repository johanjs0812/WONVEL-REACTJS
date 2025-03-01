const formatCurrency = (amount) => {
    if (amount) {
        const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return formattedAmount + " ₫"; 
    }
}

export default formatCurrency;