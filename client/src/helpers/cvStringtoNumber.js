const convertStringToNumber = (str) => {
    // Kiểm tra xem chuỗi có phải là số hợp lệ không
    if (!isNaN(str)) {
      return parseFloat(str);
    }
    return NaN; // Trả về NaN nếu không phải là số hợp lệ
  };
export default convertStringToNumber;  