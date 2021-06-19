import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from '../showMessage';

export const storeData = async (storageKey, value) => {
    // storageKey: adalah string
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(storageKey, jsonValue)
    } catch (e) {
      showMessage('gagal menyimpan data ke local storage');
    }
  };

export const getData = async (storageKey) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        showMessage('gagal meengambil data ke local storage');
    }
  };
  