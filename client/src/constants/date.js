// Tạo mảng ngày từ 1 đến 31
export const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

// Tạo mảng tháng từ 1 đến 12
export const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

// Tạo mảng năm từ 1900 đến 2100
export const YEARS = Array.from({ length: 2024 - 1900 + 1 }, (_, i) => 1900 + i);