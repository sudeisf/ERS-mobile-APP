import { Tabs } from 'expo-router';
import React from 'react'

function TabsLayout() {
  return (
    <Tabs>
        <Tabs.Screen name ="index" options={{
            title : 'Home'
        }}  />
        <Tabs.Screen name ="profile" options={{
            title : "Profile"
        }} />
    </Tabs>
  )
}

export default TabsLayout;