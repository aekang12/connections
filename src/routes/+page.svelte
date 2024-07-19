<script lang="ts">
    import App from './App.svelte'
    import Main from './Main.svelte'
    import { Stepper, makeStep } from '@efstajas/svelte-stepper';
    import TailwindCss from '../components/TailwindCSS.svelte';
    import "../app.css";

    const steps = [
        makeStep({
            component: Main, 
            props: undefined
        }), 
        makeStep({
            component: App, 
            props: undefined
        })
    ]
    let backgroundColor = 'bg-purple-200'; // Default color
    function handleStepChange(step : CustomEvent) {
        if (step.detail.newIndex === 1) {
            backgroundColor = 'bg-white'; // Change to white on next step
        }
    }
</script>

<div class="flex items-center justify-center h-screen w-screen bg-white">
    <div class={`card flex flex-col justify-center text-token text-center w-full h-5/6 ${backgroundColor}`}>
        <Stepper on:stepChange={handleStepChange} {steps} />
    </div>
</div>



<TailwindCss/>