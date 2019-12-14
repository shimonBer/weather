import React from 'react';
import AsyncSelect from 'react-select/async';import '../../themes/search.page.scss';

export default (props) => {

    return (
        <Select options = {props.options} />
    );
}