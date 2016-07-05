---
template: post.jade
---
Changing my Workflow
===============

Awareness
------------

So lately I have been doing some Front-End work, and like many developers I am baffled by the plethora of options available out there to make a smooth and painless workflow.

Truth-be-told there is no perfectly smooth workflow, and its because of these rough edges we developers use and build amazing tools to ease mundane and troublesome tasks.

Most of the tools I discover are basically because I peeked at the source code of open-source repositories on GitHub and such, some are really life changing (*Jade/Pugjs saves me from HTML tag spaghetti hell* ) while others are quite bothersome ( *I am looking at you GruntJS and Coffeescript* ).

I have attended several developer Meet-ups and most of them orbit around people sharing solutions to common development processes; the curious thing is most of them are code-centric, it is as though people are anxious to show-off their code instead of really explaining the problem and the beauty of its solution.

Old habits never die
--------------------

As an experienced web developer I find myself with this momentum that makes me reluctant to changing my workflow albeit suffering from old problems such as *dependency hell* where you have a zillion assets and have to intricately add them to the HTML DOM, and if you change order in some cases you could run into some nasty bugs.

So yeah change is hard to mentally adjust to, but it should reap benefits in the long-run.

Build Systems
-------------

Back in the old days, old languages had a compiling process.The code was translated into machine instructions and all the dependencies were wired with one another to build a program. Nowadays we still compile modern languages like **Ruby, Python, Javascript** but because they all have an interpreter that process is less cumbersome.

The trends now with web based technologies is to process the files, that is to *build* the source files for reasons such as:

- Compressing the files for example **Uglify** crams **Javascript** code into one line saving hundreds if not thousands of return characters and it further adjusts the size renaming variables.

- Having more expressive syntax like **SASS** or **LESS** make **CSS** more like programming and less like styling.Introducing variables and *mixins*.

- Separating the code into more manageable pieces, I am fascinated by **Jade** where simple HTML could be broken down into small pieces and makes building modern pages that have a lot of information in a single page more manageable.

- It is worth mentioning in the **Javascript** world that **ES2015** is a new standard that adds many awesome features to the language.Using **Babel** for instance could allow you to use these *bleeding-edge* technologies right now.

Task runners
------------

So with all these technologies some smart developers have build *task runners* that is a program that executes several *tasks* to build the final software to be deployed.For example if you wish to compile the **SASS** assets and minify **Javascript** assets and perhaps you are using **Jade** and wish to compile all that to the final software it is best to have a task runner do all the necessary mangling.

An example of such a system is **Gulp** (used in this very blog to compile the **Jade** and **Markdown** assets and make it into nice static pages).

So for me writing this very article is as simple as creating a **Markdown** file, and the build system takes care of all the rest (I could even set it to deploy it automatically to the server that hosts this blog, but I prefer to do it myself as it gives me great satisfaction every time I do it).

How to start
------------

If you are starting with build systems and task runners I highly recommend you do it progressively, that is start using one of these technologies (I recommend starting with **Jade** ) and try to adapt your usual workflow to such.Once you master your first build system, it will be easy to adapt yourself and become a guru of modern web development.

>The chains of habit are too weak to be felt, until they are too strong to be broken - Samuel Johnson
