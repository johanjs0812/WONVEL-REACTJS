export const removeDuplicatesAge = (data) => {
    const uniqueData = [];
    const seen = new Set();

    data.forEach(item => {
        const key = JSON.stringify(item.formData);
        if (!seen.has(key)) {
            seen.add(key);
            uniqueData.push(item);
        }
    });

    return uniqueData;
};
