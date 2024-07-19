<!-- src/lib/Box.svelte -->
<script lang="ts">
    import { selected } from '../lib/stores.js'
    export let word:string
    export let depth
    export let disabled
    export let bg
    
    let isClicked = false
    let boxElement : HTMLElement
    
    // Expose the element so the parent can access it
    export function getElement() {
        return boxElement 
    }

    // function to change button colors on select and 
    // update which words have been selected 
    function handle_click(event: MouseEvent) {
        const button = event.target as HTMLElement
        const text = button.innerText;
        if ($selected.length >= 4) {
            isClicked = false
        } else {
            isClicked = !isClicked
        }
        if (isClicked) {
            selected.update(() => $selected = [...$selected, {name : text, element : button}])
        }
        else {
            selected.update(() => $selected.filter(listItem => listItem.name != text))
        }
    }

    // Function to reset the button state on deselection
    export function reset() {
        isClicked = false;
        boxElement.classList.toggle('bg-blue-500', isClicked);
        boxElement.classList.toggle('bg-gray-500', !isClicked);
        selected.update((list) => list.filter(listItem => listItem.name !== word));
    }
  </script>
  
  <button bind:this={boxElement} class={`text-xl rounded-lg ${ isClicked ? 'text-white bg-gray-500 ' : `text-black ${bg}` } ${depth} 
    w-60 h-32 font-semibold relative`} disabled={disabled}
    on:click={handle_click}>{word.toUpperCase()}
  </button>

 