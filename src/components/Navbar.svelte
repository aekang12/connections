<script lang="ts">
    import Instructions from './Instructions.svelte'; // Import the modal component
    import Report from './Report.svelte'; // Import the modal component
    let InstructionModal : Instructions; 
    let ReportModal : Report;
  
    function openInstructionModal() {
      InstructionModal.initTrapFocus(new MouseEvent('click'))
    }

    function openReportModal() {
      ReportModal.initTrapFocus(new MouseEvent('click'))
    }
  </script>

<div class="fixed top-4 w-full border-b">
    <div class="flex space-x-4 justify-end pr-12 pb-4">
        <button class="bg-transparent p-2" on:click={openInstructionModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        </button>
       <button class="bg-transparent p-2" on:click={openReportModal}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
        </svg>
       </button>
       
          
    </div>
</div>

<Instructions bind:this={InstructionModal}/>
<Report bind:this={ReportModal}/>