## Start here

Hello Dave and Lukasz! See instructions and code comments in the sections below:

### Running Instructions

As a regular Next.js application, you should be able to run this with:

> `yarn` 

> `yarn dev`

- Then go on http://localhost:3008 to see the app live. 

### Code Comments

- I used a Tailwind-based component library called [DaisyUI](https://daisyui.com/components/). It helps expedite the development process by providing easy-to-use UI elements like drawers, buttons and more. I then customized styles to match as close as possible the Figma designs. 

- In terms of application logic, I started wiring up the filtering elements like search bar and dropdown menus with Next.js' router functions, ultimately triggering query parameters for the hypothetical backend `/stories` server call.

    - I then mocked that endpoint and intercepted with the contents of the JSON file in `/data/stories.mock.json`.

- This means our filters are producing all searching, filtering and ordering parameters through the URLSearchParams API;
    - For example, if you type "daily" in the search, filter by status "Live", and sort the title header you should get 
        `?search=daily&status=live&sort=title&ordering=desc`
- The very same approach is applicable to pagination elements.

#### How would I improve this?

For just one use it doesn't make sense to further generalize the UI components, but in a more robust application I would certainly create more reusability in highly replicable components like buttons and form elements.

- I would also rely heavily on hooks for shared effects, allowing the logic around deleting, editing or creating new stories to be more decomposed from the UI. 