import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    searchView: {
        flex: 1,
        height: 24,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 10,
        borderBottomColor: 'rgba(0, 0, 0, 0.18)',
        borderBottomWidth: 1,
    },
    input: {
        flex: 9,
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0,
        height: 48, 
        paddingLeft: 10
    },
    searchBtn: {
        width: 24,
        height: 24,
        fontSize: 16,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default styles;