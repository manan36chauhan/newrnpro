import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Clipboard,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  const [fcmToken, setFcmToken] = useState('');

  useEffect(() => {
    // Request permission to receive push notifications (required for iOS)
    messaging()
      .requestPermission()
      .then(() => {
        // Get the FCM token
        messaging()
          .getToken()
          .then(token => {
            setFcmToken(token);
          })
          .catch(error => {
            console.log('Error getting FCM token:', error);
          });
      })
      .catch(error => {
        console.log('Permission rejected:', error);
      });
  }, []);
  console.log('deice fcm token---->>>', fcmToken);
  const handleCopyToken = () => {
    Clipboard.setString(fcmToken);
  };
  return (
    <View>
      <Text>
        AAAAW91AQBo:APA91bH9KD1hojhnH2F7C041ep_BjUeTgjJFiFkDHd1QvsLBi-aRQoQ_ENTpexVQjeESwGuZXcOEuI35UnsZmgMhBR9yUcB8EQ5EmNPMZPhw00xm1xiO0mWS7Nu2uymXoOa3Wru7ldf9
      </Text>

      <Text>
        ------------------------------------------------------------------------------------------------------
      </Text>
      <Text style={styles.token}>{fcmToken}</Text>

      <TouchableOpacity style={styles.copyButton} onPress={handleCopyToken}>
        <Text style={styles.copyButtonText}>Copy fcmToken</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  token: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  copyButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  copyButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
