import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 30
    },
    notification: {
        position: 'absolute',
        right: 20,
    },
    notificationImage: {
        width: 30,
        height: 35
    },
    circle: {
        width: 25,
        height: 25,
        backgroundColor: "#fff",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 16,
        bottom: 18
    },
    leftIcon: {
        position: 'absolute',
        left: 20
    },
    leftIconImage: {
        width: 30,
        height: 30
    },
    notificationText: {
        fontWeight: 'bold',
        color: "#EE6B26"
    }
})

export default styles;