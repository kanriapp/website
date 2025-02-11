---
title: Frequently asked questions
description: A list of frequently asked questions and the answers to them
---

## I am getting an error about the app being unsafe! Is Kanri safe?
Don't worry! You are receiving this error because Kanri was not signed with a digital signing certificate, primarily because it costs a considerable sum of money. Because Kanri does not generate any revenue, these certificates cannot be afforded for now. If you want to be 100% certain about Kanri's safety, feel free to scan the executable with a known tool such as VirusTotal.com. The lastest version 0.8.0 has 0 detections, meaning that all antivirus engines used by VirusTotal classify Kanri as safe.

## When is collaboration/cloud sync functionality coming to the app?
This functionality is planned but since the app started out as offline-only, it is not a priority to implement online sync capabilities until after version 1.0.
The app is built by a solo developer in their free time, which means that progress might be slow at times.

## Where is my data saved? Can I change the location?
Under the hood, Kanri uses `tauri-plugin-store` to store all data in a local JSON file.
These are the respective locations for each operating system:
```
Windows: %appdata%\tech.trobonox.kanri\.kanri.dat
Linux: /home/USER/.local/share/tech.trobonox.kanri/.kanri.dat
macOS: ${HOME}/Library/Application Support/tech.trobonox.kanri/
```
Unfortunately, because of the library used to store the data, it is currently not possible to change this location. This feature is planned but requires a lot of work from a UX (user experience) perspective and is not expected to be released anytime soon.

## Any other question you would like to see here?
If there's any other question you believe could be in this section, please write an email to support@kanriapp.com.
