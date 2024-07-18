function cvArrayGuets(originalArray, id) {
    if (originalArray) {
        const dataArray = originalArray.flatMap(item =>
            item.formData.map(data => ({
                name: data.fullName,
                gender: data.gender,
                birthday: `${data.dayOfMonth}/${data.monthOfYear}/${data.year}`,
                booking_id: id
            }))
        );
        return dataArray;
    }
}

export default cvArrayGuets;