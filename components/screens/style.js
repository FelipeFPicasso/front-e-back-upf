import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#eef2f9'
    },
    itemContainer: {
        marginBottom: 16,
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#88d9c0',
        shadowColor: "#000", //shadow para adcionar
        shadowOffset: { //um efeito sombreado abaixo do item
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }, //um efeito de elevação, se destacando na tela
    itemDate: {
        fontSize: 12,
        color: '#8a9bb2',
        alignSelf: 'flex-end'
    }, // alinhando a data a direita do container
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 8,
        color: '#374a67',
    },
    itemDescription: {
        fontSize: 14,
        color: '#6b7c93'
    }
});