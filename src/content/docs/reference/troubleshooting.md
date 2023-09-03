---
title: Troubleshooting
description: A list of commonly known issues and how to fix them.
---

On this page you will find a list of commonly known issues and how to fix them.
If you do not find the bug or issue you encounter in this list, you can open an issue on GitHub or write an email to support@kanriapp.com.

Furthermore, it is generally advised to regulary export your data from the import/export menu as a backup to prevent data loss.

## App is taking a lot of time to load/slowing down and using a lot of RAM

If your app is very slow to start and uses very big amounts of ram, don't worry! You have encountered a rare issue which is easy to fix.

You just need to delete one configuration file named `.persisted-scope`, which if you ran into this bug should be a few MB big as opposed to its usual size of a few KB at most.

Force close any running instances of the app, and navigate to delete the file `.persisted-scope` with following path:
```
Windows: %appdata%\tech.trobonox.kanri
Linux: Search for the tech.trobonox.kanri folder using a file manager
macOS: ${HOME}/Library/Application Support/tech.trobonox.kanri/
```

You might need to enable the option to show hidden files to be able to see the file.

Delete this file and on the next start, the application should be working as usual. If you want to have a copy of your data saved, you can also create a copy of .kanri.dat.

**All of your data should be safe, only your board background images might stop working**.