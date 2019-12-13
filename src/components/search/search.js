import React from 'react';
import '../../themes/search.page.scss';

export default () => {

    return (
        <div class="input-group input-group-lg col-4">
            <div class="input-group-prepend">
                <span class="input-group-text">Search</span>
            </div>
            <input type="text" class="form-control"/>
        </div>
    );
}