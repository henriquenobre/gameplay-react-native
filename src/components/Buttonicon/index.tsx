import React from "react";
import{
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityBase
} from  'react-native'

import DiscordImg from '../../assets/discord.png'
import { styles } from "./style";

export function ButtonIcon(){
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>               
            </View>
            <Text style={styles.title}>
                    Entrar com Discord
            </Text>
        </TouchableOpacity>
    )
}