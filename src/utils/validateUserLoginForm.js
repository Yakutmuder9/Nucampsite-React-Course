
export const validateUserLoginForm = (values ) => {
    const errors = {};
    // const  {username, password} = values;

    if (!values.username) {
      errors.username = "Required";
    }else if (values.username.length < 6) {
      errors.username = "Must be at least 6 characters.";
    }
    
    if (!values.password) {
        errors.password = "Required";
    }
    else if (values.password.length < 8) {
      errors.password = "Must be at least 8 characters.";
    }
  

    return errors;
}
