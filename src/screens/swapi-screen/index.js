import * as React from 'react';
import { View, Text } from 'react-native';

import i18n from '../../utils/j18n';

const SwapiScreen = () => {
    return (
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>{i18n.t('SWAPI_SCREEN')}</Text>
        </View>
    );
}

export default SwapiScreen;