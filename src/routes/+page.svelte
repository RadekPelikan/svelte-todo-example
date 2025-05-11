<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Todo from '$lib/components/core/Todo.svelte';
	import { todos } from './tasks.svelte';
</script>

<section>
	<div class="mx-auto w-[50rem]">
		<!-- <pre>
{JSON.stringify(tasks, null, 2)}
		</pre> -->
		<h2 class="text-2x">Tasks</h2>
		<div class="grid gap-2">
			{#each todos as todo (todo.id)}
				<Todo {todo} />
			{/each}
		</div>
	</div>
</section>
