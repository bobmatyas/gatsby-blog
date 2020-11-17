---
title:  "Installing Git and Configuring on MacOS"
date:   "2020-06-16"
description: "A guide to setting up Git on MacOS and configuring for use with Github."
---

I recently had to install Git on a Mac for the first time and set it up to connect with Github. While actually installing Git was relatively easy, it isn’t something you do every day. I decided to put my process down for future me and to document it for others since many guides I saw online were missing a few commands.

## Install Git

1. Open Terminal
2. Type git –version
3. Typing the above command should prompt your Mac to start installing Git. This will install an Apple fork of Git which worked for me, but you can get [newer versions](https://git-scm.com/download/mac) by downloading it manually

## Configure Git

The first thing you will want to do is configure your global Git username and email address. This will be associated with all commits that you make.

As a side note, if you don’t want to use your actual email address you can use a masked email address that is provided by Github. To get that address, login to your Github account and navigate to Settings and Emails. As you scroll down the page you should see a checkbox for "Keep my email address private". Once you click that checkbox you will be given an email along the lines of 1234567+username@users.noreply.github.com

In the terminal you will next want to type:

```
git config –global user.name "name"
git config –global.email "email address"
```

##  Configuring Github

### Check for Keychain Helper

Keychain Helper is a tool that stores your Github credentials on your computer so that you don’t need to enter them each time you connect to Github. This allows you to use Github via HTTPS/SSH for secure transfers.

In the Terminal type:

```
git credential-osxkeychain
```

On MacOS Catalina, this was already installed after installing Git.

### Setting Up SSH Keys

In order to connect to Github, I setup SSH using the following steps:

#### Check for Pre-Existing Keys

1. In the Terminal, I navigated to ~/.ssh using cd ~/.ssh
2. Since it was a new setup, I had to generate a new SSH key by typing:

```
ssh-keygen -t rsa -C "email@domain.com"
```

In this case, the email should match your Github account.

When you run that command you will be prompted for a passphrase (which you should store in your password manager in case you need it in the future).

### Add SSH Key to ssh-agent

Setting this up will make it so that you don’t have to add enter your SSH passphrase each time.

#### Start the SSH agent

```
eval "$(ssh-agent -s)"
```

Check to see if ~/.ssh/config exists: open ~/.ssh/config 

If you get a message saying that the file doesn’t exist type: touch ~/.ssh/config

If you had to create the file using Touch, type: open ~/.ssh/config which will open the file in your default MacOs text editor.

In the file paste:

```
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

and save it.

Go back to Terminal and type: 

```
ssh-add -K ~/.ssh/id_rsa
```

#### Add Key to Github

1. Navigate to your account settings on Github
2. Click "SSH and GPG Keys"
3. Click on "New SSH Key"
4. Give your key a name in the "Title" field
5. Go back to Terminal and type pbcopy < ~/.ssh/id_rsa.pub to copy your key to the clipboard
6. Navigate back to Github and paste it into the "Key" field and enter "Add Key"


### Test Your Configuration

You can now test your connect by going back to Terminal and typing ssh -T git@github.com

This should initiate a connection to Github. Type "yes" when it asks if you want to continue connecting  and you should get a message saying that you successfully connected

### Cloning a Repository

To verify that everything is working, you could clone one of your repositories (repo) on Github. Navigate to a repo and click "Code" and then "Clone with SSH". Copy the URL to the clipboard and go back to the Terminal and navigate to the directory where you want to clone the repo and type:

```
git clone git@github.com:username/repo-name-is-here
```

If everything is setup right, your code should be pulled down from Github.
