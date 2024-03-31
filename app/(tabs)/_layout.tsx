import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, StyleSheet, StatusBar } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome6 } from '@expo/vector-icons';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
}

export default function TabLayout() {
  return (
    <>
      <StatusBar backgroundColor="#282A36" barStyle="light-content" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#84B026',
          tabBarInactiveTintColor: '#fff',
          tabBarShowLabel: true,
          tabBarStyle:{
            position: 'absolute',
            backgroundColor: '#282A36',
            borderTopWidth: 0,
            bottom: 15,
            alignSelf: "center",
            left: 13,
            right: 13,
            elevation: 0,
            borderRadius: 20,
            height: 70,
            paddingTop: 10,
            paddingBottom: 12,
          },
          tabBarLabelStyle: styles.tabBarLabel,
        }}
          
        >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Funções',
            tabBarIcon: ({ color }) => <MaterialIcons name="calculate" color={color} size={30}/>,
            headerRight: () => (
              <Link href="/perfil" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Ionicons
                      name="person-circle"
                      size={42}
                      color="#84B026"
                      style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                    />
                  )}
                </Pressable>
              </Link>
            ),
            headerStyle:{
              backgroundColor: "#282A36",
            }, 
            headerTintColor:  "#fff",
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: 'Gráficos',
            tabBarIcon: ({ color }) => <MaterialIcons name="auto-graph" color={color} size={30}/>,
            headerStyle:{
              backgroundColor: "#282A36",
            },
            headerTintColor: "#fff",
          }}
        />
        <Tabs.Screen
          name="money"
          options={{
            title: 'Dinheiro',
            tabBarIcon: ({ color }) => <FontAwesome6 name="money-bill-alt" color={color} size={30} />,
            headerStyle:{
              backgroundColor: "#282A36",
            },
            headerTintColor: "#fff",
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 20,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
