<script lang="ts">
  import { selected } from '../lib/stores';
  import Grid from '../components/Grid.svelte';
  import anime from 'animejs/lib/anime.min.js';
  import {query} from '../lib/llm'
  import Box from '../components/Box.svelte';

  // ------------
  // PUZZLE GENERATION 
  // ------------
  let solution : { [key: string]: string[] } = {"remote control buttons" : ["channel", "menu", "power", "volume"], 
                  "hide from view" : ["block", "cover", "screen", "shield"], 
                  "drink garnishes" : ["cherry", "olive", "sword", "umbrella"], 
                  "first word in Bond movie titles" : ["casino", "diamonds", "quantum", "tomorrow"]};
  
  let word_list : string[] = ["channel", "menu", "power", "volume", "block", "cover", "screen", "shield", 
                   "cherry", "olive", "sword", "umbrella", "casino", "diamonds", "quantum", "tomorrow"];
  let isLoading = false

  async function generate_words() {
    isLoading = true
    query("gpt").then((response) => {
      const response_str = response["choices"][0]["message"]["content"]
      const regex = /\{pattern : (.*?), keywords : (.*?)\}/g;

      var new_sol : { [key: string]: string[] }= {};
      var new_word_list : string[] = []
      let match;

      if (response_str) {
        while ((match = regex.exec(response_str)) !== null) {
          const patternText = match[1].trim();
          let cleaned = match[2].replace(/\\/g, '');
          const keywordsText = cleaned.split(',').map(keyword => keyword.trim());
          console.log(typeof(keywordsText))
          console.log(keywordsText)
          new_sol[patternText] = keywordsText;
          new_word_list = new_word_list.concat(keywordsText)
        }
        solution = new_sol
        word_list = new_word_list
        shuffle_words()
      } else {
        console.log("need to handle error ")
      }
    })
    isLoading = false
    return;
  }
  
  // ----------------------------------------------------------------------
  // GAME STATE PARAMETERS
  // selected is a writable array store that keeps track of currently selected words (name) and button elements (element)
  // row_counter is a tracker for which row you will fill next with correct guesses 
  // buttons is an array of button elements, filled by Grid.svelte
  // ----------------------------------------------------------------------
  let row_counter = 0
  let buttons : Box[] = [] 
  let grid : Grid; 

  // longbox parameters
  let color_palette = ["bg-yellow-200", "bg-lime-200", "bg-cyan-200", "bg-violet-200"]
  // following arrays will be populated with correct values as the user guesses correct answers
  let current_colors = ["bg-transparent", "bg-transparent", "bg-transparent", "bg-transparent"]
  let current_categories = ["", "", "", ""]
  let current_answers : string[][] = [[], [], [], []]
  let longbox_depths = ["z-0", "z-0", "z-0", "z-0"]

  // button parameters, values will change as user guesses correct answers
  let button_depths = ["z-10", "z-10", "z-10", "z-10"]
  let button_bgs = ["bg-gray-300", "bg-gray-300", "bg-gray-300", "bg-gray-300"]
  let disableds = [false, false, false, false]

  // get the button elements/names for animateCorrect()
  const handleButtons = (event : CustomEvent) => {
    buttons = event.detail.buttons;
  };

  // ----------------------------------------------------------------------
  // GAME BUTTON FUNCTIONS
  // ----------------------------------------------------------------------
  // checks if user's selected guess is a correct answer or not, calls corresponding animation
  function check_words() {
    for (const [category, answers] of Object.entries(solution)) {
      let found_words = 0;
      for (const word in $selected) {
        if (answers.includes($selected[word].name.toLowerCase())) {
          found_words += 1;
        }
      }
      if (found_words === 4) { // correct guess! play animations
        animateCorrect(category, answers);
        return;
      }
    }
    animateWrong(); // incorrect guess! play animations
    return;
  }

  // Shuffle only words in the word_list that haven't been correctly guessed
  function shuffle_words() {
    let answered = word_list.slice(0, row_counter * 4);
    let to_shuffle = word_list.slice(row_counter * 4, 16);
    let currentIndex = to_shuffle.length;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element in to_shuffle.
      [to_shuffle[currentIndex], to_shuffle[randomIndex]] = [
        to_shuffle[randomIndex], to_shuffle[currentIndex]
      ];
    }
    // Merge the answered part with the shuffled to_shuffle part
    word_list = [...answered, ...to_shuffle, ...word_list.slice(row_counter + 4)];
}

  // ----------------------------------------------------------------------
  // ANIMATIONS 
  //----------------------------------------------------------------------
  async function animateCorrect(category : string, ans : string[]) {
    // button elements to be animated 
    let guessed_buttons : HTMLElement[] = [] 
    let target_buttons = [buttons[row_counter*4], buttons[row_counter*4+1], buttons[row_counter*4+2], buttons[row_counter*4+3]]

    // index/string info for swapping words 
    let answers : string[] = []
    let answer_indices : number[] =[]
    let replacement_indices = [row_counter*4, row_counter*4 + 1, row_counter*4 + 2, row_counter*4 + 3]
    

    // populate replacement_indices with indices of buttons in the answer row that need to be swapped out 
    // populate answer_indices with indices of the selected answers that aren't already in correct row 
    $selected.forEach((el) => {
      guessed_buttons.push(el.element)
      let ind = word_list.indexOf(el.name.toLowerCase())
      if (ind < row_counter*4 + 4 && ind >= row_counter*4) { // guessed button is already in the correct row 
        replacement_indices.splice(replacement_indices.indexOf(ind), 1) // remove from replacement_indices, do not add to answer_indices
      } else { // guessed button is not already in correct row and needs to be swapped 
        answer_indices.push(word_list.indexOf(el.name.toLowerCase())) 
        answers.push(el.name)
      }
    })
    
    var t1 = anime.timeline({
      targets: guessed_buttons,
    }).add({ // make the buttons cascade upon clicking
      targets: guessed_buttons,
      translateY: [
        { value: -5 },
        { value: 1 },
      ], 
      delay: anime.stagger(50), 
      complete: function() { // perform the word swap 
        for (let i=0; i < answer_indices.length; i++) {
          word_list[answer_indices[i]] = word_list[replacement_indices[i]]
          word_list[replacement_indices[i]] = answers[i]
        }
        grid.onReset()
        console.log("hi")
      }
    }).add({ // animate button bulge 
      targets: target_buttons,
      scale: 1.1, 
      duration: 300,
      easing: 'easeInOutQuad',
    }).add({
      targets: target_buttons,
      scale: 1, 
      duration: 300,
      easing: 'easeInOutQuad',
      complete: function() { // animate the solution appearing 
        current_colors[row_counter] = color_palette[row_counter]
        current_categories[row_counter] = category
        current_answers[row_counter] = ans
        button_depths[row_counter] = "z-0"
        longbox_depths[row_counter] = "z-10"
        disableds[row_counter] = true
        button_bgs[row_counter] = "bg-transparent"
        row_counter += 1
      }
    })
  }

  function animateWrong() {
    let guessed_buttons : HTMLElement[] = [] 
    $selected.forEach((el) => {
      guessed_buttons.push(el.element)
    })

    var t1 = anime.timeline({
      targets: guessed_buttons,
    }).add({ //make the buttons cascade upon click
      targets: guessed_buttons,
      translateY: [
        { value: -5 },
        { value: 1 },
      ], 
      delay: anime.stagger(50)
    })
    .add({ //make the buttons shake to indicate incorrect guess
      targets: guessed_buttons,
      translateX: [
        { value: -5, duration: 50 },
        { value: 5, duration: 50 },
        { value: -4, duration: 50 },
        { value: 4, duration: 50 },
        { value: -3, duration: 50 },
        { value: 3, duration: 50 },
        { value: -2, duration: 50 },
        { value: 2, duration: 50 },
        { value: -1, duration: 50 },
        { value: 1, duration: 50 },
        { value: 0, duration: 50 },
      ],
      easing: 'easeInOutSine',
      complete: function(anim) {
        // Ensure the buttons are back in their original position
        anime({
          targets: guessed_buttons,
          translateX: 0,
          duration: 0
        });
      }
    });
  }

  function animateLoading() {
    var t1 = anime.timeline({
      targets: buttons,
    }).add({ //make the buttons cascade upon click
      targets: buttons,
      translateY: [
        { value: -5 },
        { value: 1 },
      ], 
      delay: anime.stagger(50)
    })
  }
