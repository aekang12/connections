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

<Stepper {steps} />


<TailwindCss/>