import { Observable } from "rxjs/Observable";
import morphdom from "morphdom";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import { model } from "./model";

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

const count$ = model({ up$, down$ });
const html$ = view(count$);

html$.subscribe(html =>
	morphdom(
		document.getElementById("app"),
		html,
		{ childrenOnly: true }
	)
);