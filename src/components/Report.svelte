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

    let email = '';
    let subject = '';
    let message = '';

    async function submitForm() {
        const response = await fetch('/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, subject, message })
        });

        if (response.ok) {
            // Handle success (e.g., navigate to success page)
            window.location.href = '/success';
        } else {
            // Handle errors (e.g., display error messages)
            const data = await response.json();
            console.log(data.errors);
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
      <p class="text-black text-2xl font-roboto-condensed font-bold">Report a Problem or Give Feedback:</p>

      <form on:submit|preventDefault={submitForm}>
        <label for="email">Email:</label>
        <input type="email" bind:value={email} id="email" required>
    
        <label for="subject">Subject:</label>
        <input type="text" bind:value={subject} id="subject" required>
    
        <label for="message">Message:</label>
        <textarea bind:value={message} id="message" required></textarea>
    
        <button type="submit">Send</button>
    </form>

  </div>
</div>
{/if}