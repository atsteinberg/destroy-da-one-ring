# Destroy Da One Ring

One player battleship style game to guide Frodo to the One Ring.

Input a comma separated list of directions ('n', 'e', 's', 'w') to guide Frodo to the ring. If Frodo encounters an Orc on his way, he expires. Likewise if he wanders off into uncharted lands.

## Screen Shots

![screenshots](/Users/dev/Documents/projects/destroy-da-one-ring/screenshots2.png)

## Getting started

- unzip the archive or <code>git clone https://github.com/atsteinberg/destroy-da-one-ring.git</code>

* run <code>npm i</code>in both server and client subfolder, i.e. assuming you are in the main repo folder, run <code>cd client && npm i && cd ../server && npm i && cd ..</code>

* run server: (from the main folder:) <code>cd server && npm run start && cd ..</code>

* run client: (from the main folder:) <code>cd client && npm run start && cd ..</code>

- enjoy

## To do

There are a few obvious things that could be improved, in particular showing a history of previous attempts. I took the 'nothing is persisted between requests' statement to mean that history should not be shown, but this functionality would be easy to add.

## Built with

- [react](https://reactjs.org)

  I realize that using react might be a bit of an overkill for this game, but I thought it might be good idea to employ some more technology that might be used on the job. Especially since I also used...

- vanilla JS for the game-logic

- [Koa](https://koajs.com/)
