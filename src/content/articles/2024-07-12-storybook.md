---
title: "UI Documentation with Storybook: A Beginner’s Guide to Getting Started"
pubDate: "Jul 12 2024"
description: "Learn how to set up and use Storybook in a React project for documenting and testing UI components in isolation. This guide breaks down its core files and features. Build, preview, and maintain your UI with confidence."
slug: "ui-documentation-with-storybook-a-beginners-guide-to-getting-started"
readTime: 4
---

First off, what the heck is Storybook? This is how the [official doc](https://storybook.js.org/) describes it:  

> Storybook is a frontend workshop for building UI components and pages in isolation…teams use it for UI development, testing, and documentation.  

Keywords: `documentation` and `testing`.  

**Documentation**  
It is not uncommon to have a component that renders differently based on the props it receives. Storybook is a great way to let users of this component test interactively.  

Also, let’s say you have to make a change to a common component used in various places in your app. Writing integration/unit tests for these components could ensure functionality stays intact. However, the UI (alignment, spacing, etc) could still be broken. If these components have “stories”, we can quickly look at the stories to ensure we are not breaking the UI.  

**Testing**  
Storybook also works well with testing tools like React Testing Library (I will cover this in a later articles). It is rather convenient that a component can serve as both the documentation and test subject of your UI component. [Click here](https://www.youtube.com/watch?v=k6NG96awIJ0) to learn how to write tests using Storybook.  

Let’s create a new React project. Run the following:  

```txt
npx create-react-app storybook-starter && cd storybook-starter
```  

Next, to create the necessary configurations, run:  

```txt
npx storybook@latest init
```

Now that Storybook is all set, run:  

```txt
npm run storybook
```

If everything went according to plan, Storybook should be running on [http://localhost:6006](http://localhost:6006).  

In your project, you should see two new directories — `src/stories` and `src/.stories`. I will try to walk you through the following crucial files when it comes to understanding storybook.

```txt
src
  | - .stories
      | - main.js
      | - preview.js
  | - stories
      ...
      | - Button.jsx
      | - Button.stories.jsx
      ...
```

**|- src/.stories/main.js**  
This is where Storybook’s behavior is defined: where stories are defined; what addons to use, etc. It exports a configuration object with two required properties (framework and story) and a number of optional properties. The framework object specifies what framework/library Storybook is currently running in. In our case, it’s React. The stories property tells Storybook where stories are defined in and what extensions of these stories.



```js
const config = {
  framework: "@storybook/your-framework",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
```  

Learn more about the main.js file [here](https://storybook.js.org/docs/react/api/main-config)

**|- src/.stories.preview.js**  
This is where you define how stories are rendered globally. The exported object has three properties that we will not cover in this article: `decorators`, `parameters` and `globalTypes`. Here are some helpful links:  

- [Learn more about defining global parameters here](https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters)
- [Learn more about defining global types here](https://storybook.js.org/docs/react/essentials/toolbars-and-globals#global-types-and-the-toolbar-annotation)

**|- src/stories/Button.jsx**  
This is a sample component created for the purpose of demonstration. I will not include the code sample here for the sake of brevity. To see the details of this component, see the [GitHub repo](https://github.com/O-Osahon/storybook-starter/blob/master/src/stories/Button.jsx).  

**|- src/stories/Button.stories.js**  
This is an example story for the aforementioned `<Button />` component provided by the Storybook team.  

```js
import { Button } from "./Button";

// More on how to set up stories at: 
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    // More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry:
  // https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args:
// https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};

```

If none of the preceding code makes sense, don’t worry. In the following sections, I will walk you through every line of the code.


<!-- ```js
- const result = oldFunction() // [!code --]
+ const result = newFunction() // [!code ++]
```  -->
