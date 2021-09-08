---
title:  "Updating Kindle Fire to LineageOS v15.1"
date:   "2021-09-07"
description: "How I updated my Amazon Kindle Fire HD to run LineageOS v15.1 (based on Android v8.1)"
---

![Android v8.1](./../../images/android-81.jpg)

Over the weekend, I updated my Kindle Fire HD to use LineageOS v15.1. Last year, I [unlocked the tablet and installed LineageOS v12.1](https://www.bobmatyas.com/blog/lineageos-kindle-fire/). With LineageOS v15.1, I now have a Kindle Fire that is running Android v8.1. The tablet’s original [FireOS](https://en.wikipedia.org/wiki/Fire_OS) was based on Android v5.1.x, so running [Android v8.1](https://en.wikipedia.org/wiki/Android_Oreo) is quite an improvement!

### Installation Directions

The installation was straightforward, the only downside is that you will lose your settings. Here’s the process I followed:

1. Downloaded the LineageOS v15.1 ROM [from here](https://forum.xda-developers.com/t/rom-unlocked-douglas-giza-otas-lineage-15-1-7-sep-2021.4328503/)
2. Copied the downloaded ZIP file onto the micro SD card in the tablet
3. Rebooted into recovery (TWRP) by restarting and holding POWER + Volume Down during reboot
4. Once in recovery, wipe the system, cache, and user data.
5. Install LineageOS.
7. Once that is done, wipe the Dalvick cache.
8. Reboot.
 
### Initial Impressions

The ROM is quite smooth and the newer version of Android is an improvement over what I was running previously. Android v8.1 has a built-in dark theme, so I was able to remove the custom theme that I relied on in v5.1. Dark mode support works natively in more apps now as well. I did notice that the animations were a bit slow, which I was able to fix by turning on Developer options and adjusting the various animation scales to 1x instead of 0.5x. Without testing, the battery seems to drain faster, but for the amount I use the tablet, it is manageable. 

Overall, I haven’t encountered any issues and unlike what I was previously running, this version is being actively developed. In fact, I was able to install an over the air (OTA) update today. 

I'm thankful for the folks who put the time into figuring out how to unlock this device and those who are continuing to develop for it. 