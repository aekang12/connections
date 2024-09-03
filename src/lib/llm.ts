import { HfInference } from "@huggingface/inference";
import OpenAI from "openai";
import { prompts } from "./prompts"
import {api_config} from '../config'
import {hf_config} from '../config'

type JSONData = { [x: string]: string } | JSONData[];
interface Message {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

// const HF_KEY = import.meta.env.VITE_HF_KEY
// const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY
const HF_KEY = api_config
const OPENAI_KEY = hf_config
const MAXNUM = 100
const openai = new OpenAI({
  apiKey: OPENAI_KEY, dangerouslyAllowBrowser: true
});

async function query_syn_theme(input : Message[]) {
    const response = await openai.chat.completions.create({
        model: "ft:gpt-3.5-turbo-0125:personal:syn-theme:9npLB8YN",
        messages: input,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0.2,
    });
    console.log(response)
    return response
}

async function query_fitb(input : Message[]) {
    const response = await openai.chat.completions.create({
        model: "ft:gpt-3.5-turbo-0125:personal:fitb:9nu4RxpE",
        messages: input,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0.2,
    });
    return response

}

async function query_pop(input : Message[]) {
    const response = await openai.chat.completions.create({
        model: "ft:gpt-3.5-turbo-0125:personal:pop:9oJXKCvm",
        messages: input,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0.2,
    });
    return response

}

export async function query(model : string) {
    // return null
    // isLoading = true
    // if (model === "mistral-instruct") {
    //     let fullResponse = ""
    //     const inference = new HfInference(`${HF_KEY}`);
    //     for await (const chunk of inference.chatCompletionStream({
    //         model: "mistralai/Mistral-7B-Instruct-v0.2",
    //         messages: [{ role: "user", content: prompts["dummy"] }],
    //         max_tokens: 500,
    //     })) {
    //         fullResponse += chunk.choices[0]?.delta?.content || "";
    //     }
    //     // isLoading = false
    //     return fullResponse

    // choose what type of puzzle to generate using randnum
    const randnum = Math.floor(Math.random() * MAXNUM)
    if (randnum <= 25) { // generate syn-theme puzzle 
        console.log("syn-theme")
        try {
            const response = await query_syn_theme(prompts["gpt_syn_theme_4"]);
            return [response];
          } catch (error) {
            console.error('Error fetching response:', error);
            return null
          }
    } else if (randnum <= 50) { // generate fitb-syn-theme 
        console.log("generating fitb-syn-theme")
        try {
            const fitb_response = await query_fitb(prompts["gpt_fitb"])
            const syn_theme_response = await query_syn_theme(prompts["gpt_syn_theme_3"]);
            return [fitb_response, syn_theme_response]
        } catch (error ) {
            console.error('Error fetching response:', error);
            return null
        }
    } else if (randnum <= 75) { // generate pop-syn-theme
        console.log("generating pop-syn-theme")
        try {
            const pop_response = await query_pop(prompts["gpt_pop"])
            const syn_theme_response = await query_syn_theme(prompts["gpt_syn_theme_3"]);
            return [pop_response, syn_theme_response]
        } catch (error ) {
            console.error('Error fetching response:', error);
            return null
        }
    } else { // generate fitb-pop-syn-theme
        console.log("generating fitb-pop-syn-theme")
        try {
            const fitb_response = await query_fitb(prompts["gpt_fitb"])
            const pop_response = await query_pop(prompts["gpt_pop"])
            const syn_theme_response = await query_syn_theme(prompts["gpt_syn_theme_2"]);
            return [fitb_response, pop_response, syn_theme_response]
        } catch (error ) {
            console.error('Error fetching response:', error);
            return null
        }
    }
    
    
}

