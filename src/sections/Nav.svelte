<nav class="fixed bottom-0 left-0 w-full overflow-auto">
    <div class="backdrop"></div>
    <div class="backdrop-edge"></div>

    <ul>
        <li class="relative py-6">
            <a href="#">Hello</a>
        </li>
    </ul>
</nav>

<style lang="postcss">
    nav {
        --color-card: oklch(1, 0, 0);
    }
    @supports (backdrop-filter: blur(16px)) or
        (-webkit-backdrop-filter: blur(16px)) {
        nav > .backdrop {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 200%;

            background: linear-gradient(
                to top,
                var(--color-card) 0%,
                transparent 50%
            );

            backdrop-filter: blur(18px) saturate(140%);
            -webkit-backdrop-filter: blur(18px) saturate(140%);

            pointer-events: none;
        }
        nav > .backdrop-edge {
            --thickness: 2px;

            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: #fff;
            translate: 0 0;
            background: hsl(0deg 0% 100% / 0.1);
            backdrop-filter: blur(8px) brightness(96%) saturate(120%);
            -webkit-backdrop-filter: blur(8px) brightness(96%) saturate(120%);
            pointer-events: none;
        }
    }

    @supports (mask-image: none) or (-webkit-mask-image: none) {
        nav > .backdrop {
            mask-image: linear-gradient(
                to top,
                var(--color-card) 0% 50%,
                transparent 50% 100%
            );
            -webkit-mask-image: linear-gradient(
                to top,
                var(--color-card) 0% 50%,
                transparent 50% 100%
            );
        }

        nav > .backdrop-edge {
            mask-image: linear-gradient(
                to bottom,
                var(--color-card) 0,
                var(--color-card) var(--thickness),
                transparent var(--thickness)
            );
            -webkit-mask-image: linear-gradient(
                to bottom,
                var(--color-card) 0,
                var(--color-card) var(--thickness),
                transparent var(--thickness)
            );
        }
    }
</style>
