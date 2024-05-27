import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = () => {
    if (username && (username.length < 5 || username.length > 10)) {
      setError('El nombre de usuario debe tener entre 5 y 10 caracteres.');
      return;
    }
    if (email && !validateEmail(email)) {
      setError('Ingrese una dirección de email válida.');
      return;
    }
    if (password.length < 5 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[^\w]/.test(password)) {
      setError('La contraseña debe tener al menos 5 caracteres, una letra mayúscula, una letra minúscula y un símbolo.');
      return;
    }
    setError('');
    // Navegar al panel de bienvenida
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button mode="contained" onPress={handleLogin}>
        Iniciar Sesión
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 12,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

export default LoginScreen;
