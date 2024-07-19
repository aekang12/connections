<script>
      import {query, prompts} from '../lib/llm'
      import { createStepController } from '@efstajas/svelte-stepper';

      const stepController = createStepController();
</script>

<main>
    <div>
        Connectron
    </div>
    <div>
        The automatically generated version of NYT Connections
    </div>
    <button on:click={() => stepController.nextStep()}>Generate a new Puzzle</button>
    <button>Play from our archive</button>
</main>