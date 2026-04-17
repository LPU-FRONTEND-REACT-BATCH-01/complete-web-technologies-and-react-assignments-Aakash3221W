# React — Lecture Notes

## 1. The DOM Tree

React represents the UI as a **tree structure** in memory. Each HTML element becomes a node in this tree.

**Example tree:**
```
div (root)
├── h1
└── p
```

**Entry point:**
- `main.js` → imports `App.jsx`
- The app mounts inside a root `<div>` in `index.html`

---

## 2. Reconciliation Process

Reconciliation is how React efficiently updates the UI when state or props change.

### How it works

When state changes, React does **not** immediately touch the real DOM. Instead it:

1. Creates a **new Virtual DOM tree**
2. Compares it to the **old Virtual DOM tree**
3. Finds the differences using the **Diffing Algorithm**
4. Batches all changes and applies them to the **Real DOM** (called **Patching**)

### OLD vs NEW Virtual DOM (example)

| OLD VDOM | NEW VDOM |
|----------|----------|
| `div → h1, p, n` | `div → n ✗, p` |

- Node marked **✗** = removed/changed
- Only the changed nodes are flagged

### Key steps

- **Diffing Algorithm** — compares old and new VDOM node-by-node to identify what changed (added, removed, updated)
- **All flagged** — changed nodes are collected
- **Patching** — all collected changes are written to the Real DOM in one batch (minimises expensive DOM writes)

---

## 3. How `npm run dev` Works

Full pipeline from source code to what the browser paints:

### Step 1 — JSX → JavaScript

JSX is not valid JavaScript. It must be **transpiled** first.

| Tool | Transpiler used |
|------|----------------|
| CRA (Create React App) | Babel |
| Vite | esbuild |

### Step 2 — Dependency Graph + Native ES Modules

- Vite analyses all `import` statements to build a **dependency graph**
- In dev mode, files are served as **native ES Modules** directly to the browser — no bundling needed → very fast

### Step 3 — Browser calls `React.createElement()`

- The browser receives the transpiled JS
- React calls `React.createElement()` for every JSX element
- This creates plain JavaScript objects — the **Virtual DOM nodes**

### Step 4 — VDOM + React Fibers

- React organises the virtual DOM as a tree of **Fiber objects**
- Each Fiber stores: component info, state, props, and child references
- Fibers enable **interruptible, async rendering** (React 18+)

### Step 5 — OLD VDOM → Real DOM

- React compares the new Fiber tree to the old VDOM (**reconciliation**)
- Commits the **minimal set of changes** to the Real DOM
- The browser paints the updated UI

### Full pipeline summary

```
npm run dev
   ↓
JSX → JS (Babel / esbuild)
   ↓
Dependency Graph built
   ↓
React.createElement() called in browser
   ↓
VDOM + React Fibers created
   ↓
Diffing Algorithm (reconciliation)
   ↓
Patch Real DOM
   ↓
Browser paints UI
```

---

## Quick Revision Points

- **Virtual DOM** = lightweight JS representation of the real DOM
- **Reconciliation** = process of comparing old and new VDOM
- **Diffing** = algorithm that finds what changed
- **Patching** = applying those changes to the real DOM in one batch
- **React Fibers** = internal data structure enabling async/interruptible rendering
- **Babel** = transpiler used by CRA to convert JSX → JS
- **esbuild** = faster transpiler used by Vite 
- **Native ES Modules** = Vite serves files directly without bundling in dev mode