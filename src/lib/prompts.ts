const dummy_prompt = "Below, each JSON line has a pattern that the four keywords follow:"
                     + "[{\"pattern\": \"school facilities\", \"keywords\": \"auditorium, gym, lab, library\"}"
                     + "{\"pattern\": \"roulette bets\", \"keywords\": \"black, even, odd, red\"}" 
                     + "{\"pattern\" : \"associated with \"dove\"\", \"keywords\": \"chocolate, peace, pigeon, soap\"}"
                     + "{\"pattern\": \"___ goose\", \"keywords\": \"grey, golden, mother, silly\"}]"
                     + "Generate four more patterns and their associated four keywords similar to the above examples in JSON format."
                     + "Do not reuse any of the above examples. Do not return anything besides the example. Each keyword should only be one word"
const gpt_prompt = [
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": "You are a helpful connections game generator that responds in JSON format. "
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Generate a synonym group, which consists of four keywords that are synonymous with a pattern-word."
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "\\{pattern : some common features of animals, keywords : fur, hooves, scales, tail\\}"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Generate a synonym group, which consists of four keywords that are synonymous with a pattern-word."
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "\\{pattern : deposition from fire, keywords : ash, cinder, dust, soot\\}"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Generate a thematic group, which consists of four keywords that are related to a theme given by a pattern-word or phrase."
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "\\{pattern : substrates for writing, keywords : chalkboard, paper, slate, tablet\\}"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Generate a thematic group, which consists of four keywords that are related to a theme given by a pattern-word or phrase."
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "\\{pattern : words before a colon, keywords : attention, caution, note, warning\\}"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Generate two thematic groups and two synonym groups."
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "\\{pattern : tropical fruits, keywords : banana, coconut, mango, pineapple\\}, \\{pattern : olympic events, keywords : curling, fencing, rowing, skiing\\}, \\{pattern : into-camera looks, keywords : gaze, glare, smile, stare\\}, \\{pattern : musical trio, keywords : attached, bound, connected, linked\\}"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Generate two thematic groups and two synonym groups."
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "\\{pattern : pieces of furniture, keywords : chair, couch, desk, table\\}, \\{pattern : responses during roll call, keywords : aye, here, present, yes\\}, \\{pattern : counterbalance, keywords : compensate, offset, weigh, zero\\}, \\{pattern : yuletide, keywords : christmas, december, holiday, santa\\}"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Generate two thematic groups and two synonym groups with cross-category ambiguity between keywords."
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "\\{pattern : makes up the policestates, keywords : big brother, cameras, law, surveillance\\}, \\{pattern : river mouths, keywords : delta, estuary, mouth, outlet\\}, \\{pattern : informal credit, keywords : boodle, grease, juice, scratch\\}, \\{pattern : social info summaries, keywords : bio, cv, résumé, vitæ\\}"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Generate two thematic groups and two synonym groups with cross-category ambiguity between keywords."
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "\\{pattern : needs a light, keywords : candle, cigarette, joint, torch\\}, \\{pattern : moves like jagger, keywords : gyrate, jazz, rock, shimmy\\}, \\{pattern : without markings, keywords : blank, clear, empty, plain\\}, \\{pattern : worth ten cents, keywords : coin, dime, money, piece\\}"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Generate two thematic groups and two synonym groups with cross-category ambiguity between keywords."
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "\\{pattern : parts of the leg, keywords : calf, ham, shank, thigh\\}, \\{pattern : words for crazy people, keywords : cuckoo, insane, loony, nuts\\}, \\{pattern : nonstick finishes, keywords : oil, teflon, wax, zinc\\}, \\{pattern : objects shining at night, keywords : firefly, lamp, moon, star\\}"
        }
      ]
    }
  ]

export const prompts = {"dummy" : dummy_prompt, "gpt" : gpt_prompt}