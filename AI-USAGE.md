# AI-USAGE.md — Lab 08

This is the **one lab where you may use an AI agent to *generate* code** (it follows the
week-8 AI lecture). With that permission comes documentation: log **every** time AI
produced or edited code you submit — **before** you commit it. Using AI only to *learn*
(explanations, error messages, design talk) needs no entry.

**Free models only.** Drop a marker where AI-assisted code lives:
`// AI-assisted — see AI-USAGE.md #N`. Full rules: `project/ai-policy.md`.

---

## Log (one entry per AI use — copy the block for each)

### #1 — <short title>
- **Date:** 2026-11-10
- **Tool / model:** <Claude Sonnet 5.5>
- **Files:** `src/AddTodoForm.jsx`
- **Prompt (verbatim):**

`Convert AddTodoForm from an uncontrolled input (reading event.target.elements) to a controlled input using useState.`

- **What it produced & what I kept / changed / rejected:** 
  Completed the function handleSubmit and changed the return to match. I had to remove a unecessary part in the return that was left (name="text").
---

## Reflection (required)

- **What did the agent get wrong, or do awkwardly?** 
  The agent's code worked as intended, but left in the name="text" attribute. Despite the code working, it is another example of how vibe-coding can lead to bloated software.

- **Explain-every-line check:** I can explain every line of the AI-assisted code in this
  lab and why it's correct. ☐  *(Your TA may ask you to walk through any of it.)*
