import React from 'react';
import {Input} from "reactstrap";

const FieldGroup = ({ id, label, validator, help, ...props }) => {
    var formGroupOpts = [];
    if(validator) {
        formGroupOpts['validationState'] = validator;
    }
    return (
        <Input {...props} />
    );
}
export default FieldGroup;
