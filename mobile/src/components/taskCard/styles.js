import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        width: '95%',
        height: 80,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 10
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    typeActive: {
        width: 45,
        height: 45
    },
    cardTitle: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    cardRight: {
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    cardDate: {
        color: '#EE6B26',
        fontWeight: 'bold',
        fontSize: 16
    },
    cardTime: {
        color: '#707070'
    },
    cardDone: {
        opacity: 0.5
    }
})

export default styles