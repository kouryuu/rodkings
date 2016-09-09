---
template: post.jade
---
Throwback Thursday, old college program revived
===============

## Introduction

So while I was looking for some stuff on an old backup, I realized there were some good 'ol
programs I wrote back in the day.

The first real program I wrote was at 16 years of age; it was a simple web strategy game.
I must confess it was quite innovative; though it did not always work as expected.
Writing a game in Javascript in the late 2006 was not as performant as today and had many problems;
such as compatibility issues and awful graphic APIs if any.

Another interesting piece of code I made back in my Image Processing Class with professor [Manuel Michelone](http://la-morsa.blogspot.mx/),
I used a very interesting computational geometry concept -- Voronoi Diagrams.

## Voronoi Diagrams

So a [Voronoi Diagram](https://en.wikipedia.org/wiki/Voronoi_diagram) is a partition of a plane, the simplest form of such diagram is in a 2-dimensional
Euclidean plane.

![Voronoi diagram](/imgs/voronoi.png)

We start with a finite set of points {p1,p2,...pn} in the Euclidean plane with coordinates
{(x1,y1),(x2,y2),...(xn,yn)} we will call centroids, so a voronoi cell is a polygon inside the Voronoi Diagram that
happens to be the region where all of the points inside are closest to centroid associated to the Voronoi cell,
than any other centroid.

To put it in simple terms suppose the centroids are hospitals in a certain city, if we draw a Voronoi Diagram
of such points in a map we could determine based on the Voronoi cell the zones where a hospital
is closest and perhaps from that judge zones with low coverage that should invest on ambulances or new facilities.
In fact it was [used by John Snow](https://en.wikipedia.org/wiki/1854_Broad_Street_cholera_outbreak) a 19-th
 century physician to uncover the relation of water pumps to a cholera outbreak in London.

![Plaque in Lodon about John Snow](/imgs/john_snow.jpg)

## Artistic Filter

So back to the actual algorithm, I use Voronoi Diagrams to make really cool effects such as these:

![Leaf transformed by image filter](/imgs/leaf_transformed.jpg)

This is my algorithm:

1. Choose random points in a plane.
2. From those random points generate a Voronoi diagram.
3. Read the pixel data of the image and use the color that corresponds to the pixel in that position.
4. Color the cell with the color from the previous step.
5. Do it for all the Voronoi cells and display the resulting image.

You could try using different quantities of random points and you will see the image gets clearer.

![Cat filter with 1000 random points](/imgs/cat_1000.jpg)

![Cat filter with 5000 random points](/imgs/cat_5000.jpg)

I set-up a [github page](https://kouryuu.github.io/vangogh-js/) and [repo]() so you could both try the effect and download the code.
There is also a [post](www.unocero.com/2014/11/12/como-se-hace-un-filtro-artistico) my professor and I wrote in a technology blog in Spanish.

I plan on improving this algorithm and adding more features follow my github to be updated.

>Darn the wheel of the world! Why must it continually turn over? Where is the reverse gear? - Jack London
