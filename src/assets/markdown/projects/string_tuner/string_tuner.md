---
order: 1
category: Project
title: String Tuner
image: './tuner_image.png'
githubLink: 'AndroidStringTuner'
---

An Android app for tuning instruments, written in Kotlin.<!-- end --> It has a chromatic tuner that can be used for tuning any instrument, but the app is specialized for tuning stringed instrumens. It has multiple tunings for bass, guitar, ukulele and tres, as well as cello, violin, and viola.

This app uses the Model-View-ViewModel UI architecture pattern. RxJava is used for the audio input to frequency detection processing chain, and LiveData is used for UI updates. [TarsosDSP](https://github.com/JorenSix/TarsosDSP) is used for the frequency detection.

![Screenshot](./screenshot1.png)
