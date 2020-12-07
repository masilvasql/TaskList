import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'
import qrCode from '../../assets/qrcode.png'
import back from '../../assets/back.png'

export default function Header({ showNotification, showBack }) {
    return (
        <View style={styles.header}>
            {
                showBack ?
                    <TouchableOpacity style={styles.leftIcon}>
                        <Image source={back} style={styles.leftIconImage} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.leftIcon}>
                        <Image source={qrCode} style={styles.leftIconImage} />
                    </TouchableOpacity>
            }

            <Image style={styles.logo} source={logo} />
            {showNotification &&
                <TouchableOpacity style={styles.notification}>
                    <Image style={styles.notificationImage} source={bell} />
                    <View style={styles.circle}>
                        <Text style={styles.notificationText}>3</Text>
                    </View>
                </TouchableOpacity>
            }


        </View>
    )
}