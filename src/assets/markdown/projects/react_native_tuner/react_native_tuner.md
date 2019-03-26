---
order: 4
category: Project
title: React Native Tuner
image: './tuner_image.png'
githubLink: 'React-Native-Guitar-Tuner'
---

A guitar tuner for Android, built with React Native<!-- end -->, based on the guitar tuner project from [React Native Blueprints](https://www.packtpub.com/web-development/react-native-blueprints).

The project in that book only has an iOS version, as it used an iOS only library for frequency detection. I was able to implement a naive frequency detection algorithm using the [Noise](https://github.com/paramsen/noise) library for performing the Fast Fourier Transform. The algorithm was accurate, but too slow for real-world use.

I eventually discovered [TarsosDSP](https://github.com/JorenSix/TarsosDSP), which has several frequency detection algorithms and which I used in the [Android Tuner](/projects/android_tuner/) project. I began working on a TarsosDSP implementation for this app, but I found myself spending more time on dealing with changes in React Native and the Android OS than working on the actual implementation, and felt my time was better spent focusing on the native Android version.