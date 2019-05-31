import React from 'react';
import Tooltip from '../Tooltip';
import Text from '../../Text/Text';

export default (
    <Tooltip
        uxpId="tooltip1"
        upgrade
        appendTo="window"
        content="Enter your postal code, so postman can easier send you a mail."
    >
        <Text uxpId="textt1">Hover me</Text>
    </Tooltip>
);