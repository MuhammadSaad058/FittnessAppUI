// SignInScreen.js
import {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,Modal,TouchableWithoutFeedback,Pressable
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
 const handleSignup = async () => {
  // Check if all fields are filled
  if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
    setModalMessage('Please fill in all fields.');
    setModalVisible(true);
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    setModalMessage('Passwords do not match');
    setModalVisible(true);
    return;
  }

  try {
    await AsyncStorage.setItem('user', JSON.stringify({ email, password }));
    setModalMessage('Account created successfully');
    setModalVisible(true);
    // Delay navigation to allow user to see the success message
    setTimeout(() => navigation.navigate('SigninScreen'), 1500);
  } catch (error) {
    setModalMessage('Failed to sign up');
    setModalVisible(true);
  }
};

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>
        <Text style={styles.titlePurple}>FIT</Text>
        <Text style={styles.titleOriginal}>NESS</Text>
      </Text>
      <Text style={styles.subtitle}>Make Yourself Better</Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        placeholderTextColor="#A9A9A9"
        onChangeText={setEmail}
         autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A9A9A9"
        onChangeText={setPassword}
         autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#A9A9A9"
        onChangeText={setConfirmPassword}
         autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSignup}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>Alert.alert("This Screen is not yet Complete")}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true} 
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Pressable style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={styles.closeButtonText}>×</Text>
              </Pressable>
              <Text style={styles.modalText}>{modalMessage}</Text>
              <Pressable style={styles.modalButton} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Background color
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6F61', // Title color
  },
  subtitle: {
    fontSize: 18,
    color: '#4F4F4F',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  loginButton: {
    backgroundColor: '#FF6F61', // Button color
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#4F4F4F',
  },
  titlePurple: {
    color: '#6A1B9A', // Purple color for "FIT"
  },
  titleOriginal: {
    color: '#FF6F61', // Original color for "NESS"
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 50,
    width: '80%',
    alignItems: 'center',
    position: 'relative',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#C49F0F',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#007BFF',
  },
});

export default SignUpScreen;
