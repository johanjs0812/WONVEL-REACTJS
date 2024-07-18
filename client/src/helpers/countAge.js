export const countAge = (data) => {
    return data.reduce((acc, item) => {
        acc[`ag_${item.formNumber}`] = item.formData.length;
        return acc;
    }, {});
};

