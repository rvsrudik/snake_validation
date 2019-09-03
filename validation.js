import patterns from './patterns'

class Validation {
    constructor(name = 'not set', value = 'not set') {
        this.name = name;
        this.value = value;
        this.status = true;
        this.errors = [];
        this.validationsPreset = []
    }

    min = (len) => {
        if (this.value.length < len) {
            this.status = false;
            this.errors.push(this.name + ' is too short. Min ' + len);
        }

        return this;
    }

    max = (len) => {
        if (this.value.length > len) {
            this.status = false;
            this.errors.push(this.name + ' is too long. Max ' + len);
        }

        return this;
    }

    pattern = (name) => {
        var res = new RegExp(patterns[name]).test(this.value);       

        if (!res) {
            this.status = false;
            this.errors.push(this.name + ' is wrong value.');
        }

        return this;
    }
    
    validate = () => {
       let validateObj = {
            status:  this.status,
            errors:  this.errors,
            name:    this.name,
            value:   this.value
        }

        
    
        return validateObj;
    }

    set = (methods) => {
        this.validationsPreset = methods;

        return this;
    }

    do = (name, value) => {
        this.name = name;
        this.value = value;
        for (let method in this.validationsPreset) {
            this[method](...this.validationsPreset[method]);
        }

        return this.validate();
    }
  }

  

  export default Validation;