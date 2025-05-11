<script lang="ts">
	import type { TodoProps } from '$lib/types/task.type';
	let { todo }: TodoProps = $props();
</script>

<div class="rounded-lg bg-sky-200 px-4 py-2">
	<div class="flex">
		<label>
			<input
				class="form-checkbox h-5 w-5 text-gray-600"
				type="checkbox"
				name=""
				id={`${todo}`}
				checked={todo.completed}
				onchange={() => (todo.completed = !todo.completed)}
			/>
			{todo.title}
		</label>
	</div>
	<p>{todo.description}</p>
</div>
