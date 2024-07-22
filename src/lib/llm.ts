import { HfInference } from "@huggingface/inference";
// export let isLoading = false

type JSONData = { [x: string]: string } | JSONData[];

const API_KEY = import.meta.env.VITE_API_KEY
const dummy_prompt = "Below, each JSON line has a pattern that the four keywords follow:"
                     + "[{\"pattern\": \"school facilities\", \"keywords\": \"auditorium, gym, lab, library\"}"
                     + "{\"pattern\": \"roulette bets\", \"keywords\": \"black, even, odd, red\"}" 
                     + "{\"pattern\" : \"associated with \"dove\"\", \"keywords\": \"chocolate, peace, pigeon, soap\"}"
                     + "{\"pattern\": \"___ goose\", \"keywords\": \"grey, golden, mother, silly\"}]"
                     + "Generate four more patterns and their associated four keywords similar to the above examples in JSON format."
                     + "Do not reuse any of the above examples. Do not return anything besides the example. Each keyword should only be one word"
export const prompts = {"dummy_prompt" : dummy_prompt}
export const models = {"gpt2" : "https://api-inference.huggingface.co/models/gpt2", "mistral-instruct" : "mistralai/Mistral-7B-Instruct-v0.2"}


export async function query(data : JSONData, model : string) {
    // isLoading = true
    if (model === "gpt2") {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/gpt2",
            {
                headers: { 
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type' : 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }
    else if (model === "mistral-instruct") {
        let fullResponse = ""
        const inference = new HfInference(`${API_KEY}`);
        for await (const chunk of inference.chatCompletionStream({
            model: "mistralai/Mistral-7B-Instruct-v0.2",
            messages: [{ role: "user", content: prompts["dummy_prompt"] }],
            max_tokens: 500,
        })) {
            fullResponse += chunk.choices[0]?.delta?.content || "";
        }
        // isLoading = false
        return fullResponse
    }
    
}

