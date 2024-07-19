<!-- src/lib/Grid.svelte -->
<script lang="ts">
  import Box from './Box.svelte';
  import LongBox from './LongBox.svelte';
  import { createEventDispatcher, onMount } from 'svelte';

  export let word_list;
  export let colors
  export let categories
  export let answers
  export let button_depths
  export let longbox_depths
  let inds = [[0,1,2,3], [4,5,6,7], [8,9,10,11], [12,13,14,15]]

  const dispatch = createEventDispatcher();
  let boxComponents : Box[] = []

  // Function to get buttons and longbox elements and dispatch them
  function getButtons() {
    const buttons = boxComponents.map(box => {
      const buttonElement = box.getElement();
      return buttonElement;
    });
    dispatch('buttons', { buttons });
  }
  export { getButtons }

  // function to help deselect all buttons
  export function onReset() {
    for (let i = 0; i < boxComponents.length; i++) {
      boxComponents[i].reset()
    }
  }

  onMount(() => {
    getButtons();
  });
</script>

<div class="grid grid-cols-4 gap-4 justify-center max-w-5xl mx-auto">
  {#each inds as ind_list, i}
    <div class="grid grid-cols-4 gap-4 relative col-span-4">
      {#each ind_list as index}
        <Box bind:this={boxComponents[index]} word={word_list[index]} depth={button_depths[i]} />
      {/each}
      <LongBox category = {categories[i]} ans = {answers[i]} color = {colors[i]} depth={longbox_depths[i]} />
    </div>
  {/each}
</div>