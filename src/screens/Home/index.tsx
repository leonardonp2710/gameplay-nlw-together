import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Background } from "../../components/Background";
import { Profile } from '../../components/Profile';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

export function Home() {
    const [category, setCategory] = useState('')

    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Legendary',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 - 20:40',
            description: 'It is today that we will reach the challenger without losing any MD10 match'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Legendary',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 - 20:40',
            description: 'It is today that we will reach the challenger without losing any MD10 match'
        }
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>
            <View>
                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
                <View style={styles.content}>
                    <ListHeader 
                        title="Booked matches"
                        subtitle="Total 6"
                    />
                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                        <Appointment
                            data={item}
                            onPress={handleAppointmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </Background>
    );
    
}