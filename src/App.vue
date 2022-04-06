<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px; 
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';
}

</style>
