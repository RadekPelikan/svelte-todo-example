<script lang="ts">
  import { page } from "$app/state";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
</script>

<header>
  <nav>
    <ul class="flex gap-4 justify-center">
      <li aria-current={page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={page.url.pathname === "/about" ? "page" : undefined}>
        <a href="/about">About</a>
      </li>
      <li
        aria-current={page.url.pathname.startsWith("/sverdle")
          ? "page"
          : undefined}
      >
        <a href="/sverdle">Sverdle</a>
      </li>
    </ul>
  </nav>
</header>
