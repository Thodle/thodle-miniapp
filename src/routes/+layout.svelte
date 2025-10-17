<script lang="ts" module>
    import favicon from '$lib/assets/favicon.svg';

    import { ModeWatcher } from 'mode-watcher';
    import { Nav } from '$sections';
</script>

<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
{@render children?.()}

<Nav />
