---
layout: post
title:  "Permutation (How to Count?)"
---


When I first tried to understand “permutation,” it felt like banging my head against a wall for hours. The name itself sounded mysterious and scary, but actually, it turned out to be just an advanced counting method.

If we want to know how many items are inside a box, it’s quite simple. We just need to examine each item in the box one by one and increment the count by 1 for each item we encounter. (These items can be anything discrete, such as apples, oranges, etc.)

Now, you’re trying to make a flag with 8 colors. Your design for the flag is simple; you just need to place the 8 colors in order because that’s your creativity limit. In this setting, you don’t have to be creative at all; you just need to try to put 8 colors in different orders and pick one that looks good. Seems like a simple task; you decided to try one by one each of the 8 colors in different order.

But when you started doing this, after 1 hour, you noticed that it’s taking too much time than you expected, and you wonder if you should pause a little bit and use your brain to actually guess how many different ways 8 colors can be ordered.

At the start, your primitive brain tells you, ‘Oh god, how the hell can I count this?’ But you don’t have an option because you have been counting for 1 hour, so you are a little scared of how much longer it’s going to take. So you push your brain a little bit and try to work out this count

After hours and hours of thinking, you finally got an idea. The idea is to imagine the ordering of colors as a sequence of steps. In this case, you have 8 steps, and at each step, you have to pick a color. Now, interestingly, when you are at the 1st step, you will have 8 colors to choose from. Then, when you are at the 2nd step, you only have 7 colors to choose from because in the first step, 1 color got eliminated from the choices. If you continue this, you end up with 1 choice at the final stage.

This process seems to make sense. You try to visualize this process to understand it better. You visualize each step as a branching in a tree, starting at the root, and you can have 8 choices for the first step of the branch. In the second step, each branch has only 7 choices, and so on until you reach 1 choice for each branch. Now, you realize that each branch represents exactly a different order of colors you need to try. So, with a little mental effort, it becomes obvious that if you count all the branches, that’s the count you needed. Cool!


Now you can extract the pattern from here. If you start at the root, you will have 8 items. In the next step, you will have 8x7 (this is because each branch will have 7 branches each at the next step). If we continue this pattern, it will be like 8x7x6x5x4x3x2x1. Okay, this makes sense.

Ok, now you realize it doesn’t have to be 8; it can be any number. Still, this process makes sense and seems like it will work for other numbers of items. So, you replace 8 with the placeholder “n,” and the pattern will be as follows:

n x (n-1) x (n-2) x …. x 1

The shorthand for the above one is the following:

n! (spelled as “n factorial”)

So now you can plug in any number for “n” and you can count how many way’s to order those “n” items using the above formula.

By the way, you plug in 8 for your flag color example and the answer is

n = 8

n! = 8! = 8x7x6x5x4x3x2x1 = 40,320

Oh, Jesus, you think it’s worth the effort you put into working out this method to count before you spend days to finish the 40,320 possible orders for 8 colors.

Now you have some time left in your hand, so try asking a few more obvious questions following the above pattern.

What if I want to choose only 3 ordered colors from 8 colors?
What if I have the option to choose the same color at each step? (For example, you can choose the same 8 colors repeatedly)
For the first question, the answer is to simply stop the sequence after 3 steps or tree branching in 3 levels.

8x7x6

The general pattern is

n x (n-1) x … x (n-k+1)

The shorthand notation for this is

n! / (n-k)!

For the second question, the answer is that at each step, you will have the same number of choices. So, instead of subtracting 1 choice at each step, you won’t subtract at all and keep the same number of choices all the way up to the “n” steps. In that case, the formula is simply

8⁸

The general pattern is

n^r (n-number of choices, r-number of steps or items)

So, this is just a method for counting in specific settings.

Readings:

Combinations and Permutations
In English we use the word "combination" loosely, without thinking if the order of things is important. In other words…
www.mathsisfun.com

https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:prob-comb/x9e81a4f98389efdf:compound-probability-of-ind-events-using-mult-rule/quiz/x9e81a4f98389efdf:prob-comb-quiz-1