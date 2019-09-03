# snake_validation
js class validation


    let value = 'Vitalii'
    return   new Validation('First Name', value).min(3).pattern(10).validate();

    return object
    {
       status: true,
       errors: [],
       name: 'First Name',
       value: 'Vitalii'
    }
