from transformers import pipeline


def get_summary(input_text):
    summarizer = pipeline('summarization')

    max_chunk = 500

    input_text = input_text.replace('.', '.<eos>')
    input_text = input_text.replace('?', '?<eos>')
    input_text = input_text.replace('!', '!<eos>')

    sentences = input_text.split('<eos>')
    current_chunk = 0
    chunks = []
    for sentence in sentences:
        if len(chunks) == current_chunk + 1:
            if len(chunks[current_chunk]) + len(sentence.split(' ')) <= max_chunk:
                chunks[current_chunk].extend(sentence.split(' '))
            else:
                current_chunk += 1
                chunks.append(sentence.split(' '))
        else:
            print(current_chunk)
            chunks.append(sentence.split(' '))

    for chunk_id in range(len(chunks)):
        chunks[chunk_id] = ' '.join(chunks[chunk_id])

    res = summarizer(chunks, max_length=120, min_length=30, do_sample=False)

    summary = ' '.join([summ['summary_text'] for summ in res])
    summarized_sentences = summary.split('.')
    result = ''
    for s in summarized_sentences:
        result += s.strip().capitalize() + '. '
    # fix capitalize so that only first letter of sentence is capitalized
    return result[:-2]


print(get_summary('Hello. How are you? Im fine thanks for asking.'))
