<script lang="ts">
	import type { TodoProps } from '$lib/types/task.type';
	import Checkbox from '../ui/checkbox/checkbox.svelte';
	import Label from '../ui/label/label.svelte';
	let { todo }: TodoProps = $props();

	const checkboxId = `todo-${todo.id}`;
	const labelId = `${checkboxId}-label`;
</script>

<div class="rounded-lg bg-sky-200 px-4 py-2">
	<div class="flex">
		<Checkbox id={checkboxId} bind:checked={todo.completed} aria-labelledby={labelId} />
		<Label id={labelId} for={checkboxId}>
			{todo.title}
		</Label>
	</div>
	<p>{todo.description}</p>
</div>
