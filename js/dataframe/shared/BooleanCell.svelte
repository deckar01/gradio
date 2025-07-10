<script lang="ts">
	import { BaseCheckbox } from "@gradio/checkbox";

	export let value = false;
	export let editable = true;
	export let on_change: (value: boolean) => void;

	function toggle(): void {
		if (editable) {
			on_change(!value);
		}
	}

	function handle_keydown(event: KeyboardEvent): void {
		if (event.key === "Enter" || event.key === " ") {
			event.stopPropagation();
			toggle();
		}
	}
</script>

<div class="bool-cell" on:keydown={handle_keydown} role="button" tabindex="-1">
	<BaseCheckbox {value} label="" interactive={editable} on:click={toggle} />
</div>

<style>
	.bool-cell {
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--size-full);
		height: var(--size-full);
	}

	.bool-cell :global(input:disabled) {
		cursor: not-allowed;
	}

	.bool-cell :global(label) {
		margin: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bool-cell :global(span) {
		display: none;
	}
</style>
