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
  
  <div bind:this={longboxElement} class={`${color} rounded-lg h-32 w-full absolute top-0 ${depth}`}>
    <div class="text-black text-2xl font-bold mt-6">{category.toUpperCase()}</div>
    <div class="text-black text-2xl">
        {#each ans as word}
            {word.toUpperCase()}, 
        {/each}
    </div>
  </div>