# Demo
https://youtu.be/fSzOAyJK6uk

# Inspiration
Ever since COVID-19 was declared a global pandemic back in March 2020, billions of people around the world were forced to work from home. Students were required to attend their classes online and it's safe to say that this has taken a toll on many students. To make online learning more efficient and productive, we came up with Rize, which provides summaries of lectures to students.

# What it does
Rize is a web app that allows users to upload a lecture transcript, research papers or any form of text and outputs a text summary of their lecture along with the key concepts of the lecture and related images.

# How we built it
We used a pre-trained natural language processing model (using hugging face transformers) to come up with the lecture summary, IBM Watson's API to detect key concepts, Python's Wikipedia library to come up with information of the key concepts, and SerpAPI to scrape Google images. We built our own API using FastAPI and this server communicates with the React frontend to display relevant data.

# Challenges we ran into
Since it was the first time using FastAPI, we encountered difficulties linking it to React. For example, it was tough finding a way to upload the files to the React app and run our backend functions on the file. Another issue was getting the program to switch from the home screen to the summary screen after the summary was created.

# Accomplishments that we're proud of
This project uses several different libraries, APIs, languages and technologies. For the most part, they all work together very fluently.

# What we learned
We learned about React components, how to use FastAPI, how to link a backend server to the frontend and how to use different APIs

# What's next for Rize
Rize plans to add the ability for users to create accounts so that they can save and view the summaries of previously uploaded lectures. We also want users to have the ability to upload audio recordings of their lecture, not just text files.

