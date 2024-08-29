# URS3Prac

> Redoing - Note this directory has work from [here](https://github.com/kachraz/practiceURS3-1), made a copy to make changes , to remember what you did before

# Notes

1. Components are core concept
2. These components build UI

```
npm install && npm run dev
```

- Need to enter this to get the vite server started

# Note

1. `<script type="module" src="/src/index.jsx"></script>` here you can see it is imported as a `module`, this makes it possible for us to use `import` in the `jsx` file , but it is not deferred here
2. Got SolarySystem from [here](https://codepen.io/pavlovsk/pen/jOjKEJq) - Removed the bg and changed the size with a transform. And placed inside `app.jsx`
3. Props for passing data into components
4. Convention for naming compoenent `jsx` files is based on the component
5. Functiont that are inside a component are called `handler function` eg:

```react
export default MyComponent() {

    // handlerFunction
    function handleClick() {
        console.log("Sniff)
    }

    return (
        <button onclick={handleClick}></button>
    )
}
```

# Lesson

```
https:// github.com / academind/react-complete-guide-course-resources
```