</script>
{#if isLoading}
  <p class="mb-8 text-black text-2xl">Generating puzzle...</p>
{:else}
  <p class="mb-8 text-black text-2xl">Create groups of four!</p>
{/if}
<Grid bind:this={grid} word_list={word_list} colors={current_colors} categories = {current_categories} 
  answers = {current_answers} button_depths={button_depths} longbox_depths={longbox_depths} disableds={disableds} 
  bgs = {button_bgs}
  on:buttons={handleButtons} />
<div>
  <button class="bg-gray-500 text-xl rounded-lg mt-8 p-3" on:click={generate_words}>
    Regenerate Puzzle
  </button>
  <button class="bg-gray-500 text-xl rounded-lg p-3" on:click={shuffle_words}>
    Shuffle
  </button>
  <button class="bg-gray-500 text-xl rounded-lg p-3 disabled:opacity-50" on:click={() => grid.onReset()} disabled={$selected.length === 0}>
    Deselect All 
  </button>
  <button class="bg-gray-500 rounded-lg p-3 text-xl disabled:opacity-50" on:click={check_words} disabled={$selected.length < 4}>
    Submit
  </button>
</div>

  <!-- for debugging: -->
  <!-- {#each $selected as item}
    <p class="text-black">
      {item.name}
    </p>
  {/each} -->