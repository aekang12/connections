import jsonlines

input_file_path = 'labelled_subset_examples.jsonl'
output_file_path = 'pop-culture.jsonl'

# Function to find the key that isn't 'type'
def find_other_key(obj):
    for key in obj:
        if key != 'type':
            return key
    return None

with jsonlines.open(input_file_path, mode='r') as reader, jsonlines.open(output_file_path, mode='w') as writer:
    for obj in reader:
        pattern = find_other_key(obj)
        if obj["type"] == 'pop-culture':
            system_prompt = "You are a helpful connections game generator that only responds in a dictionary format."
            message = [{"role" : "system", "content" : system_prompt}]
            message.append({"role": "user", "content" : "Generate a pop-culture group, which consists of four keywords that are related to the pop-culture motif given by the pattern-word or phrase."})
            message.append({"role" : "assistant", "content" : '\{pattern : ' + pattern + ', keywords : ' + obj[pattern] + '\}'})
            line = {"messages" : message}
            writer.write(line)