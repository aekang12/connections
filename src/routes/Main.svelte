<script>
      import {query, prompts} from '../lib/llm'
      import { createStepController } from '@efstajas/svelte-stepper';

      const stepController = createStepController();
</script>

<div class="flex justify-center items-center h-screen w-screen bg-white">
	<div class="card rounded-lg text-token text-center w-full h-5/6 bg-purple-200">
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
    </div>
</div>




