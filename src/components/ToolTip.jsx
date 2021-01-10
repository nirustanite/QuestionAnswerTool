import React from 'react';
import { Popup, Icon } from 'semantic-ui-react';

const ToolTip = (props) => {
    return(
        <Popup
            trigger={<Icon name={props.name} color={props.color} size='large'/>}
            content={props.content}
            position={props.position}
        />
    );
};

export default ToolTip;