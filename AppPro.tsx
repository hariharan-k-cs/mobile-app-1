import {
     View, Text,
     ScrollView,SafeAreaView,


} from 'react-native'
import React from 'react'
import Flatecart from './components/Flatecart'
import Elevatedcard from './components/Elevatedcard'
import Fancycard from './components/Fancycard'
import ActionCard from './components/ActionCard'
import Contanctlist from './components/Contanctlist'

const AppPro = () => {
  return (
   <SafeAreaView>
    <ScrollView>
      <Flatecart/>
    <Elevatedcard/>
    <Fancycard/>
    <Fancycard/>
    <Contanctlist/>
    <ActionCard/>

    </ScrollView>
    
   </SafeAreaView>
  )
}

export default AppPro