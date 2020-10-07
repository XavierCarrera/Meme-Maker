<template>
  <v-app>
    <v-app-bar color="red" dark fixed app>
      <v-toolbar-title>Meme Maker</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-layout>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>