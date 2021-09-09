


const Validation = (elements) => {
    let errors = {
        isValidated: true
    };
    if (elements.Search === null) {
        errors.search = "Field cannot be empty";
        errors.isValidated = false;
    }
    if (/^[\w\-\s]+$/.test(elements.Search)) {
        errors.search = "Invalid input";
        errors.isValidated = false;
    }
    return errors;
}

export default Validation;
