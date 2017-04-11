import { test } from "qunitjs";
import { TestScheduler } from "rxjs/Rx";
import { model } from "./app";

test("Test Model", (assert) => {
	// construct TestScheduler with deep equal assertion
	const testScheduler = new TestScheduler(assert.deepEqual.bind(assert));

	// mock streams
	const upMarbles   = "--x----x--x---";
	const downMarbles = "----x-------x-";
	const expected    = "a-b-a--b--c-b-";
	
	const expectedStateMap = {
		a: 0,
		b: 1,
		c: 2,
	};

	// mock up$ and down$ events
	const up$   = testScheduler.createHotObservable(upMarbles);
	const down$ = testScheduler.createHotObservable(downMarbles);

	const count$ = model({up$, down$});

	// assertion
	testScheduler.expectObservable(count$).toBe(expected, expectedStateMap);

	// run tests
	testScheduler.flush();
});