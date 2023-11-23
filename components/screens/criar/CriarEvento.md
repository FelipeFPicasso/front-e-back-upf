import styles from '.style';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { criarEvento } from '../../../services/eventoService';

function criacaoEvento({ route, navigation }) {
    const [evento, setEvento] = useState(route.params.evento);
    const salvarCriacao = async() = {
        try {
            await criarEvento(evento);
            alert('Evento criado com sucesso!');
            navigation.goBack();
        } catch(error) {
            alert('Erro ao criar o evento.');
            console.error(Erro ao criar evento, error);
        }
    };
    return (
        View style = { styles.container }
    TextInput
    value = { evento.nome }
    onChangeText = { nome = setEvento({ ...evento, nome }) }
    placeholder = Nome do Evento
                style = { styles.input }
            
            Button title = Criar onPress = { salvarCriacao } 
        View);
}
export default criacaoEvento;   