import summarize, key_concepts, images


class Summary:
    """ A builder class for the Summary object to be returned to the user."""

    def __init__(self, file):
        # f = open(filename, "r")
        self.input = file
        self.summary = summarize.get_summary(self.input)
        self.concepts = key_concepts.get_keyconcepts(self.input)
        self.images = []
        for key in self.concepts.keys():
            self.images.append(images.get_images(key))

    def json_format(self):
        return {
            'summary': self.summary,
            'concepts': self.concepts,
            'images': self.images
        }
