import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import {
    ImageBackground,
    Text,
    View,
    FlatList
} from 'react-native';

import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { styles } from './styles'

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";

export function AppointmentDetails(){
    const members = [
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'offline'
        }
    ]
    return (
        <Background>
            <Header
                title="Details"
                action={
                    <BorderlessButton>
                        <Fontisto 
                          name="share"
                          size={24}
                          color={theme.colors.primary}  
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground 
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Legendary
                    </Text>
                    <Text style={styles.subtitle}>
                        It's today that we'll reach the challenger without {'\n'}
                        losing an MD10 match
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader 
                title="Players"
                subtitle="Total 3"
            />
            <FlatList
                data={ members }
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Join the match" />
            </View>
        </Background>
    )
}