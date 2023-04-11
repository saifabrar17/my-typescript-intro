import React from 'react';
import TextInput from '../shared/TextInput';

const FirstComponent = () => {
    return (
        <div>
         <TextInput label='First Name' name='firstName' type='text' ></TextInput>
         <TextInput label='Last Name' name='lastName' type='text' ></TextInput>
        </div>
    );
};

export default FirstComponent;