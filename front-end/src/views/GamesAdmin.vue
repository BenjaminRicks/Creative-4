<template>
<div class="admin">
  <h1>The Admin Page!</h1>
  <div class="heading">
    <div class="circle">1</div>
      <h2>Add an Item</h2>
    </div>
  <div class="add">
    <div class="form">
      <input v-model="title" placeholder="Title">
      <p></p>
      <textarea v-model="description" placeholder="Description" rows="5" cols="33"></textarea>
      <p></p>
      <input type="file" name="photo" @change="fileChanged">
      <button @click="upload">Upload</button>
    </div>
    <div class="upload" v-if="addItem">
      <h2>{{addItem.title}}</h2>
      <h2>{{addItem.rating}}</h2>
      <h2>{{addItem.description}}</h2>
      <img :src="addItem.path" />
    </div>
  </div>

  <div class="heading">
    <div class="circle">2</div>
    <h2>Edit/Delete an Item</h2>
  </div>
  <div class="edit">
    <div class="form">
      <input v-model="findTitle" placeholder="Search">
      <div class="suggestions" v-if="suggestions.length > 0">
        <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}</div>
      </div>
    </div>
    <div class="upload" v-if="findItem">
      <input v-model="findItem.title">
      <p></p>
      <textarea v-model="findItem.description" rows="5" cols="33"></textarea>
      <p></p>
      <img :src="findItem.path" />
    </div>
    <div class="actions" v-if="findItem">
      <button @click="deleteItem(findItem)">Delete</button>
      <button @click="editItem(findItem)">Edit</button>
    </div>
  </div>


</div>

</template>
<script>
import axios from 'axios';
export default {
  name: 'GamesAdmin',
    data() {
    return {
      title: "",
      file: null,
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
      description: "",
      findDescription: "",
    }
  },
  computed: {
    suggestions() {
      let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return items.sort((a, b) => a.title > b.title);
    }
  },
    created() {
    this.getItems();
  },
    methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/game', {
                title: this.title,
                description: this.description,
                path: r1.data.path
        });
        this.addItem = r2.data;
    },
    async getItems() {
        let response = await axios.get("/api/game");
        this.items = response.data;
        return true;

    },
    selectItem(item) {
      this.findTitle = "";
      this.findDescription = "";
      this.findItem = item;
    },
    async deleteItem(item) {

        await axios.delete("/api/game/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;

    },
    async editItem(item) {
        await axios.put("/api/game/" + item._id, {
                title: this.findItem.title,
                description: this.findItem.description,
        });
        this.findItem = null;
        this.getItems();
        return true;
    },
  }
}
</script>

<style scoped>
page {
  color: black;
}

.admin {
  color: white;
}

</style>
