<template>
  <div class="dashboard">
    <div class="dashboard__left">
      <div>
        <div class="dashboard__input-holder">
          <input type="text" class="input" v-model="searchedText" />
          <button @click="getRhyme(searchedText)">Click</button>
          <div>{{ searchedText }} RHYMES WITH</div>
        </div>
        <div class="dashboard__result-holder">
          <div class="dashboard__result" v-for="item in results" :key="item">
            <p @click="saveSelectedWord(item)">{{ item }}</p>
          </div>
        </div>
      </div>

      <div class="dashboard__selected-words-wrapper">
        <div>SELECTED WORDS</div>
        <div class="dashboard__selected-words-area">
          <div v-for="item in selectedWords" :key="item" >
            <div  class="dashboard__selected-word">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard__right">
      <div>
        <figure>
          <figcaption>Metronome</figcaption>
          <audio
            controls
            src="./sample.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </div>
      <div>
        <div class="dashboard__right-title">HIGHLIGHT A TEXT TO GET RHYME</div>
        <textarea
          class="dashboard__text-area"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Dashboard",
  data() {
    return {
      searchedText: "",
      results: [],
      selectedWords: []
    };
  },
  created() {
    this.getHighlightedWord();
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
    saveSelectedWord(item) {
      this.selectedWords.push(item);
    },
    getHighlightedWord() {
      document.addEventListener("mouseup", event => {
        if (window.getSelection().toString().length) {
          let exactText = window.getSelection().toString();
          this.searchedText = exactText;

          this.getRhyme(this.searchedText)
        }
      });
    }
  }
};
</script>

<style lang="scss">
.dashboard {
  width: 100%;
  height: 100vh;
  display: flex;
  flex: 1;

  &__left {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px 10px;
  }

  &__right {
    width: 100%;
    padding: 50px 10px;
    border-left: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__input {
    padding: 20px;
    width: 100%;
    font-size: 40px;
  }

  &__result {
    font-size: 20px;
    border-bottom: 1px solid grey;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__result-holder {
    width: 100%;
    max-width: 250px;
    max-height: 300px;
    overflow: auto;
    border: 1px solid black;
  }

  &__right-title {
    margin-top: 100px;
  }

  &__text-area {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 700px;
  }

  &__selected-words-wrapper{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  &__selected-words-area{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin: 0 15px;
  }

  &__selected-word{
    border-radius: 8px;
    background-color: white;
    width: 100px;
    margin: 0 15px;
    padding: 10px 20px;
  }
}
</style>
