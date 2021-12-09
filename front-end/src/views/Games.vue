<template>
  <div class='page'>
    <div class='game-container'>
      <div class='gameList'>
        <button class='game' v-for="game in gameList" :key= "game.title" v-on:click="select(anime)">
          <div class='game-title'>{{game.title}}</div>
        </button>
      </div>

      <div class='game-description'>
        <div class='game-picture-container'>
          <img class='game-picture' :src="this.image">
        </div>
        <div class='game-info'>
          {{this.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'GameList',
  data() {
    return {
      gameList: [],
      title: 'Select a game!',
      description: 'Select a game!',
      image: "image",
    }
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      let response = await axios.get("/api/game");
      this.gameList = response.data;
      return true;
    },
    select(game) {
      console.log(game);
      this.title = game.title;
      this.description = game.description;
      this.image = game.path;
    }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  background-color: #000022;
  color: #FFFFFF;
  font-family: Helvetica Neue;


}
.navbar {
  background-color: #000022 !important;
}

.page {
  display: flex;
  justify-content: center;
  width: 99%;
  background-color: #130040;
  margin: 0;
  padding: 0;
}

.game-container {
  display: flex;
  width:100%;
  height: 700px;
  justify-content: center;
  padding: 10px;
  margin: 0;
}

.gameList::-webkit-scrollbar {
  width: 10px;
  background: #000;
}

::-webkit-scrollbar-thumb {
    background: #0094C6;
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}

::-webkit-scrollbar-corner {
    background: #000;
}

.gameList {
  margin: 5px;
  display: flex;
  flex-direction: column;
  width:40%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: thin;
  background-color: #0094C6;

}
.game {
  display:flex;
  width: 100%;
  height: 100px;
  border: 1px solid #FFFFFF;
  padding: 40px 0px;
  background-color:#005E7C;

}

.game-title {
  display: flex;
  align-items: center;
  width: 85%;
  height: 100%;
  padding: 0px 15px;
  background-color:#005E7C;

}

.game-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100%;
  background-color:#005E7C;

}

.game-description {
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: #005E7C;
  margin: 5px;
}

.game-picture-container {
  width: 100%;
  height: 35%;
  border: 1px solid #FFFFFF;
}

.game-picture {
  object-fit: cover;
  object-position: 0 60%;
  width: 100%;
  height: 100%;
}

.game-info {
  width: 100% - 40px;
  height: 70%;
  background-color: #005E7C;
  padding: 20px;
  font-size: 20px;
  border: 1px solid #FFFFFF;
}
.game-text {
  width: 100% - 40px;
  height: 100%;
  background-color: #005E7C;
  font-size: 20px;
  padding: 20px;
}

.footer {
  display: flex;
  justify-content: center;
}

</style>
