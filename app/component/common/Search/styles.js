import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    searchView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    inputView: {
        flex: 9,
        borderWidth: 1,
        padding: 10
    },
    input: {
        flex: 9,
        height: 50, 
        padding: 10,
        borderColor: 'gray', 
        borderWidth: 1
    },
    searchBtn: {
        flex: 1,
        borderColor: 'gray', 
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default styles;