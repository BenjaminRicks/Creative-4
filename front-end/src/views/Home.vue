<template>
    <div class='page'>
      <div class='home-container'>
        <div class='image-container-1'>
          <router-link to="/anime">
            <a class= 'top-words'>Anime</a>
          </router-link>
        
	</div>
        <div class='image-container-2'>
          <router-link to="/games">
            <a class= 'top-words'>Games</a>
          </router-link>

	</div>

        <div class='image-container-3'>
          <router-link to="/school">
            <a class= 'top-words'>School</a>
          </router-link>
        </div>

        <div class='image-container-4'>
          <router-link to="/school">
            <a class= 'top-words'>Misc</a>
          </router-link>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
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
  width: 95%;
  background-color: #130040;
  margin: 0;
  padding: 0;
}

.home-container {
  display: flex;
  width:100%;
  height: 700px;
  justify-content: center;
  padding: 10px;
  margin: 0;
}

.image-container-1 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  height: 100%;
  /*border: 1px solid #0094C6;*/
  padding: 0;
  margin: 0;
  background-image: url('/images/AnimeBanner.jpg');
  background-size: cover;
  background-position: 15% 0;

}

.image-container-2 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  height: 100%;
  /*border: 1px solid #0094C6;*/
  padding: 0;
  margin: 0;
  background-image: url('/images/MinecraftBanner.png');
  background-size: cover;
  background-position: 15% 0;

}

.image-container-3 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  height: 100%;
  border: 1px solid #0094C6;
  padding: 0;
  margin: 0;
  background-image: url('/images/BYUBanner.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 50%;

}

.image-container-4 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  height: 100%;
  border: 1px solid #0094C6;
  padding: 0;
  margin: 0;
  background-image: url('/images/MiscBanner.jpg');
  background-size: contain;
  background-repeat:no-repeat;
  background-position: 0 50%;

}


.top-words {
  display:flex;
  justify-content: center;
  width:100%;
  color: white;
  font: bold 24px/45px Helvetica Neue;
  letter-spacing: -1px;
  background: rgb(0, 0, 0); /* fallback color */
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  overflow-wrap: break-word;
}

.footer {
  display: flex;
  justify-content: center;


}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  color: #0094C6;
}

a:active {
  text-decoration: none;
}

</style>
