# Test project

This is a test project to get a job in a company. A task is located in
[TASK.md](/TASK.md).

## Details

I implemented here a form from task with Vue and React on the same page. Besides
that I used here a MVP pattern from my repo [vue-mvp-architecture](https://github.com/lynx-r/vue-mvp-architecture/tree/main/src).

### Features

- Vue and React in single page
- UnoCSS with configured @apply directive for styling custom elements and classes

  Example:

  ```html
  <template>
    <t-display-card class="user-card"> ... </t-display-card>
  </template>
  ```

  ```scss
  t-display-card {
    @apply: mx-lg py-lg;
  }

  .user-card {
    @apply bg-red;
  }
  ```

- Pattern Model View Presenter (MVP) ([like there](https://github.com/lynx-r/react-vue-details-test/blob/main/src/vue/modules/admin/pages/IndexPage.vue))
  
  Example:

  ```typescript
  // file:./src/modules/users/pages/IndexPage.vue

  // import createRefStore from "../store/createRefStore";
  import { createVuexStore } from "../store/createVuexStore";

  // const store = createRefStore();
  const store = createVuexStore();

  // a presenter can use any store implementation
  // based on the interface CommonStore
  const presenter = createPresenter(store);
  ```

  ```typescript
  // file:[somewhere]

  // on a user action change state (ref, vuex, pinia) by calling a presenter method
  const presenter = usePresenter();
  presenter.onFilterUsers({
    id,
    name: searchVal,
    username: searchVal,
  });
  ```

  ```typescript
  // file:[somewhere]
  <script>
  // render a changed state in a view
  const presenter = usePresenter();
  const userPreviews = computed(() => presenter.state.userPreviews);
  </script>

  <template>
    <UserListItem
      v-for="user in userPreviews"
      :key="user.id"
      :user="user"
    />
  </template>
  ```
  

- A project folder structure like for a big project
