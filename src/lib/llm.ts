import { HfInference } from "@huggingface/inference";
import OpenAI from "openai";
import { prompts } from "./prompts"

type JSONData = { [x: string]: string } | JSONData[];

const HF_KEY = import.meta.env.VITE_HF_KEY
const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY

const openai = new OpenAI({
  apiKey: OPENAI_KEY, dangerouslyAllowBrowser: true
});

export async function query(model : string) {
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

    const response = await openai.chat.completions.create({
    model: "ft:gpt-3.5-turbo-0125:personal:syn-theme:9npLB8YN",
    messages: [
        {
        "role": "system",
        "content": "You are a helpful connections game generator that responds in JSON format. "
        },
        {
        "role": "user",
        "content": "Generate a synonym group, which consists of four keywords that are synonymous with a pattern-word."
        },
        {
        "role": "assistant",
        "content": "\\{pattern : some common features of animals, keywords : fur, hooves, scales, tail\\}"
        },
        {
        "role": "user",
        "content": "Generate a synonym group, which consists of four keywords that are synonymous with a pattern-word."
        },
        {
        "role": "assistant",
        "content": "\\{pattern : deposition from fire, keywords : ash, cinder, dust, soot\\}"
        },
        {
        "role": "user",
        "content": "Generate a thematic group, which consists of four keywords that are related to a theme given by a pattern-word or phrase."
        },
        {
        "role": "assistant",
        "content": "\\{pattern : substrates for writing, keywords : chalkboard, paper, slate, tablet\\}"
        },
        {
        "role": "user",
        "content": "Generate a thematic group, which consists of four keywords that are related to a theme given by a pattern-word or phrase."
        },
        {
        "role": "assistant",
        "content": "\\{pattern : words before a colon, keywords : attention, caution, note, warning\\}"
        },
        {
        "role": "user",
        "content": "Generate two thematic groups and two synonym groups."
        },
        {
        "role": "assistant",
        "content": "\\{pattern : tropical fruits, keywords : banana, coconut, mango, pineapple\\}, \\{pattern : olympic events, keywords : curling, fencing, rowing, skiing\\}, \\{pattern : into-camera looks, keywords : gaze, glare, smile, stare\\}, \\{pattern : musical trio, keywords : attached, bound, connected, linked\\}"
        },
        {
        "role": "user",
        "content":"Generate two thematic groups and two synonym groups."
        },
        {
        "role": "assistant",
        "content": "\\{pattern : pieces of furniture, keywords : chair, couch, desk, table\\}, \\{pattern : responses during roll call, keywords : aye, here, present, yes\\}, \\{pattern : counterbalance, keywords : compensate, offset, weigh, zero\\}, \\{pattern : yuletide, keywords : christmas, december, holiday, santa\\}"
        },
        {
        "role": "user",
        "content": "Generate two thematic groups and two synonym groups with cross-category ambiguity between keywords."
        },
        {
        "role": "assistant",
        "content": "\\{pattern : makes up the policestates, keywords : big brother, cameras, law, surveillance\\}, \\{pattern : river mouths, keywords : delta, estuary, mouth, outlet\\}, \\{pattern : informal credit, keywords : boodle, grease, juice, scratch\\}, \\{pattern : social info summaries, keywords : bio, cv, résumé, vitæ\\}"
        },
        {
        "role": "user",
        "content": "Generate two thematic groups and two synonym groups with cross-category ambiguity between keywords."
        },
        {
        "role": "assistant",
        "content":"\\{pattern : needs a light, keywords : candle, cigarette, joint, torch\\}, \\{pattern : moves like jagger, keywords : gyrate, jazz, rock, shimmy\\}, \\{pattern : without markings, keywords : blank, clear, empty, plain\\}, \\{pattern : worth ten cents, keywords : coin, dime, money, piece\\}"
        },
        {
        "role": "user",
        "content": "Generate two thematic groups and two synonym groups with cross-category ambiguity between keywords."
        },
        {
        "role": "assistant",
        "content": "\\{pattern : parts of the leg, keywords : calf, ham, shank, thigh\\}, \\{pattern : words for crazy people, keywords : cuckoo, insane, loony, nuts\\}, \\{pattern : nonstick finishes, keywords : oil, teflon, wax, zinc\\}, \\{pattern : objects shining at night, keywords : firefly, lamp, moon, star\\}"
        },
        {
        "role": "user",
        "content": "Generate two thematic groups and two synonym groups with cross-category ambiguity between keywords."
        },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0.2,
    presence_penalty: 0.2,
    });
    return response
    
}

