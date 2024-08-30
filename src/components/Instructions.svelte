<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    export let isOpen = false;

    /* trap all keyboard navigation inside the modal */
    export function initTrapFocus(e: Event) {
        console.log("initTrapFocus triggered");
        isOpen = true
    }
  
    /* close the modal */
    function closeWithEscape(e : KeyboardEvent) {
      if (e.key === 'Escape') {
        isOpen = false;
      }
    }
</script>
  
<!-- add keyboard event listeners to window while modal is open -->
<svelte:window on:keyup={closeWithEscape} />

{#if isOpen}
<div id="modal" class="fixed inset-0 z-50 flex items-center justify-center overflow-auto overscroll-contain">
    <!-- Modal overlay -->
    <div id="modal-overlay" class="fixed inset-0 z-10 bg-black/50" aria-hidden="true" on:click={() => (isOpen = false)} transition:fade={{ duration: 100 }}></div>

    <!-- Modal card -->
    <div class="relative z-20 max-w-3xl bg-white p-6 rounded-lg shadow-lg" transition:fly={{ y: -60, duration: 250 }}>
        <p class="text-black text-2xl font-roboto-condensed font-bold">How to Play:</p>
        <p class="text-black text-xl">Make groups of 4 words that share a common thread. Select 4 words then hit 'Submit' to check your guess. Find all 4 groups without making 4 mistakes. Each puzzle has exactly one solution, although some words might seem like they belong to multiple groups!</p>

        <p class="text-black text-xl font-roboto-condensed font-bold mt-5">Examples:</p>
        <p class="text-black text-xl">kinds of cake : birthday, crumb, marble, pound</p>
        <p class="text-black text-xl">___ game : arcade, blame, numbers, squid</p>
        <p class="text-black text-xl">fortitude : grit, resolve, spirit, will</p>
    </div>
</div>
{/if}