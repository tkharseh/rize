from serpapi import GoogleSearch
from config import serp_key


def get_images(keyword):
    '''
    Scrapes the top 3 images for this keyword
    '''

    params = {
        "q": keyword,
        "tbm": "isch",
        "ijn": "0",
        "api_key": serp_key
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    images_results = results['images_results']

    return images_results[0]['thumbnail']
