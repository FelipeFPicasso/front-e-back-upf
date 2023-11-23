import styles from './style';
import React, { useFocusEffect, useEffect, useState } from 'react';
import { fetchEventos } from '../../services/eventoService';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { deletarEvento } from './deletar/DeletarEvento';




const CORES = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];

function ListaEventos({ navigation }) {
    const [eventos, setEventos] = useState([]);
    useEffect(() => {
        const carregarEventos = async () => {
            const data = await fetchEventos();
            setEventos(data);
        };
        carregarEventos();
    }, []);

    

    function editarEvento(eventoSelecionado) {
        navigation.navigate('EdicaoEvento', { evento: eventoSelecionado });

        useFocusEffect(
            React.useCallback(() => {
                const carregarEventos = async () => {
                    const data = await fetchEventos();
                    setEventos(data);
                };
                carregarEventos();
            }, [])
        );


    }

    return (
        <View style={styles.container}>
            <FlatList
                data={eventos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => {
                    const corItem = CORES[index % CORES.length];
                    return (
                        <TouchableOpacity onPress={() => editarEvento(item)}
                            onLongPress={() => { deletarEvento(item, eventos, setEventos) }}>
                            <View style={{ ...styles.itemContainer, backgroundColor: corItem }}>
                                <Text style={styles.itemTitle}>{item.name}</Text>
                                <Text style={styles.itemDate}>{item.price}</Text>
                                <Text style={styles.itemDescription}>{item.status}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

export default ListaEventos;