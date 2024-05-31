---
title: Troubleshooting
description: A list of commonly known issues and how to fix them.
---

On this page you will find a list of commonly known issues and how to fix them.
If you do not find the bug or issue you encounter in this list, you can open an issue on GitHub or write an email to support@kanriapp.com.

Furthermore, it is generally advised to regulary export your data from the import/export menu as a backup to prevent data loss.

## Custom board background disappeared

Your background disappearing is not an uncommon issue, so don't worry. The fix is just resetting your background and adding it again.

If you are interested, here are the causes why this can happen:
- **Update from older version:** When updating from 0.5.1 to 0.6, a change in the underlying code might break existing backgrounds. 
- **Background image path is different:** If you moved or renamed the background image, Kanri does not know about it anymore. This is because Kanri only has access to the files you give it to and does not actively track them.
- **Board imported from another device:** If you imported a board from another device, Kanri cannot find the file since the path is different (see explanation above).

## App is taking a lot of time to load/slowing down and using a lot of RAM

**Please note:** This issue should be mitigated starting from version 0.6. If you still encounter this, please contact support@kanriapp.com.

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
