import { Text, View, ScrollView } from 'react-native'
import { useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import { COLORS, SIZES, icons, images } from '@/constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenHeaderBtn from '@/components/common/header/ScreenHeaderBtn'
import Welcome from '@/components/welcome/Welcome'
import PopularJobs from '@/components/popularJobs/PopularJobs'
import NearbyJobs from '@/components/nearbyJobs/NearbyJobs'


const index = () => {
    const router = useRouter();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
    <View>
        <Stack.Screen options={{headerStyle:{backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: () => (
            <ScreenHeaderBtn iconurl={icons.menu} dimension="60%" />
        ),
        headerRight: () => (
            <ScreenHeaderBtn iconurl={images.profilePic} dimension="60%"/>
        ),
        headerTitle: ""}}/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View 
                style={{flex: 1,
                padding: SIZES.medium}}>
                    <Welcome />
                    <PopularJobs />
                    <NearbyJobs />
            </View>
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default index