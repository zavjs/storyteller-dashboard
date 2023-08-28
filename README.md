## Stormideas, 

Thank you for reviewing this code. First, the initial instructions, and then some specific comments about my development choices.

### Running Instructions

As a regular Next.js application, you should be able to run this entirely by running:

> `yarn`
> `yarn dev`

And then go on port 3000 to see the app live. 

### Code Comments

I used a Tailwind-based component library called [DaisyUI](https://daisyui.com/components/). It helps expedite development process by providing easy-to-use UI elements like drawers, buttons and more. Then, I customized styles to match as close as possible the Figma designs. 

In terms of application logic, I hooked the above the fold filtering elements like search bar and dropdown menus with Next.js' router functions, ultimately using those as query parameters for the hypothetical backend `/stories` server call.

I then mocked that endpoint and intercepted with the contents of the JSON file in `/data/stories.mock.json`.

- This means if we type something like `horo` in the search bar and press the magnifier button, the navigation parameter changes to `?search=horo`;
- If filtered by status `draft`, `?search=horo&status=draft` would be passed into the Axios get function for appropriate backend filtering.
- Same approach is applicable with pagination elements.


