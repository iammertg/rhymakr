<template>
  <div class="holder">
    <div class="input-holder">
      <input type="text" class="input" v-model="searchedText" />
      <button @click="getRhyme(searchedText)">Click</button>
    </div>
    <div class="title">{{ searchedText }} rhymes with</div>
    <div class="result-holder">
      <div class="result" v-for="item in results" :key="item">
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data() {
    return {
      searchedText: '',
      results: [],
    };
  },
  methods: {
    getRhyme(word) {
      axios.get(`https://api.datamuse.com/words?rel_rhy=${word}`).then(res => {
        const resultsArr = res.data;
        if (this.results.length > 0) {
          this.results = [];
        }
        if (resultsArr && resultsArr.length >= 1) {
          for (let item of resultsArr) {
            this.results.push(item.word);
          }
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.holder {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input-holder {
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-holder,
.title {
  padding: 50px;
}
.input {
  padding: 20px;
  width: 100%;
  font-size: 40px;
}

button {
  background-color: red;
  width: 100px;
  height: 90px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
}
.title {
  font-size: 50px;
}

.result {
  font-size: 20px;
  border-bottom: 1px solid grey;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.result-holder {
  width: 100%;
  max-width: 250px;
  max-height: 300px;
  overflow: auto;
  border: 1px solid black;
}
</style>
