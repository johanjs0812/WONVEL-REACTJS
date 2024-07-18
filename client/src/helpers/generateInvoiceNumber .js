export const generateInvoiceNumber = () => {
    const currentDate = new Date();
    
    const year = currentDate.getFullYear().toString();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    const hours = ('0' + currentDate.getHours()).slice(-2);
    const minutes = ('0' + currentDate.getMinutes()).slice(-2);
    const seconds = ('0' + currentDate.getSeconds()).slice(-2);
    
    // Tạo chuỗi ngày tháng năm giờ phút giây
    const dateTimeString = `${year}${month}${day}${hours}${minutes}${seconds}`;
    
    // Tạo chuỗi ngẫu nhiên cho phần còn lại (tối đa 20 ký tự)
    const randomString = Math.random().toString().slice(2, 22); // 20 ký tự
    
    // Kết hợp chuỗi ngày tháng năm và chuỗi ngẫu nhiên để tạo mã hóa đơn
    const invoiceNumber = `${dateTimeString}${randomString}`;
    
    return invoiceNumber.slice(0, 20); // Truncate nếu mã dài hơn 20 ký tự
};  