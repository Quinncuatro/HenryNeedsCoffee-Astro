---
title: How I've Been Driving LLMs - Part 2
category: "LLM"
date: "2025-07-07"
type: "blog"
desc: "Introducing Jane: My Custom Specs/Stdlib MCP Server"
---

Author Note: This post is Part 2 of a "How I Drive LLMs" series, so consider reading [Part 1](https://henryneeds.coffee/blog/driving-claude-code-part-1/) before continuing.

So, you might be thinking:

> Great, Henry. Using spec and stdlib docs sound great, but if I'm generating those docs with Claude Desktop and you want me to generate code with Claude Code, that's a _lot_ of copy/paste-ing I need to do for every new project.

Excellent instincts! I see you're thinking ahead, and yeah: it _is_ a lot of copying and pasting individual docs over from Claude Desktop artifacts to a new project dir in your IDE. After doing that for exactly one project, I realized I needed to automate that toil away.

These new agentic tools could already do _a lot_, but in the last couple of months they've been updated to support remote [Model Context Protocol](https://modelcontextprotocol.io/introduction) servers (which are basically like plug-ins or LLM flavored wrappers for different APIs). It's kind of like taking Claude Code and strapping a jetpack to it.

Instead of relying on outdated training data, you can configure your LLM client to use the [Context7](https://github.com/upstash/context7) MCP server so that you can always pull up to date docs for the languages/frameworks you're using. Instead of relying on string searches in your codebase, you can set up a [Serena](https://github.com/oraios/serena) MCP server so that you have access to an abstract syntax tree, giving your LLM better deep understanding of your code base.

So, in that vein, let me introduce you to my first MCP server: Jane.

> **🔗 [Quinncuatro/jane-mcp-server](https://github.com/quinncuatro/jane-mcp-server)**
> Jane is a Model Context Protocol (MCP) server that provides a knowledge management system for stdlib and specs documents.
>
> ![GitHub stars](https://img.shields.io/github/stars/quinncuatro/jane-mcp-server?style=social) ![GitHub forks](https://img.shields.io/github/forks/quinncuatro/jane-mcp-server?style=social) ![GitHub issues](https://img.shields.io/github/issues/quinncuatro/jane-mcp-server)

Jane is, essentially, a handful of CRUD tools sitting on top of a pile of flat markdown files. Jane can create & update documents, search & list those documents, and get specific documents to pull them into an LLM's context window. Those documents live under two predictable subdirectories: `./Jane/specs/` and `./Jane/stdlib/`. Jane is self-hostable, and can connect to both Claude Desktop and Claude Code.

So when I'm working on a new project, I can chat with Claude Desktop to develop a list of languages, frameworks, features, and expected outputs for defined inputs. That process usually starts with something like:

> `Hey there! Time for a new project! Please read these two blog posts: https://ghuntley.com/stdlib/ & https://ghuntley.com/specs/ to get an idea of our workflow and then come back to help me plan out spec docs for $project. Please ask me any manner of follow up or assumption check questions you might have before actually generating any documentation. $More-context-about-project...`

After a few back and forths, and we come to a good understanding of what we're going to build, Claude can create a new subdir on Jane (`./Jane/specs/$project-name`) and populate it with everything we discussed in documents like:

- `api-reference.md`
- `deployment.md`
- `document-management.md`
- `technical-decisions.md`
- `testing-strategy.md`
- ...

I often accomplish that with a prompt like:

> `Great! Now that we've come up with what we want to build, please create a new subdir under specs on Jane for this project and populate it with project specification documents. Use as many different categories as you think you need, but keep in mind you want to be thorough in your explanations, but succinct enough to not blow up context windows.`

So, after having a short conversation with my AI intern, they can generate documents that can be loaded into any LLM's context window to steer the session.

Similarly, you can spin up a different conversation with Claude Desktop (with similar prompts as the spec docs thread) to generate language/framework specific stdlib documents to tell an agentic coder not just what to build, but how. The subdir `./Jane/stdlib/python/` might look like:

- `dependencies-management.md`
- `error-handling.md`
- `mcp-protocol-standards.md`
- `performance-standards.md`
- `security-rules.md`
- ...

Here's what a typical Jane directory structure looks like after working on a few projects:


```
Jane/
├── specs/
│   ├── bluetooth-fix-tool/
│   │   ├── requirements.md
│   │   └── testing-strategy.md
│   ├── my-web-app/
│   │   ├── api-reference.md
│   │   ├── deployment.md
│   │   ├── development-workflow.md
│   │   └── technical-decisions.md
├── stdlib/
│   ├── golang/
│   │   └── cli-tool-patterns.md
│   ├── javascript/
│   │   ├── architecture-standards.md
│   │   ├── error-handling.md
│   │   └── testing-patterns.md
│   ├── python/
│   │   ├── dependencies-management.md
│   │   └── mcp-protocol-standards.md
```

And since I'm creating all those documents with a self-hosted Jane MCP server, they're being stored in a central location: on the file system of one of my home servers. So when I'm ready to build, I launch `claude` in a new project directory, and I can similarly use Jane to pull those freshly created documents into the context window with:

> `Please pull and study all the documents under Jane's specs for $project to understand functional specifications and under Jane's stdlib for $language to understand technical requirements. Implement what is not implemented. Create tests. Build the project, run it, fix on errors.`

Claude Code is then able to look at the configuration for using remote MCP servers, see that Jane has tools for `list_stdlibs`/ `list_specs`/`get_stdlib`/`get_spec`, and intelligently use those tools to track down the documents I'm asking about in order to pull them into the context window.

Presto-change-o, no more copying and pasting artifacts over!

Then you can get really fancy, by telling Claude Code:

> `If you need any additional context ($language, $framework, $problem-domain, $whatever), please reach out to Context7 (another configured and self-hostable MCP server) to get whatever docs you need.`

If you're a couple steps ahead of me, you might be thinking:

> If you're generating those stdlib docs in a persistent volume, you can reuse the language and framework specific ones on other projects, right?

And you'd be right! My mountain of stdlib docs keeps building up over time, giving whatever MCP-compatible agent I plug Jane into an ever clearer view of how I like my code written, formatted, and linted. It can keep track of things like naming conventions, idiom usage, testing opinions... all sorts of stuff.

> Author Note: I'm also working on getting a new Claude feature called [Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks) to handle automatically updating those stdlib docs when Context7 comes into play, just to make sure everything stays trued up.

In fact, every project I've built with this method (since creating Jane) has been seeing less and less roadblocks:

- [HenryNeeds.Coffee](https://github.com/Quinncuatro/HenryNeedsCoffee-Astro) (JavaScript/Astro) - I rebuilt my personal site from the Gatsby framework to Astro. This first project benefited from stdlib docs about modern JS patterns and architecture preferences for static sites.

- [Home Assistant CLI](https://github.com/Quinncuatro/hass-cli) (Golang) - I wanted a CLI tool for managing my smart home from a terminal for years now. A combination of good project specification and Go specific stdlib docs brought this project to a working v1 in just a few hours, and convinced me that the specs/stdlib approach actually works.

- [Bluetooth Fix Tool](https://github.com/Quinncuatro/mbp-bluetooth-fix) (Shell/JS) - Another tool I've needed for years: a quick utility script to reset my bluetooth headphones so that audio quality doesn't stay awful after leaving a Google Meet call. Even small tools benefit from having consistent patterns and error handling approaches. This particular project went from "idea" to "working solution" in under an hour.

Every project teaches you something new about your coding preferences, and with Jane, those learnings get captured and reused immediately. My JavaScript stdlib docs got better after the website rebuild. Figuring out the Home Assistant tool improved my CLI tool patterns documentation. Each project built with this method and MCP server makes the next one at least a little bit faster.

Anecdotally, I've even seen a decrease in the amount of "tries" and corrections it takes to spit out something more useful than the often lambasted "AI slop" we hear so much about online. For instance, Claude Code was able to get most of the Bluetooth Fix Tool right on the first try. It only took three follow up prompts (mostly passing it error messages), to shore up basic functionality. All of the pre-work of generating the spec and stdlib docs made for an easy implementation.

But like I alluded to earlier, you really start cooking with gas when you combine Jane with other MCP servers. Jane is great for planning then transitioning to building, but Context7 can grab up to date documentation to fill in context gaps, and Serena makes file operations more efficient. Just those three MCP servers tied together have made me worlds more productive - at least with these "starting at 0" projects.

Now that we've covered how Jane has helped me solve real world problems, let's zoom out a little bit. With reliable context engineering tools and agents that can actually implement code based on my preferences, I find myself thinking about problems differently.

I'm spending less of my free time working on traditional "side projects" and more time figuring out how to architect systems that can build projects automatically (and with less user input from me).

Context engineering definitely scales. I'm curious what will happen when I combine Jane with custom agent workflows. I have some experiments going with LangGraph at the moment, and can't wait to tell you more about what I can build.

Until then, stay frosty and keep building rad things.

---

Tool Links:

- https://www.anthropic.com/claude-code
- https://github.com/upstash/context7
- https://github.com/oraios/serena
- https://github.com/quinncuatro/jane-mcp-server

Further Reading:

- https://ghuntley.com/stdlib/
- https://ghuntley.com/specs/
- https://www.philschmid.de/context-engineering
- https://modelcontextprotocol.io/introduction
- https://docs.anthropic.com/en/docs/claude-code/hooks


