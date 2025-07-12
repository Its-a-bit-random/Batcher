import Signal from "@rbxutil/signal";

export default class Batcher<T extends defined> {
	private _Tasks = new Array<T>();
	private _Signal = new Signal<number>();

	private _Thread: thread | undefined = undefined;
	private _Callback;

	private _Flush() {
		this._Callback(this._Tasks);
		this._Tasks.forEach((_, index) => this._Signal.Fire(index));
		this._Tasks.clear();
	}

	/*
	 * Add a new task to the Batcher
	 *
	 * @param {T} item - The item to Add
	 * @return {Promise} Promise which resolves when the task is handled
	 */
	public Add(item: T) {
		const index = this._Tasks.push(item) - 1;

		const promise = new Promise<void>((resolve) => {
			this._Signal.Connect((signalIndex) => {
				if (signalIndex === index) resolve();
			});
		});

		if (this._Thread === undefined) {
			this._Thread = task.defer(() => {
				this._Flush();
				this._Thread = undefined;
			});
		}

		return promise;
	}

	/*
	 * Create a new Batcher with a callback which is called with
	 * all added tasks.
	 * @param {(items: T[]) => void} callback - function called on flush
	 */
	constructor(callback: (items: T[]) => void) {
		this._Callback = callback;
	}
}
