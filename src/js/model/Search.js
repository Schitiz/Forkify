import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = "c24ed74f7b8141bdb7769666a6615bea";
    // const proxy = "http://www.whateverorigin.org/get?url=";
    const recipePuppy = "http://www.recipepuppy.com/api/";
    const spoonacular = "https://api.spoonacular.com/recipes/search";
    const num = 30;

    try {
      const res = await axios(
        `${spoonacular}?apiKey=${key}&query=${this.query}&number=${num}`
      );
      this.recipes = res.data.results;
      // console.log(this.recipes);
    } catch (error) {
      console.log(error);
    }
  }
}
