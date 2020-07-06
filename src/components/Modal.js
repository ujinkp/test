import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { FlatList } from 'react-native-gesture-handler';

import CustomButton from './Button';
import { w, h } from '../utils/Layout';
import  i18n, { setLanguage } from '../utils/j18n';

const CustomModal = ({ isModalVisible = false, setModalVisible = () => null, toggleModal = () => null, langs = [] }) => {
	const [lang, setLang] = useState('');
	// const setLangs = (item) => {
	// 	setLang(item);
	// 	setLanguage(item.toLowerCase());
	// };
	const lngs = langs.map(item =>  {
		return (
			<View key={item.id}>
				<CustomButton title={item.language}  />
			</View>
		)
	})

	return (
		<>
			<Modal
				isVisible={isModalVisible}
				style={{ alignItems: 'center' }}
				onBackdropPress={() => setModalVisible(false)}
			>
				<View style={styles.modalView}>
					<Text>{i18n.t('LANGUAGE')}</Text>

					{lngs}
					<CustomButton title="Exit" onPress={toggleModal} style={{ alignItems: 'center' }} />
				</View>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	modalView: {
		width: w(80),
		height: h(40),
		backgroundColor: '#fff'
	}
})


export default CustomModal;