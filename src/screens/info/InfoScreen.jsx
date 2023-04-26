import React, { useContext, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { styles } from "./InfoScreen.styles";
import { useForm, Controller } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";

export const InfoScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      mensaje: "",
    },
  });

  const sendAlert = () => {
    Alert.alert("Mensaje Enviado");
  };

  const { currentUser } = useContext(UserContext);

  const userLogged = (value) =>{

    return currentUser ? (currentUser.username) : (value);
  }
   
    
   
  

  const userLoggedEmail = (value) =>(
    currentUser ? (currentUser.username+'@gmail.com') : (value)
   )

 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultas e Informes</Text>
      <Text style={styles.description}>
        Por favor complete el formulario, su mensaje será respondido a la
        brevedad.
      </Text>
      <View style={styles.containerInputs}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={'Nombre'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={userLogged(value)}
              autoCapitalize="none"
            />
          )}
          name="nombre"
          rules={{ required: "El nombre es requerido" }}
        />
        {errors.nombre && (
          <Text style={styles.errorText}>{errors.nombre.message}</Text>
        )}
      
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={userLoggedEmail(value)}
              autoCapitalize="none"
            />
          )}
          name="email"
          rules={{ required: "El email es requerido" }}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
    
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputArea}
              placeholder="Mensaje"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              editable
              multiline
              numberOfLines={8}
              maxLength={500}
            />
          )}
          name="mensaje"
          rules={{ required: "El mensaje es requerido" }}
        />
        {errors.mensaje && (
          <Text style={styles.errorText}>{errors.mensaje.message}</Text>
        )}
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(sendAlert)}
          >
            <Text style={styles.buttonText}>ENVIAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
