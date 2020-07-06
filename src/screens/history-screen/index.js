import React, { useState } from 'react';
import { View, Text } from 'react-native';

import CustomButton from '../../components/Button';
import CustomModal from '../../components/Modal';
import { language } from '../../utils/j18n';
import i18n from '../../utils/j18n';

const langs = [
	{
		id: 0,
		lng: 'en',
		language: 'english'
	},
	{
		id: 1,
		lng: 'uk',
		language: 'ukrainian'
	}
]

const HistoryScreen = () => {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};


	return (
		<>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>{i18n.t('HISTORY_SCREEN')}</Text>
				<CustomButton title={i18n.t('LANGUAGE')} onPress={toggleModal} />
			</View>
			<CustomModal
				isModalVisible={isModalVisible}
				setModalVisible={setModalVisible}
				toggleModal={toggleModal}
				langs={langs}
			/>
		</>
	);
}


export default HistoryScreen;