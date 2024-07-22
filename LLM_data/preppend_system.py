import jsonlines

input_file_path = 'labelled_subset_examples.jsonl'
output_file_path = 'gpt3.5_turbo_sepcats.jsonl'

# Function to find the key that isn't 'type'
def find_other_key(obj):
    for key in obj:
        if key != 'type':
            return key
    return None

with jsonlines.open(input_file_path, mode='r') as reader, jsonlines.open(output_file_path, mode='w') as writer:
    for obj in reader:
        pattern = find_other_key(obj)
        system_prompt = "You are a helpful word association generator. " + \
                        "You generate fun word groups as a dictionary in the form " + \
                        "\{pattern : patternword, keywords : \[keyword1, keyword2, keyword3, keyword4\]\}. " + \
                        "The keywords can be associated with the patternword by a common " + \
                        "theme, synonym, pop-culture motif, fill-in-the-blank prompt, or play on words. "
        message = [{"role" : "system", "content" : system_prompt}]
        message.append({"role": "user", "content" : "Generate a " + obj["type"] + " word association category."})
        message.append({"role" : "assistant", "content" : '\{"pattern" : ' + pattern + ', "keywords" : \[' + obj[pattern] + '\]\}'})
        line = {"messages" : message}
        writer.write(line)