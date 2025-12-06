<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# RecycleAT - AI Recycling Copilot

View your app in AI Studio: https://ai.studio/apps/drive/1g--p1jATLXpSle69gcU6ZWq9KCIYA2ss

You need an google account and accept all the prompts. Usage is free.



# About the project
## Inspiration
Sorting rules differ from country to country, and even from city to city. It can be hard to know where to put trash correctly. With our easily accessible web app, users can get results based on official data per city. It’s also a tool we genuinely want to use ourselves, as we sometimes struggle with proper waste sorting.

## What it does
Based on the searched item, the app shows the correct disposal method, using the official data for the selected city. If the search term is ambiguous, it asks the user for clarification. Try searching for “pizza box” (either city) or “meat” between Vienna and Linz. It always matches the term with an offical data.

## Design

Minimalistic. It should be easy to use and provide all necessary information, nothing more. The core design principle was: make it simply work. No installation, no account, no hassle, no points. Less is more.

## Technology

We offer two input methods: text input and image input. If an image is used, Gemini 2.5 Flash identifies the main waste type and returns a text output. This text is then matched with the official keys in a JSON “database.” We maintain both English and German keys. This matching also uses Gemini 2.5 Flash. Smaller models are possible, but accuracy on unconventional items drops. We also include tips for specific categories, such as glass bottles with deposit (“Pfand”). Category matching uses "gemini-flash-lite-latest". Less accurate, but fast.

## The app is built with:

React 19 (TypeScript)
Tailwind CSS, Lucide React

## The app

Thanks to Google AI Studio, usage is free. If deployed, one could switch to self-hosted open-source models. In general, search should become smarter e.g., converting keys to semantic vectors and using similarity metrics like cosine distance.

## How we built it

We used Google AI Studio to develop the app and performed web scraping to gather data for Vienna and Linz.

## Challenges we ran into

Data acquisition, accurate item matching, and asking users for clarification only when needed. Collecting all Austrian waste data is time-consuming.

## What to add
Find the nearest bin and navigation instructions via Google Maps
Opening hours of recycling centers (ASZ)

##Accomplishments we’re proud of
The app works well, provides helpful tips, and is genuinely useful. Try it yourself.
