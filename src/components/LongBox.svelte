<!-- src/lib/Box.svelte -->
<script lang="ts">
    export let category
    export let ans
    export let color
    export let depth
    
    let longboxElement : HTMLElement;
    // Expose the element so the parent can access it
    export function getElement() {
        return longboxElement;
    }
  </script>
  
  <div bind:this={longboxElement} class={`${color} rounded-md h-32 w-full absolute top-0 ${depth}`}>
    <div class=text-black>{category}</div>
    <div class=text-black>
        {#each ans as word}
            {word}, 
        {/each}
    </div>
  </div>