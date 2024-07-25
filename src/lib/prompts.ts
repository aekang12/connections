export interface Message {
    role: 'system' | 'user' | 'assistant';
    content: string;
  }

const dummy_prompt = "Below, each JSON line has a pattern that the four keywords follow:"
                     + "[{\"pattern\": \"school facilities\", \"keywords\": \"auditorium, gym, lab, library\"}"
                     + "{\"pattern\": \"roulette bets\", \"keywords\": \"black, even, odd, red\"}" 
                     + "{\"pattern\" : \"associated with \"dove\"\", \"keywords\": \"chocolate, peace, pigeon, soap\"}"
                     + "{\"pattern\": \"___ goose\", \"keywords\": \"grey, golden, mother, silly\"}]"
                     + "Generate four more patterns and their associated four keywords similar to the above examples in JSON format."
                     + "Do not reuse any of the above examples. Do not return anything besides the example. Each keyword should only be one word"
const gpt_syn_theme_4 : Message[] = [
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
]

const gpt_syn_theme_3 : Message[] = [
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
  "content": "Generate one thematic group and two synonym groups with cross-category ambiguity between keywords."
  },
]

const gpt_syn_theme_2 : Message[] = [
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
  "content":"\\{pattern : needs a light, keywords : candle, cigarette, joint, torch\\}, \\{pattern : moves like jagger, keywords : gyrate, jazz, rock, shimmy\\}, \\{pattern : without markings, keywords : blank, clear, empty, plain\\}, \\{pattern : worth ten cents, keywords : coin, dime, money, piece\\}"
  },
  {
  "role": "user",
  "content": "Generate one thematic group and one synonym group with cross-category ambiguity between keywords."
  },
]

const gpt_fitb : Message[] = [
    {
      "role": "system",
      "content": "You are a helpful connections game generator that only responds in a dictionary format."
    },
    {
      "role": "user",
      "content": "Generate a fill-in-the-blank group, which consists of four keywords that each can complete a phrase when put together with the pattern-word."
    },
    {
      "role": "assistant",
      "content": "\\{pattern : after ___, keywords : all, dark, party, school\\}"
    },
    {
      "role": "user",
      "content": "Generate a fill-in-the-blank group, which consists of four keywords that each can complete a phrase when put together with the pattern-word."
    },
    {
      "role": "assistant",
      "content": "\\{pattern : little ___, keywords : dipper, league, miss, women\\}"
    },
    {
      "role": "user",
      "content": "Generate a fill-in-the-blank group, which consists of four keywords that each can complete a phrase when put together with the pattern-word."
    },
  ]

const gpt_pop : Message[] = [
  {
    "role": "system",
    "content": "You are a helpful connections game generator that only responds in a dictionary format."
  },
  {
    "role": "user",
    "content": "Generate a pop-culture group, which consists of four keywords that are related to the pop-culture motif given by the pattern-word or phrase."
  },
  {
    "role": "assistant",
    "content": "\\{pattern : figures in the 'james bond' theme, keywords : bond, m, moneypenny, q\\}"
  },
  {
    "role": "user",
    "content": "Generate a pop-culture group, which consists of four keywords that are related to the pop-culture motif given by the pattern-word or phrase."
  },
  {
    "role": "assistant",
    "content": "\\{pattern : men's names that are shared by u.s. presidents, keywords : andrew, calvin, william, woodrow\\}"
  },
  {
    "role": "user",
    "content": "Generate a pop-culture group, which consists of four keywords that are related to the pop-culture motif given by the pattern-word or phrase."
  },
  {
    "role": "assistant",
    "content":  "\\{pattern : 'the simpsons' family, keywords : bart, homer, marge, lisa\\}"
  },
  {
    "role": "user",
    "content": "Generate a pop-culture group, which consists of four keywords that are related to the pop-culture motif given by the pattern-word or phrase."
  }
]

export const prompts = {"dummy" : dummy_prompt, "gpt_syn_theme_4" : gpt_syn_theme_4, "gpt_fitb" : gpt_fitb, 
                        "gpt_syn_theme_3": gpt_syn_theme_3, "gpt_pop" : gpt_pop, "gpt_syn_theme_2" : gpt_syn_theme_2}