# BrainPiano

![screenshot](/screenshot.png)

## Introduction

BrainPiano helps pianists to memorize chords and keys by using visual association. Take the g-minor 7th chord
as an example. A trained jazz pianist can immediately see this chord in their minds eye. When they think of the 5th
(in the context if this chord) their hand will automatically reach for the D key. Perfecting this in all keys for all
chords takes many years of training.

For most people, it's not easy to visualize chords. Part of the challenge is that notes on the keyboard have no individual
character, they are just black and white keys. BrainPiano helps you by associating colours with keys, where the colour is based
on the role of the key within the chord. In other words: every chord in every key shows up as a particular pattern of colours.
These colours are like training wheels that help to create an association between the chord (as a collection of notes) and
the keys of that chord. And fortunately, also when you are "just" playing the piano, these training wheels will linger in your
mind because of the imprint that you created.

## Explanation of the different parts of the tool

### The chord title bar

This bar shows you the name of the current chord, and the name of the upcoming chord.
You can use this information in two ways. In the first way, you train yourself to recognize the chord that is shown
on the piano keyboard, and use the title bar to check the answer. In the second way, you look at the title of the
upcoming chord and try to picture this chord in your mind. Then, press space or enter to see the chord on the
piano keyboard and check your result.

### The voicing group picker

This picker allows you to pick the voicing groups from which chords are randomly chosen. It's important to start simple
and work your way up to more difficult challenges. For example, first train yourself in only minor chords in only four
keys. When you get pretty good at knowing the keys and colours for these chords, move on to the next four keys, etc.
Then move on to a new voicing group. Then combine two voicing groups, etc.

### The key picker

Below the voicing group picker is the key picker that allows you to pick the keys that are used for generating random chords.
The current chord can be transposed to a different key by pressing the letter for that key. Press a key letter
while holding down the up or down arrow produces a sharp or flat key.

### The piano keyboard

The chord that is shown on the piano keyboard can be inverted by pressing <CTRL+left> or <CTRL+right>. You can move on the next
chord with <Space> or <Enter>. You can play the chord with the 'p' key.

### The IO menu

This menu allows you to export the current voicing groups to the clipboard. Paste the contents into a text editor
to edit them. To import the edited voicings, put them on the clipboard (CTRL-a and then CTRL+c in the text editor) and
use the import item from the IO menu. Make sure that you stick to the correct format for the voicings (the import will do
nothing if there is a mistake). Always save your voicing groups to a file on your computer, so you can paste them
later into BrainPiano.

The format should be pretty easy to understand. Notes are always placed from left to right on the keyboard,
e.g. "flat3", "flat7", "second", "fourth" would be a minor7 chord with a nine and an eleven. Note such as "second" and "nine"
are synonymous: they represent the same note value. The reason for supporting both "second" and "nine" is that it allows you
to write down the voicings in any way that you find natural (e.g. you would probably write "flat3", "flat7", "nine", "eleven").

Every voicing also has an inversions list. If the first value in that list is true, then the root position is used. If the second
value is true, then the first inversion is used, etc.

### Note names

Supported note names are "root", "flat9", "second", "flat3", "sharp9", "flat10", "third", "fourth", "eleven", "eleventh", "sharp4", "sharp11", "flat5", "five", "fifth", "sharp5", "flat6", "flat13", "six", "sixth", "flat7", "seven", and "seventh".
