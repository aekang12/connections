<script>
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
</script>

<div class="flex justify-center items-center h-screen w-screen bg-white">
	<div class="card rounded-lg text-token w-3/4 h-4/6 bg-purple-200">
		<Stepper {steps} />
	</div>
</div>

<TailwindCss/>