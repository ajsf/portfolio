---
order: 3
category: Project
title: Recipe Assistant
image: './ra_image.png'
githubLink: 'recipe-assistant'
---

An Android app that pulls recipes from TheMealDb, and can read the recipes out loud, triggered by buttons or voice commands.<!-- end -->

With data provided by the [TheMealDb](https://www.themealdb.com/), this app uses Room and the Paging Library to offer continous scrolling while browsing recipes. It fetches the recipe thumbnails asynchronously, and display the recipe title, allowing smooth continuous user interaction.

![Screenshot](./screenshot1.png)&nbsp;![Screenshot](./screenshot3.png)

Once a recipe has been selected, voice recognition can be activated, which is implemented using [PocketSphinx](https://github.com/cmusphinx/pocketsphinx). Using either voice activation, or buttons, the user can have the recipe read out loud, which is implemented using [Android TextToSpeech](https://developer.android.com/reference/android/speech/tts/TextToSpeech).

![Screenshot](./screenshot2.png)&nbsp;![Screenshot](./screenshot7.png)

The app has responsive layouts for both browsing and reading recipes.

![Screenshot](./screenshot4.png)&nbsp;![Screenshot](./screenshot5.png)
![Screenshot](./screenshot6.png)
