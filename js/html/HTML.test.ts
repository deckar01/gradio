import { test, describe, assert, afterEach } from "vitest";
import { cleanup, render } from "@self/tootils";

import HTML from "./Index.svelte";

describe("HTML", () => {
	afterEach(() => cleanup());

	test("shows padding", async () => {
		const { container } = await render(HTML, {padding: true});

		assert.isNotNull(container.querySelector(".html-container.padding"));
	});

	test("hides padding", async () => {
		const { container } = await render(HTML, {padding: false});

		assert.isNull(container.querySelector(".html-container.padding"));
	});
});
