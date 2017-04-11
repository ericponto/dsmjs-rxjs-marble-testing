import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/mapTo";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/startWith";

export const model = ({ up$, down$ }) =>
	Observable.merge(
		up$.mapTo(count => count + 1),
		down$.mapTo(count => count - 1),
	)
	.startWith(0)
	.scan((count, fn) => fn(count));