const formatDateBefor = (dateString) => {
    let date = new Date(dateString);
    
    let day = date.getDate().toString().padStart(2, '0'); // Đảm bảo ngày có hai chữ số
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Đảm bảo tháng có hai chữ số
    let year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

export { formatDateBefor }