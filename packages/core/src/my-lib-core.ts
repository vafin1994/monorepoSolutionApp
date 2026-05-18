export interface MyLibCoreOptions {
    debug?: boolean;
}

export class MyLibCore {
    private options: MyLibCoreOptions;

    constructor(options: MyLibCoreOptions = {}) {
        this.options = options;
    }

    greet(name: string): string {
        const msg = `Hello, ${name}!`;
        if (this.options.debug) console.log('[MyLibCore]', msg);
        return msg;
    }
}