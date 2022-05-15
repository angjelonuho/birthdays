const formatDate = (date: Date) => {
    const padSecondDigits = (dateNumber: number) => {
        return dateNumber.toString().padStart(2, '0');
    }
    return ([
        padSecondDigits(date.getDate()),
        padSecondDigits(date.getMonth() + 1),
        date.getFullYear(),
    ]).join('/');
}

export default formatDate