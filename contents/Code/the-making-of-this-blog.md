---
template: post.jade
---
The making of this blog
===============

Introduction
------------------------

So this post is related to how I came to build this blog and the perks/difficulties in the process.
I realised that as a software developer, sometimes we store a plethora of information and often times it gets misteriously erased due to the sheer amount.

So writing a blog may help to share the experiences and **store** that information in a way.

Having complete liberty to use any programming language and tool, I decided to build it such that it met three main goals:

- I am able to write an entry so long I have either an Internet connection or my laptop.
- The front-end is very easy to modify and configurable
- I have a clear and transparent process to deploy it to the live website.
- Write using a versioning system to make the corrections transparent and the process very fluid.

So the journey begins...

Software Analysis
------------------------------

I made an extensive research on different platforms and software such as:

- Jekyll
- Octopress
- Wordpress
- Drupal
- Wintersmith
- Metalsmith

So both [**Jekyll**](https://jekyllrb.com/) and [**Octopress**](octopress.org/) seemed like a good idea, the thing that bothered me though was that both already had a directory structure (I like to make my own conventions and organise my stuff however I like) and changing some behaviours seemed bothersome.

Both [**Drupal**](https://www.drupal.org) and [**Wordpress**](https://wordpress.org) are quite popular and powerful and being a Drupal power user I could easily create it with Drupal, the thing with CMS is that firstly there is a lot of files and bloated code.Second of all nothing beats the speed of static files and altough there are caching strategies that could make both almost as fast, there is still some overhead processing.

So then I gave a chance to both [**Wintersmith**](http://wintersmith.io/) and [**Metalsmith**](http://www.metalsmith.io/).I explored [**Wintersmith**](http://wintersmith.io/) first due to it being described as a "*Flexible, minimalistic, multi-platform static site generator built on top of node.js.*" , so I gave it a go.

The thing with [**Wintersmith**](http://wintersmith.io/) is when I tried to make a flow to use Jade templates I had some trouble avoiding the header in the markdown files, so although I really did like it (I even like the name of it) I settled for [**Metalsmith**](http://www.metalsmith.io/), due to its content creation pipelining.

So as for the templating engine I decided to use [**Jade**](http://jade-lang.com/) due to its integration with [**NodeJS**](https://nodejs.org/en/) and its simplicity.

So the templates in Jade render Markdown files and embed them so that the content is created automagicaly.

Well that went incredibly well and I had [**Gulp**](http://gulpjs.com/) do all the minifying, preview and bundle.

I tried to avoid any JS client-side code as much as possible but because I realised I needed a system to display posts based on the *category* associated with it I decided to use [**Angular**](https://angularjs.org/) to have a SPA do all the filtering and avoid having to reload the content from the server.

All the posts are defined in the *posts.json* with minimal information about them that could be displayed.

The road ahead
-----------------

So the blog is far from finished I have several functionalities I will implement when I could invest some time in the coding.
These are my top priorities:

- [ ] Code highlighting with readable fonts.
- [ ] Accessibility options, such as increasing font size and contrast
- [ ] Translations (either automatic or with different source versions)
- [ ] Smartphone gestures and optimizations
- [ ] Automatic generation of metatags.
- [ ] HTML5 elements that improve both indexing and rendering.
- [ ] Maybe replacing AngularJS with React or AngularJS2
- [ ] Bundling JS assets




