import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./LoginScreen.styles";
import { useForm, Controller } from "react-hook-form";
import { getUsers } from "../../api/user.service";
import { UserContext } from "../../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = ({ username, password }) => {
    getUsers()
      .then((users) => {
        const user = users[0];
        if (username === user.username && password === user.password) {
          setCurrentUser({username, password} );
          console.log("Login screenUsuario Logueado " + currentUser.username);
        }
      })
      .catch((err) => console.warn(err));
  };

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  const loggedUser = () => (
    <>
      <Text style={styles.title}>Iniciar de Sesión</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="username"
        rules={{ required: "El nombre de usuario es requerido" }}
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username.message}</Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
        rules={{ required: "La constraseña es requerida" }}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleLogin)}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        {currentUser ? (
          <>
            <Text style={styles.title}>Bienvenido: </Text>
            <Text style={styles.title}>{currentUser.username}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(handleSignOut)}
            >
              <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </>
        ) : (
          loggedUser()
        )}
      </View>
    </View>
  );
};
