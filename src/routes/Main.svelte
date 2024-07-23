<script>
      import { createStepController } from '@efstajas/svelte-stepper';

      const stepController = createStepController();
</script>

<h1 class="font-roboto-condensed font-bold text-7xl text-black">
    Connectron
</h1>
<div class="text-black text-xl mt-4 mb-4">
    The automatically generated version of NYT Connections
</div>
<button class="text-xl rounded-full" on:click={() => stepController.nextStep()}>
    Generate a new Puzzle
</button>
<button class="text-xl rounded-full">Play from our archive</button>



