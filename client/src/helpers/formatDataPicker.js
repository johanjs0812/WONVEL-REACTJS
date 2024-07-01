const formatDateBefor = (dateString) => {
    let date = new Date(dateString);
    
    let day = date.getDate().toString().padStart(2, '0'); // Đảm bảo ngày có hai chữ số
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Đảm bảo tháng có hai chữ số
    let year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

const formatDateFT = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export { formatDateBefor, formatDateFT }