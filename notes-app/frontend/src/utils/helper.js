export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials = (fullName) => {
    const nameArray = fullName.split(' ');
    if (nameArray.length > 1) {
        return `${nameArray[0][0]}${nameArray[nameArray.length - 1][0]}`;
    }
    return fullName[0];
};


