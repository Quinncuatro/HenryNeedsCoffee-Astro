---
title: How I've Been Driving LLMs - Part 1
category: "LLM"
date: "2025-07-01"
type: "blog"
desc: "An exploration of Geoffrey Huntley's StdLib & Specs Method"
---

It's been a while since I've written one of these, and I low-key hate how often I've done the "this blog is so back!" dance, so let's jump right into it. To paraphrase Geoffrey Huntley:

> You are using LLMs incorrectly.

Listen, I get it. New tools are exciting! They're exciting to me, too. LLMs have been around for a while, but I'm also a little new to using them for coding. I've had a ChatGPT subscription for about a year now. I've used it for troubleshooting some GitHub Action errors, scaffolding out some ECS JSON boilerplate, and for building tools on top of [Atuin](https://atuin.sh/). It was (and is) a very helpful tool, even in the pre-MCP era.

But what we've been seeing come out in the last couple of months (mainly off-the-shelf agentic tools and the seeming advent of Model Context Protocol servers) have really changed the game. These new tools are incredibly powerful. They now have the ability to reach beyond the walls of their apps and take action on filesystems. Instead of generating a code snippet you need to copy and paste somewhere useful, they can just add a file to your codebase and write the script _for you_.

But there are still limits. Context windows. Message lengths. Token rate limiting.

How do you drive a top of the line Ferrari with limits like an automatic transmission to it's full potential? I can't put it any better than Philipp Schmid (previously of Hugging Face & now Google DeepMind):

> The conversation is shifting from "prompt engineering" to a broader, more powerful concept: Context Engineering. With the rise of Agents it becomes more important what information we load into the “limited working memory”.

---

A little over a month ago, my boss shared a blog post from Huntley about how he got Claude Code to decompile itself. After reading it, I poked through some of his other posts and got mentally stuck on these two:

- https://ghuntley.com/stdlib/
- https://ghuntley.com/specs/

You should definitely read them yourself, and Geoffrey says a lot specifically about Cursor (though I'd argue his points apply more broadly in the whole LLM space), but I'll do my best to summarize:

- The `agentic` cat is out of the metaphorical bag, so you may as well lean into it. Agents can actually _do work_ instead of just talking about it and, like the chat apps of the world, can be steered by providing them context about what you want them to do.
- Instead of using one-off prompts, build up a "stdlib" (standard library) of re-usable rules that can be composed together like Unix pipes. You might have stdlib docs about how you like to write JavaScript (architecture choices, error handling, naming schemes), particular frameworks you like to use for different problem domains, how you like to build Docker images. Any number of things really. This tells your LLM "how" to build software to your taste.
- In addition to your ever growing document store of stdlibs, start each new project (feature, bugfix, etc..) by having a conversation with your LLM of choice about what you want to build. Have your LLM ask you follow up questions as assumption checks. Once you iron out what exactly needs to get built, have it generate a set of project specification docs. Things like technical decisions, testing strategies, api references, and deployment methods. This tells your LLM "what" to build.
- When those stdlib and specs docs are ready and loaded in your project repo, spin up an agent (like Claude Code), and get it into a loopback pattern. You can tell it something like:

	```Please go and study all the documents under @specs/ for functional specifications. Study all the documents under @stdlib/ for technical requirements. Implement what is not implemented. Create tests. Build the project, run it, fix on errors.```

- And if you ever run out of tokens or hit a context window: spin up a new agent, give it the same prompt, and `Implement what is not implemented` tells it to pick up and start running again. This lets the LLM run wild in it's sandbox.

There's more nuance than that, and this method works a lot better with strongly typed languages that provide good error messages. Like I said, please go and read those posts yourself. They're _very_ helpful. The main idea, though, is that these new tools allow us to build autonomous development systems where we can compose high level requirements and let the agent do the heavy lifting by leveraging all of the stdlib and spec docs we're writing to keep it aimed in the right direction.

Say it with me now:

> Context Engineering!

I used that method to build a Home Assistant CLI/TUI app over the course of a couple of days. That project had been in my backlog for _years_ and I was able to generate a functioning CLI tool to handle my lights from the command line in about 2-3 hours of active time steering Claude Code.

Geoffrey's stdlib and spec blog posts lit a fire in me. They're stuck in my brain. And those of you who know me, know that I live by the phrase "work smarter, not harder". All I can think about lately is how to scale this up.

If I could build a tool I've always wanted in the matter of a few hours of generating some off the cuff Golang stdlib docs and defining my project specifications, what could I do with a _mountain_ of stdlibs built up over _many_ projects?

Turns out, the mountain already exists and we can use it _for free_.

---

Part 2 to come soon. I can't wait to introduce y'all to Jane!

---

Tool Links:

- https://www.anthropic.com/claude-code

Further Reading:

- https://ghuntley.com/stdlib/
- https://ghuntley.com/specs/
- https://www.philschmid.de/context-engineering


