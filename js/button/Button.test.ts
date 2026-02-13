import { test, describe, assert, afterEach } from "vitest";
import { cleanup, render } from "@self/tootils";

import Button from "./Index.svelte";

describe("Button", () => {
	afterEach(() => cleanup());

	test("scale prop sets flex-grow", async () => {
		const { container } = await render(Button, {scale: 3});

		const button = container.querySelector("button");
		assert.equal(button!.style.flexGrow, "3");
	});

	test("scale 0 fits content width", async () => {
		const { container } = await render(Button, {scale: 0});

		const button = container.querySelector("button");
		assert.equal(button!.style.width, "fit-content");
	});
});
