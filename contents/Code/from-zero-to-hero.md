---
template: post.jade
---
From Zero to Hero using Yeoman
===============

Building software is like cooking
---------------------------------

I like to explain complicated Computer Science stuff, with simple analogies from daily life.
So picture this, you are preparing yourself to cook something delicious; the first thing you need to do
before even starting to chop or stir anything is .... of course buying the ingredients.

The same goes for software, you need to have the things you need in order to start coding in whichever
programming language or framework you wish.

It is quite common wasting time building things from scratch, so common sense tell us we should build thing using some sort of template.

I have some experience using Ruby on Rails, and what fascinated me the most was the scaffolding power of the generators.With a simple command you could generate both the files and the underlying code needed to *wire* the components together.


Introducing Yeoman
------------------

So we have a CLI to generate things in Ruby on Rails, but what if I don't want to use Ruby on Rails?
What if I want to have that same power to build static websites that use Javascript assets?
What if I instead want to use [insert your favorite stack]?
We programmers want freedom of choice and a tool that could make us choose whatever we want to use would make it paramountcy.

That is the spirit of the Yeoman project, to be able to get you started as quickly as possible and provide you with all the tools you need.

Advantages of Yeoman
--------------------

- Yeoman is scaffolding tool, that is language agnostic; meaning you could build your webapp using many of programming languages that power the web.

- It claims to be non-opinionated, that is it will not impose or enforce anything giving you plenty of freedom.

- It is relatively easy to hack and it even has a *generator generator* that is a generator to build new generator, sort of like the stem cells of Yeoman.

- Many generators let you choose the technologies for your new project, that is nice since you could download a very generic generator and cherry-pick what you need.

- Using Yeoman can help you learn new technologies as it gives you the basic setup and some example code to get started.

- You could speed up your workflow using sub-generators, these build small components of your project; for example if you use React and like to separate your code on separate classes then a sub-generator could layout a template for your new class and wire it up to the dependency pool.

- There is a way to add it to your favorite IDE or editor since it has a very flexible API.(For example [this](https://atom.io/packages/atom-yeoman) plugin for Atom Editor)

Caveats
-------

Yeoman is not for every project, if you intend to test-drive some stack of technologies then it could fit nicely in your development.

On the other hand if you use a very customized framework and build tasks then you should evaluate the time it would take you to build your custom generator or modify and existing one, and if that time invested is really worth it (usually its a good idea to invest this time if it fits many projects).

On my experience I had to modify [this](https://www.npmjs.com/package/generator-react-gulp-browserify) generator to [one with LESS instead of SASS](https://www.npmjs.com/package/generator-react-gulp-browserify-less), it took me about two days to fully adapt it.

Also many frameworks such as **Ember**, **Backbone** already have their CLI generators (**EmberCLI** and **Brunch**) and due to their specialized workflow they sometimes work better than Yeoman.

Another thing I have encountered is the vast array of options to choose from, there are some generators marked as *official* and usually they adhere to some standards and the so called *Yeoman Workflow*.

Its worth mentioning also that there is a recent alternative to yeoman's sub-generators with [Plop](https://github.com/amwmedia/plop)
a tool specialized to generate small parts of the project.

Final Thoughts
---------------

So Yeoman could be really helpful in some scenarios and it certainly is better than copying files and editing them manually.Of course this tool needs other tools to be relevant such as task runners, testing tools etc. And with the ever changing world of programming tools
