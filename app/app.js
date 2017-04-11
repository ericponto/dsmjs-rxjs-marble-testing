import { Observable } from "rxjs/Observable";
import morphdom from "morphdom";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mapTo";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/startWith";

const clicks$ = Observable.fromEvent(global.document, "click");
const up$ = clicks$.filter(e => e.target.id === "up");
const down$ = clicks$.filter(e => e.target.id === "down");

const view = (count$) =>
	count$.map(count => (
		`<div>
			<button id="up">+</button>
			<button id="down">-</button>
			<output>${count}</output>
		</div>`
	));

export const model = ({ up$, down$ }) =>
	Observable.merge(
		up$.mapTo(count => count + 1),
		down$.mapTo(count => count - 1),
	)
	.startWith(0)
	.scan((count, fn) => fn(count));

const count$ = model({ up$, down$ });
const html$ = view(count$);

html$.subscribe(html =>
	morphdom(
		document.getElementById("app"),
		html,
		{ childrenOnly: true }
	)
);