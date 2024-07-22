from bs4 import BeautifulSoup
from itertools import combinations
import json
import ipdb

text = "Below, each JSON line has a pattern that the four keywords follow: \n"
example_game = '{"pattern": "school facilities", "keywords": "auditorium, gym, lab, library"} \n {"pattern": "roulette bets", "keywords": "black, even, odd, red"} \n {"pattern" : "associated with "dove"", "keywords": "chocolate, peace, pigeon, soap"} \n {"pattern": "___ goose", "keywords": "grey, golden, mother, silly"} \n'
text2 = "Generate four more patterns and their associated four keywords similar to the above examples in JSON format. Do not reuse any of the above examples. Do not return anything besides the example. Each keyword should only be one word"
simpleprompt = "Generate a connections game, which is a word association game made up of 4 patterns which each have 4 associated keywords. " + \
               "The keywords can be grouped based on a common theme, synonym, pop culture motif, fill-in-the-blank phrase, or wordplay."
systemprompt = "You are a helpful connections game generator that only responds with the game in a dictionary format."

file_path = 'html_list.txt'
with open(file_path, 'r') as file:
    html_content = file.read()

soup = BeautifulSoup(html_content, 'html.parser')
ul_elements = soup.find_all('ul')

all_games = []
all_examples = []
for ul in ul_elements:
    li_elements = ul.find_all('li') # contains 1 full gameboard 
    # output = {}
    for li in li_elements:
        pattern = li.find_all('strong')[0].get_text().lower()
        words = li.get_text().split(pattern.upper())[-1][3:].lower()
        if len(words.split(',')) != 4:
            print(words)
        # output[pattern] = words
        all_examples.append({pattern : words})
    # all_games.append(json.dumps(output))

# game_dicts = []
# for game in all_games:
#     # game_dicts.append({"example": text + example_game + text2, "output" : game})
#     game_dicts.append({"messages": [{"role": "system", "content": systemprompt}, 
#                                     {"role" : "user", "content" : simpleprompt}, 
#                                     {"role" : "assistant", "content" : game}]})


# json_string = json.dumps(data, indent=4)
# print(json_string)
with open('all_examples.jsonl', 'w', encoding='utf-8') as file:
    for entry in all_examples:
        json.dump(entry, file, ensure_ascii=False)
        file.write('\n')

# format for json is as follows: 
# json_data = '''
# {
#     "train": [
#         {"prompt": [blahblahblahblah instructions], "output": [json for game2 as a string]},
#     ]
# }
# '''