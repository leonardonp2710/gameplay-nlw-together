import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
    const uri = 'https://c0.klipartz.com/pngpicture/842/992/gratis-png-discord-ordenadores-servidores-teamspeak-discord-icon-thumbnail.png';
    return(
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
    
}